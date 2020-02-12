import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";
class App extends Component {
    state = {
        pizzas: [],
        pizzaToChange: {
            id: null,
            size: "",
            topping: "",
            vegetarian: false
        }
    };

    getPizzas() {
        fetch("http://localhost:4000/pizzas")
            .then(response => response.json())
            .then(pizzaData => this.setState({ pizzas: pizzaData }));
    }

    patchPizza(id, pizza) {
        fetch(`http://localhost:4000/pizzas/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(pizza)
        })
            .then(response => response.json())
            .then(data =>
                this.setState({ pizzas: [...this.replacePizza(data), data] })
            );
    }

    replacePizza(data) {
        return this.state.pizzas.filter(pizza => pizza.id !== data.id);
    }

    componentDidMount() {
        this.getPizzas();
    }

    handleFormFill = pizzaToChange => {
        this.setState({
            pizzaToChange: pizzaToChange
        });
    };

    handleFormChange = event => {
        this.setState({
            pizzaToChange: {
                ...this.state.pizzaToChange,
                [event.target.name]: event.target.value
            }
        });
    };

    handleCheckChange = event => {
        this.setState({
            pizzaToChange: {
                ...this.state.pizzaToChange,
                [event.target.name]: event.target.checked
            }
        });
    };

    handleSubmit = pizza => {
        this.patchPizza(pizza.id, pizza);
        alert("Pizza updated");

        //TODO
        //+ reset the form
        //+ automatically render updated db
    };

    render() {
        return (
            <Fragment>
                <Header />
                <PizzaForm
                    pizza={this.state.pizzaToChange}
                    handleForm={this.handleFormChange}
                    handleCheckChange={this.handleCheckChange}
                    handleSubmit={this.handleSubmit}
                />
                <PizzaList
                    pizzas={this.state.pizzas}
                    handleFormFill={this.handleFormFill}
                />
            </Fragment>
        );
    }
}

export default App;
