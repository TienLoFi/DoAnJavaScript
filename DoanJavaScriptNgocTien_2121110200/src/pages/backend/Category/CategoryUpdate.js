import CategoryServices from "../../../services/CategoryServices"
import { Link, useNavigate, useParams } from 'react-router-dom';
import {RiArrowGoBackFill} from 'react-icons/ri';
import { useEffect, useState } from 'react';

function CategoryUpdate() {
    const [categories, setCategories] = useState([]);
    const {id} = useParams();
    const navigator = useNavigate();
    const [name, setName] = useState("");
    const [metakey, setMetakey] = useState("");
    const [metadesc, setMetadesc] = useState("");
    const [parent_id, setParentId] = useState(0);
    const [sort_order, setSortOrder] = useState(0);
    const [status, setStatus] = useState(1);

    function CategoryEdit(event)
    {
        event.preventDefault();//không load lại trang
        const image = document.querySelector("#image");
        var category = new FormData();
        category.append("name", name)
        category.append("metakey", metakey)
        category.append("metadesc", metadesc)
        category.append("parent_id", parent_id)
        category.append("sort_order", sort_order)
        category.append("status", status)
        if(image.files.length === 0)
        {
            category.append("image", "")
        }
        else
        {
            category.append("image", image.files[0])
        }
        CategoryServices.update(category, id)
        .then(function(result) {
            alert(result.data.message);
            navigator("/admin/category", {replace:true})
        });
    }
    useEffect (function(){
          (async function(){
            await CategoryServices.getAll()
            .then(function(result){
                setCategories(result.data.categories)
            });
          })();
    },[]);
    useEffect (function(){
        (async function(){
          await CategoryServices.getById(id)
          .then(function(result){
              const tmp = result.data.category
              setName(tmp.name);
              setMetakey(tmp.metakey);
              setMetadesc(tmp.metadesc);
              setParentId(tmp.parent_id);
              setSortOrder(tmp.sort_order);
              setStatus(tmp.status);
          });
        })();
    },[]);
    
    return (
    <form method='post' onSubmit={CategoryEdit}>
        <div className="card">
            <div className="card-header">
            <div className="row">
                <div className="col-6">
                <strong className="text-danger text-uppercase">
                    Cập nhật danh mục sản phẩm
                </strong>
                </div>
                <div className="col-6 text-end">
                <Link to="/admin/category" className="btn btn-info btn-sm me-2">
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
                                <strong>Tên danh mục(*)</strong>
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
                                <strong>Danh mục cha</strong>
                            </label>
                            <select  value={parent_id} onChange={(e)=> setParentId(e.target.value)} className='form-control'>
                                <option value="0">Cấp cha</option>
                                {categories.map(function(cat, index){
                                    return <option key={index} value={cat.id}>{cat.name}</option>
                                })}
                            </select>
                        </div>
                        <div className='mb-3'>
                            <label>
                                <strong>Sắp xếp</strong>
                            </label>
                            <select  value={sort_order} onChange={(e)=> setSortOrder(e.target.value)} className='form-control'>
                                <option value="0">None</option>
                                {categories.map(function(cat, index){
                                    return <option key={index} value={cat.sort_order+1}>Sau: {cat.name}</option>
                                })}
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

export default CategoryUpdate;