import React, { useState } from "react";
import { useSelector } from "react-redux";
import ShoppingCart from "./ShoppingCart";
import ShippingAndPayment from "./ShippingAndPayment";

export default function ShoppingCartPage() {
  const backHome = useSelector((state) => state.backHomePage.status);
  const [showCart, setShowCart] = useState(true);
  const [showShippingInfo, setShowShippingInfo] = useState(false);

  console.log(backHome)

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
      {!backHome && showCart && <ShoppingCart moveToShippingInfo={moveToShippingInfo} />}
      {!backHome && showShippingInfo && <ShippingAndPayment returnToCart={returnToCart} />}
    </>
  );
}
