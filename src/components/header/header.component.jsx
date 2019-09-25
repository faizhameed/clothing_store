import React from 'react'
import {ReactComponent as Logo} from "../../assets/crown.svg";
import { HeaderContainer,LogoContainer,OptionsContainer,OptionLink } from './header.styles';
import { auth} from '../../firebase/firebase.utils'
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden} from '../../redux/cart/cart.selectors';
import { selectCurrentuser} from '../../redux/user/user.selector';
import {createStructuredSelector} from 'reselect';
const  Header=({currentUser,hidden})=> (

    <HeaderContainer className="header">
            <LogoContainer className = 'logo-container' to ='/'>
                <Logo className ="Logo"/>
            </LogoContainer>
        <OptionsContainer>
            <OptionLink  to ='/shop'>
              SHOP
            </OptionLink>
            <OptionLink  to ='/contact'>
              CONTACT
            </OptionLink>
            {
              currentUser?(
                <div>

                  <OptionLink as='div' onClick ={()=>auth.signOut()}>
                    SIGN OUT
                  </OptionLink>
                      <OptionLink as= 'div' >{`Welcome ${currentUser.displayName}`}</OptionLink>
                </div>
              ):(
              <OptionLink to = '/signin'>
                SIGN IN
              </OptionLink>)
            }
            <CartIcon/>
        </OptionsContainer> 
       {hidden?null:<CartDropdown/>}
    </HeaderContainer>
)

const mapStateToProps=createStructuredSelector({
  currentUser :selectCurrentuser,
  hidden:selectCartHidden
})


export default connect (mapStateToProps)(Header)
