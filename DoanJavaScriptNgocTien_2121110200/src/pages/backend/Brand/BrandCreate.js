import { Link, useNavigate } from 'react-router-dom';
import {FaPlus} from 'react-icons/fa';
import { useState } from 'react';
import BrandServices from '../../../services/BrandServices';

function BrandCreate() {
    const navigator = useNavigate();
    const [name, setName] = useState("");
    const [metakey, setMetakey] = useState("");
    const [metadesc, setMetadesc] = useState("");
    const [sort_order, setSortOrder] = useState(0);
    const [status, setStatus] = useState(1);

    function BrandStore(event)
    {
        event.preventDefault();//không load lại trang
        const image = document.querySelector("#image");
        var brand = new FormData();
        brand.append("name", name)
        brand.append("metakey", metakey)
        brand.append("metadesc", metadesc)
        brand.append("sort_order", sort_order)
        brand.append("status", status)
        brand.append("image", image.files[0])
        BrandServices.create(brand)
        .then(function(result) {
            alert(result.data.message);
            navigator("/admin/brand", {replace:true})
        });
        
    }
    return (
    <form method='post' onSubmit={BrandStore}>
        <div className="card">
            <div className="card-header">
            <div className="row">
                <div className="col-6">
                <strong className="text-danger text-uppercase">
                    Thêm thương hiệu
                </strong>
                </div>
                <div className="col-6 text-end">
                <Link to="/admin/brand" className="btn btn-info btn-sm me-2">
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
                                <strong>Tên thương hiệu(*)</strong>
                            </label>
                            <input name='name' value={name} onChange={(e)=> setName(e.target.value)} className='form-control' type='text'/>
                        </div>
                        <div className='mb-3'>
                            <label>
                                <strong>Từ khóa(*)</strong>
                            </label>
                            <textarea  value={metakey} onChange={(e)=> setMetakey(e.target.value)}  className='form-control'></textarea>
                        </div>
                        <div className='mb-3'>
                            <label>
                                <strong>Mô tả(*)</strong>
                            </label>
                            <textarea  value={metadesc} onChange={(e)=> setMetadesc(e.target.value)} className='form-control'></textarea>
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

export default BrandCreate;