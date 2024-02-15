import { createSlice } from "@reduxjs/toolkit"

// importing action functions from API
import { addCategory, getCategorys, patchSubCategory } from "./CategoryAPI"

const initialState = {
    data: [],
    errorMessage: "",
    gender: true,
    category: 1,
    value: "1",
    loading: false
}

export const categorySlice = createSlice({
    name: 'category',
    initialState: initialState,
    reducers: {
        setError: (state, action) => {
            state.errorMessage = action.payload
        },
        changeGender: (state, action) => {
            state.gender = action.payload
        },
        changeCategory: (state, action) => {
            if(action.payload) {
                state.category = action.payload
            }
        },
        changeValue: (state, action) => {
            state.value = action.payload.toString()
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategorys.pending, (state) => {
                state.loading = true;
            })
            .addCase(getCategorys.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getCategorys.rejected, (state, action) => {
                state.loading = false;
                state.errorMessage = action.payload
            })
            .addCase(addCategory.pending, (state) => {
                state.loading = true;
            })
            .addCase(addCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.data = [...state.data, action.payload];
            })
            .addCase(addCategory.rejected, (state, action) => {
                state.loading = false;
                state.errorMessage = action.payload
            })
            .addCase(patchSubCategory.pending, (state) => {
                state.loading = true;
            })
            .addCase(patchSubCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.data = state.data.map(category => category.id === action.payload.id ? action.payload : category);
            })
            .addCase(patchSubCategory.rejected, (state, action) => {
                state.loading = false;
                state.errorMessage = action.payload
            })
    }
})

// export slice to app/store
export default categorySlice.reducer

export const { setError, changeGender, changeCategory, changeValue } = categorySlice.actions