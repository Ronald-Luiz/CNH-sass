import '../styles/payments.scss';

import React, { useState } from 'react';

import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';



export default function payment() {

    const initialOptions = {
        "client-id": "AbZOehFIXSJgezgRNlyTtX4JYF_Xm883H2T14blEu5npXSacny6ifuGLJScWZLy8k5A3O1AiLZ3xV_Cs",
        currency: "USD",
        intent: "capture",
        // "data-client-token": "",
    };

    return (
        <section className='SectionPayment'>

            <h1> Welcome to our page of the payments, make sure you do the right thing !</h1>

            <PayPalScriptProvider options={initialOptions}>

                <PayPalButtons />

            </PayPalScriptProvider>

            <figure>
                <img src="https://www.mallon.com.br/wp-content/uploads/2022/07/actros-post-mallon-1-1.jpg" alt="" />
                <figcaption>Imagem de caminhões</figcaption>
            </figure>

        </section>
    )
}