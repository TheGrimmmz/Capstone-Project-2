import { useNavigate } from 'react-router-dom'
import {SuccessContainer, Button} from './Success.js'

const Success = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/shop')
    }

    return (
        <SuccessContainer>
        <h1>Your payment was successful</h1>
        <Button onClick={handleClick}>Back to shop</Button>
        </SuccessContainer>
    )
}

export default Success
