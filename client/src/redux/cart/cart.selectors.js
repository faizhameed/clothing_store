import {createSelector} from 'reselect';

const selector = state=>state.cart;


export const selectCartItems = createSelector(
    [selector],
    cart=>cart.cartItems
    )
export const selectCartHidden = createSelector(
    [selector],
    cart=>cart.hidden
)
    export const selectCartItemsCount = createSelector(
        [selectCartItems],
        cartItems=>cartItems.reduce((a,cartItem)=>a+cartItem.quantity,0)
    )

    export const selectCartItemsTotal = createSelector(
        [selectCartItems],
        cartItems=>cartItems.reduce((a,cartItem)=>a+cartItem.quantity*cartItem.price,0)
    )