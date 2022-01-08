import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const emptyFilter: string[] = [];

export const filterSlice = createSlice({
  name: "filter",
  initialState: emptyFilter,
  reducers: {
    addFilter: (state: string[], action: PayloadAction<string>) => {
      state.push(action.payload);
    },
    removeFilter: (state: string[], action: PayloadAction<string>) => {
      return state.filter((item) => item !== action.payload);
    },
    removeAllFilters: () => {
      return emptyFilter;
    },
  },
});

export const { addFilter, removeFilter, removeAllFilters } =
  filterSlice.actions;
