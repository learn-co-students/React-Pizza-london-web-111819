import React from "react"

const PizzaForm = (props) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder={props.pizzaToEdit.topping} 
            // value={// props.pizzaToEdit.topping} 
              onChange={(e)=>props.handlePatchPizzaTopping(e.target.value)}/>
        </div>
        <div className="col">
          <select value={null} className="form-control"
          onChange={(e)=>props.handlePatchPizzaSize(e.target.value)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" 
            checked={props.pizzaToEdit.vegetarian}
            onChange={props.handleVegetarianOptionSelect}
            />
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" 
            checked={!props.pizzaToEdit.vegetarian}
            onChange={props.handleVegetarianOptionSelect}
            />
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" 
          onClick={props.handleSubmitAKAPatch}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
