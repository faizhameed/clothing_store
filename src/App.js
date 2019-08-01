import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import './App.css';
import {Route,Switch} from 'react-router-dom'


const HatsPage =()=>(<>

<h2>Hats Page</h2>
<p>this is a hats page</p>
</>
)

function App() {
  return (
    <Switch>
      <Route exact path = '/' component = {Homepage}/>
      <Route path = '/hats' component = {HatsPage}/>
    </Switch>
  );
}

export default App;
