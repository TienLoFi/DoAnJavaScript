import { Link, useParams } from "react-router-dom";
import { FaChevronLeft,FaTrashAlt,FaEdit } from "react-icons/fa";
import { useState, useEffect } from "react";
import ProductServices from "../../../services/ProductServices";

function ProductShow() {
    const { id } = useParams("id");
    const [product, setProducts] = useState([]);
    useEffect(function () {
      (async function () {
        await ProductServices.getById(id).then(function (result) {
            setProducts(result.data.product);
        });
      })();
    }, []);  
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-primary fs-4">
             Chi Tiết danh mục 
            </strong>
          </div>
          <div className="col-6 text-end">
            <Link className="btn btn-sm btn-success me-2" to="/admin/product">
              <FaChevronLeft />
             Về Danh Sách
            </Link>
            <Link className="btn btn-sm btn-success me-2" to="/admin/product">
              <FaEdit />Sửa  </Link>
            <button className="btn btn-sm btn-danger me">

              <FaTrashAlt/>
            </button>
          </div>
        </div>  
      </div>
      <ul className="list-group list-group-flush text-center">
        <li className="list-group-item">
          <h5>ID:</h5>
          <p>{product.id}</p>
        </li>
        <li className="list-group-item">
          <h5>Tên Loại Sản Phẩm:</h5>
          <p>{product.name}</p>
        </li>
        <li className="list-group-item">
          <h5>Số Lượng:</h5>
          <p>{product.slug}</p>
        </li>
        <li className="list-group-item">
          <h5>Từ khóa:</h5>
          <p>{product.metakey}</p>
        </li>
        <li className="list-group-item">
          <h5>Mô tả:</h5>
          <p>{product.status}</p>
        </li>
        <li className="list-group-item">
          <h5>Ngày tạo:</h5>
          <p>{product.created_at}</p>
        </li>
        <li className="list-group-item">
          <h5>Trạng thái:</h5>
          <p>{product.slug}</p>
        </li>
        <li className="list-group-item">
          <h5>Hình ảnh:</h5>
          <p>{product.image}</p>
        </li>
      </ul>
    </div>
  );
}

export default ProductShow;
