import * as Yup from "yup";

export const LoginSchema = Yup.object(
    {
        email:Yup.string().email().required("Please Enter an email"),
        password : Yup.string().min(6).required("Please Enter password ")
    }
);

export const SignupSchema = Yup.object(
    {
        firstName:Yup.string().min(2).max(25).required("Please enter first name"),
        lastName:Yup.string().min(2).max(15).required("Please enter your last name"),
        email:Yup.string().email().required("Please Enter an email"),
        password : Yup.string().min(6).required("Please Enter password "),
        confirmPassword:Yup?.string().oneOf([Yup.ref('password')], 'Passwords must match')
    }
);
// confirmPassword : Yup.string().oneOf([Yup.ref('password'),null],"password must match"),
