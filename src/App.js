import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      savedCards: [],
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      searchValue: '',
      rare: 'todas',
      tt: false,
      dis: false,
    };
  }

  onInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const teste = type === 'checkbox' ? checked : value;
    this.setState({ [name]: teste }, this.botao);
  };

  checkTrunfo = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState({ [name]: type === 'checkbox'
      ? checked : value }, this.validCheckTrunfo);
  };

  validCheckTrunfo = () => {
    const { tt } = this.state;
    return tt ? this.setState({ dis: true }) : this.setState({ dis: false });
  };

  botao = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const total = 210;
    const soma = 90;
    const attr01 = parseInt(cardAttr1, 10);
    const attr02 = parseInt(cardAttr2, 10);
    const attr03 = parseInt(cardAttr3, 10);
    const sum = attr01 + attr02 + attr03 <= total;

    if (
      cardName
      && cardDescription && cardImage && cardRare !== undefined
      && sum && attr01 >= 0 && attr01 <= soma && attr02 >= 0
      && attr02 <= soma && attr03 >= 0 && attr03 <= soma
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((prevState) => ({
      savedCards: [...prevState.savedCards, newCard],
      hasTrunfo: [...prevState.savedCards, newCard].some(
        (trunfo) => trunfo.cardTrunfo,
      ),
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: '',
    }));
  };

  remove = (event) => {
    const { savedCards, hasTrunfo } = this.state;
    const cardClick = event.target.name;
    this.setState({
      hasTrunfo: savedCards.cardTrunfo ? hasTrunfo : false,
      savedCards: savedCards.filter((card) => card.cardName !== cardClick),
    });
  };

  search = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  search2 = (e) => {
    this.setState({
      rare: e.target.value,
    });
  };

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
      savedCards,
      // buttonDisabled,
      isSaveButtonDisabled,
      searchValue,
      rare,
      tt,
      dis,
    } = this.state;

    return (
      <>
        <div>
          <Form
            state={ this.state }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            onInputChange={ this.onInputChange }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
          />
        </div>
        <div>
          <input
            disabled={ dis }
            type="text"
            data-testid="name-filter"
            id="search"
            name="search"
            onChange={ this.search }
          />
          <select
            disabled={ dis }
            type="select"
            data-testid="rare-filter"
            id="rare-filter"
            name="rare"
            onChange={ this.search2 }
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
          <input
            id="trunfo-input"
            type="checkbox"
            name="tt"
            data-testid="trunfo-filter"
            onChange={ this.checkTrunfo }
          />
        </div>
        <div>
          {savedCards.filter((carta) => carta.cardName.includes(searchValue))
            .filter((carta) => (rare === 'todas' ? carta : carta.cardRare === rare))
            .filter((trunfo) => (tt === true ? trunfo.cardTrunfo === tt : trunfo))
            .map((e) => (
              <div key={ e.cardName }>
                <Card
                  cardName={ e.cardName }
                  cardDescription={ e.cardDescription }
                  cardAttr1={ e.cardAttr1 }
                  cardAttr2={ e.cardAttr2 }
                  cardAttr3={ e.cardAttr3 }
                  cardImage={ e.cardImage }
                  cardRare={ e.cardRare }
                  cardTrunfo={ e.cardTrunfo }
                  key={ e.cardName }
                />
                <button
                  type="button"
                  name={ e.cardName }
                  data-testid="delete-button"
                  onClick={ this.remove }
                >
                  Excluir
                </button>
              </div>
            ))}
        </div>
      </>
    );
  }
}

export default App;
