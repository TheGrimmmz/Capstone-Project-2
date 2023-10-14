import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectCartItems, selectCartTotal } from '../../Store/Cart/CartSelector'
import Button from '../Button/Button.jsx'
import CartItem from '../CartItem/CartItem.jsx'
import {DropDownContainer, Cart, EmptyMessage, Total} from './DropDown.js'

const DropDown = () => {
    const cartItems = useSelector(selectCartItems)
    const cartTotal = useSelector(selectCartTotal)
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
                    <EmptyMessage><b>Cart is Empty</b></EmptyMessage>
                    )}
            </Cart>
            <Total><b>Total: ${cartTotal}</b></Total>
            <Button onClick={handleCheckout}>CHECKOUT</Button>
        </DropDownContainer>
    )
}

export default DropDown;
