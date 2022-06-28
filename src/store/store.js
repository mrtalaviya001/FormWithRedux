import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./reducers/formReducer";

export default configureStore({
    reducer: {
        products: formReducer
    }
});
