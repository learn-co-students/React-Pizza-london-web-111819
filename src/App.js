import React, { Component, Fragment } from 'react';

import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const BASE_URL = 'http://localhost:3000/pizzas/'

class App extends Component {

  getInitialPizzasList = () => {
    fetch(BASE_URL).then(object=>object.json()).then(pizzas=>this.setState({pizzas}))
  }

  componentDidMount(){this.getInitialPizzasList()}

  state = {
    pizzas: [],
    pizzaEdited: {}
  }

  handlePatchPizzaTopping = (patch_PizzaTopping) => this.setState({
    pizzaEdited:{
      ...this.state.pizzaEdited,
      topping: patch_PizzaTopping
    }
  })
  handlePatchPizzaSize = (patch_PizzaSize) => this.setState({
    pizzaEdited:{
      ...this.state.pizzaEdited,
      size: patch_PizzaSize
    }
  })

  handleVegetarianOptionSelect = (e) => {
    let patchValue
    if (e.target.value==='Vegetarian') {patchValue = true
    } else {patchValue = false}
    this.setState({
    pizzaEdited: {
      ...this.state.pizzaEdited,
      vegetarian: patchValue
    }
  }
  )
}

  handleEditPizza = (pizzaEdited) => this.setState({pizzaEdited})

  handleSubmitAKAPatch = (event) =>{
    event.preventDefault()
    //patch to it with a fetch 1- form the patch object 2-patch
    let patchObject = {
      topping: this.state.pizzaEdited.topping,
      size: this.state.pizzaEdited.size,
      vegetarian: this.state.pizzaEdited.vegetarian
    }
    let patchData = {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
      body: JSON.stringify(patchObject)
      }
    fetch(`${BASE_URL}${this.state.pizzaEdited.id}`,patchData)
    .then(response=>response.json())
    .then(pizza=>{
      //find the pizza from the state.pizza with the matching id
      let targetIndex = this.state.pizzas.indexOf(this.state.pizzas.find(currentPizza=>currentPizza.id===pizza.id))
      let futurePizzas = [...this.state.pizzas]
      futurePizzas[targetIndex]=pizza
      //replace that with the pizza just received
      this.setState({
        pizzas:futurePizzas,
        pizzaEdited: {} //so that we start all over again
      })

    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          pizzaToEdit={this.state.pizzaEdited}
          handlePatchPizzaTopping={this.handlePatchPizzaTopping}
          handlePatchPizzaSize={this.handlePatchPizzaSize}
          handleVegetarianOptionSelect={this.handleVegetarianOptionSelect}
          handleSubmitAKAPatch={this.handleSubmitAKAPatch}
          />
        <PizzaList handleEditPizza={this.handleEditPizza} pizzas={this.state.pizzas}/>
      </Fragment>
    );
  }
}

export default App;
