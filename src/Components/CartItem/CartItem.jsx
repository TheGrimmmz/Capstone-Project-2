import {CartItemContainer, Img, ItemDetails, Name} from './CartItem.js'

const CartItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem
    return (
        <CartItemContainer>
            <Img src={imageUrl} alt={`${name}`}/>
            <ItemDetails>
                <Name><b>{name}</b></Name>
                <span className='price'><b>{quantity} x ${price}</b></span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;
