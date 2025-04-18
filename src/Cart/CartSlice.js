import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../cartItems";

const data = {
  cartData: cartItems,
  itemAmount: 0,
  total: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState: data,
  reducers: {
    clearCart: (state) => {
      state.cartData = [];
    },
    removeItem: (state, action) => {
      state.cartData = state.cartData.filter((item)=>item.id!=action.payload)
},

increase:(state,action)=>{
  const cartItem=state.cartData.find((item)=>item.id===action.payload)
  cartItem.amount=cartItem.amount +1
},

decrease:(state,action)=>{
  const cartItem=state.cartData.find((item)=>item.id===action.payload)
  cartItem.amount=cartItem.amount -1
},

calculateTotals: (state) => {
  let amount = 0;
  let sum = 0;
  state.cartData.forEach((item) => {
    amount += item.amount;
    sum += item.amount * item.price;
  });
  state.itemAmount = amount;
  state.total = sum
  ;
},


  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } = CartSlice.actions;

export default CartSlice;
