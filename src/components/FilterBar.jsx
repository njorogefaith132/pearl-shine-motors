import React from 'react'
import { useSelector } from 'react-redux'
import '../styling/FilterBar.css'

function FilterBar() {

  const {cars} = useSelector(state => state.cars)
  let models = [];
  let prices = [];
  let years = [];

  cars.map(car => {
    models.push(car.model);
    prices.push(car.price);
    years.push(car.year);
  })
  
  const models_set = new Set(models)
  const prices_set = new Set(prices)
  const years_set = new Set(years)

  models = Array.from(models_set);
  prices = Array.from(prices_set);
  years = Array.from(years_set);

  return (
    <div className="select-container">
    <div className="container">
      <div className="select-section">
        <select className="form-select form-select-md" aria-label=".form-select-sm example">
          <option selected>Select Model</option>
          {models.map((model, index) => (
            <option key={index} value={model}>{model}</option>
          ))
          }
        </select>

        <select className="form-select form-select-md" aria-label=".form-select-sm example">
          <option selected>Select a Price</option>
          {prices.map((price, index) => (
            <option key={index} value={price}>Kshs {price}</option>
          ))
          }
        </select>

        <select className="form-select form-select-md" aria-label=".form-select-sm example">
          <option selected>Select year</option>
          {years.map((year, index) => (
            <option key={index} value={year}>{year}</option>
          ))
          }
        </select>
      </div>
    </div>
    </div>
  )
}

export default FilterBar
