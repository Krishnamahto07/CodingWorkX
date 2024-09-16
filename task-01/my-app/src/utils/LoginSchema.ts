import * as Yup from "yup";
import YupPassword from 'yup-password'
YupPassword(Yup);


const emailRules = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i; // Regex code for email validation

export const LoginSchema = Yup.object(  // Login Schema for login data validation
    {
        email: Yup.string().email().matches(emailRules, { message: "Please enter a valid email" }).required("Please Enter an email"),
        password: Yup.string().min(6).required("Please Enter password ")
    }
);


export const SignupSchema = Yup.object( // Signup Schema for singup data validation
    {
        firstName: Yup.string().min(2).max(20).required("Please enter first name"),
        lastName: Yup.string().min(2).max(15).required("Please enter your last name"),
        email: Yup.string().email().matches(emailRules, { message: "Please enter a valid email" }).required("Please Enter an email"),
        password: Yup.string().min(6)
            .minLowercase(1, 'password must have at least 1 lower case letter')
            .minUppercase(1, 'password must have at least 1 uppper case letter')
            .minSymbols(1, 'password must have at least 1 special symbol')
            .required("Please Enter password "),
        confirmPassword: Yup?.string().oneOf([Yup.ref('password')], 'Passwords must match').required("Please Enter confim password")
    }
);

