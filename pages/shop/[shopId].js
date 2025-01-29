import React, { useEffect, useState } from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { useRouter } from "next/router";
// import useSWR from "swr";

import Link from "next/link";
// import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// import useAuth from "../../hook/useAuth";
// import { useCart } from "react-use-cart";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

// import dynamic from "next/dynamic";
// const Reviews = dynamic(() => import("/component/productsreview/Reviews"), {
//   loading: () => <p>Loading...</p>,
// });
// const StarRating = dynamic(() => import("/component/StarRating"), {
//   loading: () => <p>Loading...</p>,
// });
// const IncrementDecrement = dynamic(
//   () => import("/component/IncrementDecrement"),
//   {
//     loading: () => <p>Loading...</p>,
//   }
// );
// import SignIn from "/public/home/Sign-in.png";
// import { useSession, signIn, signOut } from "next-auth/react";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const paths = await data.map((post) => {
    return {
      params: { shopId: post?.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.shopId}`
  );
  // console.log(res);
  const data = await res.json();
  console.log("product data is :", data);

  return {
    props: { data },
    revalidate: 10,
  };
};

const ProductDetails = ({ data }) => {
  const router = useRouter();
  console.log(router.asPath);
  //   const { addItem } = useCart();
  //   const { BuyNow } = useAuth();
  //   const [imageSlider, setImage] = useState({});

  //   const router = useRouter();
  //   const { id } = router.query;

  //   const { data, error } = useSWR(
  //     `https://arshi365.lamptechs.com/api/admin/products/${id}`,
  //     { fetcher: async (url) => await axios.get(url).then((res) => res.data) }
  //   );

  //   // console.log("my object data is", data);
  //   const { data: session } = useSession();

  //   const handleImage = (img) => {
  //     console.log("img first", img);
  //     setImage(img);
  //   };
  //   //console.log("img first", handleImage);
  //   const { items, updateItemQuantity } = useCart();
  //   console.log(" items array is", items);
  // farmer motion
  let easing = [0.6, -0.05, 0.01, 0.99];

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

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
  return (
    <div className="container">
      {" "}
      <div
        className="container   row   p-2 gx-4  "
        style={{ backgroundColor: "#F2EBDD" }}
      >
        {data ? (
          <>
            <motion.div className="col-md-6  h-50">
              {/* <Carousel> */}
              <div>
                <img src="https://i.ibb.co/7C7M7QX/tea-5.jpg" />
              </div>
              <div>
                {/* src={data.image_two}  */}
                <img src={data.image_two} />
              </div>
              <div>
                <img src={data.image_three} />
              </div>
              {/* </Carousel> */}
            </motion.div>
            <motion.div variants={stagger} className="col-md-6   mt-3 p-3">
              <motion.h2 variants={fadeInUp} className=" my-3 text-uppercase">
                {data.title}
              </motion.h2>

              {/* review section */}
              <motion.div variants={stagger} className="py-2">
                {/* <StarRating /> */}
                <div className="fs-6 fw-bold  my-2 py-1 ">
                  <small> 3 Review</small>
                  <small className="ms-2">| Add your Review</small>
                </div>
              </motion.div>
              <motion.p variants={stagger} className="mb-2 py-2">
                {data.body}
              </motion.p>

              <motion.p
                variants={stagger}
                className="fs-4 fw-bolder mt-2 "
                style={{
                  color: "#FF0099",
                  border: 0,
                }}
              >
                <span className="fs-5 fw-bolder  mt-2 "> ৳</span>{" "}
                {data.price || <Skeleton />}
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="d-flex  align-items-center  my-2 py-2"
              >
                <div className="d-flex p-2">
                  <small className="fs-6 ">Size*</small>

                  <select
                    className="form-select  mx-2"
                    aria-label="Default select example"
                  >
                    <option value="1">S</option>
                    <option value="2"> M</option>
                    <option value="3">L</option>
                    <option value="4">XL</option>
                    <option value="5">XXL</option>
                  </select>
                </div>
                <p className="fs-6   mt-2 ">
                  Status: <span className="text-warning">In stock</span>
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="my-2  btn-group btn-group-sm" role="group">
                  <button
                    // onClick={() => addItem(data)}
                    className="col btn btn-sm  rounded-pill p-2  me-4 fs-6 fw-bolder"
                    style={{
                      backgroundColor: "white",
                      color: "#FF0099",
                      border: 0,
                    }}
                  >
                    ADD TO CART
                  </button>
                  {/*href={`products/${_id}'/payment'`}*/}
                  {/* <Link href="/payment" passHref> */}
                  <button
                    // onClick={BuyNow}
                    className="col btn btn-sm  p-2 rounded-pill  ms-2 p-2 fs-6 fw-bolder"
                    style={{
                      backgroundColor: "white",
                      color: "#FF0099",
                      border: 0,
                    }}
                  >
                    BUY NOW
                  </button>
                  {/* </Link> */}
                </div>
              </motion.div>
            </motion.div>
            {/* reviews */}
            {/* <Reviews /> */}
          </>
        ) : (
          <div className="row    p-2 justfy-content-center p-3  m-3">
            <div className="col w-75    my-3">
              <Skeleton
                borderRadius={10}
                height={450}
                highlightColor={"white"}
              />
            </div>
            <div className="col my-3 ">
              <div className="d-flex mb-2 w-75">
                <div>
                  <Skeleton height={80} width={65} />
                </div>
                <div className="mx-5">
                  <Skeleton height={80} width={65} />
                </div>
                <div>
                  <Skeleton height={80} width={65} />
                </div>
              </div>
              <div className=" py-2 my-4">
                <Skeleton height={110} />
              </div>
              <div className="   ">
                <Skeleton height={50} />
              </div>
              <div className=" py-2 my-4">
                <Skeleton height={30} />
              </div>
              <div className="d-flex    ">
                <div>
                  <Skeleton height={30} width={73} />
                </div>
                <div className="ms-4">
                  <Skeleton height={30} width={73} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
