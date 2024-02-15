import { createAsyncThunk } from "@reduxjs/toolkit"

// import axios connection
import axios from "axios"
import { convertImageToBase64 } from "../../utils/image";

const url = "http://localhost:4000/products"

export const getProducts = createAsyncThunk(
    'product/getProducts',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.message)
        }
    }
);

export const addProduct = createAsyncThunk(
    'product/addProduct',
    async (product, { rejectWithValue }) => {
        try {
            const base64Images = await Promise.all(
                product.image.map(async (image) => await convertImageToBase64(image))
            );
            const response = await axios.post(url, { ...product, image: base64Images });
            return response.data;
        } catch (err) {
            return rejectWithValue(err.message)
        }
    }
)