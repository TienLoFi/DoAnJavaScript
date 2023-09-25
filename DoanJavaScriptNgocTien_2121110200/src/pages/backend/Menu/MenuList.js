import { Link } from 'react-router-dom';
import {FaEdit, FaPlus, FaRegEye, FaTrash} from 'react-icons/fa';
import { useEffect, useState } from 'react';
import MenuServices from '../../../services/MenuServices';


function MenuList() {
  const [statusdel, setStatusDel] = useState([]);
    const [menus, setMenus] = useState([]);
    useEffect(function(){
      (async function(){
        await MenuServices.getAll()
        .then(function(result){
            setMenus(result.data.menus)
        });
      })();
    },[statusdel])
    async function MenuDelete(id)
    {
      await MenuServices.remove(id)
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
              Danh sách menu
            </strong>
          </div>
          <div className="col-6 text-end">
            <Link to="/admin/menu/create" className="btn btn-success btn-sm">
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
              <th className="text-center">Tên menu</th>
              <th className="text-center" style={{ width:200 }}>Link</th>
              <th className="text-center" style={{ width:100 }}>Parent_id</th>
              <th className="text-center" style={{ width:100 }}>Position</th>
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
          {menus.map(function(menu, index){
            return(
              <tr>
              <td className="text-center">
                <input type="checkbox"/>
              </td>
              <td className="text-center">{menu.name}</td>
              <td className="text-center">{menu.link}</td>
              <td className="text-center">{menu.parent_id}</td>
              <td className="text-center">{menu.position}</td>
              <td className="text-center">{menu.created_at}</td>
              <td className="text-center">
                        <Link className="btn btn-sm btn-info me-1" to={"/admin/menu/show/"+menu.id}>
                            <FaRegEye/>
                        </Link>
                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/menu/update/"+menu.id}>
                            <FaEdit/>
                        </Link>
                        <button onClick={()=>MenuDelete(menu.id)} className="btn btn-sm btn-danger">
                            <FaTrash/>
                        </button>
                        
                    </td>
              <td className="text-center">{menu.id}</td>
            </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MenuList;