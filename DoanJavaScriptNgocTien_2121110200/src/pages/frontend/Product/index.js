import { useEffect, useState } from 'react';
import ProductItem from '../../../components/frontend/Productitem';
import ProductServices from '../../../services/ProductServices';
import { Button } from 'bootstrap';

function Product() {
    const [limit, setLimit] = useState(8);
    const [products, setProducts] = useState([]);
    useEffect(function(){
      (async function(){
        await ProductServices.getProductAll(limit, 1)
        .then(function(result){
          setProducts(result.data.products)
        });
      })();
    },[limit])

    return (
        <section className="maincontent">
            <div className="container my-4">
                <h3>TẤT CẢ SẢN PHẨM</h3>
                <div className="row">
                {products.map(function(product, index){
                    return <ProductItem product={product}/>
                })}
                </div>
                <div className='row mt-3'>
                    <div className='col-12 text-center'>
                        <button className='btn btn-success' onClick={()=>setLimit(limit+8)}>Xem thêm </button>
                    </div>
                </div>
            </div> 
        </section>
    );
}

export default Product;