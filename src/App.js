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
    };
  }
  onInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const teste = type === "checkbox" ? checked : value;
    this.setState({ [name]: teste });
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
          isSaveButtonDisabled={this.isSaveButtonDisabled}
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
