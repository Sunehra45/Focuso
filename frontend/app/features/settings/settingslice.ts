import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import { settingsSlice } from "@/app/types";

const initialState:settingsSlice = {
  focusTime:25,
  shortBreak:5,
  longBreak:15,
  sessionCount:4
}

const settingSlice = createSlice({
    name:"settings",
    initialState,
    reducers:{
        updateSetting:(
          state,
         action: PayloadAction<{ key: keyof settingsSlice; value: number }>
          )=>{
          state[action.payload.key]=action.payload.value
        }
    }
})

export const { updateSetting } = settingSlice.actions;
export default settingSlice.reducer;

