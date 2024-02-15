import { createAsyncThunk } from "@reduxjs/toolkit"

// import axios connection
import axios from "axios"
import { convertImageToBase64 } from "../../utils/image";

const url = "http://localhost:4000/category"

export const getCategorys = createAsyncThunk(
    'category/getCategorys',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.message)
        }
    }
);

export const addCategory = createAsyncThunk(
    'category/addCategory',
    async (category, { rejectWithValue }) => {
        try {
            const base64Image = category.image ? await convertImageToBase64(category.image) : null;
            const response = await axios.post(url, {...category, image: base64Image});
            return response.data;
        } catch (err) {
            return rejectWithValue(err.message)
        }
    }
)

export const patchSubCategory = createAsyncThunk(
    'category/patchSubCategory',
    async (category, { rejectWithValue }) => {
        try {
            const response = await axios.patch(`${url}/${category.id}`, category.data);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.message)
        }
    }
)

