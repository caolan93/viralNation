import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formValues: {
    id: "",
    image: "",
    first_name: "",
    last_name: "",
    email: "",
    description: "",
    is_verified: false,
  },
};

export const formSlice = createSlice({
  name: "formValues",
  initialState,
  reducers: {
    clearForm: (state) => {
      state.formValues = {
        id: "",
        image: "",
        first_name: "",
        last_name: "",
        email: "",
        description: "",
        is_verified: false,
      };
    },
    setFormValues: (state, action) => {
      state.formValues = action.payload;
    },
  },
});

export const { clearForm, setFormValues } = formSlice.actions;

export default formSlice.reducer;
