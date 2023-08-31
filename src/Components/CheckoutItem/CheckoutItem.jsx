import { useSelector, useDispatch } from 'react-redux'
import { selectCartItems } from '../../Store/Cart/CartSelector.js'
import { addItem, clearItem, removeItem } from '../../Store/Cart/CartAction.js'
import {CheckoutItemContainer, ImgContainer, Img, NamePrice, Quantity, Arrow, Value, RemoveBtn} from './CheckoutItem.js'

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems)

    const addedPrice = price * quantity
    const handleAdd = () => dispatch(addItem(cartItems, cartItem))
    const handleRemove = () => dispatch(removeItem(cartItems, cartItem))
    const handleClear = () => dispatch(clearItem(cartItems, cartItem))

    return (
        <CheckoutItemContainer>
            <ImgContainer>
                <Img src={imageUrl} alt={`${name}`}/>
            </ImgContainer>
            <NamePrice>{name}</NamePrice>
            <Quantity>
                <Arrow onClick={handleRemove}>-</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={handleAdd}>+</Arrow>
            </Quantity>
            <NamePrice>${addedPrice}</NamePrice>
            <RemoveBtn onClick={handleClear}>X</RemoveBtn>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;
