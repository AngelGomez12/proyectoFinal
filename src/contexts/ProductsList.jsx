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
    itemsPerPage: 8,
    totalPages: 0,
  });

  const handlerPageChange = (e) => {
    setPagination({
      ...pagination,
      page: +e.target.innerText,
    });

    setProductsViewed(
      products.slice(pagination.page, pagination.page + pagination.itemsPerPage)
    );
  };

  useEffect(() => {
    getHomeProductsList().then((products) => {
      const randomProds = randomizerProducts(products.data);
      setProducts(randomProds);
      const firstChunk = randomProds.slice(0, 8);
      setProductsViewed(firstChunk);
      setPagination({
        ...pagination,
        totalPages: Math.ceil(products.length / pagination.itemsPerPage),
      });
    });
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
