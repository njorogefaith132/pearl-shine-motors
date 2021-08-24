import React from "react";
// import { Link } from 'react-router-dom'
import "../App.css";
import "../styling/CarListings.css";

function CarListings() {
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
            <div className="modal-dialog modal-lg" role="document">
              <div style={{ height: '100%'}} className="modal-content ">
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
                        src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt="car in a desert"
                        />
                        {/* <span>Subaru Forester 2014 model</span> */}
                     </div>
                     <div className="car-details">
                            <span>
                          <strong>Make : </strong>Subaru Forester
                        </span>
                        <br />
                        <span>
                          <strong>Mileage : </strong>102,578 km
                        </span>
                        <br />
                        <span>
                          <strong>Year : </strong>2014
                        </span>
                        <br />
                        <span>
                          <strong>Price : </strong>1,982,578 kshs
                        </span>
                        <br />
                        <span>
                          <strong>Fuel : </strong>1,982,578 kshs
                        </span>
                        <br />
                        <span>
                          <strong>Transmission : </strong>1,982,578 kshs
                        </span>
                        <br /> <span>
                          <strong>Engine Size : </strong>1,982,578 kshs
                        </span>
                        <br />

                     <span><button className="btn btn-warning">Add to Cart</button></span>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        <div className="car-listings-container">
          {/*  */}
          <div className="car-listing-item">
            <div className="car-listings-image">
            <button data-toggle="modal" data-target="#exampleModal">
              <img
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="car in a desert"
              />
              </button>

              <span>Subaru Forester 2014 model</span>
            </div>
            <div className="car-listing-description">
              <div className="car-listings-inner-description">
                <span>
                  <strong>Make : </strong>Subaru Forester
                </span>
                <br />
                <span>
                  <strong>Mileage : </strong>102,578 km
                </span>
                <br />
                <span>
                  <strong>Year : </strong>2014
                </span>
                <br />
                <span>
                  <strong>Price : </strong>1,982,578 kshs
                </span>
                <br />
              </div>
              <button className="btn btn-success btn-small">Buy</button>
            </div>
          </div>

          {/*  */}
          <div className="car-listing-item">
            <div className="car-listings-image">
              <img
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="car in a desert"
              />
              <span>Subaru Forester 2014 model</span>
            </div>
            <div className="car-listing-description">
              <div className="car-listings-inner-description">
                <span>
                  <strong>Make : </strong>Subaru Forester
                </span>
                <br />
                <span>
                  <strong>Mileage : </strong>102,578 km
                </span>
                <br />
                <span>
                  <strong>Year : </strong>2014
                </span>
                <br />
                <span>
                  <strong>Price : </strong>1,982,578 kshs
                </span>
                <br />
              </div>
              <button className="btn btn-success btn-small">Buy</button>
            </div>
          </div>

          {/*  */}
          <div className="car-listing-item">
            <div className="car-listings-image">
              <img
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="car in a desert"
              />
              <span>Subaru Forester 2014 model</span>
            </div>
            <div className="car-listing-description">
              <div className="car-listings-inner-description">
                <span>
                  <strong>Make : </strong>Subaru Forester
                </span>
                <br />
                <span>
                  <strong>Mileage : </strong>102,578 km
                </span>
                <br />
                <span>
                  <strong>Year : </strong>2014
                </span>
                <br />
                <span>
                  <strong>Price : </strong>1,982,578 kshs
                </span>
                <br />
              </div>
              <button className="btn btn-success btn-small">Buy</button>
            </div>
          </div>

          {/*  */}
          <div className="car-listing-item">
            <div className="car-listings-image">
              <img
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="car in a desert"
              />
              <span>Subaru Forester 2014 model</span>
            </div>
            <div className="car-listing-description">
              <div className="car-listings-inner-description">
                <span>
                  <strong>Make : </strong>Subaru Forester
                </span>
                <br />
                <span>
                  <strong>Mileage : </strong>102,578 km
                </span>
                <br />
                <span>
                  <strong>Year : </strong>2014
                </span>
                <br />
                <span>
                  <strong>Price : </strong>1,982,578 kshs
                </span>
                <br />
              </div>
              <button className="btn btn-success btn-small">Buy</button>
            </div>
          </div>

          {/*  */}
          <div className="car-listing-item">
            <div className="car-listings-image">
              <img
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="car in a desert"
              />
              <span>Subaru Forester 2014 model</span>
            </div>
            <div className="car-listing-description">
              <div className="car-listings-inner-description">
                <span>
                  <strong>Make : </strong>Subaru Forester
                </span>
                <br />
                <span>
                  <strong>Mileage : </strong>102,578 km
                </span>
                <br />
                <span>
                  <strong>Year : </strong>2014
                </span>
                <br />
                <span>
                  <strong>Price : </strong>1,982,578 kshs
                </span>
                <br />
              </div>
              <button className="btn btn-success btn-small">Buy</button>
            </div>
          </div>

          {/*  */}
          <div className="car-listing-item">
            <div className="car-listings-image">
              <img
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="car in a desert"
              />
              <span>Subaru Forester 2014 model</span>
            </div>
            <div className="car-listing-description">
              <div className="car-listings-inner-description">
                <span>
                  <strong>Make : </strong>Subaru Forester
                </span>
                <br />
                <span>
                  <strong>Mileage : </strong>102,578 km
                </span>
                <br />
                <span>
                  <strong>Year : </strong>2014
                </span>
                <br />
                <span>
                  <strong>Price : </strong>1,982,578 kshs
                </span>
                <br />
              </div>
              <button className="btn btn-success btn-small">Buy</button>
            </div>
          </div>

          {/*  */}
          <div className="car-listing-item">
            <div className="car-listings-image">
              <img
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="car in a desert"
              />
              <span>Subaru Forester 2014 model</span>
            </div>
            <div className="car-listing-description">
              <div className="car-listings-inner-description">
                <span>
                  <strong>Make : </strong>Subaru Forester
                </span>
                <br />
                <span>
                  <strong>Mileage : </strong>102,578 km
                </span>
                <br />
                <span>
                  <strong>Year : </strong>2014
                </span>
                <br />
                <span>
                  <strong>Price : </strong>1,982,578 kshs
                </span>
                <br />
              </div>
              <button className="btn btn-success btn-small">Buy</button>
            </div>
          </div>

          {/*  */}
          <div className="car-listing-item">
            <div className="car-listings-image">
              <img
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="car in a desert"
              />
              <span>Subaru Forester 2014 model</span>
            </div>
            <div className="car-listing-description">
              <div className="car-listings-inner-description">
                <span>
                  <strong>Make : </strong>Subaru Forester
                </span>
                <br />
                <span>
                  <strong>Mileage : </strong>102,578 km
                </span>
                <br />
                <span>
                  <strong>Year : </strong>2014
                </span>
                <br />
                <span>
                  <strong>Price : </strong>1,982,578 kshs
                </span>
                <br />
              </div>
              <button className="btn btn-success btn-small">Buy</button>
            </div>
          </div>

          {/*  */}
          <div className="car-listing-item">
            <div className="car-listings-image">
              <img
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="car in a desert"
              />
              <span>Subaru Forester 2014 model</span>
            </div>
            <div className="car-listing-description">
              <div className="car-listings-inner-description">
                <span>
                  <strong>Make : </strong>Subaru Forester
                </span>
                <br />
                <span>
                  <strong>Mileage : </strong>102,578 km
                </span>
                <br />
                <span>
                  <strong>Year : </strong>2014
                </span>
                <br />
                <span>
                  <strong>Price : </strong>1,982,578 kshs
                </span>
                <br />
              </div>
              <button className="btn btn-success btn-small">Buy</button>
            </div>
          </div>

          {/*  */}
          <div className="car-listing-item">
            <div className="car-listings-image">
              <img
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="car in a desert"
              />
              <span>Subaru Forester 2014 model</span>
            </div>
            <div className="car-listing-description">
              <div className="car-listings-inner-description">
                <span>
                  <strong>Make : </strong>Subaru Forester
                </span>
                <br />
                <span>
                  <strong>Mileage : </strong>102,578 km
                </span>
                <br />
                <span>
                  <strong>Year : </strong>2014
                </span>
                <br />
                <span>
                  <strong>Price : </strong>1,982,578 kshs
                </span>
                <br />
              </div>
              <button className="btn btn-success btn-small">Buy</button>
            </div>
          </div>

          {/*  */}
          <div className="car-listing-item">
            <div className="car-listings-image">
              <img
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="car in a desert"
              />
              <span>Subaru Forester 2014 model</span>
            </div>
            <div className="car-listing-description">
              <div className="car-listings-inner-description">
                <span>
                  <strong>Make : </strong>Subaru Forester
                </span>
                <br />
                <span>
                  <strong>Mileage : </strong>102,578 km
                </span>
                <br />
                <span>
                  <strong>Year : </strong>2014
                </span>
                <br />
                <span>
                  <strong>Price : </strong>1,982,578 kshs
                </span>
                <br />
              </div>
              <button className="btn btn-success btn-small">Buy</button>
            </div>
          </div>

          {/*  */}
          <div className="car-listing-item">
            <div className="car-listings-image">
              <img
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="car in a desert"
              />
              <span>Subaru Forester 2014 model</span>
            </div>
            <div className="car-listing-description">
              <div className="car-listings-inner-description">
                <span>
                  <strong>Make : </strong>Subaru Forester
                </span>
                <br />
                <span>
                  <strong>Mileage : </strong>102,578 km
                </span>
                <br />
                <span>
                  <strong>Year : </strong>2014
                </span>
                <br />
                <span>
                  <strong>Price : </strong>1,982,578 kshs
                </span>
                <br />
              </div>
              <button className="btn btn-success btn-small">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarListings;
