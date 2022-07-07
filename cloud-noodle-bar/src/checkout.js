import React, { useEffect, useState } from 'react';

import { PaymentElement, useStripe, useElements, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import { Button } from '@mui/material';

// stripe init
const stripePromise = loadStripe("pk_test_51KmwZFFdRldObBjhMBNKSHG3zP46NxAkzmsZkJ7KuNfQSGsbEKln5jD8n1INU92vdRdCm4f79CpTPgbxG1gk4Rb200TL15REaS");

export default function Checkout() {
  const [clientSecret, setClientSecret] = useState("");
  
  useEffect(() => {
    fetch('http://localhost:5001/cloud-noodle-bar/us-central1/payment_sheet', {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin':'*'
      }
    })
    .then(response => response.json())
    .then((result) => {
      setClientSecret(result.data.paymentIntent);
      //console.log(result)
      console.log(result.data.paymentIntent)
    })
  }, []); // the [] makes useEffect render only once.

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise} key={clientSecret}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async () => {
    await stripe.confirmPayment({
      elements,
      confirm_params: {
        return_url: 'http://localhost:3000/'
      },
    })
  }

  return <form id="payment-form" onSubmit={ handleSubmit }>
    <PaymentElement id="payment-element"/>
    <Button id="submit">Pay Now</Button>
  </form>
}