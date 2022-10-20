import { useState } from "react";
import CardItem from "../components/CardItem";
import "./Products.css";

function Products() {
  const [item1, setItem1] = useState();
  const [item2, setItem2] = useState();
  const [item3, setItem3] = useState();

  setTimeout(() => {
    setItem1(<CardItem cardSubTitle={"60 Uses"} cardPrice={"€50.00"} />);
    setItem2(<CardItem cardSubTitle={"30 Uses"} cardPrice={"€30.00"} />);
    setItem3(<CardItem cardSubTitle={"15 Uses"} cardPrice={"€20.00"} />);
  }, 1500);

  return (
    <div className="products">
      <div className="prow">
        <div className="products__header headerStyle">
          <ul className="products__list">
            <li className="product__item">{item1}</li>
            <li className="product__item">{item2}</li>
            <li className="product__item">{item3}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Products;
