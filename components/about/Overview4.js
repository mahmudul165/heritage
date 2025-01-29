// import Image from "next/image";
// import React from "react";
// import { Card } from "react-bootstrap";
// import OverViewImage2 from "/public/about-image-4.png";
// function Overview4() {
//   return (
//     <section>
//       <section className="container   ">
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
//           <div className="col-md-6 col-sm-12">
//             {/* <Roll left> */}
//             <div className="my-2 py-2 text-end">
//               <h1
//                 className="my-2  fs-3 fw-bolder  whileHover={{
//                     scale: 1.3,
//                     transition: { duration: 2 },
//                   }} "
//               >
//                 Our Vision
//               </h1>
//               <p
//                 className="my-2 py-2 fs-4   whileHover={{
//                     scale: 1.3,
//                     transition: { duration: 2 },
//                   }} "
//               >
//                 Where we believe in bringing the best of tea to you!
//               </p>
//               <p className="py-1 fs-5 text-justify">
//                Our mission is to provide you with high-quality, ethically-sourced tea from around the world. Our vision is to be your preferred source for the finest teas and herbal infusions. Try our selection today and experience a luxurious cup of tea with every sip!

//               </p>
//             </div>
//             {/* </Roll> */}
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// }

// export default Overview4;
import React from "react";
import { Card } from "react-bootstrap";
import Image from "next/image";
import OverViewImage2 from "/public/about-image-4.png";

const visionDescription =
  "Where we believe in bringing the best of tea to you! Our mission is to provide you with high-quality, ethically-sourced tea from around the world. Our vision is to be your preferred source for the finest teas and herbal infusions. Try our selection today and experience a luxurious cup of tea with every sip!";

function Overview4() {
  return (
    <section>
      <section className="container">
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
          <div className="col-md-6 col-sm-12">
            <div className="my-2 py-2 text-end">
              <h1 className="my-2 fs-3 fw-bolder">
                Our Vision
              </h1>
              <p className="my-2 py-2 fs-4">
                Where we believe in bringing the best of tea to you!
              </p>
              <p className="py-1 fs-5 text-justify">
                {visionDescription}
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Overview4;
