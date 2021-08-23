import React from 'react'
import '../styling/Navbar.css'

const Navbar = () => {
    return (
        <div className = "navbar">
            <div className="container navbar-container">
                <h1>Pearl Shine Motors</h1>
                <div className="cart-btn">
                   
                    <i className="fas fa-cart-plus cart"></i>
                    <span className='badge badge-primary' id='cart-count'> 5 </span>
                
                </div>

            </div>

            
        </div>
    )
}

export default Navbar
