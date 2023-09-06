import { useNavigate } from 'react-router-dom'
import {FailedContainer, Button} from './Failed.js'

const Failed = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/checkout')
    }

    return (
        <FailedContainer>
            <h1>Payment failed, please try again</h1>
            <Button onClick={handleClick}>Try again</Button>
        </FailedContainer>
    )
}

export default Failed
