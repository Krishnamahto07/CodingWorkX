import LeftSignup from './LeftSignup';
import RightSignup from './RightSignup';


function Signup() {

    

  return (
    <div className='signup-container w-[100vw]  '>

        <div className=' 
            w-[100vw] h-[100vh] grid  md:grid-cols-2 grid-rows-2 md:mb-0 mb-5' >

            <LeftSignup />

            <RightSignup />
            
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