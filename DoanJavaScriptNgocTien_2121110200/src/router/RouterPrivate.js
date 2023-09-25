import Dashboard from "../pages/backend/Dashboard";
//brand
import BrandList from "../pages/backend/Brand/BrandList";
import BrandUpdate from "../pages/backend/Brand/BrandUpdate";
import BrandCreate from "../pages/backend/Brand/BrandCreate";
import BrandShow from "../pages/backend/Brand/BrandShow";
//category
import CategoryList from "../pages/backend/Category/CategoryList";
import CategoryCreate from "../pages/backend/Category/CategoryCreate";
import CategoryShow from "../pages/backend/Category/CategoryShow";
import CategoryUpdate from "../pages/backend/Category/CategoryUpdate";
//product
import ProductList from "../pages/backend/Product/ProductList";
import ProductCreate from "../pages/backend/Product/ProductCreate";
import ProductUpdate from "../pages/backend/Product/ProductUpdate";
import ProductShow from "../pages/backend/Product/ProductShow";
//post
import PostShow from "../pages/backend/Post/PostShow";
import PostList from "../pages/backend/Post/PostList";
import PostCreate from "../pages/backend/Post/PostCreate";
import PostUpdate from "../pages/backend/Post/PostUpdate";
//slider
import SliderShow from "../pages/backend/Slider/SliderShow";
import SliderList from "../pages/backend/Slider/SliderList";
import SliderCreate from "../pages/backend/Slider/SliderCreate";
import SliderUpdate from "../pages/backend/Slider/SliderUpdate";
//topic
import TopicList from '../pages/backend/Topic/TopicList';
import TopicShow from '../pages/backend/Topic/TopicShow';
import TopicCreate from '../pages/backend/Topic/TopicCreate';
import TopicUpdate from '../pages/backend/Topic/TopicUpdate';
//user
import UserList from '../pages/backend/User/UserList';
import UserShow from '../pages/backend/User/UserShow';
import UserCreate from '../pages/backend/User/UserCreate';
import UserUpdate from '../pages/backend/User/UserUpdate';
//menu
import MenuList from '../pages/backend/Menu/MenuList';
import MenuShow from '../pages/backend/Menu/MenuShow';
import MenuCreate from '../pages/backend/Menu/MenuCreate';
import MenuUpdate from '../pages/backend/Menu/MenuUpdate';
//contact
import ContactList from '../pages/backend/ConTact/ConTactList';
import ContactShow from '../pages/backend/ConTact/ConTactShow';
import ContactUpdate from '../pages/backend/ConTact/ContactUpdate';
//order
import OrderList from '../pages/backend/Order/OrderList';
import OrderShow from '../pages/backend/Order/OrderShow';

const RouterPrivate = [
  //BRAND//
  { path: "/admin", component: Dashboard },
  { path: "/admin/brand", component: BrandList },
  { path: "/admin/brand/create", component: BrandCreate },
  { path: "/admin/brand/update/:id", component: BrandUpdate },
  { path: "/admin/brand/show/:id", component: BrandShow },
  //CATEGORY//
  { path: "/admin/category", component: CategoryList },
  { path: "/admin/category/create", component: CategoryCreate },
  { path: "/admin/category/update/:id", component: CategoryUpdate },
  { path: "/admin/category/show/:id", component: CategoryShow },
  //PRODUCT
  { path: "/admin/product", component: ProductList },
  { path: "/admin/product/create", component: ProductCreate },
  { path: "/admin/product/update/:id", component: ProductUpdate },
  { path: "/admin/product/show/:id", component: ProductShow },
  //POST
  { path: "/admin/post", component: PostList },
  { path: "/admin/post/create", component: PostCreate },
  { path: "/admin/post/update/:id", component: PostUpdate },
  { path: "/admin/post/show/:id", component: PostShow },
  //slider
  { path: "/admin/slider", component: SliderList },
  { path: "/admin/slider/create", component: SliderCreate },
  { path: "/admin/slider/update/:id", component: SliderUpdate },
  { path: "/admin/slider/show/:id", component: SliderShow },
  //topic
  { path: "/admin/topic", component: TopicList },
  { path: "/admin/topic/show/:id", component: TopicShow },
  { path: "/admin/topic/create", component: TopicCreate },
  { path: "/admin/topic/update/:id", component: TopicUpdate },
  //user
  { path: "/admin/user", component: UserList },
  { path: "/admin/user/show/:id", component: UserShow },
  { path: "/admin/user/create", component: UserCreate },
  { path: "/admin/user/update/:id", component: UserUpdate },
  //menu
  { path: "/admin/menu", component: MenuList },
  { path: "/admin/menu/show/:id", component: MenuShow },
  { path: "/admin/menu/create", component: MenuCreate },
  { path: "/admin/menu/update/:id", component: MenuUpdate },
//order
    { path: "/admin/order", component: OrderList },
  { path: "/admin/order/show/:id", component: OrderShow },
   // ConTact
   { path: "/admin/contact", component: ContactList },
   { path: "/admin/contact/show/:id", component: ContactShow },
  { path: "/admin/contact/update/:id", component: ContactUpdate },
  
];
export default RouterPrivate;
