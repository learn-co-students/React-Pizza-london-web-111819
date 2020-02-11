import React from "react";

const PizzaForm = props => {
    return (
        <div className="form-row">
            <div className="col-5">
                <input
                    type="text"
                    name="topping"
                    className="form-control"
                    placeholder="Pizza Topping"
                    value={props.pizza.topping}
                    onChange={props.handleForm}
                />
            </div>
            <div className="col">
                <select
                    value={props.pizza.size}
                    className="form-control"
                    name="size"
                    onChange={props.handleForm}
                >
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
            </div>
            <div className="col">
                <div className="form-check">
                    <input
                        className="form-check-input"
                        name="vegetarian"
                        type="checkbox"
                        checked={props.pizza.vegetarian}
                        onClick={props.handleCheckChange}
                    />
                    <label className="form-check-label">Vegetarian</label>
                </div>
            </div>
            <div className="col">
                <button
                    type="submit"
                    className="btn btn-success"
                    onClick={() => props.handleSubmit( props.pizza )}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default PizzaForm;
