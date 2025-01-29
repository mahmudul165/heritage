// import Image from "next/image";
// import React from "react";
// import { Card } from "react-bootstrap";
// import OverViewImage2 from "/public/about-image-3.png";
// function Overview3() {
//   return (
//     <section>
//       <section className="container   ">
//         <div className="row align-items-center ">
//           <section className="col-md-6 col-sm-12">
//             {/* <Roll left> */}
//             <div className="my-2 py-2">
//               <h1
//                 className="my-2  fs-2 fw-bolder  whileHover={{
//                     scale: 1.3,
//                     transition: { duration: 2 },
//                   }} "
//               >
//                 Our Mission
//               </h1>
//               <p
//                 className="my-2 py-2 fs-4   whileHover={{
//                     scale: 1.3,
//                     transition: { duration: 2 },
//                   }} "
//               >
//                  Enjoy the perfect cup of tea with Sultan Tea!
//               </p>
//               <p className="py-1 fs-5">
//               Our hand-crafted mission blends help bring balance and clarity to your day. Featuring organic ingredients sourced from around the world, our teas are smooth and aromatic - a perfect way to start or end your day. Our flavors range from traditional chai to sweet and fruity rooibos, providing something for everyone. Try Sultan Tea today and see what you’ve been missing!

//               </p>
//             </div>
//             {/* </Roll> */}
//           </section>
//           <section className=" col-md-6 col-sm-12 ">
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
//           </section>
//         </div>
//       </section>
//     </section>
//   );
// }

// export default Overview3;
import React from "react";
import { Card } from "react-bootstrap";
import Image from "next/image";
import OverViewImage2 from "/public/about-image-3.png";

const missionDescription =
  "Enjoy the perfect cup of tea with Sultan Tea! Our hand-crafted mission blends help bring balance and clarity to your day. Featuring organic ingredients sourced from around the world, our teas are smooth and aromatic - a perfect way to start or end your day. Our flavors range from traditional chai to sweet and fruity rooibos, providing something for everyone. Try Sultan Tea today and see what you’ve been missing!";

function Overview3() {
  return (
    <section>
      <section className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-sm-12">
            <div className="my-2 py-2">
              <h1 className="my-2 fs-2 fw-bolder">
                Our Mission
              </h1>
              <p className="my-2 py-2 fs-4">
                Enjoy the perfect cup of tea with Sultan Tea!
              </p>
              <p className="py-1 fs-5">
                {missionDescription}
              </p>
            </div>
          </div>
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
        </div>
      </section>
    </section>
  );
}

export default Overview3;
