import React, { useState } from "react";
import ShoppingCart from "./ShoppingCart";
import ShippingInfo from "./ShippingAndPayment";

export default function ShoppingCartPage() {
  const [showCart, setShowCart] = useState(true);
  const [showShippingInfo, setShowShippingInfo] = useState(false);

  function moveToShippingInfo() {
    setShowCart(false);
    setShowShippingInfo(true);
  }

  function returnToCart() {
    setShowCart(true);
    setShowShippingInfo(false);
  }

  return (
    <>
      {showCart && <ShoppingCart moveToShippingInfo={moveToShippingInfo} />}
      {showShippingInfo && <ShippingInfo returnToCart={returnToCart} />}
    </>
  );
}
