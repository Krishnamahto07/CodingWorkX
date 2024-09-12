import {useState} from 'react'
import { useFormik } from 'formik';
import { SignupSchema } from '../../utils/LoginSchema';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import google from "../../assests/Google - Original.png"
import { sign } from 'crypto';


const initialValue = {
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:'',
};

function SignupForm() {

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
    <div className='right-section w-full  text-[#101828] flex flex-col items-center justify-center gap-5  '>
                <h1 className='  text-[28px] font-[600px] text-[#101828]  leading-[28px]  
                md:text-start text-center
                md:w-[400px] w-full'>Create an account</h1>

                <div className=' scrollbar
                md:w-[400px] w-full md:h-[428px] h-[100%]
                overflow-y-scroll
                
                flex flex-col  md:justify-start 
                justify-center md:items-start items-center gap-[32px] 
                pb-5 md:mt-0 mt-5 '>
                    
                    <form onSubmit={signupFormData.handleSubmit}
                        className=' flex flex-col gap-[16px]
                        text-[#344054] w-[100%]'>

                        {/* First Name */}

                        <label className=' flex flex-col gap-[5px] text-[#344054] md:w-full 
                        w-[90vw] mx-auto'>
                            <p className='text-[16px] leading-[16px] font-[400px] '>First Name
                            <span className={`${signupFormData.errors.firstName && signupFormData.touched.firstName ? ' font-semibold text-xl text-[#fc0808]' : ' text-[#344054]'}`} >*</span>
                            </p>
                            <input name='firstName' 
                                value={signupFormData.values.firstName} 
                                onChange={signupFormData.handleChange} 
                                onBlur={signupFormData.handleBlur}
                                type='text' placeholder='Enter your First Name' 
                                className={`w-[100%] h-[48px] rounded-[8px]  border-[3px]  px-[16px] py-[12px] 
                                    ${signupFormData.errors.firstName && signupFormData.touched.firstName ? 'border-[#fc0808] outline-[#fc0808]' : 'outline-[#D1E9FF]'}`}                            />
                            {
                                signupFormData.errors.firstName && signupFormData.touched.firstName ? 
                                <p className='error'>{signupFormData.errors.firstName}</p>
                                : null 
                            }
                        </label>
                        {/* Last Name */}
                        <label className='flex flex-col gap-[5px] text-[#344054] md:w-full w-[90vw] mx-auto'>
                            <p className='text-[16px] leading-[16px] font-[400px] '>LastName
                                <span className={`${signupFormData.errors.lastName && signupFormData.touched.lastName ? ' font-semibold text-xl text-[#fc0808]' : ' text-[#344054]'}`} >*</span>
                            </p>
                            <input name='lastName' value={signupFormData.values.lastName} 
                                onChange={signupFormData.handleChange} 
                                onBlur={signupFormData.handleBlur}
                                type='text' placeholder='Enter your Last Name' 
                                className={`w-[100%] h-[48px] rounded-[8px]  border-[3px] px-[16px] py-[12px] 
                                    ${signupFormData.errors.lastName && signupFormData.touched.lastName ? 'border-[#fc0808] outline-[#fc0808]' : 'outline-[#D1E9FF]'}`}   
                            />
                            {
                                signupFormData.errors.lastName && signupFormData.touched.lastName ? 
                                <p className='error'>{signupFormData.errors.lastName}</p>
                                : null 
                            }
                        </label>

                        {/* Email */}
                        <label className='flex flex-col gap-[5px] text-[#344054] md:w-full w-[90vw] mx-auto'>
                            <p className='text-[16px] leading-[16px] font-[400px] '>Email
                                <span className={`${signupFormData.errors.email && signupFormData.touched.email ? ' font-semibold text-xl text-[#fc0808]' : ' text-[#344054]'}`} >*</span>

                            </p>
                            <input name='email' value={signupFormData.values.email} 
                                onChange={signupFormData.handleChange} 
                                onBlur={signupFormData.handleBlur}
                                type='email' placeholder='Enter your email' 
                                className={`w-[100%] h-[48px] rounded-[8px]  border-[3px]  px-[16px] py-[12px] 
                                    ${signupFormData.errors.email && signupFormData.touched.email ? 'border-[#fc0808] outline-[#fc0808]' : 'outline-[#D1E9FF]'}`}   
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
                                <p className='text-[16px] leading-[16px] font-[400px] '>Password
                                    <span className={`${signupFormData.errors.password && signupFormData.touched.password ? ' font-semibold text-xl text-[#fc0808]' : ' text-[#344054]'}`} >*</span>

                                </p>
                                <span  onClick={()=>setShow(!show)}
                                    className={`absolute right-[20px] text-[24px]  cursor-pointer text-[#98A2B3] 
                                        ${signupFormData.errors.password && signupFormData.touched.password ? ' top-[42px]' : ' top-[33px] '}`}>
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
                                className={`w-[100%] h-[48px] rounded-[8px]  border-[3px]  px-[16px] py-[12px] 
                                    ${signupFormData.errors.password && signupFormData.touched.password ? 'border-[#fc0808] outline-[#fc0808]' : 'outline-[#D1E9FF]'}`}   
                            />
                            {
                                signupFormData.errors.password && signupFormData.touched.password ? 
                                <p className='error'>{signupFormData.errors.password}</p>
                                : null 
                            }

                        </label>

                        {/* Confirm Password */}
                        <label className='flex flex-col gap-[5px] text-[#344054] md:w-full w-[90vw] mx-auto'>
                            <div className='relative'>
                                <p className='text-[16px] leading-[16px] font-[400px] '>Confirm Password
                                    <span className={`${signupFormData.errors.confirmPassword && signupFormData.touched.confirmPassword ? ' font-semibold text-xl text-[#fc0808]' : ' text-[#344054]'}`} >*</span>
                                </p>
                                <span  onClick={()=>setConfirmPasswordShow(!confirmPasswordShow)}
                                    className={`absolute right-[20px] text-[24px]  cursor-pointer text-[#98A2B3] 
                                        ${signupFormData.errors.confirmPassword && signupFormData.touched.confirmPassword ? ' top-[42px]' : ' top-[33px] '}`} >
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
                                placeholder='Enter your Confirm Password' 
                                className={`w-[100%] h-[48px] rounded-[8px]  border-[3px]  px-[16px] py-[12px] 
                                    ${signupFormData.errors.confirmPassword && signupFormData.touched.confirmPassword ? 'border-[#fc0808] outline-[#fc0808]' : 'outline-[#D1E9FF]'}`}   
                            />
                            {
                                signupFormData.errors.confirmPassword && signupFormData.touched.confirmPassword ? 
                                <p className='error'>{signupFormData.errors.confirmPassword}</p>
                                : null 
                            }

                        </label>

                        <button type='submit' className='md:w-full w-[90vw] mx-auto h-[48px] text-[16px] leading-[16px] rounded-md p-[16px] bg-[#1570EF] text-[#FCFCFD] py-1 font-[600px] mt-[16px]'>Create account</button>

                        <button className='md:w-full w-[90vw] mx-auto h-[48px] text-[16px] leading-[16px] rounded-md p-[16px] bg-[#D1E9FF] text-[#1570EF] py-1 font-[600px] flex items-center justify-center gap-4 mt-[16px]' >
                            <span><img src={google}  className='h-[20px] w-[20px] inline'/></span> 
                            <p>Continue with Google</p>
                        </button>
                    </form>
                    <p className='  mx-auto text-[16px] leading-[16px]  text-[#98A2B3]'>Already Have An Account ? <span className='text-[#1570EF] font-semibold '><Link to={'/'}>Log in</Link></span></p>
                </div>

            </div>
  )
}

export default SignupForm