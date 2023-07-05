import { createSlice } from "@reduxjs/toolkit";

export const positionSlice = createSlice({
  name: "@@position",
  initialState: [],
  reducers: {
    addPositions: (_, action) => action.payload,
  },
});


export const {addPositions} = positionSlice.actions
export const positionReducer = positionSlice.reducer

export const selectVisiblePositions = (state, filters = []) => {
    if (filters.length === 0) return state.positions;
    return state.positions.filter((position) => {
      const posFilters = [].concat(
        position.role,
        position.level,
        ...position.languages,
        ...position.tools
      );
      return filters.every(filter => posFilters.includes(filter))
    });
  };
