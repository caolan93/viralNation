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

// First, create the thunk
// export const getData: any = createAsyncThunk(
//   "googleRange/getData",
//   async (range?: string) => {
//     const response = await getTableDataJSON(range);
//     return response;
//   }
// );

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
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(getData.pending, (state) => {
  //         state.loading = true;
  //       })
  //       .addCase(getData.fulfilled, (state, { payload }) => {
  //         state.loading = false;
  //         state.tableData = payload;
  //       })
  //       .addCase(getData.rejected, (state) => {
  //         state.loading = false;
  //       });
  //   },
});

export const { clearForm, setFormValues } = formSlice.actions;

export default formSlice.reducer;
