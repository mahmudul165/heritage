// import React, { useRef, useState } from "react";
// import { Card, Carousel, Container } from "react-bootstrap";
// import { AiOutlineArrowRight } from "react-icons/ai";
// import ShowMore from "@/components/common/ShowMore";

// const products = [
//   { id: 1, name: "Product 1", image: "https://i.ibb.co.com/Bs7pYnY/IMG-20241214-WA0002.jpg", price: 500 },
//   { id: 2, name: "Product 2", image: "https://i.ibb.co/j44drGC/Rectangle.png", price: 500 },
//   { id: 3, name: "Product 3", image: "https://images.pexels.com/photos/1362537/pexels-photo-1362537.jpeg?auto=compress&cs=tinysrgb&w=600", price: 7840 },
//   { id: 4, name: "Product 4", image: "https://www.tastingtable.com/img/gallery/20-tea-brands-ranked-from-worst-to-best/intro-1644018824.jpg", price: 120 },
// ];

// const aboutUsDescription = `
//   Seven years before the commencement of tea production, a tea garden of approximately 100 acres 
//   was owned by Faizul Islam, proprietor and owner of Heritage Air Express, a travel agency business since 1998. 
//   Since 2013, he thought of business expansion and started targeting his focus towards tea production sector...
// `;

// function Hero() {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <div className="container my-1 py-1">
//       {/* Modal */}
//       <ShowMore
//         show={showModal}
//         title="More About Us"
//         subTitle="Welcome to Sultan Tea"
//         description={aboutUsDescription}
//         onHide={() => setShowModal(false)}
//       />

//       {/* Main Content */}
//       <div className="row align-items-center justify-content-center">
//         {/* About Section */}
//         <section className="col-sm-12 col-md-6 my-2">
//           <h3 className="fs-1 fw-bold cus-color-secondary">Welcome To Sultan Tea</h3>
//           <p className="fs-5 text-justify">
//             {aboutUsDescription.substring(0, 220)}...
//           </p>
//           <button
//             className="d-flex align-items-center fw-bold btn btn-lg text-white cus-bg-primary mt-3"
//             onClick={() => setShowModal(true)}
//           >
//             More About Us
//             <AiOutlineArrowRight className="ms-2" />
//           </button>
//         </section>

//         {/* Carousel Section */}
//         <section className="col-sm-12 col-md-6 p-2">
//           <Carousel>
//             {products.map((product) => (
//               <Carousel.Item key={product.id}>
//                 <Container fluid>
//                   <Card className="border-0">
//                     <Card.Img className="heroImage" variant="top" src={product.image} alt={product.name} />
//                   </Card>
//                 </Container>
//               </Carousel.Item>
//             ))}
//           </Carousel>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default Hero;
import React, { useState } from "react";
import { Card, Carousel, Container } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";
import ShowMore from "@/components/common/ShowMore";

const products = [
  { id: 1, name: "Product 1", image: "https://i.ibb.co.com/XZ4sFLh/IMG-20241214-WA0002-1.jpg", price: 500 },
 
  { id: 2, name: "Product 2", image: "https://i.ibb.co/hRS821N/Rectangle-1910.png", price: 7840 },
  // { id: 4, name: "Product 2", image: "https://i.ibb.co/vL4XRF2/tea-award.jpg", price: 120 },
  { id: 3, name: "Product 3", image: "https://i.ibb.co/j44drGC/Rectangle.png", price: 500 },
  // { id: 3, name: "Product 3", image: "https://images.pexels.com/photos/1362537/pexels-photo-1362537.jpeg?auto=compress&cs=tinysrgb&w=600", price: 7840 },
  // { id: 4, name: "Product 4", image: "https://www.tastingtable.com/img/gallery/20-tea-brands-ranked-from-worst-to-best/intro-1644018824.jpg", price: 120 },
];

const aboutUsDescription = `
  Seven years before the commencement of tea production, a tea garden of approximately 100 acres 
  was owned by Faizul Islam, proprietor and owner of Heritage Air Express, a travel agency business since 1998. 
  Since 2013, he thought of business expansion and started targeting his focus towards tea production sector...
`;

function Hero() {
  const [showModal, setShowModal] = useState(false);

  const truncateText = (text, length) => {
    if (text.length <= length) return text;
    return text.substring(0, text.lastIndexOf(' ', length)) + '...';
  };

  // Ensure Product 1 is always first in the slider
  const sortedProducts = [products.find((p) => p.id === 1), ...products.filter((p) => p.id !== 1)];

  return (
    <div className="container my-1 py-1">
      {/* Modal */}
      <ShowMore
        show={showModal}
        title="More About Us"
        subTitle="Welcome to Sultan Tea"
        description={aboutUsDescription}
        onHide={() => setShowModal(false)}
      />

      {/* Main Content */}
      <div className="row align-items-center justify-content-center">
        {/* About Section */}
        <section className="col-sm-12 col-md-6 my-2">
          <h3 className="fs-1 fw-bold cus-color-secondary">Welcome To Sultan Tea</h3>
          <p className="fs-5 text-justify">
            {truncateText(aboutUsDescription, 220)}
          </p>
          <button
            className="d-flex align-items-center fw-bold btn btn-lg text-white cus-bg-primary mt-3"
            onClick={() => setShowModal(true)}
          >
            More About Us
            <AiOutlineArrowRight className="ms-2" />
          </button>
        </section>

        {/* Carousel Section */}
        <section className="col-sm-12 col-md-6 p-2">
          <Carousel interval={5000} /* 5 seconds for each slide */>
            {sortedProducts.map((product, index) => (
              <Carousel.Item key={product.id} interval={index === 0 ? 7000 : 3000}>
                {/* 7 seconds for the first slide, 3 seconds for the others */}
                <Container fluid>
                  <Card className="border-0">
                    <Card.Img
                      className="heroImage"
                      variant="top"
                      src={product.image}
                      alt={product.name}
                      onError={(e) => {
                        e.target.src = '/fallback-image.jpg';
                      }}
                    />
                  </Card>
                </Container>
              </Carousel.Item>
            ))}
          </Carousel>
        </section>
      </div>
    </div>
  );
}

export default Hero;
