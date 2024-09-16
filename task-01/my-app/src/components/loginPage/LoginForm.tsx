import {useState} from 'react'
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { LoginSchema } from '../../utils/LoginSchema';
import {  toast } from 'react-toastify';

const initialValue = {  // Initial value for useFormik Hook
    email : '',
    password : ''
};

function LoginForm() {

    const [show , setShow] = useState<boolean>(false); // Flag for Eye button on Password field
    const loginFormData = useFormik(  // Login form Data and all it's structure using useFormik hook 
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
  return (
    <div className='md:w-[540px] md:h-[456px] w-[100vw]   sm:rounded-[20px] rounded-none py-[49px] px-[72px] bg-[#FFFFFF] flex flex-col justify-center items-center gap-[32px]'>
            {/* Heading Text */}
            <h1 className='text-center text-[#101828] text-[28px] leading-[28px] font-semibold  '>
                Login to your account
            </h1>

            {/* Form Field to input all the data */}
            <form onSubmit={loginFormData.handleSubmit}  className=' flex flex-col gap-[16px] md:w-full w-[100vw] md:justify-start justify-center md:items-start items-center'>
                {/* Email input field */}
                <label className=' text-[#344054] md:w-full w-[90vw] mx-auto'>
                    <p className='text-[16px] leading-[16px] font-[400px]'>Email </p>
                    <input 
                        name='email'
                        value={loginFormData.values.email}
                        onChange={loginFormData.handleChange}
                        onBlur={loginFormData.handleBlur}
                        type='email' placeholder='Enter your email' 
                        autoSave='off'
                        className={`md:w-[396px] w-[100%] h-[48px] border-2  rounded-md px-5 
                        ${loginFormData.errors.email && loginFormData.touched.email ? 'border-[#fc0808] outline-[#fc0808]' : 'outline-[#D1E9FF]'}`} 
                    />
                    {
                        loginFormData.errors.email && loginFormData.touched.email ? 
                        <p className='error'>{loginFormData.errors.email} </p>
                        :null
                    }
                </label>
                
                {/* Password input field  */}
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
                        className={`md:w-[396px] w-[100%] h-[48px] border-2  rounded-md px-5 
                        ${ loginFormData.errors.password && loginFormData.touched.password ? 'outline-red-500 border-red-500' : 'outline-[#D1E9FF]'} `}
                    />
                    {
                        loginFormData.errors.password && loginFormData.touched.password ? 
                        <p className='error'>{loginFormData.errors.password} </p>
                        :null
                    }
                </label>

                {/* Login button for submit form */}
                <button type='submit'className='mt-[16px] md:w-full w-[90vw] mx-auto h-[48px] rounded-md p-[16px] bg-[#1570EF] text-white py-1 font-semibold'>
                    Login now
                </button>
            </form>

            <p className='text-[#98A2B3] text-center'> {/* End text of form */}
                Don't Have An Account ? 
                <span className='text-[#1570EF] font-semibold '>
                    <Link to={'/signup'}>Sign Up</Link> {/* Navigating text to Signup Page */}
                </span>
            </p>
        </div>
  )
}
export default LoginForm