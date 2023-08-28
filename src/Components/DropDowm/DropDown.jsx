import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectCartItems } from '../../Store/Cart/CartSelector'
import Button from '../Button/Button.jsx'
import CartItem from '../CartItem/CartItem.jsx'
import {DropDownContainer, Cart, EmptyMessage} from './DropDown.js'

const DropDown = () => {
    const cartItems = useSelector(selectCartItems)
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/checkout')
    }

    return (
        <DropDownContainer>
            <Cart>
                {cartItems.length ? (
                    cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)
                ) : (
                    <EmptyMessage>Cart is Empty</EmptyMessage>
                    )}
            </Cart>
            <Button onClick={handleCheckout}>CHECKOUT</Button>
        </DropDownContainer>
    )
}

export default DropDown;
