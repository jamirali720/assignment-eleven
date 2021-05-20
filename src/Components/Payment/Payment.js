import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe('pk_test_51IgjDBKERk0OkRSOjX9m2uZxWztyl3LyRoEZKThphzPEVaizUvi2nm5ahJlMCa3npQbY1uyqumiDnb0HncjLI7Lt00wt7gX6Ux');

const Payment = () => {
    return (
        <div>
          
          <Elements stripe={stripePromise}>
            <CheckOutForm></CheckOutForm>
            </Elements>




        </div>
    );
};

export default Payment;