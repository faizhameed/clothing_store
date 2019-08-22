import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';




class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
    currentUser:null   
    }
  }

  unSubscribeFromAuth=null;
  componentDidMount(){
   this.unSubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
    
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot=>{
          this.setState({
            currentUser:{
            id:snapShot.id,
            ...snapShot.data()
            }
          },()=>{
            console.log(this.state)

          })
        })
      } else {
        this.setState({
          currentUser:userAuth
        })
      }

    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render (){
    
    
    return (<div>
    
      <Header currentUser = {this.state.currentUser}/>
      <Switch>
        <Route exact path = '/' component = {Homepage}/>
        <Route path = '/shop' component = {ShopPage}/>
        <Route path = '/signin' component = {SignInSignUpPage}/>
      </Switch>
    </div>
    );
  }
}

export default App;
