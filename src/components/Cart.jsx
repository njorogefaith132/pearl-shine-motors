import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCart, incrementCart } from '../redux/actions/carsActions'
import '../styling/Cart.css'

const Cart = () => {

    const [amount, setAmount] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [payable, setPayable] = useState(0)

    // const calculate
    const calculatePrice = () => {
        const amount = cart.reduce((val, acc) => {
            return val + (acc.price * acc.quantity)
        }, 0);

        setAmount(amount);
        calculateDiscount();
    }

    const getItems = ()=>{
        const items = cart.reduce((acc, value)=>acc+value.quantity, 0);
        return items;
    }

    const calculateDiscount = ()=>{
        if(getItems()>=5 || cart.length>4){
            setDiscount(0.05 * amount);
            setPayable(amount - discount);
        }else {
            setDiscount(0)
        }
    }

    const {cart} = useSelector(state => state)
    const dispatch = useDispatch()

    console.log({cart});



    useEffect(() => {
        getItems();
        calculatePrice();
        
    }, [cart , amount])


    return (
        <div className="cart-container">
            <div className="container">
                <div className="cart-item">
                    <div className="check-out">

                        <h5>Total Price : Ksh {amount}</h5>
                        <h5>Discount : Ksh {discount}</h5>
                        <h5>Payable Price : Ksh {payable}</h5>

                        <button className="btn btn-warning check">Check out</button>
                    </div>
                    {cart.map(carrt => (
                        <div className="cart-items">
                            <div className="item-image">
                                <img src={carrt.images[0]} alt="carImage" />
                            </div>
                            <div className="item-details">
                                    <h4 className="quantity">Quantity :</h4>
                                    <i onClick={()=>dispatch(decrementCart(carrt.id))} className="fas fa-minus-square q"></i>
                                    <p className="item-amount q" >{carrt.quantity}</p>
                                    <i onClick={()=>dispatch(incrementCart(carrt.id))} className="fas fa-plus-square q"></i> <br />
            
                                    <h4 className="u">Unit Price : Ksh {carrt.price}</h4>
                                    <h4 className="s">SubTotals : Ksh {carrt.quantity * carrt.price}</h4>
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



