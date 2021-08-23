import React from 'react'
import '../styling/Navbar.css'

const Navbar = () => {
    return (
        <div className = "navbar">
            <div className="container navbar-container">
                <h1>Pearl Shine Motors</h1>
                <div className="cart-btn">
                    <span className="nav-icon">
                        <i class="fas fa-cart-plus"></i>
                    <div className="cart-items">0</div>
                    </span>
                </div>

            </div>

            
        </div>
    )
}

export default Navbar
