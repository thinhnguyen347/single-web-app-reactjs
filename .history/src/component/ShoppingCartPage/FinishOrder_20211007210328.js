import { Link } from "react-router-dom"
export default function FinishOrder(){

    return(<>
    <div className="container my-5 py-5">
        <h4 className="text-center">Đặt hàng thành công!</h4>
        <p className="text-center">Cảm ơn bạn đã sử dụng dịch vụ của Yummy!</p>
        <Link to="/" exact>
        <button className="btn btn-warning">Trở về trang chủ</button>
        </Link>

    </div>
    </>)
}