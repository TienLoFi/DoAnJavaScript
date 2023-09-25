import { urlImage } from '../../config';
import { Link } from 'react-router-dom';

function PostItem(props) {
    return (
        <div class="wrap_newmore">
            <div className="news_flex">
                <div className="news">
                    <div className="wapanh">
                        <Link to={"/chi-tiet-bai-viet/" + props.post.slug}>
                            <img style={{ width: '100%', height: 'auto' }} className="img-fluid" src={urlImage + "post/" + props.post.image}
                                alt={props.post.title} />
                        </Link>
                    </div>
                    <div className="wapinfo">
                        <h2>
                            <Link to={"/chi-tiet-bai-viet/" + props.post.slug}>
                                {props.post.title}
                            </Link>
                        </h2>
                        <h4>
                            {" "}
                            {props.post.metadesc}
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostItem;