import { useContext } from "react";
import { ContextProducts } from "../../../contexts/ProductsList";
import Paginator from "./components/Paginator";
import ProductCart from "./components/ProductCart";
import { Spinner } from "../../../utils/Spinner";

export default function ProductsList({ filter }) {
  const { productsViewed, products } = useContext(ContextProducts);
  let filterProducts = [];
  let title = !filter
    ? "Máquinas Disponibles en este momento"
    : "Resultados de la búsqueda";

  if (products) {
    filterProducts = products.filter((product) =>
      product.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
  return (
    <article className="flex flex-col items-center gap-[60px] bg-[#2B323C]">
      <h1 className="text-[30px] mb-[50px] mt-[112px] font-[700] text-center">
        {title}
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-x-[28px] gap-y-[32px] ">
        {productsViewed === undefined ? (
          <Spinner />
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
