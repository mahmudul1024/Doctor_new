import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Payment.css";
import CheckoutForm from "./CheckoutForm";
import { useNavigation } from "react-day-picker";
const stripePromise = loadStripe(
  "pk_test_51MMJHSFwyc4dxaOOKlOlx0tLSyXDZpvPjJWvxmTtU189VIogBoveT2TfPcJSQB6AJk6Mqj4rUEmqLtLUtTxMEgFe00A4gjmL8c"
);
console.log(stripePromise);
const Payment = () => {
  // const navigation = useNavigation();
  const booking = useLoaderData();
  const { treatment, appointmentDate, slot, price } = booking;

  console.log("payment data", price);

  // if (navigation.state === "loading") {
  //   return <progress className="progress w-56"></progress>;
  // }
  return (
    <div className="mt-28 px-4">
      <h3 className=" text-3xl py-3"> Payment for {treatment} </h3>
      <p className=" text-xl">
        Please Pay ${price} for your appointment on {appointmentDate} at {slot}
      </p>

      <div className="w-96 my-12 ">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
