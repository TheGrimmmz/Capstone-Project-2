import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { updateEmail, updatePassword, reauthenticateWithCredential } from "firebase/auth";
import { selectCurrentUser } from "../../Store/User/UserSelector";
import Spinner from '../Spinner/Spinner.jsx'
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
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if(currentUser !== null){
            setIsLoading(false)
        }
        },[currentUser])

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
            if(e.code === 'auth/requires-recent-login'){
                alert("Please logout and login to change!")
            }
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
            {isLoading ? <Spinner/> :
            <div>
                <h1>{currentUser.email}</h1>
                <Button onClick={toggleEdit}>Edit Profile</Button>
            </div>}
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
