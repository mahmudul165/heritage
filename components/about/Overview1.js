// import Image from "next/image";
// import React from "react";
// import { Card } from "react-bootstrap";
// import OverViewImage2 from "/public/sultan-md.jpg";
// function Overview1() {
//   return (
//     <section>
//       <section className="container   ">
//         <div className="row align-items-center ">
//           <section className="col-md-6 col-sm-12">
//             {/* <Roll left> */}
//             <div className="my-2 py-2">
//               <h1
//                 className="my-2  fs-1 fw-bolder  whileHover={{
//                     scale: 1.3,
//                     transition: { duration: 2 },
//                   }} "
//               >
//                 Our Chairman Massage
//               </h1>
//               <p
//                 className="my-2 py-2 fs-4   whileHover={{
//                     scale: 1.3,
//                     transition: { duration: 2 },
//                   }} "
//               >
//                 Discover the soothing, restorative power of Sultan Tea – a
//                 massage blend of organic ingredients tailored to help you relax
//                 and rejuvenate.
//               </p>
//               <p className="py-1 fs-5 text-justify">
//                 With an exquisite blend of herbs, spices, and essential oils,
//                 Sultan Tea helps promote positive energy while providing relief
//                 from tension and stress. Indulge in the luxury of Sultan Tea's
//                 unique massage blend today and experience a tranquil moment away
//                 from everyday life!
//               </p>
//             </div>
//             {/* </Roll> */}
//           </section>
//           <section className=" col-md-6 col-sm-12 d-flex justify-content-end ">
//             {/* <Roll right> */}
//             <div className="my-4 py-2 ">
//               <Card className=" cus-b-r-5 ">
//                 <Image
//                   className="heroImage "
//                   src={OverViewImage2}
//                   alt="Picture of the author"
//                   // width={475}
//                 />
//               </Card>
//             </div>
//           </section>
//         </div>
//       </section>
//     </section>
//   );
// }

// export default Overview1;
import Image from "next/image";
import React from "react";
import { Card } from "react-bootstrap";
import OverViewImage2 from "/public/sultan-md.jpg";

function Overview1() {
  return (
    <section>
      <section className="container">
        <div className="row align-items-center">
          <section className="col-md-6 col-sm-12">
            <div className="my-2 py-2">
              <h1 className="my-2 fs-1 fw-bolder">
                Our Chairman Massage
              </h1>
              <p className="my-2 py-2 fs-4">
                Discover the soothing, restorative power of Sultan Tea – a
                massage blend of organic ingredients tailored to help you relax
                and rejuvenate.
              </p>
              <p className="py-1 fs-5 text-justify">
                With an exquisite blend of herbs, spices, and essential oils,
                Sultan Tea helps promote positive energy while providing relief
                from tension and stress. Indulge in the luxury of Sultan Tea's
                unique massage blend today and experience a tranquil moment away
                from everyday life!
              </p>
            </div>
          </section>
          <section className="col-md-6 col-sm-12 d-flex justify-content-end">
            <div className="my-4 py-2">
              <Card className="cus-b-r-5">
                <Image
                  src={OverViewImage2}
                  alt="Picture of the author"
                  layout="responsive"
                  width={475}
                  height={317} // Adjust the height to maintain the aspect ratio
                  loading="lazy"
                />
              </Card>
            </div>
          </section>
        </div>
      </section>
    </section>
  );
}

export default Overview1;
