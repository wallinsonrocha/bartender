import Header from "@/components/header";
import Product from "@/components/product";
import './style.css'

export default function DrinksPage() {
  return (
    <>
      <Header />
      <main>
        <section id="area-results">
          <Product name="Test" price={15} />
        </section>
      </main>
    </>
  );
}
