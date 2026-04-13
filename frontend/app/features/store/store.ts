import { configureStore } from '@reduxjs/toolkit'
import settingreducer from './settings/settingsSlice'

const store = configureStore({
reducer: {
  settings: settingreducer,
}
})

export default store;
