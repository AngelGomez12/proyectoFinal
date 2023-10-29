import { createContext, useEffect, useState } from "react";
import { getHomeProductsList } from "../queries/getHomeProductsList";
import { randomizerProducts } from "../utils/randomizerProducts";

export const ContextProducts = createContext({
  products: [],
  setProducts: () => {},
  pagination: { page: 1, totalProducts: 10, itemsPerPage: 6, totalPages: 0 },
  handlerPageChange: () => {},
  productsViewed: [],
  setProductsViewed: () => {},
});

export default function CartProvider(props) {
  const [products, setProducts] = useState([]);
  const [productsViewed, setProductsViewed] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    totalProducts: 10,
    itemsPerPage: 6,
    totalPages: 0,
  });

  const handlerPageChange = (page) => {
    setPagination({
      ...pagination,
      page,
    })
    setProductsViewed(products.slice((page-1) * pagination.itemsPerPage , page * pagination.itemsPerPage))
  }

  useEffect(() => {
    getHomeProductsList().then(products => {
      const randomProds = randomizerProducts(products)
      setProducts(randomProds)
      const firstChunk = randomProds.slice(0, 6)
      setProductsViewed(firstChunk)
      setPagination({
        ...pagination, 
        totalPages: Math.ceil(products.length / pagination.itemsPerPage)
      })
    })
  }, []);

  
  return (
    <ContextProducts.Provider
      value={{
        products,
        setProducts,
        productsViewed,
        setProductsViewed,
        pagination,
        handlerPageChange,
      }}
    >
      {props.children}
    </ContextProducts.Provider>
  );
}
