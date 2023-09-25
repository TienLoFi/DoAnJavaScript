import { useEffect, useState } from "react";
import { FaArrowLeft, FaSave } from "react-icons/fa";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link, useNavigate, useParams } from "react-router-dom";
import SliderServices  from '../../../services/SliderServices';

function SliderUpdate () {
    const {id} = useParams();
   
    // lấy dữ lieu cua id 1 lên form
    const navigate=useNavigate();
    const [name, setName] = useState('')
    const [link, setLink] = useState('')
    const [sort_order, setSortOrder] = useState('0')
    const [position, setPosition] = useState('')
    const [status, setStatus] = useState('0')
    const [sliders ,setSliders ]=useState ([]);
    
    useEffect(function(){
        (async function(){
            await SliderServices.getAll().then(function(result){
                setSliders(result.data.sliders);
            });
        })();
    },[]);


    async function SliderUpdate(event)
    {

       event.preventDefault();
       const image=document.querySelector("#image")
       var slider = new FormData();
       slider.append("name",name)
        slider.append("link",link)
        slider.append("sort_order",sort_order)
        slider.append("position",position)
        slider.append("status",status)
      
       
       if(image.files.length === 0) 
       {
               slider.append("image","");
       }

       else 
       {
           slider.append("image",image.files[0]);
       }

       await SliderServices.update(slider, id)
       .then(function(result){
           alert(result.data.message);
           navigate('/admin/slider', {replace:true});
       });
   }
   useEffect (function(){
    (async function(){
      await SliderServices.getById(id)
      .then(function(result){
          const tmp = result.data.slider
          setName(tmp.name);
          setPosition(tmp.position);
          setSortOrder(tmp.sort_order);
          setLink(tmp.link);
          setStatus(tmp.status);
      });
    })();
},[]);

    return ( 
                 <form method='post' onSubmit={SliderUpdate}>
                    <div className="card">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-md-6">
                                    <strong className="text-danger">
                                        Cập nhật thương hiệu
                                    </strong>

                                </div>
                                <div className="col-md-6 text-end">
                                    <Link className='btn btn-info btn-sm me-2 ' to='/admin/slider'>
                                        <RiArrowGoBackFill />Quay về danh sách
                                    </Link>
                                    <button type='submit' className="btn btn-sm btn-success">
                                        <FaSave />Lưu
                                    </button></div>
                            </div>
                        </div>
                        <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">

                            <div className="mb-3">
                                <label htmFor="name">
                                    <strong> tên slider </strong>
                                </label>
                                <input type="text"
                                    name="name"
                                    value={name}
                                    onChange={ (e)=>setName(e.target.value)}
                                    className='form-control' />
                            </div>
                            <div className="mb-3">
                                <label htmFor="name">
                                    <strong> position </strong>
                                </label>
                                <input type="text"
                                    name="position"
                                    value={position}
                                    onChange={ (e)=>setPosition(e.target.value)}
                                    className='form-control' />
                            </div>
                            <div className="mb-3">
                                <label htmFor="metakey">
                                    <strong> Link</strong>
                                </label>
                                <textarea
                                    name="metakey"  
                                    value={link}
                                    onChange={ (e)=>setLink(e.target.value)}
                                    className='form-control' >                                     
                                    </textarea>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="mb-3">
                                <label htmFor="sort_order">
                                    <strong> Sắp xếp</strong>
                                </label>
                                <select name="sort_order" 
                                 value={sort_order}
                                 onChange={(e)=>setSortOrder(e.target.value)}
                                className='form-control'>                           
                                  <option value="0">None </option>
                                {sliders.map(function(br,index){
                                    return ( <option key ={index} value={br.sort+1}>Sau:{br.name} </option>);
                                 })} 
                                 </select>
                            </div>

                            <div className="mb-3">
                                <label htmFor="image">
                                    <strong> Hình ảnh </strong>
                                </label>
                                <input type="file"
                                    name="image" id="image"
                                    className='form-control' />
                            </div>

                            <div className="mb-3">
                                <label htmFor="status">
                                    <strong> Trạng thái</strong>
                                </label>
                                <select name="status" 
                                 value={status}
                                 onChange={ (e)=>setStatus(e.target.value)}
                                 className='form-control'><option value="1">Xuất bảng</option>
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

export default SliderUpdate ;