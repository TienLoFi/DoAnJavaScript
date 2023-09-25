import { useEffect, useState } from "react";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { RiArrowGoBackFill } from 'react-icons/ri';
import { Link, useNavigate, useParams } from "react-router-dom";
import OrderServices from "../../../services/OrderServices";

function OrderShow() {
  const navigator = useNavigate();
  const { id } = useParams();
  const [order, setOrder] = useState([]);
  useEffect(function () {
    (async function () {
      await OrderServices.getById(id).then(function (result) {
        setOrder(result.data.order);
      });
    })();
  }, []);
  async function OrderDelete(id) {
    await OrderServices.remove(id).then(function (result) {
      alert(result.data.message);
      navigator("/admin/order", { replace: true });
    });
  }
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-danger text-uppercase">
              Chi tiết danh mục
            </strong>
          </div>
          <div className="col-6 text-end">
            <Link to="/admin/order" className="btn btn-info btn-sm me-2">
              <RiArrowGoBackFill /> Về danh sách
            </Link>
       
            <button
              onClick={() => OrderDelete(order.id)}
              className="btn btn-sm btn-danger"
            >
              <FaTrash />
              Xóa
            </button>
          </div>
        </div>
      </div>
      <div className="card-body">
        <table className="table table-border">
          <thead>
            <tr style={{ tableLayout: "auto" }}>
              <th className="text-center">Tên trường</th>
              <th>Giá trị</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="text-center">Mã khách hàng</th>
              <td>{order.user_id}</td>
            </tr>
            <tr>
              <th className="text-center">Mã Đơn Hàng</th>
              <td>{order.code}</td>
            </tr>{" "}
            <tr>
              <th className="text-center">Tên Người Nhận</th>
              <td>{order.deliveryname}</td>
            </tr>
            <tr>
              <th className="text-center">Điện thoại</th>
              <td>{order.deliveryphone}</td>
            </tr>
            <tr>
              <th className="text-center">Email</th>
              <td>{order.deliveryemail}</td>
            </tr>
            <tr>
              <th className="text-center">Địa chỉ</th>
              <td>{order.deliveryaddress}</td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderShow;
