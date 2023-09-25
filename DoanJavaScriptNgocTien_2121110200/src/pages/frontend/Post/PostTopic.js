import { useParams } from "react-router-dom";
import PostServices from "../../../services/PostServices"
import TopicServices from "../../../services/TopicServices"
import { useEffect, useState } from "react";
import TopicList from "../../../layouts/LayoutSite/TopicList";
import PostItem from "../../../components/frontend/PostItem";

function PostTopic() {
    const [limit, setLimit] = useState(4);
    const { slug } = useParams();
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState("");
    document.title = title;
    useEffect(function () {
        (async function () {
            const result = await TopicServices.getTopicBySlug(slug);
            const topicid = result.data.topic.id;
            setTitle(result.data.topic.name);
            const resultp = await PostServices.getPostByTopicId(4, topicid);
            setPosts(resultp.data.posts)
        })();
    }, [limit, slug]);
    console.log(posts)
    return (
        <section className="maincontent">
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-2">
                        <TopicList/>
                    </div>
                    <div className="col-md-10">
                        <h1 className="text-center text-primary">{title}</h1>
                        <div className="row">
                            {posts.map(function (post, index) {
                                return <PostItem key={index} post={post} />
                            })}
                        </div>
                        <div className='row mt-3'>
                            <div className='col-12 text-center'>
                                <button className='btn btn-success' onClick={() => setLimit(limit + 4)}>Xem thêm </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
}

export default PostTopic;