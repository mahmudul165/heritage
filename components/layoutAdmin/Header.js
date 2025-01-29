// components/Header.js
import useAuth from "@/lib/hook/useAuth";
import { FaRegUserCircle } from "react-icons/fa";
import CustomDropdown from "../admin/common/CustomDropdown";

const Header = () => {
  const userInfo = localStorage.getItem("user");
  const options = [userInfo, "logout"];
  console.log({ userInfo });
  const { token, email, items, status } = useAuth();
  console.log("dasboard data from login:", email, status, token, items);

  const menuHandler = () => {
    const sidebar = document.querySelector(".sidebar");
    const isCollapse = sidebar.classList.contains("collapse");
    if (isCollapse) {
      sidebar.classList.remove("collapse");
    } else {
      sidebar.classList.add("collapse");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand ml-220 " href="#">
          Dashboard
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => {
            menuHandler();
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto ">
            <FaRegUserCircle size={24} className="me-2 text-secondary" />
            <CustomDropdown options={options}></CustomDropdown>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
