// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import { motion } from "framer-motion";
// import { RiCalendar2Line, RiImageLine, RiChat1Line } from "react-icons/ri";
// import { Pagination } from "react-bootstrap";
// import { useState } from "react";
// import SkeletonBlock from "../common/SkeletonBlock";

// // import useAuth from "../../hook/useAuth";
// // import { useCart } from "react-use-cart";
// function PressReleasesBlog({ data }) {
//   const ITEMS_PER_PAGE = 12;
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
//               <div key={product.id} className="col-sm-12 col-md-6  my-2 py-1">
//                 <motion.div
//                   variants={fadeInUp}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="card border-0 "
//                 >
//                   {/* {`blogs/${product.title}`} */}
//                   <Link href={`/press-releases/${product._id}`} passHref>
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
//                         loading="lazy"
//                       />
//                     ) : (
//                       <motion.img
//                         initial={{ x: 60, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1 }}
//                         transition={{ delay: 0.2 }}
//                         src="https://i.ibb.co/hRS821N/Rectangle-1910.png"
//                         alt="E-COMMERCE  products"
//                         className="card-img-top  p-2 "
//                         width={336}
//                         height={230}
//                         layout="responsive"
//                         loading="lazy"
//                       />
 
//                     )}
//                   </Link> 

//                   <div className="  p-2 m-2">
//                     <motion.div
//                       animate={{ opacity: 1 }}
//                       initial={{ opacity: 0 }}
//                       className="title"
//                     >
//                       <p className="my-1 py-1 fs-5 cus-color-primary fw-bold">
//                         {product.title}
//                       </p>{" "}
//                     </motion.div>
//                     <p
//                       className="text-gray  py-2   "
//                       // style={{
//                       //   color: "#FF0099",
//                       //   border: 0,
//                       // }}
//                     >
//                       {product.body?.slice(0, 300)}
//                       {product.body?.length > 300 && "......"}
//                     </p>
//                   </div>
                  
//                   <div
//                     className="px-2 m-2 text-warning"
//                     style={{
//                       display: "flex",
//                       flexWrap: "wrap",
//                       alignItems: "center",
//                     }}
//                   >
//                     <div
//                       style={{
//                         display: "flex",
//                         alignItems: "center",
//                         marginRight: "10px",
//                         marginBottom: "10px",
//                       }}
//                     >
//                       <RiCalendar2Line size={20} />
//                       <p style={{ margin: "0 0 0 5px" }}>
//                         {product.date
//                           ? new Date(product.date).toLocaleDateString("en-US", {
//                               month: "long",
//                               day: "numeric",
//                               year: "numeric",
//                             })
//                           : new Date(product.createdAt).toLocaleDateString(
//                               "en-US",
//                               {
//                                 month: "long",
//                                 day: "numeric",
//                                 year: "numeric",
//                               }
//                             )}
//                       </p>
//                     </div>
//                     <div
//                       style={{
//                         display: "flex",
//                         alignItems: "center",
//                         marginRight: "10px",
//                         marginBottom: "10px",
//                       }}
//                     >
//                       <RiImageLine size={20} />
//                       <p style={{ margin: "0 0 0 5px" }}>Slide 1 of 5</p>
//                     </div>
                    
//                   </div>

//                   {/* end  */}
//                   <div>
//                     <Link
//                       href={`/press-releases/${product?._id}`}
//                       className="px-2 m-2 btn ml-1 p-1 btn-block btn-sm text-white fs-6  m-1 me-2  cus-bg-primary px-3"
//                     >
//                       Read More
//                     </Link>
//                   </div>

//                   {/* </div> */}
//                 </motion.div>
//               </div>
//             ))
//           ) : (
//             <div className="row text-center my-2 py-3">
//             {[1, 2, 3, 4].map((index) => (
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

// export default PressReleasesBlog;
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { RiCalendar2Line, RiImageLine } from "react-icons/ri";
import { Pagination } from "react-bootstrap";
import { motion } from "framer-motion";
import SkeletonBlock from "../common/SkeletonBlock";
import Image from "next/image";
import "react-loading-skeleton/dist/skeleton.css";

// Rename the dynamically imported component
const DynamicPressReleasesBlog = dynamic(() => import("/components/pressReleases/PressReleasesBlog.js"), {
  loading: () => <SkeletonBlock />,
});

const ITEMS_PER_PAGE = 12;

function PressReleasesBlog({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const lastItemIndex = currentPage * ITEMS_PER_PAGE;
  const firstItemIndex = lastItemIndex - ITEMS_PER_PAGE;
  const currentItems = data.slice(firstItemIndex, lastItemIndex);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Framer Motion variants
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] } },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
        className="container my-4 p-3 bg-light"
      >
        <motion.div variants={stagger} className="row my-2 p-2">
          {currentItems ? (
            currentItems.map((product) => (
              <div key={product.id} className="col-sm-12 col-md-6 my-2 py-1">
                <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="card border-0">
                  <Link href={`/press-releases/${product._id}`} passHref>
                    {product.image ? (
                      <motion.img
                        initial={{ x: 60, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        src={product.image}
                        alt="E-COMMERCE products"
                        className="card-img-top p-2"
                        width={336}
                        height={230}
                        layout="responsive"
                        loading="lazy"
                      />
                    ) : (
                      <motion.img
                        initial={{ x: 60, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        src="https://i.ibb.co/hRS821N/Rectangle-1910.png"
                        alt="E-COMMERCE products"
                        className="card-img-top p-2"
                        width={336}
                        height={230}
                        layout="responsive"
                        loading="lazy"
                      />
                    )}
                  </Link>
                  <div className="p-2 m-2">
                    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} className="title">
                      <p className="my-1 py-1 fs-5 cus-color-primary fw-bold">{product.title}</p>
                    </motion.div>
                    <p className="text-gray py-2">
                      {product.body?.slice(0, 300)}
                      {product.body?.length > 300 && "......"}
                    </p>
                  </div>
                  <div className="px-2 m-2 text-warning" style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", marginRight: "10px", marginBottom: "10px" }}>
                      <RiCalendar2Line size={20} />
                      <p style={{ margin: "0 0 0 5px" }}>
                        {product.date
                          ? new Date(product.date).toLocaleDateString("en-US", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })
                          : new Date(product.createdAt).toLocaleDateString("en-US", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })}
                      </p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", marginRight: "10px", marginBottom: "10px" }}>
                      <RiImageLine size={20} />
                      <p style={{ margin: "0 0 0 5px" }}>Slide 1 of 5</p>
                    </div>
                  </div>
                  <div>
                    <Link
                      href={`/press-releases/${product?._id}`}
                      className="px-2 m-2 btn ml-1 p-1 btn-block btn-sm text-white fs-6 m-1 me-2 cus-bg-primary px-3"
                    >
                      Read More
                    </Link>
                  </div>
                </motion.div>
              </div>
            ))
          ) : (
            <div className="row text-center my-2 py-3">
              {[1, 2, 3, 4].map((index) => (
                <SkeletonBlock key={index} />
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>

      <Pagination className="d-flex justify-content-end container my-5">
        <Pagination.First onClick={() => handlePageChange(1)} />
        <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item key={index} active={currentPage === index + 1} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
        <Pagination.Last onClick={() => handlePageChange(totalPages)} />
      </Pagination>
    </>
  );
}

export default PressReleasesBlog;
