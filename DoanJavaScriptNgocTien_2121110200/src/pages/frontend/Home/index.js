import Slider from "./Slider";
import CategoryServices from "../../../services/CategoryServices"
import { useEffect, useState } from "react";
import ProductHome from "./ProductHome";

function Home() {
    const [categories, setCategories] = useState([]);
    useEffect (function(){
        (async function(){
          await CategoryServices.getCategoryByParentId(0)
          .then(function(result){
              setCategories(result.data.categories)
          });
        })();
  },[]);
    return ( 
        <section className="maincontent">   
        <Slider/>
        <div className="container my-3">
            <div className="product-category">
                <div className="row">
                    {categories.map(function (categories, index) {
            return <ProductHome key={index} categories={categories}/>
        })}

                </div>
            </div>
        </div>
    </section> 
     );
}

export default Home; 