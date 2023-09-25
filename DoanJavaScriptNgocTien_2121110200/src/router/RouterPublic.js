import Search from "../layouts/LayoutSite/Search";
import Cart from "../pages/frontend/Cart";
import Contact from "../pages/frontend/Contact";
import Home from "../pages/frontend/Home";
import Post from "../pages/frontend/Post";
import PostDetail from "../pages/frontend/Post/PostDetail";
import PostTopic from "../pages/frontend/Post/PostTopic";
import Product from "../pages/frontend/Product";
import ProductDetail from "../pages/frontend/Product/ProductDetail";
import ProductBrand from "../pages/frontend/ProductBrand";
import ProductCategory from "../pages/frontend/ProductCategory";

const RouterPublic = [
    {path:'/',component:Home},
    {path:'/san-pham',component:Product},
    {path:'/bai-viet',component:Post},
    {path:'/chi-tiet-san-pham/:slug',component:ProductDetail},
    {path:'/danh-muc-san-pham/:slug',component:ProductCategory},
    {path:'/chu-de-bai-viet/:slug',component:PostTopic},
    {path:'/thuong-hieu/:slug',component:ProductBrand},
    {path:'/chi-tiet-bai-viet/:slug',component:PostDetail},
    {path:'/lien-he',component:Contact},
    {path:'/tim-kiem/:key',component:Search},
    {path:'/gio-hang',component:Cart}
];

export default RouterPublic;