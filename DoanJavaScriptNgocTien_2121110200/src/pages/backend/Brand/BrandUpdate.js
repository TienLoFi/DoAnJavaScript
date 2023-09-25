import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {  FaSave } from 'react-icons/fa';
import {  RiArrowGoBackFill } from 'react-icons/ri';

import BrandServices from '../../../services/BrandServices';

function BrandUpdate() {
    const {id}=useParams();
    const navigate=useNavigate();
    const [name, setName] = useState('')
    const [sort_order, setSort_order] = useState('')
    const [slug, setSlug] = useState('')
    const [metakey, setMetakey] = useState('')
    const [metadesc, setMetadesc] = useState('')
    const [status, setStatus] = useState('0')
    async function brandUpdate(event)
    {

       event.preventDefault();
       const image=document.querySelector("#image")
       var brand = new FormData();
       brand.append("name",name)
       brand.append("sort_order",sort_order)
       brand.append("slug",slug)
       brand.append("metakey",metakey)
       brand.append("metadesc",metadesc)                                                                               
       brand.append("status",status)
       if(image.files.length===0)
       {
           brand.append('image',"")
       }
       else
       {
           brand.append("image",image.files[0])
       }
       await BrandServices.update(brand,id)
       .then(function(result){
           alert(result.data.message);
           navigate('/admin/brand', {replace:true});
       });
   }
    
   useEffect(function(){
    (async function(){
        await BrandServices.getById(id).then(function(result){
            const tpm =result.data.brand;
            setName(tpm.name);
            setSort_order(tpm.sort_order);
            setSlug(tpm.slug);
            setMetakey(tpm.metakey);
            setMetadesc(tpm.metadesc);    
            setStatus(tpm.status);
        });
    })();
},[]);
return (
    <form method='brand' onSubmit={brandUpdate}>
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger">
                            Thêm brand
                        </strong>

                    </div>
                    <div className="col-md-6 text-end">
                        <Link className='btn btn-info btn-sm me-2 ' to='/admin/brand'>
                            <RiArrowGoBackFill />Quay về danh sách
                        </Link>
                        <button type='submit' className="btn btn-sm btn-success">
                            <FaSave />Lưu
                        </button>
                    </div>
                </div>
            </div>
            <div className="card-body"><div className="row">
                    <div className="col-md-9">

                        <div className="mb-3">
                            <label htmFor="name">
                                <strong> Name</strong>
                            </label>
                            <input type="text"
                                name="topic_id"
                                value={name}
                                onChange={ (e)=>setName(e.target.value)}
                                className='form-control' />
                        </div>

                        <div className="mb-3">
                            <label htmFor="name">
                                <strong> sort_order</strong>
                            </label>
                            <input type="text"
                                name="title"
                                value={sort_order}
                                onChange={ (e)=>setSort_order(e.target.value)}
                                className='form-control' />
                        </div>

                        <div className="mb-3">
                            <label htmFor="name">
                                <strong> SLug</strong>
                            </label>
                            <input type="text"
                                name="slug"
                                value={slug}
                                onChange={ (e)=>setSlug(e.target.value)}
                                className='form-control' />
                        </div>


                   

                        <div className="mb-3">
                            <label htmFor="metakey">
                                <strong> Từ khóa</strong>
                            </label>
                            <textarea
                                name="metakey"  
                                value={metakey}
                                onChange={ (e)=>setMetakey(e.target.value)}className='form-control' >                                     
                                </textarea>
                        </div>

                        <div className="mb-3">
                            <label htmFor="metadesc">
                                <strong> Mô tả</strong>
                            </label>
                            <textarea 
                            name="metadesc" 
                             value={metadesc}
                             onChange={ (e)=>setMetadesc(e.target.value)}
                            className='form-control' ></textarea>

                        </div>
                    </div>

                    <div className="col-md-3">
                       

                        <div className="mb-3">
                            <label htmFor="image">
                                <strong> Hình ảnh </strong>
                            </label>
                            <input type="file"
                                name="image"
                                 id="image"
                                className='form-control' />
                        </div>

                        <div className="mb-3">
                            <label htmFor="status">
                                <strong> Trạng thái</strong>
                            </label>
                            <select name="status" 
                             value={status}
                             onChange={ (e)=>setStatus(e.target.value)}
                             className='form-control'>
                                <option value="1">Xuất bảng</option>
                                <option value="2">Chưa xuất bảng</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
);
}


export default BrandUpdate;