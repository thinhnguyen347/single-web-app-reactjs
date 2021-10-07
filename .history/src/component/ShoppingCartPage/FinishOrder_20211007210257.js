import { Link } from "react-router-dom"
export default function FinishOrder(){

    return(<>
    <div className="container my-5 py-5">
        <h4 cl>Đặt hàng thành công!</h4>
        <p>Cảm ơn bạn đã sử dụng dịch vụ của Yummy!</p>
        <Link to="/" exact>
        <button className="btn btn-warning text-center">Trở về trang chủ</button>
        </Link>

    </div>
    </>)
}