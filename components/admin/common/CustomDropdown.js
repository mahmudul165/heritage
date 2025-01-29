import useAuth from "@/lib/hook/useAuth";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const CustomDropdown = ({ options, name, children }) => {
  const router = useRouter();

  const { email, items } = useAuth();
  console.log("dasboard data from login:", email, items);
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);

  const logOutHandler = () => {
    // alert("ok");

    localStorage.clear();
    router.push("/admin");
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    // Bind the event listener
    window.addEventListener("click", handleClickOutside);

    // Unbind the event listener on cleanup
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div ref={dropdownRef} className="cus-dropdown-menu">
      <div className="cus-dropdown-header" onClick={toggleMenu}>
        <span className="header-text"> {name} </span>
        <span className={`arrow-icon ${isOpen ? "open" : ""}`}>
          <MdKeyboardArrowRight size={24} className="text-secondary fw-bold" />
        </span>
      </div>
      <div className={`menu-items ${isOpen ? "open" : ""} shadow-lg `}>
        <ul className="nav p-1 ">
          {options &&
            options.map((el) => (
              <li className="nav-item" key={el}>
                {el === "logout" ? (
                  <button
                    className="btn  border-0 active fs-6 text-capitalize"
                    onClick={() => {
                      logOutHandler();
                    }}
                  >
                    {el}
                  </button>
                ) : (
                  <Link
                    className="nav-link active fs-6 text-capitalize"
                    href={el}
                  >
                    {el.substring(0, 16)}
                  </Link>
                )}
              </li>
            ))}

          {children}
        </ul>
      </div>
    </div>
  );
};

export default CustomDropdown;
