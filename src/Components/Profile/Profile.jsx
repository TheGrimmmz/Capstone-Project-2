import { useState } from "react";
import { selectCurrentUser } from "../../Store/User/UserSelector";
import { useSelector } from "react-redux";
import {FormContainer} from './Profile.js'

import FormInput from "../FormInput/FormInput.jsx";
import Button from '../Button/Button.jsx'

const INITIAL_STATE = {
    email: '',
    changePassword: '',
    confirmPassword: ''
}

const Profile = () => {
    const [formFields, setFormFields] = useState(INITIAL_STATE)
    const {email, changePassword, confirmPassword} = formFields
    const currentUser = useSelector(selectCurrentUser)
    console.log(currentUser)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormFields({...formFields, [name]: value});
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(changePassword !== confirmPassword){
            alert('Passwords do not match!');
            return;
        }
        try {

            reset()
        } catch (e) {
            if(e.code === 'auth/email-already-in-use'){
                alert("Cannot update user, email already in use")
            }
            console.log('Error', e.message)
        }
    }

    const reset = () => {
        setFormFields(INITIAL_STATE)
    }

    return (
        <div className="Profile-container">
            <h1>hello</h1>
            <FormContainer onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    inputOptions={{
                        type: 'text',
                        name: 'email',
                        value: email,
                        onChange: handleChange
                    }}
                />
                <FormInput
                    label='Change Password'
                    inputOptions={{
                        type: 'password',
                        name: 'changePassword',
                        value: changePassword,
                        onChange: handleChange
                    }}
                />
                <FormInput
                    label="Confirm Password"
                    inputOptions = {{
                        type: 'password',
                        name: 'confirmPassword',
                        value: confirmPassword,
                        onChange: handleChange,
                    }}
                />
                <Button type='submit'>Submit</Button>
            </FormContainer>
        </div>
    )
}

export default Profile;
