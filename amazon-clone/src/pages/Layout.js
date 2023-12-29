import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
            <Link to="/blogs">Blogs</Link>
            <Link to="/contact">Contact</Link>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
