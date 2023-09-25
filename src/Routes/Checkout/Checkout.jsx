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
                    <span><b>Product</b></span>
                </HeaderBlock>
                <HeaderBlock>
                    <span><b>Description</b></span>
                </HeaderBlock>
                <HeaderBlock>
                    <span><b>Quantity</b></span>
                </HeaderBlock>
                <HeaderBlock>
                    <span><b>Price</b></span>
                </HeaderBlock>
                <HeaderBlock>
                    <span><b>Remove</b></span>
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
