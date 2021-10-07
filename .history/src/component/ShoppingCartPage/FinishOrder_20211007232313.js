import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {updateCart} from "../../app/cartSlice"
import vegetable from "./vegetable.gif";
export default function FinishOrder() {
  const dispatch= useDispatch

function resetCart(){
  window.localStorage.setItem("cart","[]");
}

  return (
    <>
      <div className="container my-5 py-5">
        <img
          src={vegetable}
          alt="success"
          width="100px"
          className="d-block mx-auto mb-4"
        />
        <h3 className="text-center">Đặt hàng thành công!</h3>
        <p className="text-center">Cảm ơn bạn đã sử dụng dịch vụ của Yummy!</p>
        <Link to="/" exact className="text-decoration-none">
          <button className="btn btn-warning d-block mx-auto my-5" onClick={()=>{resetCart();}}>
            Trở về trang chủ
          </button>
        </Link>
      </div>
    </>
  );
}
