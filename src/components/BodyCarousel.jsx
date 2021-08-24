import React from 'react'
import '../styling/BodyCarousel.css'

function BodyCarousel() {
  return (
    <div className="carousel-container">
      <div className="container">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" style={{height:"70vh"}}>
            <img style={{ objectFit: 'cover', height:"100%" }} src="https://cdn.pixabay.com/photo/2019/07/07/14/03/fiat-4322521__340.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <button className="btn btn-outline-secondary btn-md">View More Details</button>
            </div>
          </div>
          <div className="carousel-item" style={{height:"70vh"}}>
            <img style={{ objectFit: 'cover', height:"100%" }} src="https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278__340.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <button className="btn btn-outline-secondary btn-md">View More Details</button>
            </div>
          </div>
          <div className="carousel-item" style={{ height: '70vh' }}>
            <img style={{ objectFit: 'cover', height:"100%" }} src="https://cdn.pixabay.com/photo/2016/11/22/23/44/porsche-1851246__340.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <button className="btn btn-outline-secondary btn-md">View More Details</button>
            </div>
          </div>
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

export default BodyCarousel
