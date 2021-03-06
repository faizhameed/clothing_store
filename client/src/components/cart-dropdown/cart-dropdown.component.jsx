import React from 'react'
import CustomButton from '../custom-button/custom.button.component'
import CartItem from '../cart-item/cart-item.component';

import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions'

import './cart-dropdown.styles.scss';

 
 const CartDropdown = ({cartItems,history,dispatch}) => {
     return (
         <div className ='cart-dropdown'>
            <div className ="cart-items"/>
            {cartItems.length?
                cartItems.map(cartItem=>(<div key ={cartItem.id+cartItem.id} >
                    <CartItem  item={cartItem}/>
                </div>)):
                <span className ='empty-message'>Your cart is empty</span>
            }
            <CustomButton 
            onClick={()=>{
                history.push('/checkout');
                dispatch(toggleCartHidden())
            }
            }
            
            >GO TO CHECKOUT</CustomButton> 
         </div>
     )
 }
 
const mapStateToProps = createStructuredSelector({
cartItems: selectCartItems
})

 export default withRouter(connect(mapStateToProps)(CartDropdown));
 