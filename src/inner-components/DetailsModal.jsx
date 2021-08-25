import React from 'react'

function DetailsModal(props) {

  console.log(props);

  const { images, description, name, mileage, year, price, fuel, transmission, engine_size } = props.car;

  return (
    <div className="modal-dialog modal-lg" role="document">
      <div style={{ height: '90%'}} className="modal-content ">
        <div className="modal-header">
          <h5 className="modal-title" >Car Details</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        <i class="fas fa-times"></i>
          </button>
        </div>
        <div className="modal-body">
          <div class="car-body">
              <div className="modal-image">
                <img
                src={images[0]}
                alt={description}
                />
                {/* <span>Subaru Forester 2014 model</span> */}
              </div>
              <div className="car-details">
                    <span>
                  <strong>Make : </strong>{name}
                </span>
                <br />
                <span>
                  <strong>Mileage : </strong>{mileage} km
                </span>
                <br />
                <span>
                  <strong>Year : </strong>{year}
                </span>
                <br />
                <span>
                  <strong>Price : </strong>{price} kshs
                </span>
                <br />
                <span>
                  <strong>Fuel : </strong>{fuel}
                </span>
                <br />
                <span>
                  <strong>Transmission : </strong>{transmission} gear box
                </span>
                <br /> <span>
                  <strong>Engine Size : </strong>{engine_size}
                </span>
                <br />

              <span><button className="btn btn-warning">Add to Cart</button></span>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsModal
