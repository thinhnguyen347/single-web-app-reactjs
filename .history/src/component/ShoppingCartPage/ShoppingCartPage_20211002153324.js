import React, { useState } from "react";
import ShoppingCart from "./ShoppingCart";

export default function ShoppingCartPage() {
  const [addedList, setAddedList] = useState("");
  const [showCart, setShowCart] = useState(true);
  const [showShippingInfo, setShowShippingInfo] = useState(false);
  const [showPaymentMethod, setShowPaymentMethod] = useState(false);

  useEffect(() => {
    let data = localStorage.getItem("cart");
    if (data.length === 0) {
      setHideDeleteAllBtn(true);
    }
    setAddedList(data);
  }, []);

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
      {showCart && <ShoppingCart />}
      {showShippingInfo && (
        <ShippingInfo  />
      )}
      {showPaymentMethod && <PaymentMethod />}
    </>
  );
}
