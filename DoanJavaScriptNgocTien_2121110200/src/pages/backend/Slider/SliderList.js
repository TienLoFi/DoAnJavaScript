import { Link } from 'react-router-dom';
import { FaPlus, FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import SliderServices from '../../../services/SliderServices';
import { urlImage } from '../../../config';

function SliderList() {
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    fetchSliders();
  }, []);

  const fetchSliders = () => {
    SliderServices.getAll()
      .then((result) => {
        setSliders(result.data.sliders);
      })
      .catch((error) => {
        console.error('Error fetching sliders:', error);
      });
  };

  const deleteSlider = (id) => {
    SliderServices.remove(id)
      .then((result) => {
        alert(result.data.message);
        setSliders(sliders.filter((slider) => slider.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting slider:', error);
      });
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong className="text-primary">TẤT CẢ SLIDER</strong>
          </div>
          <div className="col-md-6 text-end">
            <Link className="btn btn-sm btn-success" to="/admin/slider/create">
              <FaPlus /> Thêm
            </Link>
          </div>
        </div>
      </div>
      <div className="card-body">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="text-center" style={{ width: 20 }}>
                #
              </th>
              <th className="text-center">Hình</th>
              <th className="text-center">Tên slider</th>
              <th className="text-center">Link</th>
              <th className="text-center">Ngày tạo</th>
              <th className="text-center">Trạng Thái</th>
              <th className="text-center" style={{ width: 20 }}>
                ID
              </th>
              <th className="text-center">Chức Năng</th>
            </tr>
          </thead>
          <tbody>
            {sliders.map((slider, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <img src={urlImage + 'slider/' + slider.image} alt={slider.image} className="w-100 h-80" />
                </td>
                <td>{slider.name}</td>
                <td>{slider.link}</td>
                <td className="text-center">{slider.created_at}</td>
                <td className="text-center">{slider.status}</td>
                <td className="text-center">{slider.id}</td>
                <td className="text-center">
                  <Link to={'/admin/slider/update/' + slider.id} className="btn btn-sm btn-info me-1">
                    <FaEdit />
                  </Link>
                  <Link to={'/admin/slider/show/' + slider.id} className="btn btn-sm btn-success me-1">
                    <FaEye />
                  </Link>
                  <button onClick={() => deleteSlider(slider.id)} className="btn btn-sm btn-danger">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  export default SliderList;
  