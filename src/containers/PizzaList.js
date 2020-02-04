import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  renderPizzas = () => {
    return this.props.pizzas.map(pizza => <Pizza selectPizza={this.props.selectPizza} pizza={pizza} />)
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.pizzas.length > 0 && this.renderPizzas() 
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
