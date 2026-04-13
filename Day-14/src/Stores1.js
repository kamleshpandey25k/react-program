import { configureStore } from "@reduxjs/toolkit";
import slice1Reducer from "./Slicer2";

const stores=configureStore({
    reducer:{
       slice1:  slice1Reducer
    }
})
export default stores;