
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {TYPES} from "../Button/Button.jsx";
import {PaymentFormContainer, Form, PaymentButton} from './PaymentForm.js'
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../Store/Cart/CartSelector.js";
import { selectCurrentUser } from "../../Store/User/UserSelector.js";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectCartTotal)
    const currentUser = useSelector(selectCurrentUser)
    const [isProcessingPayment, setIsProcessingPayment] = useState(false)

    const handlePayment = async (e) => {
        e.preventDefault()

        if (!stripe || !elements){
            return;
        }

        setIsProcessingPayment(true);

        const res = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ amount: amount * 100 })
        }).then(res => res.json());

        // const clientSecret = res.paymentIntent.client_secret
        const {paymentIntent: {client_secret}} = res;
        const paymentRes = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : ' Guest'
                }
            }
        });

        setIsProcessingPayment(false);

        if (paymentRes.error){
            console.log(paymentRes.error);
        } else {
            if(paymentRes.paymentIntent.status === 'succeeded'){
                alert("Payment Successful")
            }
        }
    }

    return (
        <PaymentFormContainer>
            <Form onSubmit={handlePayment}>
                <h2>Credit Card Payment: </h2>
                <CardElement/>
                <PaymentButton isLoading={isProcessingPayment} buttonType={TYPES.inverted}>PAY NOW</PaymentButton>
            </Form>
        </PaymentFormContainer>
    )
}

export default PaymentForm
