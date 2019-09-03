import {createSelector} from 'reselect';

const selector = state=>state.cart;


export const selectCartItems = createSelector(
    [selector],
    cart=>cart.cartItems
    )

    export const selectCartItemsCount = createSelector(
        [selectCartItems],
        cartItems=>cartItems.reduce((a,cartItem)=>a+cartItem.quantity,0)
    )