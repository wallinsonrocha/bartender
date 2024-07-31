import "./style.css"

type propsType = {
  id: number;
  name: string;
  valorH: number;
  stars: number;
  shortDesc: string;
  onButtonClick: (id: number) => void;
}

export default function Bartender(props: propsType) {

  // Cria um array com o número de estrelas definido pela prop "stars"
  const stars = Array.from({ length: props.stars });

  return (
    <div key={props.id} className="bartender-container">
      <img src='/images/image.jpg' alt="" />
      <h3>{props.name}</h3>
      <div className="bartender-star-price">
        <div className="bartanter-stars">
          {stars.map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path fill="#edf10e" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
        <p>Valor hora: R$ {props.valorH}</p>
      </div>
      <p>{props.shortDesc}</p>
      <button onClick={() => props.onButtonClick(props.id)}>Ver mais</button>
    </div>
  );
}
