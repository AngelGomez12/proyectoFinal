import ProductsList from "../components/Home/ProductsList/ProductsList";
import CartProvider from "../contexts/ProductsList";

export const Home = () => {
  return (
      <main className="flex flex-col">
        {/* <Carrousel/> */}
        <CartProvider>
          <ProductsList/>
        </CartProvider>

      </main>
  );
};
