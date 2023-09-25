import { useEffect, useState } from "react";
import CategoryServices from "../../services/CategoryServices"
import { Link } from "react-router-dom";

function CategoryList() {
    const [listCategory, setListCategory] = useState([]);
    useEffect(function () {
        (async function () {
            const result = await CategoryServices.getCategoryByParentId(0)
            setListCategory(result.data.categories)
        })();
    }, []);
    return (
        <div className="group_sidebar">
            <div className="list-group navbar-inner ">
                <div className="mega-left-title btn-navbar title-hidden-sm">
                    <h3 className="sb-title">Loại Xe</h3>
                </div>
                <ul className="nav navs sidebar menu" id="cssmenu">
                    {listCategory.map(function (cat, index) {
                        return (
                            <li className="item" key={index}>
                                <Link to = {"/danh-muc-san-pham/"+cat.slug}>
                                    <span>{cat.name}</span>
                                </Link>
                            </li>
                        )
                    })}

                </ul>
            </div>
        </div>
    );
}

export default CategoryList;