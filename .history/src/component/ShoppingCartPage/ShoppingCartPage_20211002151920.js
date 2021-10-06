import React, {useState} from "react";
import ShoppingCart from "./ShoppingCart";

export default function ShoppingCartPage(){
const [showCart, setCart] = useState(true);
const [showShippingInfo, setShowShippingInfo] = useState(true)

    return(
        <>
        {cartShow && <ShoppingCart/>}
        </>
    )
}