import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../Store/Cart/CartSelector';
import CheckoutItem from '../../Components/CheckoutItem/CheckoutItem.jsx';
import PaymentForm from '../../Components/PaymentForm/PaymentForm.jsx';
import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from './Checkout.js'

const Checkout = () => {
    const cartItems = useSelector(selectCartItems)
    const cartTotal = useSelector(selectCartTotal)

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {cartItems.map((item) => (
                    <CheckoutItem key={item.id} cartItem={item}/>
                ))}
            <Total>Total ${cartTotal}</Total>
            <PaymentForm/>
        </CheckoutContainer>
    )
}

export default Checkout;
