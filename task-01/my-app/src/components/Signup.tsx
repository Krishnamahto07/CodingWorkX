import { Link } from 'react-router-dom'
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { useState } from 'react';
import google from "../assests/Google - Original.png"
import './Signup.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SignupSchema } from '../utils/LoginSchema';

import { useFormik } from 'formik';

const initialValue = {
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:'',
};
function Signup() {

    const signupFormData = useFormik(
        {
            initialValues:initialValue,
            validationSchema:SignupSchema,

            onSubmit:(values,action)=>{
                console.log(values);
                toast.success("SignUp successful !!!!");
                action.resetForm();
            }
        }
    )

    const [show ,setShow] = useState<boolean>(false);
    const [confirmPasswordShow , setConfirmPasswordShow] = useState<boolean>(false);

  return (
    <div className='signup-container w-[100vw] h-[100vh] flex sm:flex-row flex-col mb-10  '>

        <div className='left-section w-[100vw]'>
                <span className='sm:font-[700%] absolute sm:top-[64px] top-[15px] sm:left-[80px] left-[15px] tracking-[10%] text-white text-[28px] italic  '>BALA <span className='text-sky-200'> . </span></span>

                <div className=' max-w-[548px] h-[335px] text-[#98A2B3] font-[200px] absolute bottom-[80px]  left-[80px]  italic text-[56px] '>
                    <p>Welcome.</p>
                    <p>Start your journey now with our management system</p>
                </div>
        </div>

        
        <div className='right-section w-full  text-[#101828] flex flex-col items-center justify-center  '>
      
            <div className='md:w-[400px] w-full md:h-[428px] 
            h-[100%]  px-auto flex flex-col  md:justify-start 
            justify-center md:items-start items-center gap-[32px] 
            md:mt-0 mt-8  '>
                
                 <h1 className=' text-[28px] font-[600px] text-[#101828]  leading-[28px]'>Create an account</h1>
                 <form onSubmit={signupFormData.handleSubmit}
                    className='flex flex-col gap-[16px] text-[#344054] w-full'>

                    {/* First Name */}

                    {/* <label className='flex flex-col gap-[5px] text-[#344054] md:w-full w-[90vw] mx-auto'>
                        <p className='text-[16px] leading-[16px] font-[400px] '>First Name</p>
                        <input name='firstName' 
                            value={signupFormData.values.firstName} 
                            onChange={signupFormData.handleChange} 
                            onBlur={signupFormData.handleBlur}
                            type='text' placeholder='Enter your First Name' 
                            className='md:w-[396px] w-[100%] h-[48px] rounded-[8px]  border-[3px] outline-[#D1E9FF] px-[16px] py-[12px]'
                         />
                         {
                            signupFormData.errors.firstName && signupFormData.touched.firstName ? 
                            <p className='error'>{signupFormData.errors.firstName}</p>
                            : null 
                         }
                    </label> */}
                    {/* Last Name */}
                    {/* <label className='flex flex-col gap-[5px] text-[#344054] md:w-full w-[90vw] mx-auto'>
                        <p className='text-[16px] leading-[16px] font-[400px] '>LastName</p>
                        <input name='lastName' value={signupFormData.values.lastName} 
                            onChange={signupFormData.handleChange} 
                            onBlur={signupFormData.handleBlur}
                            type='text' placeholder='Enter your lastName' 
                            className='md:w-[396px] w-[100%] h-[48px] rounded-[8px]  border-[3px] outline-[#D1E9FF] px-[16px] py-[12px]'
                         />
                         {
                            signupFormData.errors.lastName && signupFormData.touched.lastName ? 
                            <p className='error'>{signupFormData.errors.lastName}</p>
                            : null 
                         }
                    </label> */}

                    {/* Email */}
                    <label className='flex flex-col gap-[5px] text-[#344054] md:w-full w-[90vw] mx-auto'>
                        <p className='text-[16px] leading-[16px] font-[400px] '>Email</p>
                        <input name='email' value={signupFormData.values.email} 
                            onChange={signupFormData.handleChange} 
                            onBlur={signupFormData.handleBlur}
                            type='email' placeholder='Enter your email' 
                            className='md:w-[396px] w-[100%] h-[48px] rounded-[8px]  border-[3px] outline-[#D1E9FF] px-[16px] py-[12px]'
                         />
                         {
                            signupFormData.errors.email && signupFormData.touched.email ? 
                            <p className='error'>{signupFormData.errors.email}</p>
                            : null 
                         }
                    </label>

                    {/* password */}

                    <label className='flex flex-col gap-[5px] text-[#344054] md:w-full w-[90vw] mx-auto'>
                        <div className='relative'>
                            <p className='text-[16px] leading-[16px] font-[400px] '>Password</p>
                            <span  onClick={()=>setShow(!show)}
                                className='absolute right-[20px] text-[24px] top-[33px] cursor-pointer text-[#98A2B3]' >
                                {
                                    show ? <IoEyeOffOutline  /> : <IoEyeOutline /> 
                                }
                            </span>
                        </div>

                        <input type={show === true ? "string" : "password" }
                            name='password'
                            value={signupFormData.values.password}
                            onChange={signupFormData.handleChange}
                            onBlur={signupFormData.handleBlur}
                            placeholder='Enter your password' 
                            className='md:w-[396px] w-[100%] h-[48px] rounded-[8px]  border-[3px] outline-[#D1E9FF] px-[16px] py-[12px]'
                        />
                        {
                            signupFormData.errors.password && signupFormData.touched.password ? 
                            <p className='error'>{signupFormData.errors.password}</p>
                            : null 
                        }

                    </label>

                    {/* Confirm Password */}
                    {/* <label className='flex flex-col gap-[5px] text-[#344054] md:w-full w-[90vw] mx-auto'>
                        <div className='relative'>
                            <p className='text-[16px] leading-[16px] font-[400px] '>Confirm Password</p>
                            <span  onClick={()=>setConfirmPasswordShow(!confirmPasswordShow)}
                                className='absolute right-[20px] text-[24px] top-[33px] cursor-pointer text-[#98A2B3]' >
                                {
                                    confirmPasswordShow ? <IoEyeOffOutline  /> : <IoEyeOutline /> 
                                }
                            </span>
                        </div>

                        <input type={confirmPasswordShow === true ? "string" : "password" }
                            name='confirmPassword'
                            value={signupFormData.values.confirmPassword}
                            onChange={signupFormData.handleChange}
                            onBlur={signupFormData.handleBlur}
                            placeholder='Enter your confirmPassword' 
                            className='md:w-[396px] w-[100%] h-[48px] rounded-[8px]  border-[3px] outline-[#D1E9FF] px-[16px] py-[12px]'
                        />
                        {
                            signupFormData.errors.confirmPassword && signupFormData.touched.confirmPassword ? 
                            <p className='error'>{signupFormData.errors.confirmPassword}</p>
                            : null 
                        }

                    </label> */}

                    <button type='submit' className='md:w-full w-[90vw] mx-auto h-[48px] text-[16px] leading-[16px] rounded-md p-[16px] bg-[#1570EF] text-[#FCFCFD] py-1 font-[600px] mt-[16px]'>Create account</button>

                    <button className='md:w-full w-[90vw] mx-auto h-[48px] text-[16px] leading-[16px] rounded-md p-[16px] bg-[#D1E9FF] text-[#1570EF] py-1 font-[600px] flex items-center justify-center gap-4 mt-[16px]' >
                        <span><img src={google}  className='h-[20px] w-[20px] inline'/></span> 
                        <p>Continue with Google</p>
                    </button>
                </form>
                <p className='  mx-auto text-[16px] leading-[16px]  text-[#98A2B3]'>Already Have An Account ? <span className='text-[#1570EF] font-semibold '><Link to={'/'}>Log in</Link></span></p>
            </div>

        </div>


    </div>
  )
}

export default Signup












// <div className='singup-container w-full h-full flex flex-row '>
    //     {/* Left Section  */}
    //     <div className='left-section bg-red'>
    //         <span className='font-semibold absolute top-[50px] left-[50px]  text-2xl '><i>BALA <span className='text-sky-200'> . </span></i></span>
    //         <div className='text-[#98A2B3] font-[200px] w-[568px] h-[335px] absolute top-[485px] left-[80px] italic text-[56px]'>
    //             <p>Welcome.</p>
    //             <p>Start your journey now with our management system</p>
    //         </div>
    //     </div>

    //     {/* Right Section */}
    //     <div className='right-section w-1/2 md:w-full  text-black flex flex-col items-center justify-center'>
            
    //         <div className='w-[400px] h-[428px] top-[236px] absolute px-auto flex flex-col  justify-start items-start gap-[32px]'>
    //             <h1 className=' text-[28px] font-[600px] text-[#101828]  leading-[28px]'>Create an account</h1>

    //             <form className='flex flex-col gap-[16px] text-[#344054]'>
    //                 <label className='flex flex-col gap-[5px]'>
    //                     <p className='text-[16px] leading-[16px] font-[400px] '>Email</p>
    //                     <input type='email' placeholder='Enter your email' 
    //                     className='w-[400px] h-[48px] rounded-[8px]  border-[3px] outline-[#D1E9FF] px-[16px] py-[12px]' />
    //                 </label>

    //                 <label className='flex flex-col gap-[5px]'>
    //                     <div className='relative'>
    //                         <p className='text-[16px] leading-[16px] font-[400px] '>Password</p>
    //                         <span  onClick={()=>setShow(!show)}
    //                             className='absolute right-[20px] text-[24px] top-[32px] cursor-pointer text-[#98A2B3]' >
    //                             {
    //                                 show ? <IoEyeOffOutline  /> : <IoEyeOutline /> 
    //                             }
    //                         </span>
    //                     </div>

    //                     <input type={show === true ? "string" : "password" }
                            
    //                         placeholder='Enter your password' 
    //                         className='w-[400px] h-[48px] rounded-[8px]  border-[3px] outline-[#D1E9FF] px-[16px] py-[12px]'
    //                     />

    //                 </label>

    //                 <button type='submit' className='w-[400px] h-[48px] text-[16px] leading-[16px] rounded-md p-[16px] bg-[#1570EF] text-[#FCFCFD] py-1 font-[600px] mt-[16px]'>Create account</button>

    //                 <button className='w-[400px] h-[48px] text-[16px] leading-[16px] rounded-md p-[16px] bg-[#D1E9FF] text-[#1570EF] py-1 font-[600px] flex items-center justify-center gap-4 mt-[16px]' >
    //                     <span><img src={google}  className='h-[20px] w-[20px] inline'/></span> 
    //                     <p>Continue with Google</p>
    //                 </button>
    //             </form>
    //             <p className=' font-[400px] text-[16px] leading-[16px] mx-auto text-[#98A2B3]'>Already Have An Account ? <span className='text-[#1570EF] font-semibold '><Link to={'/login'}>Log in</Link></span></p>
    //         </div>

    //     </div>
    // </div>