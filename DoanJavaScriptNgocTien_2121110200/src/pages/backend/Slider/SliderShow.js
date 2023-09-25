import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { Link, useNavigate, useParams } from "react-router-dom";
import SliderServices  from '../../../services/SliderServices';
import { useEffect, useState } from "react";

function SliderShow(){
    const navigate=useNavigate();
    const {id} = useParams();
    const [slider ,setSlider ]=useState([]);

    useEffect(function(){
        (async function(){
            await SliderServices.getById(id).then(function(result){
                setSlider(result.data.slider);
            });
        })();
    },[]);
    async function SliderDelete(id)
    {
        await SliderServices.remove(id).then(function(result){
            alert(result.data.message);
            navigate('/admin/slider', {replace:true});

          });
    }
    return ( 
        <div className="card">
        <div className="card-header">
            <div className="row">
                <div className="col-md-6">
                    <strong className="text-danger">
                        Chi tiết SLIDER
                    </strong>

                </div>
                <div className="col-md-6 text-end">
                    <Link className='btn btn-info btn-sm me-2 ' to='/admin/slider'>
                        <FaArrowLeft />Quay về danh sách
                    </Link>
                    <Link className='btn btn-info btn-sm me-2 ' to={"/admin/slider/update/"+slider.id}>
                        <MdOutlineSettingsBackupRestore />Cập nhật
                    </Link>
                    <button className='btn btn-danger btn-sm' onClick={()=>SliderDelete(slider.id)}>
                        <TiDeleteOutline />Xóa
                    </button>
                </div>
            </div>
        </div>
        <div className="card-body">
                <table className="table table-bordered">

                    <thead>
                        <tr>
                            <th style={{ width:200}} className="text-center">Tên trường</th>
                            <th>Giá trị</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="text-center">Id</th>
                            <td>{slider.id}</td>
                        </tr>
                        <tr>
                            <th className="text-center">Tên Slider</th>
                            <td>{slider.name}</td>
                        </tr>
                        <tr>
                            <th className="text-center">link</th>
                            <td>{slider.link}</td>
                        </tr>
                        <tr>
                            <th className="text-center">sort_order</th>
                            <td>{slider.sort_order}</td>
                        </tr>
                        <tr>
                            <th className="text-center">position</th>
                            <td>{slider.position}</td>
                        </tr>
                        <tr>
                            <th className="text-center">Id</th>
                            <td>1</td>
                        </tr>
                    </tbody>
                </table>
        </div>
        </div>
    );
}
export default SliderShow;