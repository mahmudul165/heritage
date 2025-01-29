// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import { motion } from "framer-motion";
// import { Pagination } from "react-bootstrap";
// import { useState } from "react";

// // import useAuth from "../../hook/useAuth";
// // import { useCart } from "react-use-cart";
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
//   //console.log("my data", data);
//   // animate: defines animation
//   // initial: defines initial state of animation or stating point.
//   // exit: defines animation when component exits

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
//         <motion.div variants={stagger} className="row    my-2  p-2 ">
//           {currentItems ? (
//             currentItems.map((product) => (
//               <div key={product.id} className="  col-sm-12 col-md-4  my-2 py-1">
//                 <motion.div
//                   variants={fadeInUp}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="card border-0 "
//                 >
//                   {/* {`blogs/${product.title}`} */}
//                   <Link href={`/our-brand/${product._id}`} passHref>
//                     {product.image ? (
//                       <motion.img
//                         initial={{ x: 60, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1 }}
//                         transition={{ delay: 0.2 }}
//                         src={product.image}
//                         alt="E-COMMERCE  products"
//                         className="card border-0 card-img-top p-2"
//                         style={{ width: "336px", height: "230px" }}
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

//                       // <Skeleton height={200} />
//                     )}
//                   </Link>

//                   {/* <Image
//                     src={sunset1}
//                     alt="Sunset"
//                     width={600}
//                     height={450}
//                     layout="responsive"
//                    placeholder="blur"
//                     blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
//                   /> */}

//                   <div className="  p-2 m-2">
//                     <motion.div
//                       animate={{ opacity: 1 }}
//                       initial={{ opacity: 0 }}
//                       className="title"
//                     >
//                       <h3 className="my-1 py-1 fs-4 fw-bold cus-color-primary">
//                         {product.title}
//                       </h3>{" "}
//                     </motion.div>
//                     <p
//                       className="text-gray  fs-6 py-2  cus-text-justify "
//                       // style={{
//                       //   color: "#FF0099",
//                       //   border: 0,
//                       // }}
//                     >
//                       {product.body?.slice(0, 80)}
//                     </p>
//                   </div>
//                   {/* test button */}
//                   {/* <div className="p-2 m-2 d-flex align-items-center justify-content-center"> */}

//                   {/* <button
//                     type="button"
//                     className="btn ml-1 p-1 btn-block btn-sm text-white fs-6 fw-bolder m-1 me-2  "
//                     style={{
//                       backgroundColor: "#59330E",
//                       // color: "#FF0099",
//                       border: 0,
//                     }}
//                     // onClick={() => addItem(product)}
//                   >
//                    Learn More
//                   </button> */}
//                   {/* </div> */}
//                 </motion.div>
//               </div>
//             ))
//           ) : (
//             <div className="row    text-center my-2 py-3 ">
//               <div className="col-sm-12 col-md-3 pe-2  ">
//                 <div>
//                   <Skeleton height={250}>
//                     <div className="d-flex">
//                       <Skeleton
//                         height={30}
//                         width={90}
//                         borderRadius={10}
//                         highlightColor={"red"}
//                       />
//                       <Skeleton
//                         height={30}
//                         width={90}
//                         borderRadius={10}
//                         highlightColor={"red"}
//                       />
//                     </div>{" "}
//                   </Skeleton>
//                   <div>
//                     <div className="d-flex p-2 justify-content-center align-items-center">
//                       <Skeleton height={30} width={180} />{" "}
//                     </div>
//                     <Skeleton height={30} width={250} />
//                   </div>
//                   <div></div>
//                 </div>
//               </div>
//               <div className="col-sm-12 col-md-3 pe-2  ">
//                 <div>
//                   <Skeleton height={250}>
//                     <div className="d-flex">
//                       <Skeleton
//                         height={30}
//                         width={90}
//                         borderRadius={10}
//                         highlightColor={"red"}
//                       />
//                       <Skeleton
//                         height={30}
//                         width={90}
//                         borderRadius={10}
//                         highlightColor={"red"}
//                       />
//                     </div>{" "}
//                   </Skeleton>
//                   <div>
//                     <div className="d-flex p-2 justify-content-center align-items-center">
//                       <Skeleton height={30} width={180} />{" "}
//                     </div>
//                     <Skeleton height={30} width={250} />
//                   </div>
//                   <div></div>
//                 </div>
//               </div>
//               <div className="col-sm-12 col-md-3 pe-2  ">
//                 <div>
//                   <Skeleton height={250}>
//                     <div className="d-flex">
//                       <Skeleton
//                         height={30}
//                         width={90}
//                         borderRadius={10}
//                         highlightColor={"red"}
//                       />
//                       <Skeleton
//                         height={30}
//                         width={90}
//                         borderRadius={10}
//                         highlightColor={"red"}
//                       />
//                     </div>{" "}
//                   </Skeleton>
//                   <div>
//                     <div className="d-flex p-2 justify-content-center align-items-center">
//                       <Skeleton height={30} width={180} />{" "}
//                     </div>
//                     <Skeleton height={30} width={250} />
//                   </div>
//                   <div></div>
//                 </div>
//               </div>
//               <div className="col-sm-12 col-md-3 pe-2  ">
//                 <div>
//                   <Skeleton height={250}>
//                     <div className="d-flex">
//                       <Skeleton
//                         height={30}
//                         width={90}
//                         borderRadius={10}
//                         highlightColor={"red"}
//                       />
//                       <Skeleton
//                         height={30}
//                         width={90}
//                         borderRadius={10}
//                         highlightColor={"red"}
//                       />
//                     </div>{" "}
//                   </Skeleton>
//                   <div>
//                     <div className="d-flex p-2 justify-content-center align-items-center">
//                       <Skeleton height={30} width={180} />{" "}
//                     </div>
//                     <Skeleton height={30} width={250} />
//                   </div>
//                   <div></div>
//                 </div>
//               </div>
//             </div>
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



 import Image from "next/image";
import Link from "next/link";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion } from "framer-motion";
import { Pagination } from "react-bootstrap";
import { useState } from "react";
import SkeletonBlock from "../common/SkeletonBlock";
 
function BusinessShowcase({ data }) {
  const ITEMS_PER_PAGE = 9;
  // const router=useRouter()
  // console.log(router.pathname)
  const [currentPage, setCurrentPage] = useState(1);

  const lastItemIndex = currentPage * ITEMS_PER_PAGE;
  const firstItemIndex = lastItemIndex - ITEMS_PER_PAGE;
  const currentItems = data.slice(firstItemIndex, lastItemIndex);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }; 
  let easing = [0.6, -0.05, 0.01, 0.99]; 
  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 0.6, ease: easing },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
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
        // className="container my-4  bg-light" 
        className="container my-4 p-3 bg-light"       
      >
        <motion.div variants={stagger} className="row    my-2  py-2">
          {currentItems ? (
            currentItems.map((product) => (
              <div key={product.id} className="  col-sm-12 col-md-4  my-2 py-1 ">
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="card border-0 mx-1"
                >
                  {/* {`blogs/${product.title}`} */}
                  <Link href={`/our-brand/${product._id}`} passHref>
                    {product.image ? (
                      // <motion.img
                      //   initial={{ x: 60, opacity: 0 }}
                      //   animate={{ x: 0, opacity: 1 }}
                      //   transition={{ delay: 0.2 }}
                      //   src={product.image}
                      //   alt="E-COMMERCE  products"
                      //   className="card border-0 card-img-top "
                      //   style={{ width: "325px", height: "340px" }}
                      //   loading="lazy"
                      // />

                      <motion.img
                      initial={{ x: 60, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      src={product.image}
                      alt="E-COMMERCE  products"
                      // className="card-img-top m-1  p-3  w-75 "
                      className="card-img-top m-1  p-1"
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
                        src="https://i.ibb.co/ZT55jTm/Rectangle-1897.png"
                        alt="E-COMMERCE  products"
                        className="card-img-top  p-2 "
                        width={336}
                        height={230}
                        layout="responsive"
                        loading="lazy"
                      />

                      // <Skeleton height={200} />
                    )}
                  </Link>                  
                  <div className="  p-2 m-2">
                    <motion.div
                      animate={{ opacity: 1 }}
                      initial={{ opacity: 0 }}
                      className="title"
                    >
                      <h3 className="my-1 py-1 fs-4 fw-bold cus-color-primary">
                        {product.title}
                      </h3>{" "}
                    </motion.div>
                    <p className="text-gray  fs-6 py-2  cus-text-justify " >
                      {product.body?.slice(0, 80)}
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
      </motion.div>

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
