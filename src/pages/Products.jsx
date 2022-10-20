import CardItem from "../components/CardItem";
import "./Products.css";

function Products() {
  return (
    <div className="products">
      <div className="prow">
        <div className="products__header headerStyle">
          <ul className="products__list">
            <li className="product__item">
              <CardItem cardSubTitle={"60 Uses"} cardPrice={"€50.00"} />
            </li>
            <li className="product__item">
              <CardItem cardSubTitle={"30 Uses"} cardPrice={"€30.00"} />
            </li>
            <li className="product__item">
              <CardItem cardSubTitle={"15 Uses"} cardPrice={"€20.00"} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Products;
