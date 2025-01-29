 
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const headerImage = "/top-image.png";

const HeaderHero = () => (
  <div
    className="px-1 py-5"
    style={{
      backgroundImage: "url(pexels-ederica-main.jpg)",
      backgroundSize: "cover",
      opacity: 1,
      backgroundPosition: "center",
      marginTop: "-80px",
    }}
  >
    <div className="row p-5 align-items-center flex-lg-row-reverse" style={{ marginTop: "100px" }}>
      <div className="col-md-6 col-xl-6 mb-4 mb-lg-0">
        <div className="lc-block position-relative">
          <Image
            src={headerImage}
            alt="Photo by sultan tea"
            width={384}
            height={500}
            quality={75}
            className="ms-5 w-75 img-fluid rounded shadow"
          />
        </div>
      </div>
      <div className="col-md-6 col-xl-6">
        <div className="lc-block mb-3 me-4">
          <div editable="rich">
            <h1 className="fw-bolder display-5 text-white">
            It’s more than
            just a <br /> <span className="text-warning">trip </span>
            </h1>
          </div>
        </div>
        <div className="lc-block mb-2">
          <div editable="rich">
            <p className="lead text-white pb-2">Safe Travel!!</p>
          </div>
        </div>
        <div className="lc-block mt-2">
          <Link href="/shop">
            <button
              className="d-flex align-items-center fw-bolder btn btn-lg text-white"
              style={{ backgroundColor: "#E49E48" }}
            >
              Shop Now
              <AiOutlineArrowRight className="ms-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default HeaderHero;


 