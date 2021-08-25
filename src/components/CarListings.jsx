import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchingCarsRequest, fetchingCarRequest, addToCart } from "../redux/actions/carsActions";
import "../App.css";
import "../styling/CarListings.css";
import DetailsModal from "../inner-components/DetailsModal";


function CarListings() {
  const dispatch = useDispatch();
  const {cars: {cars, loading, error}} = useSelector(state => state)
  const {cart} = useSelector(state => state)
  const car = useSelector(state => state.car)

  const inCart = (id)=>{
    const item = cart.find(c=>c.id===id);
    if(item) return true
    return false
  }
console.log({cart});
  useEffect(() => {

    dispatch(fetchingCarsRequest());

  }, [])

  return (
    <div className="listings-container">
      <div className="container">
        <span className="listings-heading">
          <hr />
          <h4>Car listings</h4>
          <hr />
        </span>
        
         
        <div
            className="modal fade bd-example-modal-lg"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
  
        
          >
            <DetailsModal car={car}/>
          </div>

        <div className="car-listings-container">
          { loading ? (<h4>Loading...</h4>) :
          error ? (<h4 style={{ color: 'red' }}>{error}...</h4>) :
          cars && cars.map(car => (
            <div key={car.id} className="car-listing-item">
              <div className="car-listings-image">
              <button onClick={() => dispatch(fetchingCarRequest(car.id))} data-toggle="modal" data-target="#exampleModal">
                <img
                  src={car.images[0]}
                  alt={car.description}
                />
                </button>
              </div>
              <div className="car-listing-description">
                <div className="car-listings-inner-description">
                  <span>
                    <strong>Make : </strong>{car.name}
                  </span>
                  <br />
                  <span>
                    <strong>Mileage : </strong>{car.mileage} km
                  </span>
                  <br />
                  <span>
                    <strong>Year : </strong>{car.year}
                  </span>
                  <br />
                  <span>
                    <strong>Price : </strong>Kshs {car.price}
                  </span>
                  <br />
                </div>
                {
                  inCart(car.id)?
                  <button
                  disabled
                 className="btn btn-secondary btn-small">Added</button>
                  :
                  <button 
                onClick={()=>dispatch(addToCart(car.id))}
                 className="btn btn-success btn-small">Buy</button>
                }
                
              </div>
            </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default CarListings;
