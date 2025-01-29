// import { MyButton } from "@/components/common/Buttons";
// import Image from "next/image";
// import React from "react";
// import { Card } from "react-bootstrap";
// import { FaLongArrowAltRight } from "react-icons/fa";
// import ShowMore from "../common/ShowMore";
// import OverViewImage2 from "/public/about-image-2.png";

// export const ourCompanyDescription =
//   "Originating in the hearts of Sylhet region, dating 200 years back during the British rule, tea production first started in Bangladesh and has experienced phenomenal growth of several tea industries in the preceding years. In addition, Tea cultivation was also introduced in Chittagong. In today’s world, Some of the leading Tea industries in Bangladesh are Ispahani Mirzapur, Bengal tea, Kazi n Kazi,and the list is endless. However, there has been a number of emerging tea industries for the past 20 years. One of them is Sultan Tea under Greenfield tea industries Ltd, which started its journey from 2017. Located near the Himalayan region, Greenfield tea industries first started its tea production in Shahbazpur, Thakurgaon. The manufacturing process for tea production starts in the month of March and operates through a period of nine months till November.";

// function Overview2() {
//   const [showModal, setShowModal] = React.useState(false);

//   return (
//     <section>
//       <section className="container   ">
//         <ShowMore
//           show={showModal}
//           title="More About Us"
//           subTitle="Our Company "
//           description={ourCompanyDescription}
//           onHide={() => setShowModal(false)}
//         />
//         <div className="row align-items-center ">
//           <div className=" col-md-6 col-sm-12 ">
//             {/* <Roll right> */}
//             <div className="my-4 py-2">
//               <Card>
//                 <Image
//                   className="heroImage"
//                   src={OverViewImage2}
//                   alt="Picture of the author"
//                 />
//               </Card>
//             </div>
//           </div>
//           <div className="col-md-6 col-sm-12 text-end">
//             {/* <Roll left> */}
//             <div className="my-2 py-2">
//               {/* <h3 className="cus-color-secondary fs-4">About Us</h3> */}
//               <h1
//                 className="my-2  fs-2 fw-bolder  whileHover={{
//                     scale: 1.3,
//                     transition: { duration: 2 },
//                   }} "
//               >
//                 Our Company
//               </h1>

//               <p className="py-1 fs-5 text-justify">
//                 {ourCompanyDescription.substring(0, 180)}...
//               </p>
//             </div>

//             <div className=" d-flex justify-content-end mt-5">
//               <MyButton
//                 style={{ backgroundColor: "#E49E48" }}
//                 type="submit"
//                 size="lg"
//                 className=" text-white px-4 ele-center gap-2"
//               >
//                 <span
//                   onClick={() => {
//                     setShowModal(true);
//                   }}
//                 >
//                   {" "}
//                   More About Us
//                 </span>{" "}
//                 <FaLongArrowAltRight />
//               </MyButton>
//             </div>
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// }

// export default Overview2;
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { FaLongArrowAltRight } from "react-icons/fa";
import ShowMore from "../common/ShowMore";
import { MyButton } from "@/components/common/Buttons";
import Image from "next/image";
import OverViewImage2 from "/public/about-image-2.png";

const ourCompanyDescription =
  "Originating in the hearts of Sylhet region, dating 200 years back during the British rule, tea production first started in Bangladesh and has experienced phenomenal growth of several tea industries in the preceding years. In addition, Tea cultivation was also introduced in Chittagong. In today’s world, Some of the leading Tea industries in Bangladesh are Ispahani Mirzapur, Bengal tea, Kazi n Kazi, and the list is endless. However, there has been a number of emerging tea industries for the past 20 years. One of them is Sultan Tea under Greenfield tea industries Ltd, which started its journey from 2017. Located near the Himalayan region, Greenfield tea industries first started its tea production in Shahbazpur, Thakurgaon. The manufacturing process for tea production starts in the month of March and operates through a period of nine months till November.";

function Overview2() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <section>
      <section className="container">
        <ShowMore
          show={showModal}
          title="More About Us"
          subTitle="Our Company"
          description={ourCompanyDescription}
          onHide={() => setShowModal(false)}
        />
        <div className="row align-items-center">
          <div className="col-md-6 col-sm-12">
            <div className="my-4 py-2">
              <Card>
                <Image
                  src={OverViewImage2}
                  alt="Picture of the author"
                  layout="responsive"
                  width={475}
                  height={317}
                />
              </Card>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 text-end">
            <div className="my-2 py-2">
              <h1 className="my-2 fs-2 fw-bolder">
                Our Company
              </h1>
              <p className="py-1 fs-5 text-justify">
                {ourCompanyDescription.substring(0, 180)}...
              </p>
            </div>
            <div className="d-flex justify-content-end mt-5">
              <MyButton
                style={{ backgroundColor: "#E49E48" }}
                size="lg"
                onClick={handleShowModal}
                className="text-white px-4 ele-center gap-2"
              >
                <span>More About Us</span> <FaLongArrowAltRight />
              </MyButton>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Overview2;
