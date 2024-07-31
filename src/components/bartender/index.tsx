import "./style.css"

type propsType={
  name:string;
}

export default function Bartender(props:propsType) {
    return (
      <div>
        <img src="" alt="" />
        <h3>{props.name}</h3>
        <div className="bartender-star-price">
            stars
            <p>Valor hora: </p>
        </div>
        <p>Dolor sit amet consectetur. Massa in nisi amet sem suspendisse. Tincidunt eget interdum et dui at duis.</p>
        <button>Ver mais</button>
      </div>
    );
  }
  