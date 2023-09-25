import { FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate,useParams } from "react-router-dom";
import UserServices from '../../../services/UserServices';
import { useEffect, useState } from "react";

function UserShow() {
    const navigate=useNavigate();
    const {id}=useParams();
    const [user ,setUser ]=useState ([]);
    useEffect(function(){
        (async function(){
            await UserServices.getById(id).then(function(result){
                setUser(result.data.user);
             
            });
        })();
    },[]);
    async function UserDelete(id)
    {
        await UserServices.remove(id).then(function (result) {
            alert(result.data.message)
            navigate('/admin/user', {replace:true});
        });
    }
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger">
                            Chi tiết khách hàng
                        </strong>

                    </div>
                    <div className="col-md-6 text-end">
                        <Link className='btn btn-info btn-sm me-2 ' to='/admin/user'>
                            <FaArrowLeft />Quay về danh sách
                        </Link>
                        
                        <button className='btn btn-danger btn-sm ' onClick={()=>UserDelete(user.id)}>
                            <FaArrowLeft />Xóa
                        </button>
                    </div>
                </div>
            </div>

            <div className='card-body'>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th className='text-center' style={{ width: 200 }}>Tên trường</th>
                            <th className='text-center'>Giá trị</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className='text-center'>Id </th>
                            <td className='text-center'>{user.id} </td>
                        </tr>

                        <tr>
                            <th className='text-center'>Tên khách hàng </th>
                            <td className='text-center'>{user.name} </td>
                        </tr>

                        <tr>
                            <th className='text-center'>Email </th>
                            <td className='text-center'>{user.email}  </td>
                        </tr>


                        <tr>
                            <th className='text-center'>Số điện thoại </th>
                            <td className='text-center'>{user.phone}  </td>
                        </tr>

                        <tr>
                            <th className='text-center'>Username</th>
                            <td className='text-center'>{user.username} </td>
                        </tr>

                        <tr>
                            <th className='text-center'>Địa chỉ</th>
                            <td className='text-center'>{user.address} </td>
                        </tr>

                    </tbody>
                </table>

            </div>

        </div>
    );
}

export default UserShow;  