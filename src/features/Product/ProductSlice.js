import { createSlice } from "@reduxjs/toolkit"
import { addProduct, getProducts } from "./ProductAPI"

const initialState = {
    data: [],
    errorMessage: "",
}

export const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        setError: (state, action) => {
            state.errorMessage = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state) => {
            state.loading = true;
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.loading = false;
            state.errorMessage = action.payload
        })
        .addCase(addProduct.pending, (state) => {
            state.loading = true;
        })
        .addCase(addProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.data = [...state.data, action.payload];
        })
        .addCase(addProduct.rejected, (state, action) => {
            state.loading = false;
            state.errorMessage = action.payload
        })
            
    }
})

// export slice to app/store
export default productSlice.reducer

export const { setError } = productSlice.actions