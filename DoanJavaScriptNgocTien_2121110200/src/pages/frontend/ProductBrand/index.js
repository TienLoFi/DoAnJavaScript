import { useEffect, useState } from "react";

import ProductServices from "../../../services/ProductServices"
import BrandServices from "../../../services/BrandServices"
import { useParams } from "react-router-dom";
import ProductItem from "../../../components/frontend/Productitem";
import CategoryList from "../../../layouts/LayoutSite/CategoryList";
import BrandList from "../../../layouts/LayoutSite/BrandList";

function ProductBrand() {
    const { slug } = useParams();
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(8);
    const [title, setTitle] = useState("");
 
    useEffect(function () {
        (async function () {
            try {
                const result_brand = await BrandServices.getById(slug);
                const brandid = result_brand.data.brand.id;
                setTitle(result_brand.data.brand.name)
                const result = await ProductServices.getProductByBrandId(brandid,limit);
                setProducts(result.data.products);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [limit, slug]);

    return ( 
        <section className="maincontent">
       <div className="container my-4">
                <div className="row">
                    <div className="col-md-2">
                        <CategoryList/>
                        <BrandList/>
                    </div>
                <div className="col-md-9">
                <h4 className="text-success"><b>Các dòng xe phổ biến của {title}</b></h4>

                    <div className="row">
                        {products.map(function (product, index) {
                            return <ProductItem product={product} key={index} />
                        })}
                    </div>
                    <div className="row">
                        <div className="text-center my-3">
                            <button onClick={() => setLimit(limit + 4)} className="btn btn-success">Xem thêm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
     );
}

export default ProductBrand;