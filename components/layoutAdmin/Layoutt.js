import Header from "./Header";
import Sidebar from "./Sidebar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Layout = ({ children }) => {
  return (
    <div className="container-fluid">
      <Header />
      <ToastContainer position="top-right" limit={1} />

      <div className="row">
        <Sidebar />
        <main className="col-md-9  ms-sm-auto col-lg-10 px-md-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
