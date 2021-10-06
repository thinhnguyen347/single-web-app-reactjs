import React, { useState } from "react";
import ShoppingCart from "./ShoppingCart";

export default function ShoppingCartPage() {
  const [showCart, setShowCart] = useState(true);
  const [showShippingInfo, setShowShippingInfo] = useState(false);
  const [showPaymentMethod, setShowPaymentMethod] = useState(true);

  function moveToShippingInfo(){
    setShowCart(false);
    setShowShippingInfo(true)
  }

  function moveToPaymentMethod(){
    setShowCart(false);
    setShowShippingInfo(true)
  }

  return (
    <>
      {showCart && <ShoppingCart />}
      {showShippingInfo && <ShippingInfo />}
      {showPaymentMethod && <PaymentMethod />}
    </>
  );
}
