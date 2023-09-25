import React from 'react';
import "../../../src/components/frontend/ProductItem.css"
import { FaShoppingCart,FaTag } from 'react-icons/fa';  
import { urlImage } from '../../config';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

// Rest of your component code

function ProductItem(props) {
  const formatCurrency = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  return (
    <div className="col-md-3">
      <div className="product-item-container">
        <div className="product-item border">
          <div className="product-image">
            <Link to={"/chi-tiet-san-pham/" + props.product.slug} >
              <img
                className="img-fluid"
                src={urlImage + "product/" + props.product.image}
                alt="sp"
              />   <span class="details-link">Xem chi tiết </span>
            </Link>
          </div>
          <div className="product-name p-2">
            <Link to={"/chi-tiet-san-pham/" + props.product.slug}>
              <h3 className="fs-5 text-center">{props.product.name}</h3>
            </Link>
          </div>
          <div className="product-price p-2">
            <div className="row">
              <div className="col-7">
                <div className="col-5 text-end">
                <del>  {formatCurrency(props.product.price_sale)} </del>
              
                </div>
                <FaTag className="ml-2" />10%
              </div>
              
              <strong className="text-danger fs-5 my-text p-2">
                {formatCurrency(props.product.price)}
              </strong>
          </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
