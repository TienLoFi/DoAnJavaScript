import { Link } from 'react-router-dom';
import {FaEdit, FaRegEye, FaTrash} from 'react-icons/fa';
import { useEffect, useState } from 'react';
import OrderServices from '../../../services/OrderServices';


function OrderList() {
  const [statusdel, setStatusDel] = useState([]);
    const [orders, setorders] = useState([]);
    useEffect(function(){
      (async function(){
        await OrderServices.getAll()
        .then(function(result){
            setorders(result.data.orders)
        });
      })();
    },[statusdel])
    async function OrderDelete(id)
    {
      await OrderServices.remove(id)
            .then(function(result){
                alert(result.data.message)
                setStatusDel(id)
     });
    }
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-danger text-uppercase">
              Danh sách hóa đơn
            </strong>
          </div>
          {/* <div className="col-6 text-end">
            <Link to="/admin/order/create" className="btn btn-success btn-sm">
              <FaPlus/> Thêm
            </Link>
          </div> */}
        </div>
      </div>
      <div className="card-body">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr style={{ tableLayout: 'auto' }}>
              <th className="text-center">
                #
              </th>
              <th className="text-center">Mã hóa đơn</th>
              <th className="text-center">Ngày Xuất</th>

              <th className="text-center">Tên Người Nhận</th>
              <th className="text-center">Địa Chỉ </th>
              <th className="text-center" style={{ tableLayout: 'auto' }}>Điện thoại</th>
              <th className="text-center" >Email</th>
              <th className="text-center">
                Ngày tạo
              </th>
              <th className="text-center">
                Chức năng
              </th>
              <th className="text-center">
                ID
              </th>
            </tr>
          </thead>
          <tbody>
          {orders.map(function(order, index){
            return(
              <tr>
          <td className="text-center">
                <input type="checkbox"/>
              </td>
              <td className="text-center">{order.code}</td>
              <td className="text-center">{order.exportdate}
              </td>
              <td className="text-center">{order.deliveryaddress}</td>
              <td className="text-center">{order.deliveryname}</td>
              <td className="text-center">{order.deliveryphone}</td>
              <td className="text-center">{order.deliveryemail}</td>
              <td className="text-center">{order.created_at}</td>
              <td className="text-center">
                        <Link className="btn btn-sm btn-info me-1" to={"/admin/order/show/"+order.id}>
                            <FaRegEye/>
                        </Link>
                  
                        <button onClick={()=>OrderDelete(order.id)} className="btn btn-sm btn-danger">
                            <FaTrash/>
                        </button>
                        
                    </td>
              <td className="text-center">{order.id}</td>
            </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderList;