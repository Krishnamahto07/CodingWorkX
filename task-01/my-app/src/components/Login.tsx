import React, { useState } from 'react'
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
function Login() {
    const [show , setShow] = useState<boolean>(false);
    const [password , setPassword] = useState<string>('');
  return (
    <div className='login-container '>
        <span className='font-semibold absolute top-[50px] left-[50px] text-white text-2xl '><i>BALA <span className='text-sky-200'> . </span></i></span>
        <div className='w-[540px] h-[456px]  rounded-xl py-[49px] px-[72px] bg-[#FFFFFF] flex flex-col gap-[32px]'>
            <h1 className='text-center text-[#101828] text-[28px] leading-[28px] font-semibold  '>Login to your account</h1>

            <form className='flex flex-col gap-[16px] '>
                <label className='text-[#344054]'>
                    <p className='text-[16px] leading-[16px] font-[400px]'>Email</p>
                    <input type='email' placeholder='Enter your email' 
                    className='w-[396px] h-[48px] border-2 outline-[#D1E9FF] rounded-md px-5' />
                </label>

                <label className='text-[#344054]'>
                    <div className='relative'>
                        <p>Password</p>
                        <span  onClick={()=>setShow(!show)}
                            className='absolute right-[20px] text-[24px] top-[32px] cursor-pointer text-[#98A2B3]' >
                            {
                                show ? <IoEyeOffOutline  /> : <IoEyeOutline /> 
                            }
                        </span>
                    </div>
                    <input type={show === true ? "text" : "password" }
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        placeholder='Enter your password' 
                        className='w-[396px] h-[48px] border-2 outline-[#D1E9FF] rounded-md px-5'
                    />

                </label>

                <button 
                    className='mt-[16px] w-[396px] h-[48px] rounded-md p-[16px] bg-[#1570EF] text-white py-1 font-semibold'
                    >Login now</button>
            </form>
            <p className='text-[#98A2B3] text-center'>Don't Have An Account ? <span className='text-[#1570EF] font-semibold '><Link to={'/signup'}>Sign Up</Link></span></p>
        </div>
    </div>
  )
}

export default Login