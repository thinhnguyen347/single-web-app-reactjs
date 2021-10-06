import React, { useState } from "react";
import ShoppingCart from "./ShoppingCart";

export default function ShoppingCartPage() {
  const [showCart, setShowCart] = useState(true);
  const [showShippingInfo, setShowShippingInfo] = useState(true);
  const [showPaymentMethod, setShowPaymentMethod] = useState(true);

  return (
    <>
      {showCart && <ShoppingCart />}
      {showShippingInfo && <ShippingInfo />}
      {showPaymentMethod && <PaymentMethod />}
    </>
  );
}
