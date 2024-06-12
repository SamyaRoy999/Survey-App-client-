import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import {  useState } from 'react';
// import useAxiosPublicSecour from '../../hooks/useAxiosPublicSecour';


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    // const [clientSecret, setClientSecret] = useState('')
    const [errorText, setErrorText] = useState('');
    // const axiosPublic = useAxiosPublicSecour()
    // const payment = 500;
    // useEffect(() => {
    //     axiosPublic.post('/create-payment-intent', { payment: payment })
    //         .then(res => {
    //             console.log(res.data.clientSecret);
    //             // setClientSecret(res.data.clientSecret);
    //         })
    // }, [axiosPublic])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setErrorText(error)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setErrorText('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#0E6251',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" className='bg-[#0E6251] w-full btn mt-12 text-white' disabled={!stripe}>
                Pay
            </button>
            <p className='text-red-700'>{errorText.message}</p>
        </form>
    )
}

export default CheckoutForm