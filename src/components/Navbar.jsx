import React from 'react'
import '../styling/Navbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {
    const {cart} = useSelector(state => state);
    const getItems = ()=>{
        const items = cart.reduce((acc, value)=>acc+value.quantity, 0);
        return items;
    }
    return (
        <div className = "navbar">
            <div className="container navbar-container">
                <Link to="/" ><h1>Pearl Shine Motors</h1></Link>
                <div className="cart-btn">
                    <Link to="/cart"><i className="fas fa-cart-plus cart"></i></Link>
                    <span className='badge badge-primary' id='cart-count'>{getItems()} </span>
                </div>

            </div>

            
        </div>
    )
}

export default Navbar
