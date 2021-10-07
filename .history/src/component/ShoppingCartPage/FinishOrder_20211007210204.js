import { Link } from "react-router-dom"
export default function FinishOrder(){

    return(<>
    <div className="container my-5">
        <h4>Đặt hàng thành công!</h4>
        <p>Cảm ơn bạn đã sử dụng dịch vụ của Yummy!</p>
        <Link to="/" exact>
        <button className="btn btn-warning">Trở về trang chủ</button>
        </Link>

    </div>
    </>)
}