 import { AddProductFrom } from "@/pages/admin/products";
import Link from "next/link";
import { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineDollarCircle,
  AiOutlineHome,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { BsCardChecklist, BsCartCheck, BsSliders } from "react-icons/bs";
import { FaRegUserCircle, FaUsers } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { GiTeapotLeaves } from "react-icons/gi";
import {
  MdOutlineBusiness,
  MdOutlineUpdate,
  MdTipsAndUpdates,
} from "react-icons/md";
import { RiContactsBookLine, RiGalleryFill } from "react-icons/ri";
import styled from "styled-components";
import CustomDropdown from "../admin/common/CustomDropdown";
import CustomModal from "../admin/common/CustomModal";
import { useRouter } from "next/router";

// const SidebarWrapper = styled.nav`
//   position: fixed;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   z-index: 100;
//   padding-top: 56px;
//   overflow-x: hidden;
//   overflow-y: scroll; /* Add scrollbar */
//   background-color: #f8f9fa;
//   color: #fff;
// `;

const SidebarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1030;

  overflow-x: hidden;
  background-color: #f8f9fa;
  color: #fff;
`;

const SidebarHeader = styled.h6`
  padding: 0.875rem 0.25rem;
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
`;

const SidebarNavLink = styled.span`
  display: flex;
  align-items: center;
  padding: 0.5rem 1.5rem;
  font-size: 0.99rem;
  font-weight: 500;
  color: #212529;
  transition: all 0.3s ease;

  svg {
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: #e9ecef;
  }

  &.active {
    color: #007bff;
    background-color: #fff;
    border-left: 3px solid #007bff;
  }
`;
const productsLi = ["products"];
const ordersLi = ["orders"];

const Sidebar = () => {
  const router = useRouter();
  const userInfo = localStorage.getItem("user");
  const optionsProfile = [userInfo, "logout"];
  const [modalShow, setModalShow] = useState(false);
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
    <SidebarWrapper className="  col-md-3 col-lg-2 d-md-block bg-light sidebar collapse ">
      <CustomModal
        name="Add Product"
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <AddProductFrom />
      </CustomModal>
      <div className="position-sticky ">
        <SidebarHeader className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-2 mb-1 text-muted">
          <Link href="/admin/dashboard">
            {" "}
            <span style={{ color: "#212529" }}>SULTAN TEA</span>
          </Link>
          <button
            className="border-0 bg-white rounded px-3 py-2 d-md-none d-sm-block d-xs-block"
            onClick={() => {
              menuHandler();
            }}
          >
            <AiOutlineClose className="fw-bold" size={20} />
          </button>
        </SidebarHeader>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link href="/admin/dashboard">
              <SidebarNavLink
                className={`${
                  router.pathname === "/admin/dashboard" ? "active" : ""
                } nav-link`}
              >
                <AiOutlineHome /> Dashboard
              </SidebarNavLink>
            </Link>
          </li>
          <li className="nav-item">
            {/* <SidebarNavLink
              className="nav-link"
              href="#"
              onClick={() => {
                setModalShow(true);
              }}
            >
              <AiOutlineUserAdd /> Add Product
            </SidebarNavLink> */}
          </li>
          <li className="nav-item">
            <SidebarNavLink
              className={`${
                router.pathname === "/admin/products" ? "active" : ""
              } nav-link`}
            >
              <BsCardChecklist />
              <CustomDropdown options={productsLi} name="Products">
                <span
                  className="nav-link fs-6 text-capitalize"
                  onClick={() => {
                    setModalShow(true);
                  }}
                >
                  Add Product
                </span>
              </CustomDropdown>
            </SidebarNavLink>
          </li>
          <li className="nav-item">
            <SidebarNavLink
              className={`${
                router.pathname === "/admin/orders" ? "active" : ""
              } nav-link`}
            >
              <BsCartCheck />
              <CustomDropdown name="Orders">
                <Link
                  href="/admin/orders"
                  className="nav-link  fs-6 text-capitalize"
                >
                  Orders
                </Link>
                <Link
                  href="/admin/orders/shipped"
                  className="nav-link  fs-6 text-capitalize"
                >
                  Shipped
                </Link>
                <Link
                  href="/admin/orders/delivered"
                  className="nav-link  fs-6 text-capitalize"
                >
                  Delivered
                </Link>
                <Link
                  href="/admin/orders/cancelled"
                  className="nav-link  fs-6 text-capitalize"
                >
                  Cancelled
                </Link>
              </CustomDropdown>
            </SidebarNavLink>
          </li>
          {/* <li className="nav-item">
            <Link href="customers">
              <SidebarNavLink className="nav-link">
                <FaUsers /> Customers
              </SidebarNavLink>
            </Link>
          </li> */}

          <li className="nav-item">
            <Link href="/admin/sell">
              <SidebarNavLink
                className={`${
                  router.pathname === "/admin/sell" ? "active" : ""
                } nav-link`}
              >
                <AiOutlineDollarCircle /> Sell
              </SidebarNavLink>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/admin/gallery">
              <SidebarNavLink
                className={`${
                  router.pathname === "/admin/gallery" ? "active" : ""
                } nav-link`}
              >
                <RiGalleryFill /> Gallery
              </SidebarNavLink>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/admin/carrier">
              <SidebarNavLink
                className={`${
                  router.pathname === "/admin/carrier" ? "active" : ""
                } nav-link`}
              >
                <FiTarget /> Carrier
              </SidebarNavLink>
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link href="press-releases">
              <SidebarNavLink className="nav-link">
                <MdOutlineUpdate /> Press Releases
              </SidebarNavLink>
            </Link>
          </li> */}
          <li className="nav-item">
            <Link href="/admin/slide">
              <SidebarNavLink
                className={`${
                  router.pathname === "/admin/slide" ? "active" : ""
                } nav-link`}
              >
                <BsSliders /> Slide
              </SidebarNavLink>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/admin/business">
              <SidebarNavLink
                className={`${
                  router.pathname === "/admin/business" ? "active" : ""
                } nav-link`}
              >
                <MdOutlineBusiness /> Business
              </SidebarNavLink>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/admin/our-brands">
              <SidebarNavLink
                className={`${
                  router.pathname === "/admin/our-brands" ? "active" : ""
                } nav-link`}
              >
                <GiTeapotLeaves size={18} /> Our Brands
              </SidebarNavLink>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/admin/press">
              <SidebarNavLink
                className={`${
                  router.pathname === "/admin/press" ? "active" : ""
                } nav-link`}
              >
                <MdTipsAndUpdates /> Press Releases
              </SidebarNavLink>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/admin/office">
              <SidebarNavLink
                className={`${
                  router.pathname === "/admin/office" ? "active" : ""
                } nav-link`}
              >
                <MdOutlineBusiness /> Our Office
              </SidebarNavLink>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/admin/contact">
              <SidebarNavLink
                className={`${
                  router.pathname === "/admin/contact" ? "active" : ""
                } nav-link`}
              >
                <RiContactsBookLine /> Contact
              </SidebarNavLink>
            </Link>
          </li>
          {/* <li className="nav-item ">
            <SidebarNavLink className="nav-link" href="#">
              <MdNotificationsActive /> Notification
            </SidebarNavLink>
          </li> */}
          <li className="nav-item d-md-none d-sm-block ">
            <SidebarNavLink className="nav-link" href="#">
              <FaRegUserCircle />
              <CustomDropdown options={optionsProfile} name="Profile" />
            </SidebarNavLink>
          </li>
          {/* <li className="nav-item">
            <SidebarNavLink className="nav-link" href="#">
              <FiSettings /> Settings
            </SidebarNavLink>
          </li> */}
        </ul>
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;
