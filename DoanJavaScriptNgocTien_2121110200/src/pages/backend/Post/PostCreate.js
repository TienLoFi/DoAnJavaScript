import { Link, useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import PostServices from "../../../services/PostServices";
import TopicServices from "../../../services/TopicServices";

function PostCreate() {
  const [topics, setTopics] = useState([]);
  const navigator = useNavigate();
  const [topic_id, setTopicId] = useState("");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [detail, setDetail] = useState("");
  const [type, setType] = useState("");
  const [metakey, setMetakey] = useState("");
  const [metadesc, setMetadesc] = useState("");
  const [status, setStatus] = useState(1);

  function PostStore(event) {
    event.preventDefault(); //không load lại trang
    const image = document.querySelector("#image");
    var post = new FormData();
    post.append("topic_id", topic_id);
    post.append("title", title);
    post.append("detail", detail);
    post.append("slug", slug);
    post.append("type", type);
    post.append("metakey", metakey);
    post.append("metadesc", metadesc);
    post.append("status", status);
      if(image.files.length === 0)
      {
          post.append("image", "")
      }
      else
      {
          post.append("image", image.files[0])
      }

    PostServices.create(post).then(function (result) {
      alert(result.data.message);
      navigator("/admin/post", { replace: true });
    });
  }
  useEffect(function () {
    (async function () {
      await TopicServices.getAll().then(function (result) {
        setTopics(result.data.topics);
      });
    })();
  }, []);

  return (
    <form method="post" onSubmit={PostStore}>
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-6">
              <strong className="text-danger text-uppercase">
                Thêm bài viết
              </strong>
            </div>
            <div className="col-6 text-end">
              <Link to="/admin/post" className="btn btn-info btn-sm me-2">
                <RiArrowGoBackFill /> Về danh sách
              </Link>
              <button type="submit" className="btn btn-success btn-sm">
                Lưu
              </button>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-9">
              <div className="mb-3">
                <label>
                  <strong>Tiêu đề(*)</strong>
                </label>
                <input
                  name="name"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-control"
                  type="text"
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Chi tiết(*)</strong>
                </label>
                <textarea
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                  className="form-control"
                  rows={4} // Adjust the number of rows as needed
                ></textarea>
              </div>
              <div className="mb-3">
                <label>
                  <strong>Loại(*)</strong>
                </label>
                <input
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="form-control"
                  type="text"
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Từ khóa(*)</strong>
                </label>
                <textarea
                  value={metakey}
                  onChange={(e) => setMetakey(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
              <div className="mb-3">
                <label>
                  <strong>slug</strong>
                </label>
                <textarea
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
              <div className="mb-3">
                <label>
                  <strong>Mô tả(*)</strong>
                </label>
                <textarea
                  value={metadesc}
                  onChange={(e) => setMetadesc(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
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
              </div>
              <div className="mb-3">
                <label>
                  <strong>Hình</strong>
                </label>
                <input id="image" className="form-control" type="file" />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Trạng thái</strong>
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="form-control"
                >
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

export default PostCreate;
