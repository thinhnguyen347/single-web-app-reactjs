import React, {useState} from "react";
import ShoppingCart from "./ShoppingCart";

export default function ShoppingCartPage(){
const [cartShow, setCartShow] = useState(true);
const [showShippingInfoShow, setCartShow] = useState(true)

    return(
        <>
        {cartShow && <ShoppingCart/>}
        </>
    )
}