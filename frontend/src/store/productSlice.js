import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: [],
    loading: false,
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    },
});

export const { setLoading } = productSlice.actions;

export default productSlice.reducer;