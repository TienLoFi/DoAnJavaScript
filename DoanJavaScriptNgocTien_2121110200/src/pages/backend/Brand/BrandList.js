import { Link } from 'react-router-dom';
import {FaEdit, FaPlus, FaRegEye, FaTrash} from 'react-icons/fa';
import { useEffect, useState } from 'react';
import BrandServices from '../../../services/BrandServices';
import { urlImage } from '../../../config';


function BrandList() {
  const [statusdel, setStatusDel] = useState([]);
    const [brands, setBrands] = useState([]);
    useEffect(function(){
      (async function(){
        await BrandServices.getAll()
        .then(function(result){
            setBrands(result.data.brands)
        });
      })();
    },[statusdel])
    async function BrandDelete(id)
    {
      await BrandServices.remove(id)
            .then(function(result){
                alert(result.data.message)
                setStatusDel(id)
            });
    }
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-danger text-uppercase">
              Danh sách thương hiệu
            </strong>
          </div>
          <div className="col-6 text-end">
            <Link to="/admin/brand/create" className="btn btn-success btn-sm">
              <FaPlus/> Thêm
            </Link>
          </div>
        </div>
      </div>
      <div className="card-body">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th style={{ width: 30 }} className="text-center">
                #
              </th>
              <th style={{ width: 130 }} className="text-center">
                Hinh
              </th>
              <th className="text-center">Tên thương hiệu</th>
              <th className="text-center">Slug</th>
              <th style={{ width:300 }} className="text-center">
                Ngày tạo
              </th>
              <th style={{ width: 160 }} className="text-center">
                Chức năng
              </th>
              <th style={{ width: 30 }} className="text-center">
                ID
              </th>
            </tr>
          </thead>
          <tbody>
          {brands.map(function(brand, index){
            return(
              <tr>
              <td className="text-center">
                <input type="checkbox"/>
              </td>
              <td className="text-center">
               <img className="img-fluid" src={urlImage + "brand/" + brand.image} alt="hinh"/>
              </td>
              <td className="text-center">{brand.name}</td>
              <td className="text-center">{brand.slug}</td>
              <td className="text-center">{brand.created_at}</td>
              <td className="text-center">
                        <Link className="btn btn-sm btn-info me-1" to={"/admin/brand/show/"+brand.id}>
                            <FaRegEye/>
                        </Link>
                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/brand/update/"+brand.id}>
                            <FaEdit/>
                        </Link>
                        <button onClick={()=>BrandDelete(brand.id)} className="btn btn-sm btn-danger">
                            <FaTrash/>
                        </button>
                        
                    </td>
              <td className="text-center">{brand.id}</td>
            </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BrandList;