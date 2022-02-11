import sardine from "../assets/sardine.jfif";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <div className="card__container">
      <div className="card__image">
        <img src={product.img} alt="" />
      </div>

      <div className="card__body">
        <h2>{product.title}</h2>

        <p>{product.description}</p>
        <h6>{product.price}</h6>
      </div>

      <div className="btn__container">
        <button className="btn__order">Order</button>
        <Link to="/product" className="btn__view">
          View
        </Link>
      </div>
    </div>
  );
};

export default Card;
