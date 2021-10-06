import React, { useState } from "react";
import ShoppingCart from "./ShoppingCart";
im

export default function ShoppingCartPage() {
  const [showCart, setShowCart] = useState(true);
  const [showShippingInfo, setShowShippingInfo] = useState(false);
  const [showPaymentMethod, setShowPaymentMethod] = useState(false);

  function moveToShippingInfo() {
    setShowCart(false);
    setShowShippingInfo(true);
  }

  function moveToPaymentMethod() {
    setShowShippingInfo(false);
    setShowPaymentMethod(true);
  }

  return (
    <>
      {showCart && (
        <ShoppingCart
          moveToShippingInfo={moveToShippingInfo}
        />
      )}
      {showShippingInfo && <ShippingInfo moveToPaymentMethod={moveToPaymentMethod}/>}
      {showPaymentMethod && <PaymentMethod />}
    </>
  );
}
