import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logoxe.png";


import { FaSearch } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";

function Header() {
  const [key, setKey] = useState("");
  return (
    <section className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <Link to="/">
              <img src={logo} alt="" className="img-fluid" />
            </Link>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-start">       
          <div class="input-group mb-3">
                    <input type="text" style={{ height: 40 }}
                      value={key} onChange={(e) => setKey(e.target.value)}
                      class="form-control"
                      placeholder="Tìm kiếm..."
                      aria-label="Tìm kiếm..."
                      aria-describedby="basic-addon2" />
                    <span class="input-group-text" id="basic-addon2">
                      <Link to={"/tim-kiem/"+key}><FaSearch /></Link>
                    </span>
                  </div>
          </div>
          <div className="col-md-4 d-flex align-items-center">
            <div className="navbartop me-auto">
              <ul>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    <p>ĐĂNG KÝ</p> <hr></hr>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    <p> ĐĂNG NHẬP</p>
                    <hr></hr>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    <p> 0369864072</p>
                    <hr></hr>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/chi-tiet-bai-viet/chinh-sach-hoan-tien">
                    ĐỔI TRẢ HÀNG HOẶC HOÀN TIỀN
                  </Link>
                </li>
              </ul>
            </div>
            <span className="icon-cart ml-auto ">
              <BsCart4 />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
