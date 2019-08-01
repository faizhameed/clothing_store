import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';




function App() {
  return (
    <Switch>
      <Route exact path = '/' component = {Homepage}/>
      <Route path = '/shop' component = {ShopPage}/>
    </Switch>
  );
}

export default App;
