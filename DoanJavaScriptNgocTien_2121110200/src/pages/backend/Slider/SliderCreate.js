import { Link, useNavigate } from 'react-router-dom';
import {  RiArrowGoBackFill } from 'react-icons/ri';
import { useState } from 'react';
import SliderServices from '../../../services/SliderServices';

function SliderCreate() {
    const navigator = useNavigate();
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [sort_order, setSortOrder] = useState(0);
    const [link, setLink] = useState("");
    const [status, setStatus] = useState(1);

    function SliderStore(event)
    {
        event.preventDefault();//không load lại trang
        const image = document.querySelector("#image");
        var slider = new FormData();
        slider.append("name", name)
        slider.append("position", position)
        slider.append("link", link)
        slider.append("sort_order", sort_order)
        slider.append("status", status)
        slider.append("image", image.files[0])
        SliderServices.create(slider)
        .then(function(result) {
            alert(result.data.message);
            navigator("/admin/slider", {replace:true})
        });
        
    }
    return (
    <form method='post' onSubmit={SliderStore}>
        <div className="card">
            <div className="card-header">
            <div className="row">
                <div className="col-6">
                <strong className="text-danger text-uppercase">
                    Thêm slider
                </strong>
                </div>
                <div className="col-6 text-end">
                <Link to="/admin/slider" className="btn btn-info btn-sm me-2">
                    <RiArrowGoBackFill/> Về danh sách
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
                                <strong>Tên slider(*)</strong>
                            </label>
                            <input name='name' value={name} onChange={(e)=> setName(e.target.value)} className='form-control' type='text'/>
                        </div>
                        <div className='mb-3'>
                            <label>
                                <strong>Link(*)</strong>
                            </label>
                            <textarea  value={link} onChange={(e)=> setLink(e.target.value)}  className='form-control'></textarea>
                        </div>
                        <div className='mb-3'>
                            <label>
                                <strong>Vị trí(*)</strong>
                            </label>
                            <textarea  value={position} onChange={(e)=> setPosition(e.target.value)} className='form-control'></textarea>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='mb-3'>
                            <label>
                                <strong>Sắp xếp</strong>
                            </label>
                            <select  value={sort_order} onChange={(e)=> setSortOrder(e.target.value)} className='form-control'>
                                <option value="0">None</option>
                            </select>
                        </div>
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

export default SliderCreate;
