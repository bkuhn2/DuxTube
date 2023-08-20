import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import allVideosReducer from './features/allVideos.js'
import mySavedVideosReducer from './features/mySavedVideos.js'

const store = configureStore({
  reducer: {
    allVideos: allVideosReducer,
    mySavedVideos: mySavedVideosReducer,
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
