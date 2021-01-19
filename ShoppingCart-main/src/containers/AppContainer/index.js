import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LoginContainer from '../LoginContainer';
import HomeContainer from '../HomeContainer';
import CartContainer from '../CartContainer';
import DashboardContainer from '../DashboardContainer';
import {Switch, Route, Redirect} from 'react-router-dom';

class AppContainer extends React.Component{

    render() {
        return (
            <div className='app'>
                <Header/>
                <Switch>
                    <Route path='/login' render={()=>(<LoginContainer/>)}/>
                    <Route path='/home' render={()=>(<HomeContainer/>)}/>
                    <Route path='/dashboard' render={()=>(<DashboardContainer/>)}/>
                    <Route path='/cart' render={()=>(<CartContainer/>)}/>
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                </Switch>
                <Footer/>
            </div>
        )
    }
}
export default AppContainer;