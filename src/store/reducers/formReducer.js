import { createSlice } from "@reduxjs/toolkit";

export const formReducer = createSlice({
  name: "products",
  initialState: {
    value: [],
    editindex: "",
    valueofupdate: "",
    removeItem: "",
  },
  reducers: {
    get: (state, action) => {
      state.value.push(action.payload);
    },
    edit: (state, action) => {
      state.editindex = action.payload;
    },
    updatevalue: (state, action) => {
      state.valueofupdate = action.payload;
      const existingUser = state.value.find(
        (user) => user.id === state.editindex
      );
      if (existingUser) {
        existingUser.Id = state.valueofupdate.Id;
        existingUser.Name = state.valueofupdate.Name;
        existingUser.Price = state.valueofupdate.Price;
        existingUser.File = state.valueofupdate.File;
        existingUser.DropValue = state.valueofupdate.DropValue;
      }
    },
    Removedetails: (state, action) => {
      state.removeItem = action.payload;
      const existingUser = state.value.find((user) => user.id === state.removeItem);
      if (existingUser) {
        state.value = state.value.filter((user) => user.id !== state.removeItem);
      }
    },
  },
});

export const { get, edit, updatevalue, Removedetails } = formReducer.actions;
export const selectProduct = (state) => state.products.value;
export const EditIdex = (state) => state.products.editindex;
export const upate = (state) => state.products.valueofupdate;
export const remove = (state) => state.products.removeItem;

export default formReducer.reducer;
