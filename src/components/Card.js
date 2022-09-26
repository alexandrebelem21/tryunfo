import React from "react";
import PropTypes from "prop-types";

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <>
        <div className="nameCard" data-testid="name-card">
          {cardName}
        </div>

        <img
          className="imageCard"
          data-testid="image-card"
          src={cardImage}
          alt={cardName}
        />
        <div className="descriptionCard" data-testid="description-card">
          {cardDescription}
        </div>
        <div className="atributos">
          <div className="attr01" data-testid="attr1-card">
            Attr01 <br /> {cardAttr1}
          </div>
          <div className="attr01" data-testid="attr2-card">
            Attr02 <br /> {cardAttr2}
          </div>
          <div className="attr01" data-testid="attr3-card">
            Attr03
            <br />
            {cardAttr3}
          </div>
        </div>
        <div data-testid="rare-card">{cardRare}</div>
        <lavel htmlFor="trunfo-card">
          {cardTrunfo && <div data-testid="trunfo-card">Super Trunfo</div>}
        </lavel>
      </>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default Card;
