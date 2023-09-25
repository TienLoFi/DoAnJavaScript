import { FaArrowLeft } from 'react-icons/fa';
import { BsTrash3Fill } from 'react-icons/bs';
import { Link, useNavigate,useParams } from "react-router-dom";
import ContactServices from '../../../services/ContactServices';
import { useEffect, useState } from "react";

function ContactShow() {
    const navigate=useNavigate();
    const {id}=useParams();
    const [contact ,setContact ]=useState ([]);
    useEffect(function(){
        (async function(){
            await ContactServices.getById(id).then(function(result){
                setContact(result.data.contact);
             
            });
        })();
    },[]);
    async function ContactDelete(id)
    {
        await ContactServices.remove(id).then(function (result) {
            alert(result.data.message)
            navigate('/admin/contact', {replace:true});
        });
    }
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger">
                            Chi tiết contact
                        </strong>

                    </div>
                    <div className="col-md-6 text-end">
                        <Link className='btn btn-info btn-sm me-2 ' to='/admin/contact'>
                            <BsTrash3Fill />Quay về danh sách
                        </Link>
                       
                        <button className='btn btn-danger btn-sm ' onClick={()=>ContactDelete(contact.id)}>
                            <FaArrowLeft />Xóa
                        </button>
                    </div>
                </div>
            </div>

            <div className='card-body'>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th className='text-center' style={{ width: 200 }}>Tên trường</th>
                            <th className='text-center'>Giá trị</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className='text-center'>Id </th>
                            <td className='text-center'>{contact.id} </td>
                        </tr>

                        <tr>
                            <th className='text-center'>Tên contact </th>
                            <td className='text-center'>{contact.name} </td>
                        </tr>

                        <tr>
                            <th className='text-center'>Phone </th>
                            <td className='text-center'>{contact.phone}  </td>
                        </tr>

                        <tr>
                            <th className='text-center'>Title </th>
                            <td className='text-center'>{contact.title}  </td>
                        </tr>

                        <tr>
                            <th className='text-center'>Detail </th>
                            <td className='text-center'>{contact.detail}  </td>
                        </tr>

                        <tr>
                            <th className='text-center'>ReplayDetail </th>
                            <td className='text-center'>{contact.replaydetail}  </td>
                        </tr>

                        <tr>
                            <th className='text-center'>Status </th>
                            <td className='text-center'>{contact.status}  </td>
                        </tr>

                    </tbody>
                </table>

            </div>

        </div>
    );
}

export default ContactShow;