import React, { useState, useEffect } from 'react';
import data from '../../data/data.json';
import Courses from '../Courses/Courses';
import './Shop.css'
import Cart from '../Cart/Cart';

const Shop = () => {

  const [courses, setCourses] = useState([]);
  useEffect(() => {
    setCourses(data);
  }, []);

      const [cart, setCart] = useState([])
      const handelAddCart = (courses) => {
      const newCart = [...cart, courses];
      setCart(newCart);
  }

  return (
    <div className="shop-container offset-1 d-flex">
      <div className="courses-area">
          {
            courses.map(course => <Courses course={course}  handelAddCart={handelAddCart}></Courses>)
          }
      </div>

      <div className="cart-area">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;