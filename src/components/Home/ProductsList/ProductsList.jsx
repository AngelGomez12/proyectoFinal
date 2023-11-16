import { useContext } from "react";
import { ContextProducts } from "../../../contexts/ProductsList";
import Paginator from "./components/Paginator";
import ProductCart from "./components/ProductCart";

export default function ProductsList({ filter }) {
  const { productsViewed, products } = useContext(ContextProducts);
  let filterProducts = [];

  if (products) {
    filterProducts = products.filter((product) =>
      product.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
  return (
    <article className="flex flex-col items-center gap-[60px] bg-[#2B323C]">
      <h1 className="text-[30px] mb-[50px] mt-[112px] font-[700] text-center">
        Máquinas Disponibles en este momento
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-x-[28px] gap-y-[32px] ">
        {productsViewed === undefined ? (
          <ProductsListSkeleton />
        ) : productsViewed.length === 0 ? (
          <div className="col-span-2">No tenemos productos en stock</div>
        ) : (
          filterProducts.map((product) => (
            <ProductCart key={product.id} {...product} />
          ))
        )}
      </section>
      <Paginator />
    </article>
  );
}

const ProductsListSkeleton = () => {
  return <div className="col-span-2">cargando...</div>;
};
