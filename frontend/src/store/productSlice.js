import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: null,
    loading: false,
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        fetchProductsStart: (state) => {
            state.loading = true;
        },
        fetchProductsFailure: (state) => {
            state.loading = false;
        },
        fetchProductsSuccess: (state, action) => {
            state.loading = false;
            state.products = action.payload;
        },
        deleteProductStart: (state) => {
            state.loading = true;
        },
        deleteProductFailure: (state) => {
            state.loading = false;
        },
        deleteProductSuccess: (state, action) => {
            state.loading = false;
            state.products = action.payload;
        },
    },
});

export const { setLoading, fetchProductsStart, fetchProductsFailure, fetchProductsSuccess, deleteProductStart, deleteProductFailure, deleteProductSuccess } = productSlice.actions;

export default productSlice.reducer;