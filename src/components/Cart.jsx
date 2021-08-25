import React from 'react'
import '../styling/Cart.css'

const Cart = () => {
    return (
        <div className="cart-container">
            <div className="container">
                <div className="cart-item">
                    <div className="check-out">

                        <button className="btn btn-warning check">Check out</button>
                    </div>
                <div className="cart-items">
                    <div className="item-image">
                        <img src="https://autocj.co.jp/photo/R00019000/R00019100-01.jpg" alt="carImage" />
                    </div>
                    <div className="item-details">
                   
                            <h4 className="q">Quantity :</h4>
                            <i className="fas fa-minus-square q"></i>
                            <p className="item-amount q" >7</p>
                            <i className="fas fa-plus-square q"></i> <br />
       
                            <h4 className="u">Unit Price :</h4>
                            <h4 className="s">subtotals :</h4>
                    </div>
                </div>
                <div className="cart-items">
                    <div className="item-image">
                        <img src="https://autocj.co.jp/photo/R00019000/R00019100-01.jpg" alt="carImage" />
                    </div>
                    <div className="item-details">
                         
                            <h4 className="q">Quantity :</h4>
                            
                            <div className="quantity">

                            <i className="fas fa-minus-square q"></i>
                            <p className="item-amount q" >7</p>
                            <i className="fas fa-plus-square q"></i> <br />
       
                            </div>
                            <h4 className="u">Unit Price :</h4>
                            <h4 className="s">subtotals :</h4>
                            <h4 className="d">Discount :</h4>


                    </div>
                </div>
                <div className="cart-items">
                    <div className="item-image">
                        <img src="https://autocj.co.jp/photo/R00019000/R00019100-01.jpg" alt="carImage" />
                    </div>
                    <div className="item-details">
                    <h4 className="q">Quantity :</h4>
                            <i className="fas fa-minus-square q"></i>
                            <p className="item-amount q" >7</p>
                            <i className="fas fa-plus-square q"></i> <br />
       
                            <h4 className="u">Unit Price :</h4>
                            <h4 className="s">subtotals :</h4>
                    </div>
                </div>
                </div>
           </div>
        </div>
    )
}

export default Cart



