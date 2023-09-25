import { Link, useLocation } from "react-router-dom";
import MenuServices from '../../services/MenuServices';
import { useEffect, useState } from "react";
import PostServices from '../../services/PostServices';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

function Copyright() {
  const [menus, setMenus] = useState([]);
  const [posts, setPosts] = useState([]);
  const location = useLocation();

  useEffect(function(){
    (async function(){
      try{
        const result = await MenuServices.getByParentId("footermenu", 0)
        setMenus(result.data.menus)    
      }
      catch(error){
        console.log(error)
      }
    })();
  },[])

  useEffect(function(){
    (async function(){
      try{
        const result = await PostServices.getByType(8, "page")
        setPosts(result.data.posts)    
      }
      catch(error){
        console.log(error)
      }
    })();
  },[])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <section>
      <ScrollToTopOnMount />
            <div className="end">
                <div className="container">
                    <div className="footer">
                        <div className="footer_content col-md-3 col-sm-6 col-xs-12">
                            <h3 style={{ color: "#E0DFDF", fontSize: 18 }}>
                                Công Ty Cổ Phần FPT
                            </h3>
                            <p
                                style={{
                                    background:
                                        "url(//theme.hstatic.net/1000296531/1000427833/14/loca.png?v=2089) no-repeat left center"
                                }}
                            >
                            6 Đ. Trần Hưng Đạo, Phường Phạm Ngũ Lão, Quận 1, Thành phố Hồ Chí Minh, Việt Nam
                            </p>
                            <p>- Giấy CN ĐKKD số: 0311951294</p>
                            <p>- Cấp Ngày 31-08-2012 </p>
                            <p>- Nơi Cấp:Phòng ĐKKD, Sở KHĐT Thành Phố Hồ Chí Minh </p>
                            <p
                                style={{
                                    background:
                                        "url(//theme.hstatic.net/1000296531/1000427833/14/loca.png?v=2089) no-repeat left center"
                                }}
                            >
                              6 Đ. Trần Hưng Đạo, Phường Phạm Ngũ Lão, Quận 1, Thành phố Hồ Chí Minh, Việt Nam
                            </p>
                            <p
                                style={{
                                    background:
                                        "url(//theme.hstatic.net/1000296531/1000427833/14/phone.png?v=2089) no-repeat left center"
                                }}
                            >
                               0369864072
                            </p>
                            <p
                                style={{
                                    background:
                                        "url(//theme.hstatic.net/1000296531/1000427833/14/mail.png?v=2089) no-repeat left center"
                                }}
                            >
                                cskh@tsuper.com
                            </p>
                            <p
                                style={{
                                    background:
                                        "url(//theme.hstatic.net/1000296531/1000427833/14/web.png?v=2089) no-repeat left center"
                                }}
                            >
                                https://tsuper.com
                            </p>
                        </div>
                       
                       
                        <div className="cskh col-md-3 col-sm-6 col-xs-12">
                            <div style={{ color: "#A1A1A1" }}>QUY ĐỊNH &amp; CHÍNH SÁCH</div>
                            <ul>
                            {posts.map(function (post, index) {
                                return <li>
                                            <Link key={index} to={"/chi-tiet-bai-viet/"+post.slug}>{post.title}</Link>
                                        </li>
                                })}
                            </ul>
                        </div>
                        <div className="social_network col-md-2 col-sm-6 col-xs-12">
                            <div style={{ textAlign: "left", fontSize: 13, color: "#A1A1A1" }}>
                                CHỨNG NHẬN
                            </div>
                            <ul>
                                <li>
                                    <a href="http://online.gov.vn/Home/WebDetails/80445">
                                        <img
                                            src="https://file.hstatic.net/1000296531/file/logosalenoti_72f1b9d616b84c199d68044b7c333689.png"
                                            alt="Đã Thông Báo Với Bộ Công Thương"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="clear" />
                    </div>
               
                    <div className="copy">
                        <p>Copyright © 2023 Hà Ngọc Tiến-212110200.</p>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Copyright;