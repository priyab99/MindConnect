import {useStripe, CardElement, useElements} from "@stripe/react-stripe-js"
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'

const CheckoutForm = ({price,therapistEmail}) => {
    const [cardError, setCardError] = useState('')
    const stripe= useStripe();
    const elements=useElements();
    const [axiosSecure]=useAxiosSecure();
    const [clientSecret, setCleintSecret]=useState('');
    const {user}=useContext(AuthContext);
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId]=useState('');
    //const [loading, setLoading] = useState(true);


    useEffect(() => {
        // console.log(price);
        if (price > 0) {
              axiosSecure.post('/create-payment-intent', { price })
                    .then(res => {
                          // console.log(res.data.clientSecret);
                          // console.log(res.data.clientSecret);
                          setCleintSecret(res.data.clientSecret)
                    })
        }
  }, [price, axiosSecure]);
    

    const handleSubmit=async (event)=>{
        event.preventDefault();

        if(!stripe || !elements){
            return
        }

        const card=elements.getElement(CardElement)
        if(card ===null){
            return;
        }

        const {error, paymentMethod}=await stripe.createPaymentMethod({
          type: 'card',
          card  
        })
        if (error) {
            console.log('error : ', error);
            setCardError(error.message)
      }
      else {
            setCardError('')
             console.log('PaymentMethod : ', paymentMethod);
      }
      setProcessing(true)

      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
        clientSecret,
        {
              payment_method: {
                    card: card,
                    billing_details: {
                          email: user?.email || 'unknown'
                    }
              }
        }
  )

  if (confirmError) {
        setCardError(confirmError);
  }
  console.log('payment :',paymentIntent);
  setProcessing(false)
  if(paymentIntent.status === 'succeeded'){
    setTransactionId(paymentIntent.id);
    const transactionId=paymentIntent.id;
   //save payment information to the server
   const payment={
    email: user?.email, 
    transactionId,
    price,
    therapistEmail: therapistEmail
}
axiosSecure.post('/payment',payment)
.then(res=>{
    console.log(res.data);
    if(res.data.insertedId){
      Swal.fire({
        title: 'Payment Successful',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
    }
})
  }
    }
    return (
        <div><form className="mx-auto pt-24 mb-6" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
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
          <button className=' btn btn-info mt-6' type="submit" disabled={!stripe || !clientSecret || processing}>
                                Pay
                          </button>
      </form>
        {
          cardError && <p className=' text-red-500 text-center'>{cardError}</p>
    }  {
        transactionId && <p className=' text-green-700'>Transaction is complete with TransactionID: {transactionId}</p>
  }</div>
    );
};

export default CheckoutForm;