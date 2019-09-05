import React from 'react'
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from "../../assets/crown.svg";
import './header.styles.scss'
import { auth} from '../../firebase/firebase.utils'
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden} from '../../redux/cart/cart.selectors';
import { selectCurrentuser} from '../../redux/user/user.selector';
import {createStructuredSelector} from 'reselect';
const  Header=({currentUser,hidden})=> (

    <div className="header">
            <Link className = 'logo-container' to ='/'>
                <Logo className ="Logo"/>
            </Link>
        <div className ='options'>
            <Link className='option' to ='/shop'>
              SHOP
            </Link>
            <Link className='option' to ='/contact'>
              CONTACT
            </Link>
            {
              currentUser?(
                <div>

                  <div className='option'onClick ={()=>auth.signOut()}>
                    SIGN OUT
                  </div>
                      <div className='welcome'>{`Welcome ${currentUser.displayName}`}</div>
                </div>
              ):(
              <Link className= 'option' to = '/signin'>
                SIGN IN
              </Link>)
            }
            <CartIcon/>
        </div> 
       {hidden?null:<CartDropdown/>}
    </div>
)

const mapStateToProps=createStructuredSelector({
  currentUser :selectCurrentuser,
  hidden:selectCartHidden
})


export default connect (mapStateToProps)(Header)
