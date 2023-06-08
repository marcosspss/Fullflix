import { configureStore } from "@reduxjs/toolkit";
import FullflixSlice from "./FullflixSlice";



export const store = configureStore({
    reducer: {
        Fullflix: FullflixSlice
    },
    Middleware: getdefaultMiddleWare => getdefaultMiddleWare({
        serializablecheck: false,
    })
})