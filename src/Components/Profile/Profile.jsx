import { useState } from "react";
import { useSelector } from "react-redux";
import { updateEmail, updatePassword, reauthenticateWithCredential } from "firebase/auth";
import { selectCurrentUser } from "../../Store/User/UserSelector";
// import { updateUser } from "../../Utils/Firebase/Firebase";
import { ProfileContainer, FormContainer } from './Profile.js'

import FormInput from "../FormInput/FormInput.jsx";
import Button from '../Button/Button.jsx'

const INITIAL_STATE = {
    email: '',
    changePassword: '',
    confirmPassword: ''
}

console.log(reauthenticateWithCredential)

const Profile = () => {
    const [formFields, setFormFields] = useState(INITIAL_STATE)
    const {email, changePassword, confirmPassword} = formFields
    const currentUser = useSelector(selectCurrentUser)
    const [isEditing, setIsEditing] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormFields({...formFields, [name]: value});
    }

    console.log(currentUser)
    const handleSubmit = async(e) => {
        e.preventDefault();
        if(changePassword !== confirmPassword){
            alert('Passwords do not match!');
            return;
        }
        try {
            await updateEmail(currentUser, email)
            await updatePassword(currentUser, changePassword)
            reset()
            alert("User updated!")
        } catch (e) {
            if(e.code === 'auth/email-already-in-use'){
                alert("Cannot update user, email already in use")
            }
            console.log('Error', e.message)
        }
    }

    const toggleEdit = () => {
        setIsEditing(true)
    }

    const reset = () => {
        setFormFields(INITIAL_STATE)
    }


    return (
        <ProfileContainer>
            <h1>{}</h1>
                <Button onClick={toggleEdit}>Edit Profile</Button>
            {isEditing ?
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
                    <Button type='submit' onClick={handleSubmit}>Submit</Button>
                </FormContainer>
            : null}

        </ProfileContainer>
    )
}

export default Profile;
