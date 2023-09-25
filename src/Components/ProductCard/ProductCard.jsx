import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems } from '../../Store/Cart/CartSelector'
import { addItem } from '../../Store/Cart/CartAction'
import { TYPES } from '../Button/Button.jsx'
import {ProductCardContainer, Img, Footer, Name, Price, AddButton} from './ProductCard.js'

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const addToCart = () => dispatch(addItem(cartItems, product))

    return (
    <ProductCardContainer>
        <Img src={imageUrl} alt={`${name}`}/>
        <Footer>
            <Name><b>{name}</b></Name>
            <Price><b>${price}</b></Price>
        </Footer>
        <AddButton buttonType={TYPES.inverted} onClick={addToCart}>Add to Cart</AddButton>
    </ProductCardContainer>
    )
}

export default ProductCard;
