import { Link } from "react-router-dom";
import MenuServices from '../../services/MenuServices';
import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

function Menu() {
  const [menus, setMenus] = useState([]);
  useEffect(function(){
    (async function(){
      try{
        const result = await MenuServices.getByParentId("mainmenu", 0)
        setMenus(result.data.menus)
      }
      catch{
        console.log("wait..")
      }
    })();
  },[])
  return (
    <section className="mainmenu bg-dark">
      <div className="container ">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand text-white d-md-none d-sm-block" to="/">
            T-Super
            </Link>
            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggle-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <Link className="nav-link text-white" to={"/"}>Trang chủ</Link>
              <Link className="nav-link text-white" to={"/san-pham"}>Tất cả sản phẩm</Link> */}
                {menus.map(function (menu, index) {
                  return <MenuItem key={index} menu={menu}/>
                })}
                {/* <Link className="nav-link text-white" to={"/bai-viet"}>Tất cả bài viết</Link>
                <Link className="nav-link text-white" to={"/lien-he"}>Liên hệ</Link> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Menu;
