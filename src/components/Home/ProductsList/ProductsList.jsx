import { useContext, useEffect } from "react";
import { ContextProducts } from "../../../contexts/ProductsList";
import Paginator from "./components/Paginator";
import ProductCart from "./components/ProductCart";
import { Spinner } from "../../../utils/Spinner";
import { Filter } from "../Search/Filter";

export default function ProductsList({ filter, onFilterChange, filterDate }) {
  const { productsViewed, products, productTypes } =
    useContext(ContextProducts);
  let filterProducts = [];

  if (products) {
    if (filterDate) {
      // Filtrar productos basados en la fecha seleccionada
      filterProducts = products.filter((product) => {
        // Asumiendo que 'product.reservation' es un array de objetos con 'startDate' y 'endDate'
        return !product.reservations.some((reservation) => {
          const reservationStartDate = new Date(reservation.startDate);
          reservationStartDate.setHours(0, 0, 0, 0);
          const reservationEndDate = new Date(reservation.endDate);
          reservationEndDate.setHours(23, 59, 59, 999);
          const selectedStartDate = new Date(filter.date.startDate);
          selectedStartDate.setHours(0, 0, 0, 0);
          const selectedEndDate = new Date(filter.date.endDate);
          selectedEndDate.setHours(23, 59, 59, 999);

          return (
            reservationStartDate <= selectedEndDate &&
            reservationEndDate >= selectedStartDate
          );
        });
      });
    }

    filterProducts = filterProducts.filter((product) =>
      product.name.toLowerCase().includes(filter.search.toLowerCase())
    );

    if (filterProducts.length === 0) {
      filterProducts = products.filter((product) =>
        product.productType.description
          .toLowerCase()
          .includes(filter.search.toLowerCase())
      );
    }
  }

  let title = !filter
    ? "Máquinas Disponibles en este momento"
    : `Resultados de la búsqueda(${filterProducts.length})`;

  return (
    <article className="flex flex-col items-center gap-[60px] bg-[#2B323C]">
      <div className="flex items-center justify-between w-2/3">
        <h1 className="text-[30px] mt-[112px] font-[700] text-center">
          {title}
        </h1>
        <div className="mt-[112px] w-1/2 flex items-center gap-2">
          Filtrar por:
          <Filter productTypes={productTypes} onFilterChange={onFilterChange} />
        </div>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-x-[28px] gap-y-[32px] ">
        {productsViewed === undefined ? (
          <Spinner />
        ) : productsViewed.length === 0 ? (
          <div className="col-span-2">No tenemos productos en stock</div>
        ) : (
          filterProducts
            .slice(0, 6)
            .map((product) => <ProductCart key={product.id} {...product} />)
        )}
      </section>
      <Paginator />
    </article>
  );
}
