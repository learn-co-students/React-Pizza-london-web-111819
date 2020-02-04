import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const baseUrl = 'http://localhost:3000'
const pizzasUrl = baseUrl + '/pizzas/'

class App extends Component {

  state = {
    allPizzas:[],
    selectedPizza: null
  }

  getAllPizzas = (url) => {
    return fetch(url)
    .then(resp => resp.json())
  }

  componentDidMount = () => {
    
    this.getAllPizzas(pizzasUrl)
    .then(pizzas => this.setState({allPizzas: pizzas}))
  }

  selectPizza = (pizza) => {
    this.setState({
      selectedPizza: pizza
    })
  }

  handleToppingChange = (e) =>{
    this.setState({
      selectedPizza:{
        ...this.state.selectedPizza,
        topping: e.target.value 
      }
    })
  }

  handleSizeChange = (e) =>{
    this.setState({
      selectedPizza:{
        ...this.state.selectedPizza,
        size: e.target.value 
      }
    })
  }

  handleVegetarianChange = (e) =>{
    this.setState({
      selectedPizza:{
        ...this.state.selectedPizza,
        vegetarian: e.target.value === 'Vegetarian' ? true : false
      }
    })
  }

  patchSelectedPizza = (pizza) =>{
    return fetch(`${pizzasUrl}${pizza.id}`,{
      method: 'PATCH',
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(pizza)
    }).then(resp => resp.json())
    .then(pizza => console.log(pizza))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.patchSelectedPizza(this.state.selectedPizza)
    .then(()=> this.getAllPizzas(pizzasUrl))
    .then(pizzas => this.setState({allPizzas: pizzas}))
    }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          selectedPizza={this.state.selectedPizza} 
          handleToppingChange={this.handleToppingChange}
          handleSizeChange={this.handleSizeChange}
          handleVegetarianChange={this.handleVegetarianChange}
          handleSubmit={this.handleSubmit}
        />
        <PizzaList pizzas={this.state.allPizzas} selectPizza={this.selectPizza}/>
      </Fragment>
    );
  }
}

export default App;
