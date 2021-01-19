import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { removeProductFromCart } from '../../actions/cartData';
import './styles.scss';


const ProductCardInCart = (props) => {
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.cartData)
    const removeProduct=()=>{    
        dispatch(removeProductFromCart(props.data));
}
  return (
    <div className="product-card-in-cart">
      <div className="wrapper">
        <img src={props.image} alt="Card image cap" />
        <h3 className="name">{props.name}</h3>
        <h3 className="price">{props.price}</h3>
        <a onClick={removeProduct} className="remove">Remove</a>
      </div>
    </div>
  );
};

export default ProductCardInCart;