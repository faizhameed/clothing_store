import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';




function App() {
  return (<div>

    <Header/>
    <Switch>
      <Route exact path = '/' component = {Homepage}/>
      <Route path = '/shop' component = {ShopPage}/>
      <Route path = '/signin' component = {SignInSignUpPage}/>
    </Switch>
  </div>
  );
}

export default App;
