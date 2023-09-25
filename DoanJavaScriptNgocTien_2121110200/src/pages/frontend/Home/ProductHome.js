import { useEffect, useState } from "react";
import ProductItem from "../../../components/frontend/Productitem";
import ProductServices from '../../../services/ProductServices';
import { Link } from "react-router-dom";

function ProductHome(props) {
    const [products, setProducts] = useState([]);
    const [showMore, setShowMore] = useState(false); // Thêm biến state showMore

    useEffect(() => {
        (async function() {
            const result = await ProductServices.getProductHome(8, props.categories.id);
            setProducts(result.data.products);
            setShowMore(result.data.products.length > 8); // Kiểm tra điều kiện và cập nhật giá trị cho showMore
        })();
    }, []);

    if (products != null) {
        return (
            <div className="container my-4">
                <div className="product-category">
                    <h3 className="text-center"><b>{props.categories.name}</b></h3>
                </div>
                <div className="row">
                    {products.map((product, index) => (
                        <ProductItem product={product} key={index} />
                    ))}
                </div>
                {showMore && ( // Kiểm tra giá trị của showMore
                    <div className="text-center my-3">
                        <Link to={"san-pham/" + props.categories.slug} className="btn btn-success">Xem thêm</Link>
                    </div>
                )}
            </div>
        );
    }
}

export default ProductHome;
    