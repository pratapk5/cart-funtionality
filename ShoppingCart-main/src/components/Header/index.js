import React, { useState , useEffect} from 'react';
import { Button } from 'reactstrap';
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import './styles.scss';

  const Header = withRouter((props) => {

    const [screenType, setScreenType] = useState('');
    const cartData = useSelector(state => state.cartData)
    
    useEffect(() => {
        if(window.location.href.includes('login')) {
            setScreenType('login')
        }
        if(window.location.href.includes('dashboard')) {
            setScreenType('dashboard')
        }
        if(window.location.href.includes('home')) {
            setScreenType('home')
        }

        if(window.location.href.includes('cart')) {
            setScreenType('cart')
        }
      });

    const redirectToLoginScreen=()=>{
        props.history.push('/login')
    }

    const redirectToDashboardScreen=()=>{
        props.history.push('/dashboard')
    }

    const redirectToHomeScreen=()=>{
        props.history.push('/home')
    }

    const redirectToCartScreen=()=>{
        props.history.push('/cart')
    }

    const productsInCart = cartData.data.length;
    return (
        <div className="header">
        <h2>React App</h2>
        {screenType === 'login' && <Button color="secondary" onClick={redirectToHomeScreen}>home</Button>}
        {screenType === 'dashboard' && (<div>
            <Button color="secondary" onClick={redirectToHomeScreen}>Logout</Button>
            <Button type="button" className="btn btn-primary cart" onClick={redirectToCartScreen}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                </svg>
                {productsInCart > 0 && <span class="badge">{productsInCart}</span>}
              </Button>
            </div>)}
            {screenType === 'cart' && <Button color="secondary" onClick={redirectToDashboardScreen}>Back to Dashboard</Button>}
        {screenType === 'home' && <Button color="secondary" onClick={redirectToLoginScreen}>login</Button>}
        </div>
    )});

  export default Header