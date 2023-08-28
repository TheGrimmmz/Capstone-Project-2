import { useSelector, useDispatch } from 'react-redux'
import { selectCartItems } from '../../Store/Cart/CartSelector.js'
import { addItem, clearItem, removeItem } from '../../Store/Cart/CartAction.js'
import {CheckoutItemContainer, ImgContainer, Img, NamePrice, Quantity, Arrow, Value, RemoveBtn} from './CheckoutItem.js'

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems)

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
                <Arrow onClick={handleRemove}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={handleAdd}>&#10095;</Arrow>
            </Quantity>
            <NamePrice>${price}</NamePrice>
            <RemoveBtn onClick={handleClear}>&#10005;</RemoveBtn>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;
