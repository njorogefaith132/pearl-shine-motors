import React from 'react'
import '../styling/FilterBar.css'

function FilterBar() {
  return (
    <div className="select-container">
    <div className="container">
      <div className="select-section">
        <select class="form-select form-select-md" aria-label=".form-select-sm example">
          <option selected>Open this select m</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <select class="form-select form-select-md" aria-label=".form-select-sm example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <select class="form-select form-select-md" aria-label=".form-select-sm example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>
    </div>
  )
}

export default FilterBar
