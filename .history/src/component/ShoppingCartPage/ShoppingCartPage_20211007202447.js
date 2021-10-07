import React, { useState } from "react";
import { useSelector } from "react-redux";
import ShoppingCart from "./ShoppingCart";
import ShippingAndPayment from "./ShippingAndPayment";

export default function ShoppingCartPage() {
  const backHome = useSelector(state => state)
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
      {showShippingInfo && <ShippingAndPayment returnToCart={returnToCart} />}
    </>
  );
}
