// import SectionTitle from "@/components/common/SectionTitle";

// import { OFFICES_ENDPOINT, useOfficesCollectionQuery } from "@/lib/hook/useApi";
// import React from "react";
// import { Row, Col, Card, Image } from "react-bootstrap";
// import {
//   FaMapMarkerAlt,
//   FaPhone,
//   FaEnvelope,
//   FaPhoneAlt,
// } from "react-icons/fa";
// function OurOffices() {
//   const { data: ourOffices, isLoading, isError } = useOfficesCollectionQuery();
//   return (
//     <div className="container my-4">
//       <Row className="justify-content-between">
//         <SectionTitle title="Our Offices " />
//         {ourOffices?.map((product) => (
//           <Col sm={12} md={4} key={product._id}>
//             {/* <Card style={{ width: "22rem", height: "auto"}}> */}
//             <div className=" my-3 ">
//               <div>
//                 <Image
//                   src={product.image}
//                   alt="Office"
//                   // fluid
//                   className="officeImage w-100 object-fit-cover border rounded"
//                   loading="lazy"
//                 />
//               </div>
//               <div className="py-2 ">
//                 <p className="fs-5  fw-bold my-2">{product.name}</p>
//                 <div className="py-2  mb-1 cus-color-secondary fs-6 cus-fw-4">
//                   <span>
//                     <FaMapMarkerAlt className="d-inline me-2" />
//                   </span>{" "}
//                   {product.location}
//                 </div>
//                 <div className="cus-color-secondary fs-6 cus-fw-4">
//                   <span className="py-2 my-2 ">
//                     <FaPhoneAlt className="d-inline me-1 " />{" "}
//                   </span>
//                   {product.phone}
//                 </div>
//                 <div className="py-2 my-2 cus-color-secondary fs-6 cus-fw-4">
//                   <span>
//                     <FaEnvelope className="d-inline me-2" />
//                   </span>
//                   {product.email}
//                 </div>
//               </div>
//             </div>

//             {/* </Card> */}
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// }

// export default OurOffices;


 
 


import SectionTitle from "@/components/common/SectionTitle";
import { OFFICES_ENDPOINT, useOfficesCollectionQuery } from "@/lib/hook/useApi";
import React from "react";
import { Row, Col, Card, Image } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function OurOffices() {
  const { data: ourOffices, isLoading, isError } = useOfficesCollectionQuery();

  return (
    <div className="container my-4">
      <style>
        {`
          .our-office-card {
            position: relative;
            transition: transform 0.2s ease-in-out;
            overflow: hidden;
          }

          .our-office-card-body {
            padding: 1rem;
            transition: background-color 0.2s ease-in-out;
          }

          .our-office-card:hover {
            transform: scale(1.05);
          }

          .our-office-card:hover .our-office-card-body {
            background-color: #f8f8f8; /* Change this to the desired hover background color */
          }
        `}
      </style>

      <SectionTitle title="Our Offices" />
      <Row>
        {ourOffices?.map((office) => (
          <Col md={4} key={office._id} className="my-2 py-2">
            <Card className="h-100 our-office-card">
              <div className="image-wrapper">
                <Image
                  src={office.image}
                  alt="Office"
                  className="card-img-top"
                  loading="lazy"
                />
              </div>
              <div className="py-2  our-office-card-body ">
                  <p className="fs-5  fw-bold my-2">{office.name}</p>
                 <div className="py-2  mb-1 cus-color-secondary fs-6 cus-fw-4">
                    <span>
                     <FaMapMarkerAlt className="d-inline me-2" />
                    </span>{" "}
                    {office.location}
                  </div>
                  <div className="cus-color-secondary fs-6 cus-fw-4">
                   <span className="py-2 my-2 ">
                     <FaPhoneAlt className="d-inline me-1 " />{" "}
                    </span>
                    {office.phone}
                 </div>
                  <div className="py-2 my-2 cus-color-secondary fs-6 cus-fw-4">
                   <span>
                      <FaEnvelope className="d-inline me-2" />
                   </span>
                    {office.email}
                 </div>
                </div>

            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default OurOffices;



 