import SignUpForm from "../../Components/SignUpForm/SignUpForm.jsx";
import SignInForm from "../../Components/SignInForm/SignInForm.jsx";
import {AuthContainer} from './Auth.js'

const Auth = () => {

    return (
        <AuthContainer>
            <SignInForm/>
            <SignUpForm/>
        </AuthContainer>
    )
}

export default Auth
