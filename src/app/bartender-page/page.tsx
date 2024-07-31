"use client";

import Header from "@/components/header";
import Bartender from "@/components/bartender";
import './style.css'
import { useState } from "react";

interface BartenderPerson {
  id: number;
  name: string;
  stars: number;
  valorH: number;
  shortDesc: string;
  // description: string;
}

const bartenderList: Array<BartenderPerson> = [
  { id: 1, name: 'Carla', stars: 5, valorH: 150, shortDesc: "Dolor sit amet consectetur. Massa in nisi amet sem suspendisse. Tincidunt eget interdum et dui at duis." },
  { id: 2, name: 'Daniel', stars: 4, valorH: 150, shortDesc: "Dolor sit amet consectetur. Massa in nisi amet sem suspendisse. Tincidunt eget interdum et dui at duis." },
  { id: 3, name: 'Érick', stars: 4, valorH: 150, shortDesc: "Dolor sit amet consectetur. Massa in nisi amet sem suspendisse. Tincidunt eget interdum et dui at duis." },
  { id: 4, name: 'Fernanda', stars: 4, valorH: 150, shortDesc: "Dolor sit amet consectetur. Massa in nisi amet sem suspendisse. Tincidunt eget interdum et dui at duis." },
  { id: 5, name: 'Gabriel', stars: 4, valorH: 150, shortDesc: "Dolor sit amet consectetur. Massa in nisi amet sem suspendisse. Tincidunt eget interdum et dui at duis." },
  { id: 6, name: 'Helena', stars: 4, valorH: 150, shortDesc: "Dolor sit amet consectetur. Massa in nisi amet sem suspendisse. Tincidunt eget interdum et dui at duis." }
]

export default function BartenderPage() {
  const [selectedBartender, setSelectedBartender] = useState<BartenderPerson | null>(null);
  // Função utilizada para pegar os dados e colocar em Bartender Screen de acordo com o Id
  const handleButtonClick = (id:number) => {
    const bartender = bartenderList.find(b => b.id === id);
    setSelectedBartender(bartender || null);
  };

  const handleClose = () => {
    setSelectedBartender(null);
  };

  return (
    <>
      <Header />
      <main>
        <section id="area-results">
          {
            bartenderList.map(b => {
              return (
                <Bartender id={b.id}
                  name={b.name}
                  stars={b.stars}
                  valorH={b.valorH}
                  shortDesc={b.shortDesc}
                  onButtonClick={handleButtonClick}
                   />
              )
            })
          }
        </section>
        {/* Screen Bartender details - Continuar aqui para construir a tela de informações */}

      </main>
    </>
  );
}
