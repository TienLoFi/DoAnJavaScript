import { Link, useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useState, useEffect } from "react";
import BrandServices from '../../../services/BrandServices';
import CategoryServices from '../../../services/CategoryServices';

import ProductServices from "../../../services/ProductServices";
function ProductCreate() {
  const navigate=useNavigate();
  const [name, setName] = useState("");
  const [category_id, setCategoryId] = useState("");
  const [brand_id, setBrandId] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");
  const [price_sale, setPricesale] = useState("");
  const [metakey, setMetakey] = useState("");
  const [metadesc, setMetadesc] = useState("");
  const [qty, setQty] = useState("");
  const [status, setStatus] = useState(1);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  function ProductStore(event) {

    event.preventDefault(); //Không load lại trang
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

   
    
   ProductServices.create(product).then(function(result){
    alert("Bạn đã thêm sản phẩm thành công");
      navigate("/admin/product",{replace:true});
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
  return (
    <form method="post" onSubmit={ProductStore}>
      <div className="card">
      <div className="card-header">
        <div className="row">
        
            <div className="col-md-6">
             
                <strong className="text-danger">Thêm Sản Phẩm</strong>
              </div>
              <div className="col-md-6 text-end">
                <Link
                  to="/admin/product"
                  className="btn btn-outline-info btn-sm me-2"
                >
                  <RiArrowGoBackFill />
                  Về danh sách
                </Link>
                <button
                  type="submit"
                  className="btn btn-outline-success btn-sm"
                >
                  Lưu
                </button>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-9">
                <div className="mb-3">
                  <label>
                  <strong>Tên Sản Phẩm(*)</strong>
                  </label>
                  <input
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    type="text"
                  />
                </div>
                <div className="mb-3">
                <label>
                  <strong> Chi Tiết Sản Phẩm </strong>
                </label>
                <textarea
                  type="text"
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                  className="form-control"
                  placeholder="Nhập Chi Tiết Sản Phẩm"
                />
              </div>
                
              <div className="mb-3">
                <label>
                  <strong>Từ Khóa(*)</strong>
                </label>
                <input
                  value={metakey}
                  onChange={(e) => setMetakey(e.target.value)}
                  className="form-control"
                ></input>
              </div>
              <div className="mb-3">
                <label>
                  <strong>Mô Tả</strong>
                </label>
                <textarea
                  value={metadesc}
                  onChange={(e) => setMetadesc(e.target.value)}
                  className="form-control"
                ></textarea>
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
              <div className="mb-3">
                <label>
                  <strong>Giá Sản Phẩm(*)</strong>
                </label>
                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="form-control"
                  type="number"
                ></input>
              </div>
              <div className="mb-3">
                <label>
                  <strong>Giá Khuyến Mãi(*)</strong>
                </label>
                <input
                  value={price_sale}
                  onChange={(e) => setPricesale(e.target.value)}
                  className="form-control"
                  type="number"
                ></input>
              </div>
              <label>
                <strong>Số Lượng(*)</strong>
              </label>
              <input
                value={qty}
                onChange={(e) => setQty(e.target.value)}
                className="form-control"
              ></input>
              <div className="mb-3">
                <label>
                  <strong>Hình</strong>
                </label>
                <input
                  name="image"
                  id="image"
                  className="form-control"
                  type="file"
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Trạng thái </strong>
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="form-control"
                >
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

export default ProductCreate;
