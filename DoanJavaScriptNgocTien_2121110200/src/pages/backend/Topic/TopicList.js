import { Link } from 'react-router-dom';
import { FaPlus, FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import { useEffect, useState } from "react";
import TopicServices from '../../../services/TopicServices';

function TopicList() {
    const [topics, setTopics] = useState([]);
    const [statusdel, setstatusdel] = useState([]);
    useEffect(function () {
        TopicServices.getAll().then(function (result) {
            setTopics(result.data.topics);
        });
    }, [statusdel]);

    function Topicdelete(id) {

        TopicServices.remove(id).then(function (result) {
            alert(result.data.message)
            setstatusdel(result.data.id);
        });
    }
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-primary">TẤT CẢ TOPIC</strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link className="btn btn-sm btn-success" to="/admin/topic/create"> <FaPlus />Thêm</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th className='text-center' style={{ width: 20 }}>#</th>
                            <th className='text-center'>Name</th>
                            <th className='text-center'>Slug</th>
                            <th className='text-center'>Ngày tạo</th>
                            <th className='text-center'>Chức năng</th>
                            <th className='text-center' style={{ width: 20 }}>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {topics.map(function (topic, index) {
                            return (<tr key={index}>
                                <td><input type='checkbox'></input></td>
                                <td>{topic.name}</td>
                                <td>{topic.slug}</td>
                                <td className=' text-center'>{topic.created_at}</td>
                                <td className=' text-center'>
                                    <Link to={"/admin/topic/update/" + topic.id} className="btn btn-sm btn-info me-1"><FaEdit /></Link>
                                    <Link to={"/admin/topic/show/" + topic.id} className="btn btn-sm btn-success me-1"><FaEye /></Link>
                                    <button onClick={() => Topicdelete(topic.id)} className="btn btn-sm btn-danger"><FaTrash /></button>
                                </td>
                                <td>{topic.id}</td>
                            </tr>)
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default TopicList;