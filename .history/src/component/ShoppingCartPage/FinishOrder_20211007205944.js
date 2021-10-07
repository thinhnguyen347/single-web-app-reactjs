import { Link; } from "react-router-dom"
export default function FinishOrder(){

    return(<>
    <div>
        <h4>Đặt hàng thành công!</h4>
        <p>Cảm ơn bạn đã sử dụng dịch vụ của Yummy!</p>
        <Link to="/" exact>
        <button className>Trở về trang chủ</button>
        </Link>

    </div>
    </>)
}