import Header from "@/components/header";
import Bartender from "@/components/bartender";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="area-results">
          <Bartender name="Test"/>
        </section>
      </main>
    </>
  );
}
