import * as Yup from "yup";
import YupPassword from 'yup-password'
YupPassword(Yup);

// const emailRules = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const emailRules = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;


export const LoginSchema = Yup.object(
    {
        email:Yup.string().email().matches(emailRules,{message : "Please enter a valid email"}).required("Please Enter an email"),
        password : Yup.string().min(6).required("Please Enter password ")
    }
);


export const SignupSchema = Yup.object(
    {
        firstName:Yup.string().min(2).max(20).required("Please enter first name"),
        lastName:Yup.string().min(2).max(15).required("Please enter your last name"),
        email:Yup.string().email().matches(emailRules,{message : "Please enter a valid email"}).required("Please Enter an email"),
        password : Yup.string().min(6)
            .minLowercase(1,'password must have at least 1 lower case letter')
            .minUppercase(1,'password must have at least 1 uppper case letter')
            .minSymbols(1,'password must have at least 1 special symbol')
            .required("Please Enter password "),
        confirmPassword:Yup?.string().oneOf([Yup.ref('password')], 'Passwords must match').required("Please Enter confim password")
    }
);






// const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;


// const emailRules = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;
// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// password : Yup.string().min(6).matches(passwordRules,{message : "Please create strong password"}).required("Please Enter password "),
