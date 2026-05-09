import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TimerMode, timerState } from "@/app/types";

const initialState: timerState = {
  title: null,
  timerMode: "Focus",
  isRunning: false,
  startTime: null,
  endTime: null,
  duration: 25,
  defaultDuration: 25,
};

const timerslice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<TimerMode>) => {
      state.timerMode = action.payload;
    },
    changeState(state, action: PayloadAction<true | false>) {
      state.isRunning = action.payload;
    },
    setTitle: (state, action: PayloadAction<string | null>) => {
      state.title = action.payload;
    },
    setDefaultDuration: (state, action: PayloadAction<number>) => {
      state.defaultDuration = action.payload;
      state.duration = action.payload;
    },
    startTimer(state) {
      const now = Date.now();
      const durationMs = state.duration * 60 * 1000; // convert minutes → ms
      state.startTime = now;
      state.endTime = now + durationMs;
      state.isRunning = true;
      if (!state.defaultDuration) {
        state.defaultDuration = state.duration;
      }
    },

    pauseTimer(state) {
      if (state.isRunning && state.endTime) {
        const remainingMS = state.endTime - Date.now();
        state.duration = remainingMS / (60 * 1000); // convert ms → minutes
        state.isRunning = false;
        state.startTime = null;
        state.endTime = null;
      }
    },

    resumeSession(state) {
      if (!state.isRunning && state.duration > 0) {
        const now = Date.now();
        const durationMs = state.duration * 60 * 1000;
        state.startTime = now;
        state.endTime = now + durationMs;
        state.isRunning = true;
      }
    },

    stopTimer(state) {
      state.isRunning = false;
      state.startTime = null;
      state.endTime = null;
      state.duration = state.defaultDuration;
    },
    resetTimer: (state) => {
      state.isRunning = false;
      state.endTime = null;
      state.duration = 0;
    },
    restartTimer(state) {
      state.startTime = null;
      state.isRunning = false;
      state.endTime = null;
      state.duration = state.defaultDuration;
    },
  },
});

export const {
  setMode,
  setTitle,
  changeState,
  setDefaultDuration,
  startTimer,
  pauseTimer,
  resumeSession,
  restartTimer,
  stopTimer,
  resetTimer
} = timerslice.actions;

export default timerslice.reducer;
