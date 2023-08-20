import { createSlice } from '@reduxjs/toolkit'

export const mySavedVideosSlice = createSlice({
  name: 'mySavedVideos',
  initialState: { value: [] },
  reducers: {
    addVideo: (state, action) => {
      state.value = action.payload
    },
    removeVideo: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { addVideo, removeVideo } = mySavedVideosSlice.actions;
export default mySavedVideosSlice.reducer;