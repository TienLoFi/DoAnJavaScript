import { useEffect, useState } from 'react';
import PostServices from '../../../services/PostServices';
import TopicList from '../../../layouts/LayoutSite/TopicList';
import PostItem from '../../../components/frontend/PostItem';

function Post() {
    const [limit, setLimit] = useState(4);
    const [posts, setPosts] = useState([]);
    useEffect(function(){
      (async function(){
        try{
            const result = await PostServices.getPostAll(limit, 1)
            setPosts(result.data.posts)
        }
        catch(error){
            console.log(error)
       }
      })();
    },[limit])
    return (
        <section className="maincontent">
            <div className="container my-4">
                <h1 className='text-center text-primary'>TẤT CẢ BÀI VIẾT</h1>
                <div className="row">
                    <div className="col-md-2">
                            <TopicList/>
                    </div>
                    <div className="col-md-9">
                    {posts.map(function(post, index){
                        return <PostItem key={index} post={post}/>
                    })}
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-12 text-center'>
                        <button className='btn btn-success' onClick={()=>setLimit(limit+4)}>Xem thêm </button>
                    </div>
                </div>
            </div> 
        </section>
    );
}

export default Post;