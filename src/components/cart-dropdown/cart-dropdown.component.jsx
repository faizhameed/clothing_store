import React from 'react'
 import CustomButton from '../custom-button/custom.button.component'
 import {connect} from 'react-redux';
 import './cart-dropdown.styles.scss';
 import {selectCartItems} from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';

 
 const CartDropdown = ({cartItems}) => {
     return (
         <div className ='cart-dropdown'>
            <div className ="cart-items"/>
            {
                cartItems.map(cartItem=>(<div>
                    <CartItem key ={cartItem.id}  item={cartItem}/>
                </div>))
            }
            <CustomButton>GO TO CHECKOUT</CustomButton> 
         </div>
     )
 }
 
const mapStateToProps = (state)=>({
cartItems: selectCartItems(state)
})
 export default connect(mapStateToProps)(CartDropdown);
 