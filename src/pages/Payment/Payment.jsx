import CheckoutForm from "./CheckoutForm";
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useLocation } from "react-router-dom";

const stripePromise=loadStripe(import.meta.env.VITE_Payment_Gateway_PK)


const Payment = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const price = queryParams.get("price") || "defaultPrice";
    
  console.log("Price in Payment component:", price);
    return (
        <div>
               <Elements stripe={stripePromise}>
                              <CheckoutForm price={price}></CheckoutForm>
                        </Elements>
        </div>
    );
};

export default Payment;