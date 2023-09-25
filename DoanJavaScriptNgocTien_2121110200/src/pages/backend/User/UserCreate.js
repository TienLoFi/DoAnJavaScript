import { Link, useNavigate } from 'react-router-dom';
import {FaPlus} from 'react-icons/fa';
import { useState } from 'react';
import UserServices from '../../../services/UserServices';

function UserCreate() {
    const navigator = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [roles, setRoles] = useState("");
    const [status, setStatus] = useState(1);
    const [gender, setGender] = useState("");

    function UserStore(event)
    {
        event.preventDefault();//không load lại trang
        const image = document.querySelector("#image");
        var user = new FormData();
        user.append("name", name)
        user.append("email", email)
        user.append("phone", phone)
        user.append("username", username)
        user.append("password", password)
        user.append("address", address)
        user.append("roles", roles)
        user.append("status", status)
        user.append("gender", gender)

        if(image.files.length === 0)
        {
            user.append("image", "")
        }
        else
        {
            user.append("image", image.files[0])
        }
        UserServices.create(user)
        .then(function(result) {
            alert(result.data.message);
            navigator("/admin/user", {replace:true})
        });
        
    }
    return (
    <form method='post' onSubmit={UserStore}>
        <div className="card">
            <div className="card-header">
            <div className="row">
                <div className="col-6">
                <strong className="text-danger text-uppercase">
                    Thêm người dùng
                </strong>
                </div>
                <div className="col-6 text-end">
                <Link to="/admin/user" className="btn btn-info btn-sm me-2">
                    <FaPlus/> Về danh sách
                </Link>
                <button type='submit' className='btn btn-success btn-sm'>Lưu</button>
                </div>
            </div>
            </div>
            <div className="card-body">
                <div className='row'>
                    <div className='col-md-9'>
                        <div className='mb-3'>
                            <label>
                                <strong>Tên người dùng(*)</strong>
                            </label>
                            <input value={name} onChange={(e)=> setName(e.target.value)} className='form-control' type='text'/>
                        </div>
                        <div className='mb-3'>
                            <label>
                                <strong>Email(*)</strong>
                            </label>
                            <input value={email} onChange={(e)=> setEmail(e.target.value)} className='form-control' type='text'/>
                        </div>
                        <div className='mb-3'>
                            <label>
                                <strong>Điện thoại(*)</strong>
                            </label>
                            <input value={phone} onChange={(e)=> setPhone(e.target.value)} className='form-control' type='text'/>
                        </div>
                        <div className='mb-3'>
                            <label>
                                <strong>Tên tài khoản(*)</strong>
                            </label>
                            <input value={username} onChange={(e)=> setUsername(e.target.value)} className='form-control' type='text'/>
                        </div>
                        <div className='mb-3'>
                            <label>
                                <strong>Mật khẩu(*)</strong>
                            </label>
                            <input value={password} onChange={(e)=> setPassword(e.target.value)} className='form-control' type='text'/>
                        </div>
                        <div className='mb-3'>
                            <label>
                                <strong>Giới Tính(*)</strong>
                            </label>
                            <input value={gender} onChange={(e)=> setGender(e.target.value)} className='form-control' type='text'/>
                        </div>
                        <div className='mb-3'>
                            <label>
                                <strong>Địa chỉ(*)</strong>
                            </label>
                            <textarea value={address} onChange={(e)=> setAddress(e.target.value)} className='form-control'></textarea>
                        </div>
                        <div className='mb-3'>
                            <label>
                                <strong>Vai trò(*)</strong>
                            </label>
                            <input value={roles} onChange={(e)=> setRoles(e.target.value)} className='form-control' type='text'/>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='mb-3'>
                            <label>
                                <strong>Hình</strong>
                            </label>
                            <input id="image" className='form-control' type="file"/>
                        </div>
                        <div className='mb-3'>
                            <label>
                                <strong>Trạng thái</strong>
                            </label>
                            <select  value={status} onChange={(e)=> setStatus(e.target.value)} className='form-control'>
                                <option value="1">Xuất bản</option>
                                <option value="2">Chưa xuất bản</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
    );
}

export default UserCreate;