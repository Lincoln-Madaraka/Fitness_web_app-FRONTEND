import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
};


const productSlice = createSlice({

    name: "mohit",
    initialState: initialState,
    reducers: {
        setData(state, action) {
            state.data = action.payload;
        },
    }

})


export const { setData,setStatus } = productSlice.actions;


export default productSlice.reducer;


