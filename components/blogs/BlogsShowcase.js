import Image from "next/image";
import Link from "next/link";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion } from "framer-motion";

import DemoImage from "/public/New folder/arfan-abdulazeez-oi0FvNhkHy8-unsplash.jpg";
// import useAuth from "../../hook/useAuth";
// import { useCart } from "react-use-cart";
function BlogsShowcase({ data }) {
  // const { BuyNow } = useAuth();
  // const { addItem } = useCart();
  // Our custom easing
  let easing = [0.6, -0.05, 0.01, 0.99];
  //console.log("my data", data);
  // animate: defines animation
  // initial: defines initial state of animation or stating point.
  // exit: defines animation when component exits

  // Custom variant
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
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className="container my-4 p-3 bg-light"
      // style={{ backgroundColor: "#ffddde" }}
    >
      <motion.div variants={stagger} className="row     my-2  p-2 ">
        {data ? (
          data.map((product) => (
            <div key={product.id} className="col-sm-12 col-md-4  my-2 py-1">
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="card border-0 "
              >
                {/* {`blogs/${product.title}`} */}
                <Link href={`/blogs/${product.id}`} passHref>
                  {product.image_one ? (
                    <motion.img
                      initial={{ x: 60, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      src={product.image_one}
                      alt="E-COMMERCE  products"
                      className="card-img-top  p-2 "
                      width={336}
                      height={230}
                      layout="responsive"
                    />
                  ) : (
                    <motion.img
                      initial={{ x: 60, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      src="https://images.unsplash.com/photo-1625715490354-9a37e8298bf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVhJTIwZ2FyZGVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      className="card-img-top  p-2 "
                      width={336}
                      height={230}
                      layout="responsive"
                    />

                    // <Skeleton height={200} />
                  )}
                </Link>

                {/* <Image
                    src={sunset1}
                    alt="Sunset"
                    width={600}
                    height={450}
                    layout="responsive"
                   placeholder="blur"
                    blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
                  /> */}

                <div className="  p-2 m-2">
                  <motion.div
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    className="title"
                  >
                    <h3 className="my-1 py-1 fs-5 fw-bold cus-color-primary ">
                      {product.title}
                    </h3>{" "}
                  </motion.div>
                  <p
                    className="text-gray  py-2 cus-text-justify  "
                    // style={{
                    //   color: "#FF0099",
                    //   border: 0,
                    // }}
                  >
                    {product.body}
                  </p>
                </div>
                {/* test button */}
                {/* <div className="p-2 m-2 d-flex align-items-center justify-content-center"> */}

                <button
                  type="button"
                  className="btn ml-1 p-1 btn-block btn-sm text-white fs-6 fw-bolder m-1 me-2  "
                  style={{
                    backgroundColor: "#59330E",
                    // color: "#FF0099",
                    border: 0,
                  }}
                  // onClick={() => addItem(product)}
                >
                  Learn More
                </button>
                {/* </div> */}
              </motion.div>
            </div>
          ))
        ) : (
          <div className="row    text-center my-2 py-3 ">
            <div className="col-sm-12 col-md-3 pe-2  ">
              <div>
                <Skeleton height={250}>
                  <div className="d-flex">
                    <Skeleton
                      height={30}
                      width={90}
                      borderRadius={10}
                      highlightColor={"red"}
                    />
                    <Skeleton
                      height={30}
                      width={90}
                      borderRadius={10}
                      highlightColor={"red"}
                    />
                  </div>{" "}
                </Skeleton>
                <div>
                  <div className="d-flex p-2 justify-content-center align-items-center">
                    <Skeleton height={30} width={180} />{" "}
                  </div>
                  <Skeleton height={30} width={250} />
                </div>
                <div></div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 pe-2  ">
              <div>
                <Skeleton height={250}>
                  <div className="d-flex">
                    <Skeleton
                      height={30}
                      width={90}
                      borderRadius={10}
                      highlightColor={"red"}
                    />
                    <Skeleton
                      height={30}
                      width={90}
                      borderRadius={10}
                      highlightColor={"red"}
                    />
                  </div>{" "}
                </Skeleton>
                <div>
                  <div className="d-flex p-2 justify-content-center align-items-center">
                    <Skeleton height={30} width={180} />{" "}
                  </div>
                  <Skeleton height={30} width={250} />
                </div>
                <div></div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 pe-2  ">
              <div>
                <Skeleton height={250}>
                  <div className="d-flex">
                    <Skeleton
                      height={30}
                      width={90}
                      borderRadius={10}
                      highlightColor={"red"}
                    />
                    <Skeleton
                      height={30}
                      width={90}
                      borderRadius={10}
                      highlightColor={"red"}
                    />
                  </div>{" "}
                </Skeleton>
                <div>
                  <div className="d-flex p-2 justify-content-center align-items-center">
                    <Skeleton height={30} width={180} />{" "}
                  </div>
                  <Skeleton height={30} width={250} />
                </div>
                <div></div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 pe-2  ">
              <div>
                <Skeleton height={250}>
                  <div className="d-flex">
                    <Skeleton
                      height={30}
                      width={90}
                      borderRadius={10}
                      highlightColor={"red"}
                    />
                    <Skeleton
                      height={30}
                      width={90}
                      borderRadius={10}
                      highlightColor={"red"}
                    />
                  </div>{" "}
                </Skeleton>
                <div>
                  <div className="d-flex p-2 justify-content-center align-items-center">
                    <Skeleton height={30} width={180} />{" "}
                  </div>
                  <Skeleton height={30} width={250} />
                </div>
                <div></div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default BlogsShowcase;
