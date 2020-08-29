import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
  const cart = props.cart;

  let totalPrice = cart.reduce((total, courses) => total + courses.price, 0);
  totalPrice = parseFloat(totalPrice.toFixed(2));


  return (
    <div  className="cart-container sticky-top">
      <div  className=" cart  sticky-top text-center">
        <h4 className="text-light font-weight-bold mb-4">Order Summary</h4>
        <h4><FontAwesomeIcon icon={faShoppingCart} /> {cart.length} </h4>
        <h4 className="font-weight-bold">Total ${totalPrice}</h4>
        <button className="btn btn-light mt-5"> Enroll Now </button>
      </div>
    </div>
  );
};

export default Cart;