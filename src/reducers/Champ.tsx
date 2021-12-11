import { createSlice} from "@reduxjs/toolkit";

export const champSlice = createSlice({
  name: "champ",
  initialState: { value: { id: "Lissandra" } },
  reducers: {
    choose: (state, action) => { 
      state.value = action.payload;
    }
  }
});

export const { choose } = champSlice.actions;

export default champSlice.reducer;