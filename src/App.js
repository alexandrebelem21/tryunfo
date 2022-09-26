import React from "react";
import Form from "./components/Form";
import Card from "./components/Card";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: "",
      cardDescription: "",
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: "",
      cardRare: "normal",
      cardTrunfo: false,
      savedCards: [],
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  onInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const teste = type === "checkbox" ? checked : value;
    this.setState({ [name]: teste }, this.botao);
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
    const attr01 = parseInt(cardAttr1, 10);
    const attr02 = parseInt(cardAttr2, 10);
    const attr03 = parseInt(cardAttr3, 10);
    const sum = attr01 + attr02 + attr03 <= 210;

    if (
      cardName &&
      cardDescription &&
      cardImage &&
      cardRare !== undefined &&
      sum &&
      attr01 >= 0 &&
      attr01 <= 90 &&
      attr02 >= 0 &&
      attr02 <= 90 &&
      attr03 >= 0 &&
      attr03 <= 90
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };
  // console.log(this.isSaveButtonDisabled());

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
        (trunfo) => trunfo.cardTrunfo
      ),
      cardName: "",
      cardDescription: "",
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: "",
      cardRare: "normal",
      cardTrunfo: "",
    }));
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
      buttonDisabled,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
        <Form
          state={this.state}
          cardName={cardName}
          cardDescription={cardDescription}
          cardAttr1={cardAttr1}
          cardAttr2={cardAttr2}
          cardAttr3={cardAttr3}
          cardImage={cardImage}
          cardRare={cardRare}
          cardTrunfo={cardTrunfo}
          hasTrunfo={hasTrunfo}
          onInputChange={this.onInputChange}
          isSaveButtonDisabled={isSaveButtonDisabled}
          onSaveButtonClick={this.onSaveButtonClick}
        />
        <Card
          cardName={cardName}
          cardDescription={cardDescription}
          cardAttr1={cardAttr1}
          cardAttr2={cardAttr2}
          cardAttr3={cardAttr3}
          cardImage={cardImage}
          cardRare={cardRare}
          cardTrunfo={cardTrunfo}
          hasTrunfo={hasTrunfo}
        />
      </div>
    );
  }
}

export default App;
