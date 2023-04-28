import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const countrytest_get_name_list = createAsyncThunk("countrytest_response_get_countries/countrytest_get_name_list", async payload => {
  const response = await apiService.countrytest_get_name_list(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const countrytest_response_get_countriesSlice = createSlice({
  name: "countrytest_response_get_countries",
  initialState,
  reducers: {},
  extraReducers: {
    [countrytest_get_name_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [countrytest_get_name_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload;
        state.api.loading = "idle";
      }
    },
    [countrytest_get_name_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  countrytest_get_name_list,
  slice: countrytest_response_get_countriesSlice
};