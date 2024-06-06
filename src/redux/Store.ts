import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index";

export const Store = configureStore({
    reducer: rootReducer,
});