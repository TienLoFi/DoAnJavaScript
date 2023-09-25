import { Link } from 'react-router-dom';
import {FaEdit, FaPlus, FaRegEye, FaTrash} from 'react-icons/fa';
import { useEffect, useState } from 'react';
import UserServices from '../../../services/UserServices';
import { urlImage } from '../../../config';


function CustomerList() {
  const [statusdel, setStatusDel] = useState([]);
    const [customers, setcustomers] = useState([]);
    useEffect(function(){
      (async function(){
        await UserServices.getAll()
        .then(function(result){
            setcustomers(result.data.users)
        });
      })();
    },[statusdel])
    async function customerDelete(id)
    {
      await UserServices.remove(id)
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
              Danh sách khách hàng
            </strong>
          </div>
          <div className="col-6 text-end">
            <Link to="/admin/customer/create" className="btn btn-success btn-sm">
              <FaPlus/> Thêm
            </Link>
          </div>
        </div>
      </div>
      <div className="card-body">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th style={{ width: 30 }} className="text-center">
                #
              </th>
              <th style={{ width: 130 }} className="text-center">
                Hinh
              </th>
              <th className="text-center">Tên khách hàng</th>
              <th style={{ width:300 }} className="text-center">
                Email
              </th>
              <th style={{ width:300 }} className="text-center">
                Đại chỉ
              </th>
              <th style={{ width:300 }} className="text-center">
                Ngày tạo
              </th>
              <th style={{ width: 160 }} className="text-center">
                Chức năng
              </th>
              <th style={{ width: 30 }} className="text-center">
                ID
              </th>
            </tr>
          </thead>
          <tbody>
          {customers.map(function(customer, index){
            if(customer.roles=="customer")
            return(
              <tr key={index}>
              <td className="text-center">
                <input type="checkbox"/>
              </td>
              <td className="text-center">
               <img className="img-fluid" src={urlImage + "customer/" + customer.image} alt="hinh"/>
              </td>
              <td className="text-center">{customer.name}</td>
              <td className="text-center">{customer.email}</td>
              <td className="text-center">{customer.address}</td>
              <td className="text-center">{customer.created_at}</td>
              <td className="text-center">
                        <Link className="btn btn-sm btn-info me-1" to={"/admin/customer/show/"+customer.id}>
                            <FaRegEye/>
                        </Link>
                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/customer/update/"+customer.id}>
                            <FaEdit/>
                        </Link>
                        <button onClick={()=>customerDelete(customer.id)} className="btn btn-sm btn-danger">
                            <FaTrash/>
                        </button>
                        
                    </td>
              <td className="text-center">{customer.id}</td>
            </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerList;