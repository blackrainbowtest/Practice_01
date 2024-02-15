import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../features/Category/CategorySlice'
import productReducer from "../features/Product/ProductSlice"

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
  },
});
