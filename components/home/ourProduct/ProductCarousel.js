import ProductDetailsModal from "@/components/common/ProductDetailsModal";
import SectionTitle from "@/components/common/SectionTitle";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Carousel, Row } from "react-bootstrap";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useCart } from "react-use-cart";
let easing = [0.6, -0.05, 0.01, 0.99];
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
 

const ProductCarousel = ({ data }) => {
  const [modalShow, setModalShow] = useState(false);
  const [bodyWidth, setBodyWidth] = useState(window.innerWidth);
  const [productId, setProductId] = useState(null);
  
  const productDetails = (id) => {
    // alert(id);
    // setProductId(id);
  };

  useEffect(() => {
    const handleResize = () => setBodyWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const { addItem } = useCart();

  const handleAddItem = (product) => {
    try {
      addItem(product);
      toast.success("Item added to cart successfully!");
    } catch (error) {
      toast.error("There was a problem adding the item to the cart.");
    }
  };
  return (
    <div className="container  my-2">
      <ProductDetailsModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        getProductId={productId}
      />
      {/* <h1 className="fs-4 fw-bolder my-2 mb-2" style={{color:'#59330E'
  }}>Our Products</h1>  */}
        {data?.products?.length > 0 && <SectionTitle title="Our Products" />}
      <Carousel className="position-relative  product-carousel">
        {data?.products?.map((product, index) => {
          if (index % 4 === 0) {
            return (
              <Carousel.Item key={product.id}>
                <Row xs={2} sm={2} lg={4}>
                  {data.products
                    ?.slice(index, index + (bodyWidth < 767 ? 2 : 4))
                    .map((product) => (
                      <div key={product.id} className=" my-2 py-1 ">
                        <motion.div
                          variants={fadeInUp}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="card border-0  "
                          onClick={() => {
                            setModalShow(true), setProductId(product._id);
                          }}
                        >
                          {/* <Link href={`shop/${product.id}`} passHref> */}
                          {product.images ? (
                            <motion.img
                              style={{ border: "1px solid #59330E" }}
                              initial={{ x: 60, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.2 }}
                              src={product?.images[0]?.url}
                              alt="E-COMMERCE  products"
                              className="card-img-top  p-5 cardImage"
                              // width={336}
                              // height={230}
                              // width={243}
                              // height={165}
                              layout="responsive"
                              loading="lazy"
                            />
                          ) : (
                            <Skeleton height={350} />
                          )}
                          {/* </Link> */}

                          {/* <Image
                    src={sunset1}
                    alt="Sunset"
                    width={600}
                    height={450}
                    layout="responsive"
                   placeholder="blur"
                    blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
                  /> */}

                          <div className="card-body p-0">
                            <motion.div
                              animate={{ opacity: 1 }}
                              initial={{ opacity: 0 }}
                              className="title"
                            >
                              <p className="card-title ms-2 mt-2 fs-6 fw-bolder">
                                {product.name?.slice(0, 35)}
                              </p>{" "}
                            </motion.div>
                          </div>
                          {/* test button */}
                        </motion.div>
                        <div className=" p-2 mx-2 d-flex justify-content-between gap-2">
                          <p className="text-center fs-6 fw-semibold  ">
                            ৳ {product.price}
                          </p>
                          <button
                            type="button"
                            className="btn ml-1 px-2 btn-block btn-sm text-white   fw-bold d-flex justify-content-between  "
                            style={{
                              backgroundColor: "#59330E",
                              // color: "#FF0099",
                              border: 0,
                            }}
                            onClick={() => handleAddItem(product)}
                          >
                            <i className="fas fa-shopping-cart me-1 py-1 "></i>
                            <span className="d-xs-none d-sm-block ">
                              Add To Cart
                            </span>
                          </button>
                        </div>
                      </div>
                    ))}
                </Row>

                <div className="d-flex justify-content-between     ">
                  <div
                    className="position-absolute top-50 start-0  "
                    style={{
                      marginTop: "-60px",
                      marginLeft: "-12px",
                    }}
                  >
                    <button
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="prev"
                      className=" p-3 cus-color-secondary border rounded shadow-lg bg-white"
                    >
                      <span>
                        <FaLongArrowAltLeft />
                      </span>
                    </button>
                  </div>

                  <div
                    className="position-absolute top-50 end-0   "
                    style={{
                      marginTop: "-60px",
                      marginRight: "-12px",
                    }}
                  >
                    <button
                      type="button"
                      data-bs-slide="next"
                      className="bg-white p-3 cus-color-secondary border  rounded shadow-lg d-block"
                    >
                      <span>
                        <FaLongArrowAltRight />
                      </span>
                    </button>
                  </div>
                </div>
              </Carousel.Item>
            );
          }
          return null;
        })}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
// import React from 'react'

// function ProductCarousel() {
//   return (
//     <div>ProductCarousel</div>
//   )
// }

// export default ProductCarousel
