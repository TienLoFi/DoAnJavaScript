import TopicServices from "../../../services/TopicServices"
import { Link, useNavigate } from 'react-router-dom';
import { RiArrowGoBackFill } from "react-icons/ri";import { useEffect, useState } from 'react';

function TopicCreate() {
    const [topics, setTopics] = useState([]);
    const navigator = useNavigate();
    const [name, setName] = useState("");
    const [metakey, setMetakey] = useState(""); 
    const [metadesc, setMetadesc] = useState("");
    const [parent_id, setParentId] = useState(0);
    const [status, setStatus] = useState(1);

    function validateTopicName(name) {
        // Check for special characters in the name
        const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        return !specialChars.test(name);
    }

    function validateMetakey(metakey) {
        // Check for numbers in the metakey
        const hasNumbers = /\d/;
        return !hasNumbers.test(metakey);
    }
    function TopicStore(event)
    {
        event.preventDefault();//không load lại trang
        if (name.length > 50) {
            alert('Tên chủ đề không được vượt quá 50 ký tự.');
            return;
        }

        if (!validateTopicName(name)) {
            alert('Tên chủ đề không được chứa ký tự đặc biệt.');
            return;
        }

        if (!validateMetakey(metakey)) {
            alert('Từ khóa không được chứa số.');
            return;
        }
        var topic = new FormData();
        topic.append("name", name)
        topic.append("metakey", metakey)
        topic.append("metadesc", metadesc)
        topic.append("parent_id", parent_id)
        topic.append("status", status)
        TopicServices.create(topic)
        .then(function(result) {
            alert(result.data.message);
            navigator("/admin/topic", {replace:true})
        });
    }
    useEffect (function(){
          (async function(){
            await TopicServices.getAll()
            .then(function(result){
                setTopics(result.data.topics)
            });
          })();
    },[]);

    return (
    <form method='post' onSubmit={TopicStore}>
        <div className="card">
            <div className="card-header">
            <div className="row">
                <div className="col-6">
                <strong className="text-danger text-uppercase">
                    Thêm chủ đề
                </strong>
                </div>
                <div className="col-6 text-end">
                <Link to="/admin/topic" className="btn btn-info btn-sm me-2">
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
                                <strong>Tên Chủ đề(*)</strong>
                            </label>
                            <input name='name' value={name} onChange={(e)=> setName(e.target.value)} className='form-control' type='text'/>
                        </div>
                        <div className='mb-3'>
                            <label>
                                <strong>Từ khóa(*)</strong>
                            </label>
                            <textarea  value={metakey} onChange={(e)=> setMetakey(e.target.value)}  className='form-control'></textarea>
                        </div>
                        <div className='mb-3'>
                            <label>
                                <strong>Mô tả(*)</strong>
                            </label>
                            <textarea  value={metadesc} onChange={(e)=> setMetadesc(e.target.value)} className='form-control'></textarea>
                        </div>
                    </div>
                    <div className='col-md-3'>
                    <div className='mb-3'>
                            <label>
                                <strong>Chủ đề cha</strong>
                            </label>
                            <select  value={parent_id} onChange={(e)=> setParentId(e.target.value)} className='form-control'>
                                <option value="0">Cấp cha</option>
                                {topics.map(function(topic, index){
                                    return <option key={index} value={topic.id}>{topic.name}</option>
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

export default TopicCreate;