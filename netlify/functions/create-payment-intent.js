require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

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
