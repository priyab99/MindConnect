import CheckoutForm from "./CheckoutForm";
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useLocation } from "react-router-dom";

const stripePromise=loadStripe(import.meta.env.VITE_Payment_Gateway_PK)


const Payment = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const price = queryParams.get("price") || "defaultPrice";
    const therapistEmail = queryParams.get("therapistEmail") || "defaultEmail";

    
  console.log("Price in Payment component:", price);
    return (
        <div className="mt-16 pt-20">
           <h2 className='text-center text-3xl font-extrabold mt-10 mb-5'>Proceed to pay</h2>
               <Elements stripe={stripePromise}>
                              <CheckoutForm price={price} therapistEmail={therapistEmail}></CheckoutForm>
                        </Elements>
        </div>
    );
};

export default Payment;