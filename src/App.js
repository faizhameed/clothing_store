import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import Header from "./components/header/header.component";
import SignInSignUpPage from "./components/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { selectCurrentuser } from "./redux/user/user.selector";

class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    /*  const {setCurrentUser} = this.props;
   this.unSubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
    
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot=>{
         setCurrentUser({
           id:snapShot.id,
           ...snapShot.data()
         })
          });
      }
        setCurrentUser(userAuth)
      
    }) */
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentuser
});

export default connect(mapStateToProps)(App); // passing null because app component doesnt require any state for itself
