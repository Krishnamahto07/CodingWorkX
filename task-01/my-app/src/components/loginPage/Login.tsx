import LoginForm from './LoginForm';

function Login() {
  return (
    // Login Page main container
    <div className='login-container h-[100vh] w-[100vw]  flex flex-col justify-center items-center'>
      {/* Top left Logo for Login Page  */}
      <span className='sm:font-[700%] absolute sm:top-[64px] top-[15px] sm:left-[80px] left-[15px] tracking-[10%] text-white text-[28px] italic  '>
        BALA
        <span className='text-sky-200'> . </span>
      </span>
      <LoginForm /> {/* Login Form Componenet */}
    </div>
  )
}

export default Login