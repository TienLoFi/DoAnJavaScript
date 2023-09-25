import { Link, useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useState, useEffect } from "react";
import CategoryServices from "../../../services/CategoryServices";
import "../../../assets/css/category.css";
function CategoryCreate() {
  const navigator = useNavigate();
  const [name, setName] = useState("");
  const [metakey, setMetakey] = useState("");
  const [metadesc, setMetadesc] = useState("");
  const [parent_id, setParentId] = useState(0);
  const [sort_order, setSortOrder] = useState(0);
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState(1);

  function CategoryStore(event) {
    event.preventDefault(); //KHÔNG LÓAD LẠI TRANG
    const image = document.querySelector("#image");

    var category = new FormData();
    category.append("name", name);
    category.append("metakey", metakey);
    category.append("metadesc", metadesc);
    category.append("parent_id", parent_id);
    category.append("sort_order", sort_order);
    category.append("status", status);  
    if (image.files.lenght === 0) {
      category.append("image", "");

    } else {
      category.append("image", image.files[0]);

    }

    CategoryServices.create(category).then(function (result) {
      alert("Thêm Thành Công");
      navigator("/admin/category", { replace: true });
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

  return (
    <form method="post" onSubmit={CategoryStore}>
      <div className="card">
      <div className="card-header">
        <div className="row">
        
            <div className="col-md-6">
             
                <strong className="text-primary">Thêm Danh Mục</strong>
              </div>
              <div className="col-md-6 text-end">
                <Link
                  to="/admin/category"
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
                    <strong>Tên Thương Hiệu(*)</strong>
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
                    <strong>Từ Khóa(*)</strong>
                  </label>
                  <textarea
                    value={metakey}
                    onChange={(e) => setMetakey(e.target.value)}
                    className="form-control"
                  ></textarea>
                </div>
                
                <div className="mb-3">
                  <label htmFor="sort_order">
                    <strong>Mô Tả(*)</strong>
                  </label>
                  <textarea
                    value={metadesc}
                    onChange={(e) => setMetadesc(e.target.value)}
                    className="form-control"
                  ></textarea>
                </div>
              </div>
              <div className="col-md-3">
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
                <div className="mb-3">
                  <label>
                    <strong>Hình(*)</strong>
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
                    <strong>Trạng Thái</strong>
                  </label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="form-control"
                  >
                    <option value="1">Xuất Bản</option>
                    <option value="2">Chưa Xuất Bản</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
       
          </div>
        
    </form>
  );
}

export default CategoryCreate;
