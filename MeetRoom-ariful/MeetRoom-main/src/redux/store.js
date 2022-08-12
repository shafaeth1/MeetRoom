import { configureStore } from '@reduxjs/toolkit';
import reducerSlice from "./reducerSlice";

export const store = configureStore({
  reducer: {
    reducerData:reducerSlice
  },
});


export default store;


