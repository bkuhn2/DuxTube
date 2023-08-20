import { createSlice } from '@reduxjs/toolkit'

export const allVideosSlice = createSlice({
  name: 'allVideos',
  initialState: { value: [] },
  reducers: {
    setAllVideos: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setAllVideos } = allVideosSlice.actions;
export default allVideosSlice.reducer;