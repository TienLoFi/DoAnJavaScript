import { useEffect, useState } from "react";
import { FaEdit,  FaTrash } from "react-icons/fa";
import {  RiArrowGoBackFill } from 'react-icons/ri';
import { Link, useNavigate, useParams } from "react-router-dom";
import CategoryServices from "../../../services/CategoryServices"

function CategoryShow() {
    const navigator = useNavigate();
    const {id} = useParams();
    const [category, setCategory] = useState([])
    useEffect (function(){
          (async function(){
            await CategoryServices.getById(id)
            .then(function(result){
                setCategory(result.data.category)
            });
          })();
    },[]);
    async function CategoryDelete(id)
    {
      await CategoryServices.remove(id)
            .then(function(result){
                alert(result.data.message)
                navigator("/admin/category", {replace:true})
            });
    }
    return (
        <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-6">
              <strong className="text-danger text-uppercase">
                Chi tiết danh mục
              </strong>
            </div>
            <div className="col-6 text-end">
                <Link to="/admin/category" className="btn btn-info btn-sm me-2">
                    <RiArrowGoBackFill/> Về danh sách
                </Link>
                <Link className="btn btn-sm btn-primary me-1" to={"/admin/category/update/" + category.id}>
                      <FaEdit/>Sửa
                </Link>
                <button onClick={()=>CategoryDelete(category.id)} className="btn btn-sm btn-danger">
                    <FaTrash/>Xóa
                </button>
            </div>
          </div>
        </div>
        <div className="card-body">
            <table className="table table-border">
                <thead>
                    <tr>
                        <th className="text-center" style={{ width:200 }}>Tên trường</th>
                        <th>Giá trị</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <th className="text-center">ID:</th>
                      <td>{category.id}</td>
                    </tr>
                    <tr>
                      <th className="text-center">Tên danh mục</th>
                      <td>{category.name}</td>
                    </tr>
                    <tr>
                      <th className="text-center">Slug:</th>
                      <td>{category.slug}</td>
                    </tr>
                    <tr>
                      <th className="text-center">Mô tả</th>
                      <td>{category.metadesc}</td>
                    </tr>
                    <tr>
                      <th className="text-center">Ngày Tạo</th>
                      <td>{category.created_at}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    );
}

export default CategoryShow;