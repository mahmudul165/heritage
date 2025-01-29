import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Offcanvas } from "react-bootstrap";
import Logo from "/public/main-logo.png";
import { useRouter } from "next/router";

function Header() {
  const [scroll, setScroll] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.pageYOffset > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar
        sticky="top"
        expand="lg"
        className={`navbar-custom py-0 ${scroll ? "scrolled" : ""}`}
      >
        <div className="container">
          {/* Logo */}
          <Navbar.Brand as={Link} href="/">
            <Image src={Logo} alt="Logo" width={130} height={65} className="logo" />
          </Navbar.Brand>

          {/* Mobile Toggle */}
          <Navbar.Toggle aria-controls="navbar-offcanvas" />

          {/* Offcanvas Menu */}
          <Navbar.Offcanvas id="navbar-offcanvas" placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="fs-4 fw-bold text-dark">Sultan Tea</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="ms-auto align-items-center">
                <Nav.Item>
                  <Nav.Link as={Link} href="/" className={router.pathname === "/" ? "active" : ""}>
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} href="/about" className={router.pathname === "/about" ? "active" : ""}>
                    About Us
                  </Nav.Link>
                </Nav.Item>

                {/* Quick Links Dropdown */}
                <NavDropdown title="Quick Links" id="quick-links" className="custom-dropdown">
                  <div className="dropdown-wrapper">
                    <NavDropdown.Item as="li">
                      <Link href="https://airheritage.com.bd" target="_blank">
                        <img src="https://www.heritageairexpress.com/imgs/heritage-air-express.png" alt="Air Heritage" width="150" />
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item as="li">
                      <Link href="https://flyheritage.net/" target="_blank">
                        <img src="https://www.heritageairexpress.com/imgs/flyheritage.png" alt="Fly Heritage" width="150" />
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item as="li">
                      <Link href="https://sultantea.com.bd" target="_blank">
                        <img src="https://www.heritageairexpress.com/imgs/sultan-tea.png" alt="Sultan Tea" width="150" />
                      </Link>
                    </NavDropdown.Item>
                  </div>
                </NavDropdown>

                <Nav.Item>
                  <Nav.Link as={Link} href="/contact" className={router.pathname === "/contact" ? "active" : ""}>
                    Contact Us
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </div>
      </Navbar>

      {/* Styling */}
      <style jsx>{`
        .navbar-custom {
          background: white;
          transition: all 0.3s ease-in-out;
        }
        .navbar-custom.scrolled {
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .logo {
          transition: transform 0.3s ease;
        }
        .logo:hover {
          transform: scale(1.08);
        }
        .active {
          font-weight: bold;
          color: #007bff !important;
        }
        .nav-link {
          font-size: 16px;
          padding: 10px 20px;
          font-weight: 500;
          transition: color 0.3s ease, transform 0.2s ease-in-out;
        }
        .nav-link:hover {
          color: #007bff;
          transform: translateY(-2px);
        }
        .custom-dropdown .dropdown-menu {
          border-radius: 10px;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
          border: none;
          animation: fadeIn 0.3s ease-in-out;
        }
        .dropdown-wrapper {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 10px;
        }
        .custom-dropdown .dropdown-item img {
          transition: transform 0.3s ease-in-out;
        }
        .custom-dropdown .dropdown-item img:hover {
          transform: scale(1.05);
        }

        /* Smooth Fade In Animation */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}

export default Header;
