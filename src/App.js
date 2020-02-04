import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    selectedPizza: null,
    pizzas: []
  }

  fetchPizzas = () => {
    return fetch('http://localhost:3000/pizzas')
      .then(resp => resp.json())
      .then(pizzas => this.setState({pizzas}))
  }

  componentDidMount() {
    this.fetchPizzas()
  }

  selectPizza = (pizza) => {
    this.setState({selectedPizza: pizza})
  }

  updatePizza = (e, id) => {
    debugger;
    return fetch('http://localhost:3000/pizzas/' + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(
        {
          topping: e.target.topping.value,
          size: e.target.size.value
        }
      )
    }).then(resp => resp.json())
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm selectedPizza={this.state.selectedPizza} updatePizza={this.updatePizza} />
        <PizzaList pizzas={this.state.pizzas} selectPizza={this.selectPizza} />
      </Fragment>
    );
  }
}

export default App;
