import React from "react";
import PropTypes from "prop-types";
class Form extends React.Component {
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
      hasTrunfo,
      onInputChange,
      isSaveButtonDisabled,
      onSaveButtonClick,
    } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="name-input">
            Nome
            <input
              id="name-input"
              type="text"
              name="cardName"
              placeholder="nome"
              data-testid="name-input"
              value={cardName}
              onChange={onInputChange}
            />
          </label>
          <label htmlFor="description-input">
            Descricao
            <textarea
              id="description-input"
              type="text"
              name="cardDescription"
              placeholder="descricao"
              data-testid="description-input"
              value={cardDescription}
              onChange={onInputChange}
            />
          </label>
          <label htmlFor="attr1-input">
            Attr01
            <input
              id="attr1-input"
              type="number"
              name="cardAttr1"
              placeholder="attr01"
              data-testid="attr1-input"
              value={cardAttr1}
              onChange={onInputChange}
            />
          </label>
          <label htmlFor="attr2-input">
            Attr02
            <input
              id="attr2-input"
              type="number"
              name="cardAttr2"
              placeholder="attr02"
              data-testid="attr2-input"
              value={cardAttr2}
              onChange={onInputChange}
            />
          </label>
          <label htmlFor="attr3-input">
            Attr03
            <input
              id="attr3-input"
              type="number"
              name="cardAttr3"
              placeholder="attr03"
              data-testid="attr3-input"
              value={cardAttr3}
              onChange={onInputChange}
            />
          </label>
          <label htmlFor="image-input">
            Img
            <input
              id="image-input"
              type="text"
              name="cardImage"
              placeholder="img"
              data-testid="image-input"
              value={cardImage}
              onChange={onInputChange}
            />
          </label>
          <label htmlFor="rare-input">
            Raridade
            <select
              id="rare-input"
              type="select"
              name="cardRare"
              placeholder="raridade"
              data-testid="rare-input"
              value={cardRare}
              onChange={onInputChange}
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo-input">
            Super Trunfo
            {hasTrunfo ? (
              <h4>Você já tem um Super Trunfo em seu baralho</h4>
            ) : (
              <input
                id="trunfo-input"
                type="checkbox"
                name="cardTrunfo"
                data-testid="trunfo-input"
                checked={cardTrunfo}
                onChange={onInputChange}
              />
            )}
          </label>
          <button
            type="submit"
            data-testid="save-button"
            disabled={isSaveButtonDisabled}
            onClick={onSaveButtonClick}
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
