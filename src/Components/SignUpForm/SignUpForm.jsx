import { useState } from "react";
import { createAuthUserEmailPassword, createUserFromAuth } from "../../Utils/Firebase/Firebase";
import FormInput from "../FormInput/FormInput.jsx";
import Button from "../Button/Button.jsx";
import { useNavigate } from "react-router-dom"
import {SignupContainer, Title} from './SignUpForm.js'

const INITIAL_STATE = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(INITIAL_STATE)
    const {displayName, email, password, confirmPassword} = formFields
    const navigate = useNavigate()

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormFields({...formFields, [name]: value});
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        if(password !== confirmPassword){
            alert('Passwords do not match!');
            return;
        }

        try {
            //takes user from signup form with email and password
            const {user} = await createAuthUserEmailPassword(email, password)
            //creates user for database to store
            await createUserFromAuth(user, {displayName})
            reset()
            navigate('/shop')
        } catch (e) {
            if(e.code === 'auth/email-already-in-use'){
                alert("Cannot create user, email already in use")
            }
            console.log('Error', e)
        }
    }

    const reset = () => {
        setFormFields(INITIAL_STATE)
    }

    return (
        <SignupContainer>
            <Title><b>REGISTER WITH EMAIL AND PASSWORD</b></Title>
            <form onSubmit={handleSubmit}>
                <FormInput
                label="Display Name"
                inputOptions = {{
                type: 'text',
                name: 'displayName',
                value: displayName,
                onChange: handleChange,
                required: true
                }}
                />
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
                <FormInput
                label="Confirm Password"
                inputOptions = {{
                type: 'password',
                name: 'confirmPassword',
                value: confirmPassword,
                onChange: handleChange,
                required: true
                }}
                />
                <Button type="submit">REGISTER</Button>
            </form>
        </SignupContainer>
    )
}

export default SignUpForm;
