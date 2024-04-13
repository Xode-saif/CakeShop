import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    cartItems: []
}
export const cartSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const currItem ={
                price:action.payload.price,
                name:action.payload.name,
                quantity:action.payload.quantity,
                id:action.payload.id,
                message:action.payload.message
            }
            state.cartItems.push(currItem);
        },
        currItemCount:(state,action)=>{
            const {id,quantity} = action.payload
            const itemToUpdate = state.cartItems.find(item => item.id === id);
            if(itemToUpdate){
                itemToUpdate.quantity = quantity+1;
            }
        }
    }
})
export const selectTotalItems = state => state.cart.cartItems.length;   //total item in cart
export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer