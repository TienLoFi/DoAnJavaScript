import { Link } from 'react-router-dom';
import {  ImEye  } from "react-icons/im"; 
import { FaPlus, FaEdit } from "react-icons/fa";
import {  BsTrash3Fill  } from "react-icons/bs"; import { useEffect, useState } from 'react';
import UserServices from '../../../services/UserServices';
import { urlImage } from "../../../config";


function UserList() {
  const [statusdel, setStatusDel] = useState([]);
    const [users, setUsers] = useState([]);
    useEffect(function(){
      (async function(){
        await UserServices.getAll()
        .then(function(result){
            setUsers(result.data.users)
        });
      })();
    },[statusdel])
    async function UserDelete(id)
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
            <strong className="text-primary">
              Danh sách người dùng
            </strong>
          </div>
          <div className="col-6 text-end">
          <Link className="btn btn-sm btn-success" to="/admin/user/create">
            <FaPlus />
            Thêm
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
              <th className="text-center">Tên người dùng</th>
              <th className="text-center" style={{ width:200 }}>Username</th>
              <th className="text-center" style={{ width:100 }}>Vai trò</th>
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
          {users.map(function(user, index){
            return(
              <tr>
              <td className="text-center">
                <input type="checkbox"/>
              </td>
              <td><img src={urlImage + "user/" + user.image} alt={user.image} style={{width:'200px'}} ></img></td>
              <td className="text-center">{user.name}</td>
              <td className="text-center">{user.username}</td>
              <td className="text-center">{user.roles}</td>
              <td className="text-center">{user.created_at}</td>
              <td className="text-center">
              <td>
                  <Link
                    className="btn btn-sm btn-info me-1"
                    to={"show/"+user.id}
                  >
                    <ImEye />
                  </Link>
                  <Link
                    className="btn btn-sm btn-primary me-1"
                    to={"update/"+user.id}
                  >
                    <FaEdit />
                  </Link>
                  <button onClick={()=>UserDelete(user.id)} className="btn btn-sm btn-danger">
                      <BsTrash3Fill />
                    </button>
                    
                  </td>
              </td>
              <td className="text-center">{user.id}</td>
            </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;