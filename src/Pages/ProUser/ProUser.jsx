import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


// add publiseble key

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY)
const ProUser = () => {
    return (
        <div className=' mt-6 lg:w-6/12 text-center mx-auto'>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    )
}

export default ProUser