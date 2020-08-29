import React from 'react';
import './Courses.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';


const Courses = (props) => {
  
  const handelAddCart = props.handelAddCart;
  const { img, title, creator, price, lang, buyer } = props.course;

  return (
    <div className="courses-card row my-4 col-12 col-md-2 col-md-4">
    <div className="col border shadow">

    <img src={img}></img>
    <h5>{title}</h5>
    <p className="text-muted font-weight-bold">{creator}</p>
    <p className="font-italic"><span className="font-weight-bold">{buyer}</span> happy Students</p>
    <div className="d-flex justify-content-between align-items-center">
      <h4>${price}</h4>
      <p>{lang}</p>
    </div>
        <button  onClick={() => handelAddCart(props.course)} className="btn btn-info font-weight-bold my-3">  <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
    </div>
  
    </div>
  );
};

export default Courses;