interface iUserSignupdata {
  name: string;
  email: string;
  password: string;
}

interface iUserLogindata {
  email: string;
  password: string;
}

interface userInfo {
  userName: string | null;
  userEmail: string | null;
  joinedDate: string | null;
  dailySessionCount: number | null;
  totalfocusTime: number|null;
  totalPomodoros:number|null;
  totalHours:number|null;
  averagePerday: number|null;
}

interface sessionSetting {
  focusDuration: number;
  shortBreakduration: number;
  longBreakduration: number;
  sessionCount: number;
}
interface timerState {
  title: string | null;
  timerMode: TimerMode;
  isRunning: boolean;
  startTime: number | null;
  endTime: number | null;
  duration: number; // always stored in MINUTES
  defaultDuration: number;
}

interface sessionState {
  completedAt: number;
  duration: number;
  mode: string;
  title?: string;
}

interface settingsSlice {
  focusTime: number;
  shortBreak: number;
  longBreak: number;
  sessionCount: number;
}

type TimerMode = "Focus" | "Short Break" | "Long Break";

interface anaylticsData {
  date: string;
  focusTime: number;
  breakTime: number;
}

interface analytics {
  analyticsRange: number  ;
  bestWeekday:string  | null;
  averageSessionPerweek:number  | null;
  totalWeekFocus: number  | null;
} 

export type {
  iUserLogindata,
  iUserSignupdata,
  sessionSetting,
  settingsSlice,
  sessionState,
  userInfo,
  TimerMode,
  analytics,
  anaylticsData,
  timerState
};
