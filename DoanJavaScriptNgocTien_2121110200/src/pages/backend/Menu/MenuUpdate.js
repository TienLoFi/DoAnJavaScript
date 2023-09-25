import { Link, useNavigate, useParams } from 'react-router-dom';
import { RiArrowGoBackFill } from "react-icons/ri";import { useEffect, useState } from 'react';
import MenuServices from '../../../services/MenuServices';

function MenuUpdate() {
    const {id} = useParams();
    const [menus, setMenus] = useState([]);
    const navigator = useNavigate();
    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [parent_id, setParentId] = useState(0);
    const [type, setType] = useState("");
    const [position, setPosition] = useState("");
    const [status, setStatus] = useState(1);

    function MenuEdit(event)
    {
        event.preventDefault();//không load lại trang
        var menu = new FormData();
        menu.append("name", name)
        menu.append("link", link)
        menu.append("parent_id", parent_id)
        menu.append("position", position)
        menu.append("type", type)
        menu.append("status", status)
        MenuServices.update(menu, id)
        .then(function(result) {
            alert(result.data.message);
            navigator("/admin/menu", {replace:true})
        });
    }
    useEffect(function(){
      (async function(){
        await MenuServices.getAll()
        .then(function(result){
            setMenus(result.data.menus)
        });
      })();
    },[])
    useEffect (function(){
        (async function(){
          await MenuServices.getById(id)
          .then(function(result){
              const tmp = result.data.menu
              setName(tmp.name);
              setLink(tmp.link);
              setParentId(tmp.parent_id);
              setType(tmp.type);
              setPosition(tmp.position);
              setStatus(tmp.status);
          });
        })();
    },[]);
    return (
    <form method='post' onSubmit={MenuEdit}>
        <div className="card">
            <div className="card-header">
            <div className="row">
                <div className="col-6">
                <strong className="text-danger text-uppercase">
                    Thêm menu
                </strong>
                </div>
                <div className="col-6 text-end">
                <Link to="/admin/menu/create" className="btn btn-info btn-sm me-2">
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
                                <strong>Tên menu(*)</strong>
                            </label>
                            <input name='name' value={name} onChange={(e)=> setName(e.target.value)} className='form-control' type='text'/>
                        </div>
                        <div className='mb-3'>
                            <label>
                                <strong>Link(*)</strong>
                            </label>
                            <input  value={link} onChange={(e)=> setLink(e.target.value)}  className='form-control'/>
                        </div>
                        <div className='mb-3'>
                            <label>
                                <strong>Loại(*)</strong>
                            </label>
                            <input  value={type} onChange={(e)=> setType(e.target.value)} className='form-control'/>
                        </div>
                        <div className='mb-3'>
                            <label>
                                <strong>Vị trí(*)</strong>
                            </label>
                            <input  value={position} onChange={(e)=> setPosition(e.target.value)} className='form-control'/>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='mb-3'>
                                <label>
                                    <strong>Mục cha(*)</strong>
                                </label>
                                <select  value={parent_id} onChange={(e)=> setParentId(e.target.value)} className='form-control'>
                                    <option value="0">None</option>
                                    {menus.map(function(menu, index){
                                    return <option key={index} value={menu.id}>{menu.name}</option>
                                })}
                                </select>               
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

export default MenuUpdate;