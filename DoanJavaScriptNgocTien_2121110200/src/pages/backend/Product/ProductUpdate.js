import { Link, useNavigate, useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';
import ProductServices from '../../../services/ProductServices';
import { RiArrowGoBackFill } from "react-icons/ri";
import BrandServices from '../../../services/BrandServices';
import CategoryServices from '../../../services/CategoryServices';


function ProductUpdate() {
  const navigate=useNavigate();
  const {id}=useParams();
  const [name, setName] = useState("");
  const [category_id, setCategoryId] = useState(0);
  const [brand_id, setBrandId] = useState(0);
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");
  const [price_sale, setPricesale] = useState("");
  const [metakey, setMetakey] = useState("");
  const [metadesc, setMetadesc] = useState("");
  const [qty, setQty] = useState("");
  const [status, setStatus] = useState(1);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

    function ProductEdit(event)
    {
        event.preventDefault();//không load lại trang
        const image = document.querySelector("#image");
        var product = new FormData();
        product.append("name",name);
        product.append("category_id",category_id);
        product.append("brand_id",brand_id);
        product.append("detail",detail);
        product.append("price",price);
        product.append("price_sale",price_sale);
        product.append("metakey",metakey);
        product.append("metadesc",metadesc);
        product.append("qty",qty);
        product.append("status",status);
        if (image.files.length === 0) {
          product.append("image", "");
        } else {
          product.append("image", image.files[0]);
        }
    
       
       ProductServices.update(product, id)
        .then(function(result) {
            alert(result.data.message);
            navigate("/admin/product", {replace:true})
        }); 
    }

    useEffect (function(){
        (async function(){
          await BrandServices.getAll()
          .then(function(result){
              setBrands(result.data.brands)
          });
        })();
    },[]);
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
      await ProductServices.getById(id)
      .then(function(result){
          const tmp = result.data.product
          setCategoryId(tmp.category_id);
          setBrandId(tmp.brand_id);
          setName(tmp.name);
          setPrice(tmp.price);
          setPricesale(tmp.price_sale);
          setQty(tmp.qty);
          setDetail(tmp.detail);
          setMetakey(tmp.metakey);
          setMetadesc(tmp.metadesc);
          setStatus(tmp.status);
      });
    })();
    },[]);
    return (
    <form method='product' onSubmit={ProductEdit}>
        <div className="card">
            <div className="card-header">
            <div className="row">
                <div className="col-6">
                <strong className="text-danger text-uppercase">
                    Cập Nhật Sản Phẩm 
                </strong>
                </div>
                <div className="col-6 text-end">
                <Link to="/admin/product" className="btn btn-info btn-sm me-2">
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
                                <strong>Tên sản phẩm(*)</strong>
                            </label>
                            <input name='name' value={name} onChange={(e)=> setName(e.target.value)} className='form-control' type='text'/>
                        </div>
                        <div className='mb-3'>
                            <label>
                                <strong>Giá(*)</strong>
                            </label>
                            <input value={price} onChange={(e)=> setPrice(e.target.value)} className='form-control' type='number'/>
                        </div>
                        <div className='mb-3'>
                            <label>
                                <strong>Khuyến mãi</strong>
                            </label>
                            <input value={price_sale} onChange={(e)=> setPricesale(e.target.value)} className='form-control' type='number'/>
                        </div>
                        <div className='mb-3'>
                            <label>
                                <strong>Chi tiết(*)</strong>
                            </label>
                            <textarea value={detail} onChange={(e)=> setDetail(e.target.value)} className='form-control'></textarea>
                        </div>
                        <div className='mb-3'>
                            <label>
                                <strong>Số lượng(*)</strong>
                            </label>
                            <input value={qty} onChange={(e)=> setQty(e.target.value)} className='form-control' type='text'/>
                        </div>
                        <div className='mb-3'>
                            <label>
                                <strong>Từ khóa(*)</strong>
                            </label>
                            <textarea value={metakey} onChange={(e)=> setMetakey(e.target.value)}  className='form-control'></textarea>
                        </div>
                        <div className='mb-3'>
                            <label>
                                <strong>Mô tả(*)</strong>
                            </label>
                            <textarea value={metadesc} onChange={(e)=> setMetadesc(e.target.value)} className='form-control'></textarea>
                        </div>
                    </div>
                    <div className='col-md-3'>
                    <div className='mb-3'>
                            <label>
                                <strong>Mã danh mục(*)</strong>
                            </label>
                            <select  value={category_id} onChange={(e)=> setCategoryId(e.target.value)} className='form-control'>
                                <option value="0">None</option>
                                {categories.map(function(category, index){
                                    return <option key={index} value={category.id}>{category.name}</option>
                                })}
                            </select>
                    </div>
                    <div className='mb-3'>
                            <label>
                                <strong>Mã thương hiệu(*)</strong>
                            </label>
                            <select  value={brand_id} onChange={(e)=> setBrandId(e.target.value)} className='form-control'>
                                <option value="0">None</option>
                                {brands.map(function(brand, index){
                                    return <option key={index} value={brand.id}>{brand.name}</option>
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

export default ProductUpdate;