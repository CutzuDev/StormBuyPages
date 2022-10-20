import "./CardItem.css";
import ItemImg from "../assets/shopitem.png";
import { Button } from "@mui/material";

function CardItem({ cardSubTitle, cardPrice }) {
  return (
    <div className="card">
      <img src={ItemImg} className="carditem__img" />
      <h1 className="card__title">Storm V2</h1>
      <h3 className="card__sub-title">{cardSubTitle}</h3>
      <span className="card__price">{cardPrice}</span>
      {/* <a href="" className="card__button--link"> */}
      <Button variant="outlined" className="card__button" color="primary">
        <h3 className="card__button--text">Buy Now!</h3>
      </Button>
      {/* </a> */}
    </div>
  );
}

export default CardItem;
