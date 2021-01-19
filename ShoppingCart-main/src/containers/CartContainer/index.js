import React, { useState , useEffect} from 'react';
import { withRouter } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
  } from 'reactstrap';
import ProductCardInCart from '../../components/ProductCardInCart';
import './styles.scss';

const CartContainer = withRouter((props) => {
    const dispatch = useDispatch();
    const cartData = useSelector(state => state.cartData)
    const [data, setData] = useState([]);
    const displayCartData = cartData && cartData.data.map(obj=> {
        return <ProductCardInCart key={obj.code} image={obj.image} price={obj.price} name={obj.name} data={obj}/>
    }) 

    return (
        <div className="cart-container">
            <div className="wrapper-left">
            <h2>Shopping Cart</h2>
            {displayCartData}
            {cartData && !cartData.data.length && <h3 class="no-items">No items added to the cart </h3>}
            </div>
            <div className="wrapper-right">
            <h3>Subtotal: $</h3>

            <Button>Proceed to checkout</Button>
            </div>
        </div>
    )});

  export default CartContainer;