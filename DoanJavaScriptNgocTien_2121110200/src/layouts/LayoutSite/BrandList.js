import { useEffect, useState } from "react";
import BrandServices from "../../services/BrandServices";
import { Link } from "react-router-dom";
import { urlImage } from "../../config";
function BrandList() {
  const [listBrand, setListBrand] = useState([]);
  useEffect(function () {
    (async function () {
      try {
        const result = await BrandServices.getAll(0);
        setListBrand(result.data.brands);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className="group_sidebar">
      <div className="list-group navbar-inner ">
        <div className="mega-left-title btn-navbar title-hidden-sm">
           
        <h3 className="sb-title">Thương Hiệu</h3>
      
        </div>
        <ul className="nav navs sidebar menu" id="cssmenu">
          {listBrand.map(function (br, index) {
            return (
              <li className="item" key={index}>
                <Link to={"/thuong-hieu/" + br.slug}>
                  <img src={urlImage + "brand/" + br.image} alt="logo" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default BrandList;