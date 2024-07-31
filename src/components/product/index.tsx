import "./style.css"

type propsType = {
  name: string;
  price: number;
}

export default function Product(props: propsType) {
  return (
    <div className="product-container">
      <img src='/images/image.jpg' alt="" />
      <h3>{props.name}</h3>
      <div className="product-star-price">
        stars
        <p>Preço: R$ {props.price}</p>
      </div>
      <p>Dolor sit amet consectetur. Massa in nisi amet sem suspendisse. Tincidunt eget interdum et dui at duis.</p>
      <button>Ver mais</button>
    </div>
  );
}
