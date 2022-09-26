import React from "react";

class Form extends React.Component {
  render() {
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
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo-input">
            <input
              id="trunfo-input"
              type="checkbox"
              name="cardTrunfo"
              data-testid="trunfo-input"
            />
          </label>
          <button type="submit" data-testid="save-button">
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
