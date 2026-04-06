"use client"
import { useState } from "react";
import { iUserSignupdata } from "../../types";
import { validateEmail,validatePassword,validateUsername } from "../../utils";
import { MailIcon,Eye,EyeOff,Lock, ArrowRight,UserCircle ,AlertTriangle} from "lucide-react";
import Link from "next/link";
const API_URL = '';

const Signup: React.FC = () => {
  const [form, setForm] = useState<iUserSignupdata>({
    name: "",
    email: "",
    password: "",
  });
  
  const [clienterror, setClienterror] = useState<boolean>(false);
  const [serverError, setServerError] = useState<boolean>(false); //server side error
  const [errorMsg,setErrormsg] = useState<string>('Something went wrong!');
  const [invalidField, setInvalidField] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [spinner,setSpinner] = useState<boolean>(false);
  const [submit,setSubmit] = useState<boolean>(false);

  function togglePassword() {
    setShowPassword((prev) => !prev);
  }

  function throwInputError(fieldName: string) {
     setClienterror(true);
     setInvalidField(fieldName);
  }

  function handleForm(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev:any) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setClienterror(false);
    setServerError(false);
  }

  async function handleSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validateUsername(form.name)) return throwInputError("name");
    if (!validateEmail(form.email)) return throwInputError("email");
    if (!validatePassword(form.password)) return throwInputError("password");
    setSubmit(true);
    setSpinner(true);
    //todo add api call logic
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center '>
        {
                serverError===true&&(
                   <div className="w-[320px] p-4 md:w-[450px] h-14 flex items-center gap-2 p-1 bg-destructive text-foreground rounded-sm text-sm"> <AlertTriangle/>{errorMsg}</div>  
                )
            }
      <div className='w-[350px] p-4 md:w-[450px]  md:p-6   flex flex-col gap-8 items-center justify-around'>
          <div className="flex flex-col items-center justify-center ">
          <h1 className='text-2xl text-foreground font-bold '>
            Welcome 
          </h1>
            <h2 className=" text-muted-foreground">
    Create a new account to get started
  </h2>
            </div>
        <form
          className=' w-full flex flex-col gap-4'
          onSubmit={(e) => {
            handleSignup(e);
          }}>
  <div className='flex flex-col gap-1'>
            <label className='text-foreground' htmlFor='name'>
              Name
            </label>
            <div
              className={`flex items-center h-12 border  rounded-lg px-3 focus-within:border-primary 
      ${clienterror && invalidField === "name" ? "border-destructive" : "border-muted-foreground"}`}>
              <UserCircle color='grey' />
              <input
                id='name'
                required
                autoComplete='userame'
                minLength={6}
                maxLength={12}
                placeholder='Enter your username'
                onChange={handleForm}
                className='ml-2 w-full h-full outline-none  border-none rounded-lg'
              />
            </div>
            {clienterror && invalidField === "name" && (
              <span className='text-destructive text-[14px]'>
               Username must start with a letter and contain no spaces.
              </span>
            )}
          </div>  
   <div className='flex flex-col gap-1'>
            <label className='text-foreground' htmlFor='email'>
             Email
            </label>
            <div
              className={`flex items-center h-12 border  rounded-lg px-3 focus-within:border-primary 
      ${clienterror && invalidField === "email" ? "border-destructive" : "border-muted-foreground"}`}>
              <MailIcon color='grey' />
              <input
                type='email'
                id='email'
                required
                autoComplete='email'
                placeholder='Enter your email'
                onChange={handleForm}
                className='ml-2 w-full h-full outline-none  border-none rounded-lg'
              />
            </div>
            {clienterror && invalidField === "email" && (
              <span className='text-destructive text-[14px]'>
                 Please enter a valid email address.
              </span>
            )}
          </div>  <div className='flex flex-col gap-1'>
            <label className='text-foreground' htmlFor='password'>
              Password
            </label>
            <div
              className={`flex items-center h-12 border rounded-lg px-3 focus-within:border-primary 
      ${clienterror && invalidField === "password" ? "border-destructive" : "border-muted-foreground"}`}>
              <Lock color='grey' />
              <input
                type={showPassword ? "text" : "password"}
                id='password'
                required
                autoComplete='current-password'
                minLength={8}
                maxLength={12}
                placeholder='Enter your Password'
                onChange={handleForm}
                className='ml-2 w-full h-full outline-none  border-none rounded-lg'
              />
              <button
                type='button'
                onClick={togglePassword}
                className=' text-muted-foreground hover:text-white'>
                {showPassword ? (
                  <EyeOff size={18} className='cursor-pointer' />
                ) : (
                  <Eye size={18} className='cursor-pointer' />
                )}
              </button>
            </div>
            {clienterror && invalidField === "password" && (
              <span className='text-destructive text-[14px]'>
                Password must be at least 8 characters, include uppercase,
                lowercase, number, and special character.
              </span>
            )}
          </div>
          <button
            type='submit'
            className='mt-4 h-12 bg-primary  rounded-lg flex items-center justify-center gap-1 hover:bg-primary/90 text-primary-foreground  transition cursor-pointer'>
                    {spinner===false && submit===false &&(
                    <>
                  Signup
                  <ArrowRight size={16}/>
                    </>
                )}
                {spinner===true && submit === true&&(
                    <>
                    <div className=" w-full h-full  flex items-center justify-center">
                      <div className="loader2"></div>
                    </div>
                    </>
                )}
          </button>
          <p className='text-center text-sm'>
            Already have an account?
             <Link href="/auth/login">
    <span
              className='ml-1 text-primary cursor-pointer font-medium'>
              Login
            </span>
             </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup