import { Link } from "react-router-dom";
import {  ImEye  } from "react-icons/im"; 
import { FaTrash, FaEdit } from "react-icons/fa";

import { useEffect, useState } from "react";
import ContactServices from "../../../services/ContactServices";


function ContactList() {
  const [contacts, setSliders] = useState([]);

  useEffect(function () {
    ContactServices.getAll().then(function (result) {
      setSliders(result.data.contacts);
    });
  }, []);

  function Contactdelete(id) {
    ContactServices.remove(id).then(function (result) {
      alert(result.data.message);

      // Xóa contact từ danh sách contacts state
      const updatedContacts = contacts.filter((contact) => contact.id !== id);
      setSliders(updatedContacts);
    });
  }

return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6 ">
            <strong className="text-danger">LIÊN HỆ</strong>
          </div>
        
        </div>
      </div>
      <div className="card-body">
        <table className="table table-striped table-bordered table-hover ">
          <thead>
            <tr>
              <th>#</th>
              <th>Tên</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Title</th>
              <th>Detail</th>
           
              <th>Chức năng</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(function (contact, index) {
              return (
                <tr key={index}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                  <td>{contact.status}</td>
                  <td>{contact.title}</td>
                
                  <td>{contact.detail}</td>
                  <td>
                  <Link
                    className="btn btn-sm btn-info me-1"
                    to={"show/"+contact.id}
                  >
                    <ImEye />
                  </Link>
                  <Link
                    className="btn btn-sm btn-primary me-1"
                    to={"update/"+contact.id}
                  >
                    <FaEdit />
                  </Link>
                  <button onClick={()=>Contactdelete(contact.id)} className="btn btn-sm btn-danger">
                      <FaTrash />
                    </button>
                    
                  </td>
                  <td>{contact.id}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContactList;
