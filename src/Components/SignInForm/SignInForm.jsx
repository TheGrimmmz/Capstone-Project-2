import { useState } from "react";
import FormInput from "../FormInput/FormInput.jsx";
import {signInUser, signInWithGooglePopup} from '../../Utils/Firebase/Firebase'
import Button, {TYPES} from "../Button/Button.jsx";
import {SignInContainer, Title, ButtonContainer} from './SignInForm.js'

const INITIAL_STATE = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(INITIAL_STATE);
    const { email, password } = formFields;

    const reset = () => {
      setFormFields(INITIAL_STATE);
    };

    const googleSignIn = async () => {
      await signInWithGooglePopup();
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        await signInUser(email, password);
        reset();
      } catch (e) {
        if(e.code === 'auth/user-not-found'){
          alert('User not found, please create user!')
        }
      }
    };

    const handleChange = (event) => {
      const { name, value } = event.target;

      setFormFields({ ...formFields, [name]: value });
    };

    return (
        <SignInContainer>
            <Title>HAVE AN ACCOUNT - SIGN IN</Title>
            <form onSubmit={handleSubmit}>
                <FormInput
                label="Email"
                inputOptions = {{
                type: 'text',
                name: 'email',
                value: email,
                onChange: handleChange,
                required: true
                }}
                />
                <FormInput
                label="Password"
                inputOptions = {{
                type: 'password',
                name: 'password',
                value: password,
                onChange: handleChange,
                required: true
                }}
                />
                <ButtonContainer>
                    <Button type="submit">SIGN IN</Button>
                    <Button type='button' buttonType={TYPES.google} onClick={googleSignIn}>Sign In with Google</Button>
                </ButtonContainer>
            </form>
        </SignInContainer>
    )
}

export default SignInForm;
