import React from 'react'

const API = () => {
    const baseUrl = 'http://localhost:3000'
    const pizzasUrl = baseUrl + '/pizzas'

    get = (url) => {
        return fetch(url).then(resp => resp.json())
    }

    getAllPizzas = (pizzasUrl) => {
        get(pizzasUrl)
    }
}

export default { getAllPizzas }