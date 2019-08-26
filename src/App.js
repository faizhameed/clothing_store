import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import './App.css';
import {Route,Switch,Redirect} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from "react-redux";
import { setCurrentUser} from './redux/user/user.actions'


class App extends React.Component {
  unSubscribeFromAuth=null;
  componentDidMount(){
    const {setCurrentUser} = this.props;
   this.unSubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
    
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot=>{
         setCurrentUser({
           id:snapShot.id,
           ...snapShot.data()
         })
          });
      } else {
        setCurrentUser(userAuth)
      }

    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render (){
    
    
    return (<div>
    
      <Header/>
      <Switch>
        <Route exact path = '/' component = {Homepage}/>
        <Route path = '/shop' component = {ShopPage}/>
        <Route 
        exact path = '/signin' 
        render={()=>this.props.currentUser?(
        <Redirect to = '/'/>
        ):(
        <SignInSignUpPage/>
        )
        } 
        />
      </Switch>
    </div>
    );
  }
}
 
const mapStateToProps = ({user})=>({
  currentUser:user.currentUser
})

const mapDispatchToProps = (dispatch)=>({
 setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect (mapStateToProps,mapDispatchToProps)(App); // passing null because app component doesnt require any state for itself
