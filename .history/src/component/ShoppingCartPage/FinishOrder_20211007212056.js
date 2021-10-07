import { Link } from "react-router-dom";
import vegetable from "./vegetable.gif";
export default function FinishOrder() {
  return (
    <>
      <div className="container my-5 py-5">
        <img
          src={vegetable}
          alt="success"
          width="100px"
          className="d-block mx-auto mb-5"
        />
        <h3 className="text-center">Đặt hàng thành công!</h4>
        <p className="text-center">Cảm ơn bạn đã sử dụng dịch vụ của Yummy!</p>
        <Link to="/" exact className="text-decoration-none">
          <button className="btn btn-warning d-block mx-auto my-5">
            Trở về trang chủ
          </button>
        </Link>
      </div>
    </>
  );
}
