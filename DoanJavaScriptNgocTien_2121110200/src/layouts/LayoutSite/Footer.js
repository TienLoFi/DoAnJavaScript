import { useEffect, useState } from "react";
import PostServices from "../../services/PostServices";
import { Link } from "react-router-dom";
import { urlImage } from "../../config";

function Footer() {
  const [posts, setPosts] = useState([]);
  const [postNew, setPostNew] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await PostServices.getByType(8, "post");
        setPosts(result.data.posts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchPostNew = async () => {
      try {
        const result = await PostServices.getPostNew();
        setPostNew(result.data.post);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPostNew();
  }, []);

  return (
    <section>
      <section id="blog_news">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="row">
                <div className="title_bottom">
                  <div>TIN TỨC &amp; KHUYẾN MÃI MỚI NHẤT</div>
                </div>
                <div className="col-md-6">
                  <div className="first_arrticle">
                    <div className="img_feature">
                      <img
                        src={urlImage + "post/" + postNew.image}
                        alt="Đầm Công Sở Dành Cho Người Béo Bụng"
                      />
                    </div>
                   
                     <Link to={"/chi-tiet-bai-viet/" + postNew.slug}>
                      <h3 className="title">{postNew.title}</h3>
                    </Link>
                    
                    <div className="description">{postNew.metadesc}</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="wrap_newmore">
                    {posts.map((post) => (
                      <div className="news_flex" key={post.id}>
                        <div className="news">
                          <div className="wapanh">
                            <Link to={"/chi-tiet-bai-viet/" + post.slug}>
                              <img
                                src={urlImage + "post/" + post.image}
                                alt="Xu Hướng Mùa Hè Năm 2018 Là Gì ?"
                                className="mCS_img_loaded"
                              />
                            </Link>
                          </div>
                          <div className="wapinfo">
                            <h3>
                              <Link to={"/chi-tiet-bai-viet/" + post.slug}>
                                {post.title}
                              </Link>
                            </h3>
                            <p>{post.metadesc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="facebookfan">
                <div id="fb-root" />
                <div
                  className="fb-page fb_iframe_widget"
                  data-href="https://www.facebook.com/ks
                    uperthegioisieuxe"
                  height={400}
                  data-tabs="timeline"
                  data-small-header="false"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true"
                  fb-xfbml-state="rendered"
                  fb-iframe-plugin-query="adapt_container_width=true&app_id=&container_width=263&height=400&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2Fthoitrangxinh.net&locale=vi_VN&sdk=joey&show_facepile=true&small_header=false&tabs=timeline"
                >
                  <span
                    style={{ verticalAlign: "bottom", width: 263, height: 400 }}
                  >
                    <iframe
                      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fksuperthegioisieuxe&tabs=timeline&width=350&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                      width="350"
                      height="400"
                      style={{ border: "none", overflow: "hidden" }}
                      scrolling="no"
                      frameBorder="0"
                      allowFullScreen="true"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="dknt">
        <div className="container">
          <div className="mail_dk">
            <div className="tt_dkmail">
              <i className="fa fa-envelope-o" aria-hidden="true" /> ĐĂNG KÝ NHẬN
              TIN KHUYẾN MÃI
            </div>
            <form
              name="frm_dknt"
              id="frm_dknt"
              method="post"
              action="/account/contact"
            >
              <input
                type="hidden"
                id="contact_tags"
                name="contact[tags]"
                defaultValue="khách hàng tiềm năng, bản tin"
              />
              <input
                type="email"
                placeholder="Nhập email của bạn"
                id="email_nhantin"
                required="required"
                name="contact[email]"
              />
              <button
                name="submit_nhantin"
                id="submit_nhantin"
                onclick="nhantin()"
              >
                <i className="fa fa-paper-plane" aria-hidden="true" />
              </button>
              <div className="clear" />
            </form>
            <div className="clear" />
          </div>
          <div className="mxh_dk  hidden-sm hidden-xs">
            <a href="https://www.facebook.com/ksuperthegioisieuxe">
              <img
                src="//theme.hstatic.net/1000296531/1000427833/14/fb.png?v=2089"
                alt="THỜI TRANG XINH"
              />
            </a>
            <a href="https://www.youtube.com/@phancongkhanh6648">
              <img
                src="//theme.hstatic.net/1000296531/1000427833/14/ytb.png?v=2089"
                alt="THỜI TRANG XINH"
              />
            </a>
            <a href="https://shopee.vn/thoitrangxinh.net">
              <img
                src="https://file.hstatic.net/1000296531/file/shopee_a20ed896fa6f40c6934bcb1f746be5a7.png"
                alt="THỜI TRANG XINH"
              />
            </a>
            <a href="https://www.lazada.vn/thoitrangxinhnet1620723776/?q=All-Products&langFlag=vi&from=wangpu&lang=vi&pageTypeId=2">
              <img
                src="https://file.hstatic.net/1000296531/file/lazada_66ee09576d204feb946718482447b108.png"
                alt="THỜI TRANG XINH"
              />
            </a>
            <a href="https://tiki.vn/cua-hang/thoitrangxinh">
              <img
                src="https://file.hstatic.net/1000296531/file/tiki_5c6d882458f744f3873cb2784e673e6e.png"
                alt="THỜI TRANG XINH"
              />
            </a>
            <a href="https://www.sendo.vn/shop/thoi-trang-xinh">
              <img
                src="https://file.hstatic.net/1000296531/file/sendo_f7192ef82a094dfaa5ee8622b3588049.png"
                alt="THỜI TRANG XINH"
              />
            </a>
          </div>
          <div className="clear" />
        </div>
      </div>
    </section>
  );
}

export default Footer;
