import React from 'react'
import '../App.css'
import '../styling/CarListings.css'

function CarListings() {
  return (
    <div className="listings-container">
      <div className="container">
        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}><hr style={{ width: '300px', marginRight: '30px' }}/><span className="car-listings">Car listings</span><hr style={{ width: '300px', marginLeft: '30px' }} /></span>
        <div className="car-listings-container">
          <div className="car-listing-item">
            <div style={{ position: 'relative' }} className="car-listings-image">
              <img style={{ height: '220px', width: '100%', borderRadius: '10px 10px 0 0' }} src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="car in a desert" />
              <span style={{ position: 'absolute', left: '5px', top: '5px' }} >Subaru Forester 2014 model</span>
            </div>
            <div className="car-listing-description">
              <div className="car-listings-inner-description">
                <span></span>
                <br/>
                <span></span>
              </div>
              <button></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarListings
