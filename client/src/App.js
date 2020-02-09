import React, { useEffect, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import Header from "./components/header/header.component";
import { GlobalStyle } from "./global.styles";
import { selectCurrentuser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.actions";
import WithSpinner from "./components/with-spinner/with-spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

const Homepage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));
const SignInSignUpPage = lazy(() =>
  import("./components/sign-in-and-sign-up/sign-in-and-sign-up.component")
);

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  /*  componentWillUnmount() {
    this.unSubscribeFromAuth();
  } */

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<WithSpinner />}>
            <Route exact path="/" component={Homepage} />

            <Route path="/shop" component={ShopPage} />
            <Route path="/checkout" component={CheckoutPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInSignUpPage />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentuser
});
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App); // passing null because app component doesnt require any state for itself
