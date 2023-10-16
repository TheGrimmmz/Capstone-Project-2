require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

/**
 * Handles an event and creates a payment intent.
 *
 * @param {Object} e - the event object containing the request body
 * @return {Object} - the response object with the payment intent or error message
 */
const handler = async (e) => {
    try{
       const { amount } = JSON.parse(e.body)
       const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
        payment_method_types: ['card']
       })
       return {
        statusCode: 200,
        body: JSON.stringify({ paymentIntent })
       }
    } catch (e){
        console.log({e})
        return {
            statusCode: 400,
            body: JSON.stringify({ e })
        }
    }
}

module.exports = { handler}
