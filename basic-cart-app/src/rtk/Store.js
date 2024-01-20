import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart-slice";
import productsSlice from "./slices/Products-Slice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
  },
});
