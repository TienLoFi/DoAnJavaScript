import { useEffect, useState } from "react";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import UserServices from "../../../services/UserServices"

function CustomerShow() {
    const navigator = useNavigate();
    const {id} = useParams();
    const [customer, setcustomer] = useState([])
    useEffect (function(){
          (async function(){
            await UserServices.getById(id)
            .then(function(result){
                setcustomer(result.data.user)
            });
          })();
    },[]);
    async function customerDelete(id)
    {
      await UserServices.remove(id)
            .then(function(result){
                alert(result.data.message)
                navigator("/admin/customer", {replace:true})
            });
    }
    return (
        <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-6">
              <strong className="text-danger text-uppercase">
                Chi tiết người dùng
              </strong>
            </div>
            <div className="col-6 text-end">
                <Link to="/admin/customer" className="btn btn-info btn-sm me-2">
                    <FaPlus/> Về danh sách
                </Link>
                <Link className="btn btn-sm btn-primary me-1" to={"/admin/customer/update/" + customer.id}>
                      <FaEdit/>Sửa
                </Link>
                <button onClick={()=>customerDelete(customer.id)} className="btn btn-sm btn-danger">
                    <FaTrash/>Xóa
                </button>
            </div>
          </div>
        </div>
        <div className="card-body">
            <table className="table table-border">
                <thead>
                    <tr>
                        <th className="text-center" style={{ width:200 }}>Tên trường</th>
                        <th>Giá trị</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <th className="text-center">Id</th>
                      <td>{customer.id}</td>
                    </tr>
                    <tr>
                      <th className="text-center">Tên người dùng</th>
                      <td>{customer.name}</td>
                    </tr>
                    <tr>
                      <th className="text-center">Email</th>
                      <td>{customer.email}</td>
                    </tr>
                    <tr>
                      <th className="text-center">Điện thoại</th>
                      <td>{customer.phone}</td>
                    </tr>
                   
                    <tr>
                      <th className="text-center">Địa chỉ</th>
                      <td>{customer.address}</td>
                    </tr>
                    <tr>
                      <th className="text-center">Ngày tạo</th>
                      <td>{customer.created_at}</td>
                    </tr>
                    <tr>
                      <th className="text-center">Ngày cập nhật</th>
                      <td>{customer.updated_at}</td>
                    </tr>
                    <tr>
                      <th className="text-center">Tình trạng</th>
                      <td>{customer.status}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    );
}

export default CustomerShow;