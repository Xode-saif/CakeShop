import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    cartItems: [],
    Count : 0,   //total item in cart
    currCount : 0
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
                size:action.payload.size,
                id:action.payload.id,
                message:action.payload.message
            }
            state.cartItems.push(currItem);
            state.Count = state.cartItems.length;
        },
        // currItemCount:(state,action)=>{
        //     const {id} = action.payload
        //     const itemToUpdate = state.cartItems.filter(item => item.id === id).length;
        //     if(itemToUpdate){
        //         // itemToUpdate.quantity = quantity+change;
        //         state.currCount = itemToUpdate;
        //     }
        // }
        removeFromCart:(state,action)=>{
            const {id} = action.payload
            state.cartItems = state.cartItems.filter(item => item.id !== id);
        }
    }
})
export const selectTotalItems = state => state.cart.cartItems.length;   //total item in cart
export const {addToCart,currItemCount,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer