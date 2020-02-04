import React from "react"

class PizzaForm extends React.Component {

  state = {
    topping: null
  }

  changeTopping = (e) => {
    this.setState({
      topping: e.target.value
    })
  }

  render() {
    return(
        <div className="form-row">
          <div className="col-5">
              <input onChange={this.changeTopping} type="text" className="form-control" placeholder={this.props.selectedPizza ? this.props.selectedPizza.topping : "Pizza Topping" } value={
                  // this.props.selectedPizza && this.props.selectedPizza.topping 
                  null
                }/>
          </div>
          <div className="col">
            <select value={this.props.selectedPizza ? this.props.selectedPizza.size : null} className="form-control">
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input className="form-check-input" type="radio" value="Vegetarian" checked={this.props.selectedPizza ? this.props.selectedPizza.vegetarian : null}/>
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="Not Vegetarian" checked={this.props.selectedPizza ? !this.props.selectedPizza.vegetarian : null}/>
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success" onClick={() => this.props.updatePizza(this.this.props.selectedPizza)}>Submit</button>
          </div>
        </div>

    )
  }
}

export default PizzaForm
