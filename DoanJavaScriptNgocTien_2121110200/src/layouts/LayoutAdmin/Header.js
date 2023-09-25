import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <section className="header bg-primary">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/admin">
              Quản trị
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="#">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Link
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sản Phẩm
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/admin/product">
                        Tất Cả Sản Phẩm
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/admin/category">
                        Danh Mục
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/admin/brand">
                        Thương Hiệu
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/admin/user">
                        Người Dùng
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/admin/order">
                        Hóa đơn
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/admin/slider">
                       Slider
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/admin/topic">
                       Topic
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/admin/post">
                       Bài Viết
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/admin/menu">
                        Menu
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/admin/contact">
                        Liên Hệ
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link disabled" to="#">
                    Disabled
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Header;
