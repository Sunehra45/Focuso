interface iUserSignupdata{
  name:string,
  email:string,
  password:string
}

interface iUserLogindata{
email:string,
password:string
}

interface sessionSetting{
  focusDuration : number,
  shortBreakduration :number,
  longBreakduration: number,
  sessionCount:number
}

export type {
    iUserLogindata,
    iUserSignupdata,
    sessionSetting
}