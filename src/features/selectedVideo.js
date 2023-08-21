import { createSlice } from '@reduxjs/toolkit'

export const selectedVideoSlice = createSlice({
  name: 'selectedVideo',
  initialState: { value: {url: '', user: '', videoURL: ''}},
  reducers: {
    selectVideo: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { selectVideo } = selectedVideoSlice.actions;
export default selectedVideoSlice.reducer;