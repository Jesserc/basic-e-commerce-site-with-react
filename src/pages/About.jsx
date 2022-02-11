import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

import sardine from "../components/assets/sardine.jfif";

const AboutPage = () => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
    console.log(modal);
  };

  return (
    <div>
      <button onClick={handleModal}>Launch Modal</button>

      <Modal show={modal}>
        <Modal.Header>Hi</Modal.Header>
        <Modal.Body>
          <div className="pproduct__page">
            <div className="product__container">
              <div className="img__container">
                <img src={sardine} alt="" />
              </div>

              <div className="text__container">
                <h2>Product Name</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit cupiditate in ducimus, fuga perferendis
                  inventore tenetur libero rem similique cumque earum beatae
                  corrupti illum eaque autem doloribus ullam debitis. Assumenda.
                </p>

                <h6>$30.00</h6>

                <button className="cart__btn">Add to Cart</button>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer onClick={handleModal}>Close</Modal.Footer>
      </Modal>
    </div>
  );
};

export default AboutPage;
