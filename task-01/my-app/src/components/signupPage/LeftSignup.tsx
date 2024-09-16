import React from "react";

function LeftSignup() {
    return (
        // Main container of left box in signup page
        <div className=' left-section w-[100%] h-[11vh] md:h-auto md:pl-[80px] pl-[15px] pr-[72px] md:pt-[64px] pt-[15px] pb-[80px] '>
            <div className='w-full h-full flex flex-col justify-between '>
                {/* Logo of top left */}
                <span className='tracking-[10%] w-[82px] h-[28px] text-[#FFFFFF] text-[28px] italic  font-[700px] leading-[28px] flex gap-1'>
                    BALA
                    <span className='text-sky-200'> . </span>
                </span>

                {/* Bottom large text  */}
                <div className='  max-w-[568px] md:block hidden text-[#FFFFFF] font-[300px] italic leading-[67px] text-[56px] md:mt-[10vh] '>
                    <p>Welcome.</p>
                    <p>Start your journey now with our management system</p>
                </div>
            </div>
        </div>
    )
}

export default LeftSignup;