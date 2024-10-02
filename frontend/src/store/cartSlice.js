import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    total: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        getCartItemsFailure: (state) => {
            state.cart = null;
        }, 
        getCartItemsSuccess: (state, action) => {
            state.cart = action.payload;
        }, 
        updateCartItems: (state, action) => {
            state.cart = action.payload;
        },
        setCartTotalAmount: (state, action) => {
            state.total = action.payload;
        }
    },
});

export const { getCartItemsSuccess, getCartItemsFailure, updateCartItems, setCartTotalAmount } = cartSlice.actions;

export default cartSlice.reducer;