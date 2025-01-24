import React, { Fragment } from 'react'
import { useState } from 'react';
const Login = ({loginHandler}) => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        loginHandler(email, password);
        setEmail("");
        setPassword("");
        
    }
  return (
    <Fragment>
    <div>
        <h2>Login</h2>
    </div>
    <div className='flex h-screen w-screen items-center justify-center'>
    <div className='border-2 rounded-xl border-emerald-600  p-20'>
        <form 
        onSubmit={(e)=>{
            submitHandler(e)
        }}
        className='flex flex-col items-center justify-center gap-5' action="">
            <input
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
             required className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400' type="email" placeholder='Email'/>
            <input
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
             required className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400' type="password" placeholder='Password'/>
            
            <button className='mt-7 text-white border-none outline-none'>Login</button>
        </form>
    </div>
    </div>
    </Fragment>
  )
}

export default Login