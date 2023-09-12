import { useDispatch, useSelector } from 'react-redux'
import { selectCartCount, selectIsCartOpen } from '../../Store/Cart/CartSelector'
import { setIsCartOpen } from '../../Store/Cart/CartAction'
import { IconContainer, ShopIcon, ItemCount } from './CartIcon.js'

const CartIcon = () => {
    const dispatch = useDispatch();
    const cartCount = useSelector(selectCartCount)
    const isCartOpen = useSelector(selectIsCartOpen)

    const toggleCart = (e) => {
        e.stopPropagation()
        dispatch(setIsCartOpen(!isCartOpen))
    }

    return (
        <IconContainer onClick={toggleCart}>
            <ShopIcon/>
            <ItemCount>{cartCount}</ItemCount>
        </IconContainer>
    )
}

export default CartIcon;
