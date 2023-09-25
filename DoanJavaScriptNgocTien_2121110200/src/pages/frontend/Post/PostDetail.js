import { useEffect, useState } from "react";
import PostServices from "../../../services/PostServices"
import { useParams } from "react-router-dom";
import { urlImage } from "../../../config";

function PostDetail() {
    const [post, setPost] = useState([]);
    const { slug } = useParams();
    useEffect(function () {
        (async function () {
            try {
                const result = await PostServices.getById(slug)
                setPost(result.data.post)
            }
            catch (error) {
                console.log(error)
            }
        })();
    }, [slug]);
    return (
        <section className="maincontent">
            <div className="container my-4">
                <div className="row">
                    <h1 className="text-center text-primary">{post.title}</h1>
                    <div>{post.detail}</div>
                    <div className="img_feature my-4">
                        <img style={{ width: '100%', height: 'auto' }}
                            src={urlImage + "post/" + post.image}
                            alt={post.title}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PostDetail;