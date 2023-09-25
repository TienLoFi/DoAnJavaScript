import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PostServices from '../../../services/PostServices';
import { FaEdit, FaEye, FaPlus, FaTrash } from 'react-icons/fa';
import { urlImage } from '../../../config';
function PostList(){
    const [Post, setPosts]=useState([]);
    const [statusdel, setStatuesDel] = useState(0);
    useEffect(function(){
        (async function(){
            await PostServices.getAll().then(function(result){
              setPosts(result.data.posts);
            });
        })();
    },[statusdel]);
    const PostDelete = async (id) => {
        try {
          const result = await PostServices.remove(id);
          alert("Xóa Thành Công");
          setStatuesDel(id);
        } catch (error) {
          console.error("Error deleting category:", error);
        }
      };
    return(
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-primary">TẤT CẢ Bài Viết</strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link className="btn btn-sm btn-success" to="/admin/post/create">
                            <FaPlus/>Thêm
                        </Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th className='text-center' style={{width:20}}>#</th>
                            <th className='text-center' style={{width:120}}>Hình</th>
                            <th>Tiêu Đề</th>
                            <th>Slug</th>
                            <th className='text-center'>Ngày tạo</th>
                            <th className='text-center'>Chức năng</th>
                            <th className='text-center' style={{width:20}}>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Post.map(function(post,index){
                            return(<tr key={index}>
                                <td className='text-center'><input type='checkbox'></input></td>
                                <td className='text-center'><img className='w-100 h-100' src={urlImage+"post/"+post.image} alt={post.image}/></td>
                                <td>{post.title}</td>
                                <td>{post.slug}</td>
                                <td className='text-center'>{post.created_at}</td>
                                <td className='text-center'>
                                    <Link to={"/admin/post/update/"+post.id} className="btn btn-sm btn-info me-1"><FaEdit/></Link>
                                    <Link to={"/admin/post/show/"+post.id} className="btn btn-sm btn-success me-1"><FaEye/></Link>
                                    <button onClick={()=>PostDelete(post.id)} className="btn btn-sm btn-danger"><FaTrash/></button>
                                </td>
                                <td>{post.id}</td>
                            </tr>)
                        })}
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default PostList;