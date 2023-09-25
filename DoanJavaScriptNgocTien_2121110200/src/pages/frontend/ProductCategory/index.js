import { useEffect, useState } from "react";
import ProductServices from "../../../services/ProductServices";
import ProductItem from "../../../components/frontend/Productitem";
import { useParams } from "react-router-dom";
import CategoryServices from "../../../services/CategoryServices";
import BrandList from "../../../layouts/LayoutSite/BrandList";
import CategoryList from "../../../layouts/LayoutSite/CategoryList";


function ProductCategory() {
  const [limit, setLimit] = useState(8);
  const { slug } = useParams();//trả về slug
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  // document.title=title;//lấy tên trang muốn chuyển thành tên trang
  useEffect(function(){
    (async function(){
        try{
            const infocategory = await CategoryServices.getCategoryBySlug(slug);
            const catid = infocategory.data.category.id;//trả vè id của mẫu tin slug
            setTitle (infocategory.data.category.name);
            const infoproduct = await ProductServices.getProductByCategoryId(catid,8);
            setProducts(infoproduct.data.products);
        }catch(error){
          console.error(error);
        }
    })();
  },[limit,slug]);
  return (
    <section className="maincontent">
    <div className="container my-4">
        <div className="row">
            <div className="col-md-2">
                <CategoryList/>
                <BrandList/>
            </div>
            <div className="col-md-10">
                <h3 className="text"><b>{title}</b></h3>
                <div className="row">
                    {products.map(function (product, index) {
                        return <ProductItem key={index} product={product} />
                    })}
                </div>
                <div className='row mt-3'>
                    <div className='col-12 text-center'>
                        <button className='btn btn-success' onClick={() => setLimit(limit + 8)}>Xem thêm </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>);
}
export default ProductCategory;
