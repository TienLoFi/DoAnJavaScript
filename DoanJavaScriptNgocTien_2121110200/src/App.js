import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutSite from './layouts/LayoutSite';
import RouterPublic from './router/RouterPublic';
import RouterPrivate from './router/RouterPrivate';
import LayoutAdmin from './layouts/LayoutAdmin'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LayoutSite />}>
  {RouterPublic.map(function (router) {
    const Page = router.component;
    return <Route key={router.id} path={router.path} element={<Page />} />;
  })}
</Route>

<Route path="/admin" element={<LayoutAdmin />}>
  {RouterPrivate.map(function (router) {
    const Page = router.component;
    return <Route key={router.id} path={router.path} element={<Page />} />;
  })}
</Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
