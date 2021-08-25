import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCart, incrementCart } from '../redux/actions/carsActions'
import '../styling/Cart.css'

const Cart = () => {

    const {cart} = useSelector(state => state)
    const dispatch = useDispatch()

    // const calculate

    return (
        <div className="cart-container">
            <div className="container">
                <div className="cart-item">
                    <div className="check-out">

                        <button className="btn btn-warning check">Check out</button>
                    </div>
                    {cart.map(carrt => (
                        <div className="cart-items">
                            <div className="item-image">
                                <img src={carrt.images[0]} alt="carImage" />
                            </div>
                            <div className="item-details">
                        
                                    <i onClick={()=>dispatch(decrementCart(carrt.id))} className="fas fa-minus-square q"></i>
                                    <p className="item-amount q" >{carrt.quantity}</p>
                                    <i onClick={()=>dispatch(incrementCart(carrt.id))} className="fas fa-plus-square q"></i> <br />
            
                                    <h4 className="u">Unit Price : {carrt.price}</h4>
                                    <h4 className="s">subtotals : {carrt.quantity * carrt.price}</h4>
                            </div>
                        </div>
                    ))
                    }
                </div>
           </div>
        </div>
    )
}

export default Cart



