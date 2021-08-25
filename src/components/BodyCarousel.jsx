import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import '../styling/BodyCarousel.css'


function BodyCarousel() {

  const { cars } = useSelector(state => state.carsReducer.cars)
  const images = [];
  cars.map(car => {
    images.push(...car.images)
  })
  

  useEffect(() => {
    console.log(cars)
    console.log(images);
  }, [])
  return (
    <div className="carousel-container">
      <div className="container">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" style={{height:"70vh"}}>
            <img style={{ objectFit: 'cover', height:"100%", width : "100%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgS6P8NMDOUPbqkBazLCu0WwSre_QdiP_6KA&usqp=CAU" />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <button className="btn btn-outline-secondary btn-md">View More Details</button>
            </div>
          </div>
          {images.map(image => (
            <div className="carousel-item" style={{height:"70vh"}}>
              <img style={{ objectFit: 'cover', height:"100%" ,width : "100%"}} src={image} />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <button className="btn btn-outline-secondary btn-md">View More Details</button>
              </div>
            </div>
          ))
          }
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      </div>
    </div>
  )
}

export default BodyCarousel;
