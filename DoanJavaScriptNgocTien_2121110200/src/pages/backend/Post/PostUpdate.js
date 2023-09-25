import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft, FaSave } from 'react-icons/fa';
import { RiArrowGoBackFill } from 'react-icons/ri';

import PostServices from '../../../services/PostServices';
import TopicServices from "../../../services/TopicServices";
function PostUpdate() {
    const [topics, setTopics] = useState([]);
    const {id}=useParams();
    const navigate=useNavigate();
    const [topic_id, setTopicId] = useState('')
    const [title, setTitle] = useState('')
    const [slug, setSlug] = useState('')
    const [detail, setDetail] = useState('')
    const [type, setType] = useState('')
    const [metakey, setMetakey] = useState('')
    const [metadesc, setMetadesc] = useState('')
    const [status, setStatus] = useState('0')
    const [posts ,setPosts ]=useState ([]);
    async function postUpdate(event)
    
    {

       event.preventDefault();
       const image=document.querySelector("#image")
       var post = new FormData();
       post.append("topic_id",topic_id)
       post.append("title",title)
       post.append("slug",slug)
       post.append("detail",detail)
       post.append("type",type)
       post.append("metakey",metakey)
       post.append("metadesc",metadesc)                                                                               
       post.append("status",status)
       if(image.files.length===0)
       {
           post.append('image',"")
       }
       else
       {
           post.append("image",image.files[0])
       }
       await PostServices.update(post,id)
       .then(function(result){
           alert(result.data.message);
           navigate('/admin/post', {replace:true});
       });
   }
   useEffect(function () {
    (async function () {
      await TopicServices.getAll().then(function (result) {
        setTopics(result.data.topics);
      });
    })();
  }, []);

   useEffect(function(){
    (async function(){
        await PostServices.getById(id).then(function(result){
            const tpm =result.data.post;
            setTopicId(tpm.topic_id);
            setTitle(tpm.title);
            setSlug(tpm.slug);
            setDetail(tpm.detail);
            setTopicId(tpm.topic_id);
            setType(tpm.type);
            setMetakey(tpm.metakey);
            setMetadesc(tpm.metadesc);    
            setStatus(tpm.status);
        });
    })();
},[]);
return (
    <form method='post' onSubmit={postUpdate}>
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger">
                            cập nhật bài viết
                        </strong>

                    </div>
                    <div className="col-md-6 text-end">
                        <Link className='btn btn-info btn-sm me-2 ' to='/admin/post'>
                            <RiArrowGoBackFill />Quay về danh sách
                        </Link>
                        <button type='submit' className="btn btn-sm btn-success">
                            <FaSave />Lưu
                        </button>
                    </div>
                </div>
            </div>
            <div className="card-body"><div className="row">
                    <div className="col-md-9">

                        <div className="mb-3">
                            <label htmFor="name">
                                <strong> Topic Id</strong>
                            </label>
                            <input type="text"
                                name="topic_id"
                                value={topic_id}
                                onChange={ (e)=>setTopicId(e.target.value)}
                                className='form-control' />
                        </div>

                        <div className="mb-3">
                            <label htmFor="name">
                                <strong> Title</strong>
                            </label>
                            <input type="text"
                                name="title"
                                value={title}
                                onChange={ (e)=>setTitle(e.target.value)}
                                className='form-control' />
                        </div>

                        <div className="mb-3">
                            <label htmFor="name">
                                <strong> SLug</strong>
                            </label>
                            <input type="text"
                                name="slug"
                                value={slug}
                                onChange={ (e)=>setSlug(e.target.value)}
                                className='form-control' />
                        </div>

                        <div className="mb-3">
                            <label htmFor="name">
                                <strong> Chi tiết</strong>
                            </label>
                            <input type="text"
                                name="detail"
                                value={detail}
                                onChange={ (e)=>setDetail(e.target.value)}
                                className='form-control' />
                        </div>

                        <div className="mb-3">
                            <label htmFor="name">
                                <strong> Title</strong>
                            </label>
                            <input type="text"
                                name="type"
                                value={type}
                                onChange={ (e)=>setType(e.target.value)}
                                className='form-control' />
                        </div>

                        <div className="mb-3">
                            <label htmFor="metakey">
                                <strong> Từ khóa</strong>
                            </label>
                            <textarea
                                name="metakey"  
                                value={metakey}
                                onChange={ (e)=>setMetakey(e.target.value)}className='form-control' >                                     
                                </textarea>
                        </div>

                        <div className="mb-3">
                            <label htmFor="metadesc">
                                <strong> Mô tả</strong>
                            </label>
                            <textarea 
                            name="metadesc" 
                             value={metadesc}
                             onChange={ (e)=>setMetadesc(e.target.value)}
                            className='form-control' ></textarea>

                        </div>
                    </div>

                    <div className="col-md-3">
                    <label>
                  <strong>Chủ đề</strong>
                </label>
                <select
                  value={topic_id}
                  onChange={(e) => setTopicId(e.target.value)}
                  className="form-control"
                >
                  <option value="0">None</option>
                  {topics.map(function (topic, index) {
                    return (
                      <option key={index} value={topic.id}>
                        {topic.name}
                      </option>
                    );
                  })}
                </select>
              

                        <div className="mb-3">
                            <label htmFor="image">
                                <strong> Hình ảnh </strong>
                            </label>
                            <input type="file"
                                name="image"
                                 id="image"
                                className='form-control' />
                        </div>

                        <div className="mb-3">
                            <label htmFor="status">
                                <strong> Trạng thái</strong>
                            </label>
                            <select name="status" 
                             value={status}
                             onChange={ (e)=>setStatus(e.target.value)}
                             className='form-control'>
                                <option value="1">Xuất bảng</option>
                                <option value="2">Chưa xuất bảng</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
);
}


export default PostUpdate;