import TopicServices from "../../../services/TopicServices"
import { Link, useNavigate, useParams } from 'react-router-dom';
import { RiArrowGoBackFill } from "react-icons/ri";import { useEffect, useState } from 'react';

function TopicUpdate() {
    const {id} = useParams();
    const [topics, setTopics] = useState([]);
    const navigator = useNavigate();
    const [name, setName] = useState("");
    const [metakey, setMetakey] = useState("");
    const [metadesc, setMetadesc] = useState("");
    const [parent_id, setParentId] = useState(0);
    const [status, setStatus] = useState(1);

    function TopicEdit(event)
    {
        event.preventDefault();//không load lại trang
        var topic = new FormData();
        topic.append("name", name)
        topic.append("metakey", metakey)
        topic.append("metadesc", metadesc)
        topic.append("parent_id", parent_id)
        topic.append("status", status)
        TopicServices.update(topic, id)
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
    useEffect (function(){
        (async function(){
          await TopicServices.getById(id)
          .then(function(result){
              const tmp = result.data.topic
              setName(tmp.name);
              setMetakey(tmp.metakey);
              setMetadesc(tmp.metadesc);
              setParentId(tmp.parent_id);
              setStatus(tmp.status);
          });
        })();
    },[]);
    return (
    <form method='post' onSubmit={TopicEdit}>
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

export default TopicUpdate;