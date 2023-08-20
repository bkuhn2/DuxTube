import { createSlice } from '@reduxjs/toolkit'

export const savedCounterSlice = createSlice({
  name: 'savedCounter',
  initialState: { value: 0 },
  reducers: {
    increase: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { increase } = savedCounterSlice.actions;
export default savedCounterSlice.reducer