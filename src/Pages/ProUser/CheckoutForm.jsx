import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import useAxiosPublicSecour from '../../hooks/useAxiosPublicSecour';
import { AuthContext } from '../../Providers/AuthProvider';
import { FcPaid } from "react-icons/fc";
import useAllUser from '../../hooks/useAllUser';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');
    const [users, refetch] = useAllUser()
    const [transactionID, setTransactionID] = useState('');
    const [errorText, setErrorText] = useState('');
    const axiosPublic = useAxiosPublicSecour();
    const axiosSecour = useAxiosSecure();
    const payment = 500;
    const { user } = useContext(AuthContext);

    useEffect(() => {
        axiosPublic.post('/create-payment-intent', { payment: payment })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
    }, [axiosPublic])
    const handleSubmit = async (event) => {
        event.preventDefault();

        const userFilter = users.find(item => item.email === user.email);


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
        // confirm card payment 
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email,
                    name: user?.displayName
                }
            }
        })
        if (confirmError) {
            // console.log("confirmError");
        } else {
            console.log("paymentIntent", paymentIntent);
            if (paymentIntent.status === "succeeded") {
                console.log('transactionID', paymentIntent.id);
                setTransactionID(paymentIntent.id);
                const newRole = 'pro-user';
                const res = await axiosSecour.patch(`/users/admin/${userFilter._id}`, { role: newRole });
                console.log(res.data);
                if (res.data.acknowledged) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: 'how! you are a Pro user',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                refetch()
            }
        }
    }
    return (
        <form onSubmit={handleSubmit} className='h-screen'>
            <div className='flex mt-36 justify-between mb-32'>
                <h3 className='font-bold font-Josefin text-2xl flex items-center gap-2'><FcPaid className='text-4xl' /> Pro user: </h3>
                <p className=' font-Josefin text-2xl'>{payment}USD</p>
            </div>
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
            <button type="submit" className='bg-[#0E6251] w-full btn mt-12 text-white' disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className='text-red-700'>{errorText.message}</p>
            {transactionID && <p className='text-green-600'>Your transaction ID {transactionID}</p>}
        </form>
    )
}

export default CheckoutForm