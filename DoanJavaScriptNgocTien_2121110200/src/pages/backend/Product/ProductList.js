import { Link } from "react-router-dom";
import { FaPlus, FaEdit } from "react-icons/fa";

import { useState, useEffect } from "react";
import ProductServices from "../../../services/ProductServices";
import {  ImEye  } from "react-icons/im"; 
import {  BsTrash3Fill  } from "react-icons/bs"; 
import { urlImage } from "../../../config";
function ProductList() {
  const [products, setProducts] = useState([]);
  const [statusdel, setStatuesDel] = useState(0);
  useEffect(function(){
  (async function(){
    await ProductServices.getAll().then(function(result){
      setProducts(result.data.products);   
    });
 })();
  }, [statusdel]);
  async function ProductDelete(id) {
    await ProductServices.remove(id).then(function(result) {
      alert("Xóa Thành Công");
      setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
    });
  }
  
  return (
    <div className="card">
    <div className="card-header">
      <div className="row">
        <div className="col-6">
          <strong className="text-danger"> Sản Phẩm </strong>
        </div>
        <div className="col-6 text-end">
          <Link className="btn btn-sm btn-success" to="/admin/product/create">
            <FaPlus />
            Thêm
          </Link>
        </div>
      </div>
    </div>
    <div className="card-body">
      <table className="table table-striped table-bordered table-hover">
      <thead class="table-dark">
          <tr>
            <th>#</th>
            <th style={{ width: 130 }} className="text-center"> Hình</th>
            <th>Thương Hiệu</th>
            <th>Danh Mục</th>
            <th>Tên Sản Phẩm </th>
            <th>Slug</th>
            <th>Chi Tiết Sản Phẩm</th>
            <th>Số Lượng </th>
            <th>Giá</th>
            <th>Ngày Tạo</th>
            <th>ID</th>
            <th style={{ width: 160 }} className="text-center">
                Chức năng
              </th>
   
          </tr>
        </thead>
        <tbody>
          {products.map(function (product, index) {
            return (
              <tr key={index}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <img className="img-fluid" src={urlImage+"product/"+product.image} alt ={product.name} />
                </td>
                <td>{product.brand_id}</td>
                <td>{product.category_id}</td>

                <td>{product.name}</td>
                <td>{product.slug}</td>
                <td>{product.detail}</td>
                <td>{product.slug}</td>
                <td>{product.price}</td>
                <td>{product.created_at}</td>
                <td>{product.id}</td>
                <td>
                  <Link
                    className="btn btn-sm btn-info me-1"
                    to={"show/"+product.id}
                  >
                    <ImEye />
                  </Link>
                  <Link
                    className="btn btn-sm btn-primary me-1"
                    to={"update/"+product.id}
                  >
                    <FaEdit />
                  </Link>
                  <button onClick={()=>ProductDelete(product.id)} className="btn btn-sm btn-danger">
                      <BsTrash3Fill />
                    </button>
                    
                  </td>
         
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
);
}

export default ProductList;
