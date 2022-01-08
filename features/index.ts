import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "./filter";

export const rootReducer = combineReducers({
  filter: filterSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
