import { Link } from "react-router-dom";
import { FaPlus, FaRegEye, FaEdit, FaTrash } from "react-icons/fa";

import { useState, useEffect } from "react";
import CategoryServices from "../../../services/CategoryServices";
import {  ImEye  } from "react-icons/im"; 
import {  BsTrash3Fill  } from "react-icons/bs"; 
import { urlImage } from "../../../config";

function CategoryList() {
    const [categories, setCategory] = useState([]);
    const [statusdel, setStatuesDel] = useState(0);
  useEffect(function(){
  (async function(){
    await CategoryServices.getAll().then(function(result){
      setCategory(result.data.categories);   
    });
 })();
  },[statusdel]);
  const categoryDelete = async (id) => {
    try {
      const result = await CategoryServices.remove(id);
      alert("Xóa Thành Công");
      setStatuesDel(id);
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };
  return (
    <div className="card">
    <div className="card-header">
      <div className="row">
        <div className="col-6">
          <strong className="text-primary"> Danh Mục </strong>
        </div>
        <div className="col-6 text-end">
          <Link className="btn btn-sm btn-success" to="/admin/category/create">
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
            <th style={{ width: 130 }} className="text-center">Hình</th>
            <th>Tên Danh Mục</th>
            <th>Slug</th>
            <th>Ngày Tạo</th>
            <th>Chức Năng</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(function (category, index) {
            return (
              <tr key={index}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <img className="img-fluid" src={urlImage+"category/"+category.image} alt ={category.name} />
                </td>
                <td>{category.name}</td>
                <td>{category.slug}</td>
                <td>{category.created_at}</td>
                <td>
                  <Link
                    className="btn btn-sm btn-info me-1"
                    to={"show/"+category.id}
                  >
                    <ImEye />
                  </Link>
                  <Link
                    className="btn btn-sm btn-primary me-1"
                    to={"update/"+category.id}
                  >
                    <FaEdit />
                  </Link>
                  <button onClick={()=>categoryDelete(category.id)} className="btn btn-sm btn-danger">
                      <FaTrash />
                    </button>
                </td>
                <td>{category.id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
);
}

export default CategoryList;
