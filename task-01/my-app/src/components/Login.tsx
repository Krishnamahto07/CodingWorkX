import React, { useMemo, useState } from 'react'
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useFormik, validateYupSchema } from 'formik';
import { LoginSchema } from '../utils/LoginSchema';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const initialValue = {
    email : '',
    password : ''
};

function Login() {
    const [show , setShow] = useState<boolean>(false);
    // All about Formik 

    const loginFormData = useFormik(
            {
                initialValues:initialValue,
                validationSchema : LoginSchema,
    
                onSubmit:(values,action)=>{
                    console.log(values);
                    toast.success("Login successfull !!!");
                    action.resetForm();
                }
            }
        );

    
    const login = useMemo(()=>{
        
        console.log(loginFormData);
    },[loginFormData])

    // const loginFormData = () => {
    //     const { values , errors , touched , handleChange, handleSubmit} = useFormik( 
    //         {
    //             initialValues : initialValue,
    //             validationSchema : LoginSchema,
                
    //             onSubmit : (values, action) =>{
    //                 console.log(values);
    //                 action.resetForm();
    //             }
    //         }
    //     )
    // }


  return (
    <div className='login-container h-[100vh] w-[100vw]  flex flex-col justify-center items-center'>
        <span className='sm:font-[700%] absolute sm:top-[64px] top-[15px] sm:left-[80px] left-[15px] tracking-[10%] text-white text-[28px] italic  '>BALA <span className='text-sky-200'> . </span></span>
        
        <div className='sm:w-[540px] sm:h-[456px] w-[100vw]   sm:rounded-[20px] rounded-none
             py-[49px] px-[72px] bg-[#FFFFFF] flex flex-col justify-center items-center gap-[32px]'>
            <h1 className='text-center text-[#101828] text-[28px] leading-[28px] font-semibold  '>Login to your account</h1>

            <form onSubmit={loginFormData.handleSubmit}  
                className=' flex flex-col gap-[16px] md:w-full w-[100vw] md:justify-start justify-center md:items-start items-center'>
                <label className=' text-[#344054] md:w-full w-[90vw] mx-auto'>
                    <p className='text-[16px] leading-[16px] font-[400px]'>Email</p>
                    <input 
                        name='email'
                        value={loginFormData.values.email}
                        onChange={loginFormData.handleChange}
                        onBlur={loginFormData.handleBlur}
                        type='email' placeholder='Enter your email' 
                        autoSave='off'
                        className='md:w-[396px] w-[100%] h-[48px] border-2 outline-[#D1E9FF] rounded-md px-5' />

                    {
                        loginFormData.errors.email && loginFormData.touched.email ? 
                        <p className='error'>{loginFormData.errors.email} </p>
                        :null
                    }
                </label>

                <label className='text-[#344054]  md:w-full w-[90vw] mx-auto'>
                    <div className='relative'>
                        <div className='flex  flex-row justify-between'>
                            <p>Password</p>
                            <p className='text-[#1570EF] cursor-pointer font-semibold'>Forgot Password ?</p>
                        </div>
                        <span  onClick={()=>setShow(!show)}
                            className='absolute right-[20px] text-[24px] top-[35px] cursor-pointer text-[#98A2B3]' >
                            {
                                show ? <IoEyeOffOutline  /> : <IoEyeOutline /> 
                            }
                        </span>
                    </div>
                    <input type={show === true ? "text" : "password" }
                        name='password'
                        value={loginFormData.values.password}
                        onChange={loginFormData.handleChange}
                        onBlur={loginFormData.handleBlur}
                        placeholder='Enter your password' 
                        autoSave='off'
                        className='md:w-[396px] w-[100%] h-[48px] border-2 outline-[#D1E9FF] rounded-md px-5'
                    />
                    {
                        loginFormData.errors.password && loginFormData.touched.password ? 
                        <p className='error'>{loginFormData.errors.password} </p>
                        :null
                    }

                </label>

                <button type='submit'
                    className='mt-[16px] md:w-full w-[90vw] mx-auto h-[48px] rounded-md p-[16px] bg-[#1570EF] text-white py-1 font-semibold'
                    >Login now</button>
            </form>

            <p className='text-[#98A2B3] text-center'>Don't Have An Account ? <span className='text-[#1570EF] font-semibold '><Link to={'/signup'}>Sign Up</Link></span></p>
        </div>
    </div>
  )
}

export default Login