import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductServices from "../../../services/ProductServices";
import { urlImage } from "../../../config";
import ProductItem from "../../../components/frontend/Productitem";

import { FaShoppingCart, FaCheck } from "react-icons/fa";

function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState([]);
  const [product_orther, setProductOrther] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () {
      try {
        const result = await ProductServices.getProductBySlug(slug);
        if (result.data.success === true) {
          setProduct(result.data.product);
          setProductOrther(result.data.product_orther);
        }
      } catch (error) {
        // Handle error
        console.error(error);
      } finally {
        setIsLoading(false); // Set isLoading to false when data fetching is completed (whether success or error)
      }
    })();
  }, [slug]);

  const formatCurrency = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  if (isLoading) {
    return <div>Loading...</div>; // Display a loading indicator or message
  }

  return (
    <section className="maincontent">

      <div className="container my-4">
        <div className="row">
          <div className="col-md-6">
            <img
              src={urlImage + "product/" + product.image}
              className="img-fluid w-100"
              alt="jhihghg"
            />
          </div>
      
          <div className="col-md-6">
            <h1>{product.name}</h1>
            <div className="col-6">
              <h1>
                <strong className="fs-3 text-danger">
                  {formatCurrency(product.price)}
                </strong>
              </h1>
              <h5>
                <strong className="col-5   text-end">
                  {" "}
                  <del>{formatCurrency(product.price_sale)}</del>
                </strong>
              </h5>
            </div>
            <div className="d-flex justify-content-end align-items-start mb-3">
              <button className="btn btn-primary me-2 ">
                <FaShoppingCart className="me-2" />
                Thêm vào giỏ hàng
              </button>
              <button className="btn btn-primary">
                <FaCheck className="me-1" />
                Đặt trước
              </button>
            </div>
            <h5>MÔ TẢ: </h5>
            <div>{product.metadesc}</div>
   
            <div class="product-list-">
              <h3>Thông số kĩ thuật ô tô</h3>
              <div class="row">
                <div class="col-md-6">
                  <ul class="list-group">
                    <li class="list-group-item">
                      <i class="bi bi-speedometer2"></i> Tốc độ tối đa: 250 km/h
                    </li>
                    <li class="list-group-item">
                      <i class="bi bi-gear"></i> Hộp số: 7 cấp tự động
                    </li>
                    <li class="list-group-item">
                      <i class="bi bi-calendar3"></i> Năm sản xuất: 2023
                    </li>
                  </ul>
                </div>

                <div class="col-md-6">
                  <ul class="list-group">
                    <li class="list-group-item">
                      <i class="bi bi-piston"></i> Động cơ: 2.0L Turbo
                    </li>
                    <li class="list-group-item">
                      <i class="bi bi-dashboard"></i> Mức tiêu thụ nhiên liệu: 8
                      lít/100km
                    </li>
                    <li class="list-group-item">
                      <i class="bi bi-people"></i> Số chỗ ngồi: 5
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            {" "}
            <h3>
              <b>Chi Tiết:</b>
            </h3>
            {product.detail && <h4>{product.detail}</h4>}
          </div>
        </div>

        <div className="">
          <h3>
            <b>Sản Phẩm Cùng Loại</b>
          </h3>
        </div>
        <div className="row">
          {product_orther.map(function (otherProduct, index) {
            return <ProductItem product={otherProduct} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
