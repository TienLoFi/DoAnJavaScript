import { useParams } from "react-router-dom";
import ProductItem from "../../components/frontend/Productitem";
import BrandList from "./BrandList";
import CategoryList from "./CategoryList";
import { useEffect, useState } from "react";
import ProductServices from "../../services/ProductServices"

function Search() {
    const { key } = useParams();
    const [products, setProducts] = useState([]);
    document.title = "Kết quả tìm kiếm";
    useEffect(function () {
        (async function () {
            const resultp = await ProductServices.getProductSearch(key);
                setProducts(resultp.data.products)

        })();
    }, [key]);
    if(products != null){
        return (
            <section className="maincontent">
                <div className="container my-4">
                    <div className="row">
                        <div className="col-md-2">
                            <CategoryList/>
                            <BrandList/>
                        </div>
                        <div className="col-md-10">
                            <h3 className="text-center"><b>Kết quả tìm kiếm</b></h3>
                            <div className="row">
                                {products.map(function (product, index) {
                                    return <ProductItem key={index} product={product} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    else{
        return (
            <section className="maincontent">
                <div className="container my-4">
                    <div className="row">
                        <div className="col-md-2">
                            <CategoryList/>
                            <BrandList/>
                        </div>
                        <div className="col-md-10">
                            <h3 className="text-center"><b>Kết quả tìm kiếm</b></h3>
                            <div className="row">
                                Không tìm thấy {key}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}

export default Search;