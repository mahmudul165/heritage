// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import { motion } from "framer-motion";
// import { Pagination } from "react-bootstrap";
// import { useState } from "react";
// import SkeletonBlock from "../common/SkeletonBlock";

// function BusinessShowcase({ data }) {
//   const ITEMS_PER_PAGE = 9;
//   // const router=useRouter()
//   // console.log(router.pathname)
//   const [currentPage, setCurrentPage] = useState(1);

//   const lastItemIndex = currentPage * ITEMS_PER_PAGE;
//   const firstItemIndex = lastItemIndex - ITEMS_PER_PAGE;
//   const currentItems = data.slice(firstItemIndex, lastItemIndex);

//   const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   // const { BuyNow } = useAuth();
//   // const { addItem } = useCart();
//   // Our custom easing
//   let easing = [0.6, -0.05, 0.01, 0.99];
//   // Custom variant
//   const fadeInUp = {
//     initial: {
//       y: 60,
//       opacity: 0,
//       transition: { duration: 0.6, ease: easing },
//     },
//     animate: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: easing,
//       },
//     },
//   };

//   const stagger = {
//     animate: {
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   return (
//     <>
//       <motion.div
//         initial="initial"
//         animate="animate"
//         exit={{ opacity: 0 }}
//         className="container my-4 p-3 bg-light"
//         // style={{ backgroundColor: "#ffddde" }}
//       >
//         <motion.div variants={stagger} className="row     my-2  p-2 ">
//           {currentItems ? (
//             currentItems.map((product) => (
//               <div key={product.id} className="col-sm-12 col-md-4  my-2 py-1">
//                 <motion.div
//                   variants={fadeInUp}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="card border-0 "
//                 >
//                   {/* {`blogs/${product.title}`} */}
//                   <Link href={`/our-business/${product._id}`} passHref>
//                     {product.image ? (
//                       <motion.img
//                         initial={{ x: 60, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1 }}
//                         transition={{ delay: 0.2 }}
//                         src={product.image}
//                         alt="E-COMMERCE  products"
//                         className="card-img-top  p-2 "
//                         width={336}
//                         height={230}
//                         layout="responsive"
//                       />
//                     ) : (
//                       <motion.img
//                         initial={{ x: 60, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1 }}
//                         transition={{ delay: 0.2 }}
//                         src="https://i.ibb.co/ZT55jTm/Rectangle-1897.png"
//                         alt="E-COMMERCE  products"
//                         className="card-img-top  p-2 "
//                         width={336}
//                         height={230}
//                         layout="responsive"
//                       />
//                     )}
//                   </Link>

//                   <div className="  p-2 m-2">
//                     <motion.div
//                       animate={{ opacity: 1 }}
//                       initial={{ opacity: 0 }}
//                       className="title"
//                     >
//                       <h3 className="my-1 py-1 fs-5 fw-bold cus-color-primary">
//                         {product.title}
//                       </h3>{" "}
//                     </motion.div>
//                     <p
//                       className="text-gray  py-2  cus-text-justify "

//                     >
//                       {product.body?.slice(0, 100)}
//                     </p>
//                   </div>
//                 </motion.div>
//               </div>
//             ))
//           ) : (
//             <div className="row text-center my-2 py-3">
//             {[1, 2, 3, 4, 5].map((index) => (
//               <SkeletonBlock key={index} />
//             ))}
//           </div>
//           )}
//         </motion.div>
//       </motion.div>

//       <Pagination className="d-flex justify-content-end container my-5">
//         <Pagination.First onClick={() => handlePageChange(1)} />
//         <Pagination.Prev
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//         />
//         {[...Array(totalPages)].map((_, index) => (
//           <Pagination.Item
//             key={index}
//             active={currentPage === index + 1}
//             onClick={() => handlePageChange(index + 1)}
//           >
//             {index + 1}
//           </Pagination.Item>
//         ))}
//         <Pagination.Next
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//         />
//         <Pagination.Last onClick={() => handlePageChange(totalPages)} />
//       </Pagination>
//     </>
//   );
// }

// export default BusinessShowcase;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, Pagination } from "react-bootstrap";
import SkeletonBlock from "../common/SkeletonBlock";
import Link from "next/link";

function BusinessShowcase({ data }) {
  const ITEMS_PER_PAGE = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const lastItemIndex = currentPage * ITEMS_PER_PAGE;
  const firstItemIndex = lastItemIndex - ITEMS_PER_PAGE;
  const currentItems = data.slice(firstItemIndex, lastItemIndex);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const cardStyle = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <>
      <div className="container my-4 p-3 bg-light">
        <motion.div variants={stagger} className="row my-2 p-2">
          {currentItems ? (
            currentItems.map((product) => (
              <div key={product.id} className="col-sm-12 col-md-4 my-2 py-1">
                <motion.div className="card border-0" style={cardStyle}>
                  <Link href={`/our-business/${product._id}`} passHref>
                    {product.image ? (
                      // <motion.img
                      //   initial={{ opacity: 0 }}
                      //   animate={{ opacity: 1 }}
                      //   transition={{ delay: 0.2 }}
                      //   src={product.image}
                      //   alt="E-COMMERCE products"
                      //   className="card-img-top p-2 custom-image-size" // Add a custom CSS class for image size
                      //   layout="responsive"
                      //   loading="lazy"
                      // />
                      <Card className="h-100 border-0 ">
                         <div className="image-wrapper-top"> 
                        <motion.img
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          src={product.image}
                          alt="E-COMMERCE products"
                          className="   "
                          layout="responsive"
                          loading="lazy"
                        /></div>
                      </Card>
                    ) : (
                      <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        src="https://i.ibb.co/ZT55jTm/Rectangle-1897.png"
                        alt="E-COMMERCE products"
                        className="card-img-top p-2 custom-image-size" // Add a custom CSS class for image size
                        layout="responsive"
                        loading="lazy"
                      />
                    )}
                  </Link>

                  <div className="p-2 m-2">
                    <motion.div
                      animate={{ opacity: 1 }}
                      initial={{ opacity: 0 }}
                      className="title"
                    >
                      <h3 className="my-1 py-1 fs-5 fw-bold cus-color-primary">
                        {product.title}
                      </h3>
                    </motion.div>
                    <p className="text-gray py-2 cus-text-justify">
                      {product.body?.slice(0, 100)}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))
          ) : (
            <div className="row text-center my-2 py-3">
              {[1, 2, 3, 4, 5].map((index) => (
                <SkeletonBlock key={index} />
              ))}
            </div>
          )}
        </motion.div>
      </div>

      <Pagination className="d-flex justify-content-end container my-5">
        <Pagination.First onClick={() => handlePageChange(1)} />
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index}
            active={currentPage === index + 1}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
        <Pagination.Last onClick={() => handlePageChange(totalPages)} />
      </Pagination>
    </>
  );
}

export default BusinessShowcase;
