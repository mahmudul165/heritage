import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// import useAuth from "../../hook/useAuth";
import { useCart } from "react-use-cart";
import ProductDetailsModal from "../common/ProductDetailsModal";
import { useCallback, useState } from "react";
import { Pagination } from "react-bootstrap";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ProductsShowcase({ data }) {
  const { products } = data;

  const ITEMS_PER_PAGE = 16;
  // const router=useRouter()
  // console.log(router.pathname)
  const [currentPage, setCurrentPage] = useState(1);

  const lastItemIndex = currentPage * ITEMS_PER_PAGE;
  const firstItemIndex = lastItemIndex - ITEMS_PER_PAGE;
  const currentItems = products.slice(firstItemIndex, lastItemIndex);
console.log('currentItems:',currentItems)
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // const { BuyNow } = useAuth();
  const [modalShow, setModalShow] = useState(false);
  const [productId, setProductId] = useState(null);

  const { addItem } = useCart();

  const handleAddItem = (product) => {
    try {
      addItem(product);
      toast.success("Item added to cart successfully!");
    } catch (error) {
      toast.error("There was a problem adding the item to the cart.");
    }
  };





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
    <>
      <ProductDetailsModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        getProductId={productId}

        // data={data}
      />
      <motion.div
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
        className="container my-4 p-3 bg-light"
        // style={{ backgroundColor: "#ffddde" }}
      >
        <motion.div variants={stagger} className="row     my-2  py-3 ">
          {currentItems ? (
            currentItems?.map((product) => (
              <div key={product.id} className="col-sm-12 col-md-3  my-2 py-1 ">
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="card border-0 ele-center "
                  onClick={() => {
                    setModalShow(true), setProductId(product._id);
                  }}
                >
                  {/* <Link href={`shop/${product.id}`} passHref> */}
                  {product.images ? (
                    <motion.img
                      initial={{ x: 60, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      src={product?.images[0]?.url}
                      alt="E-COMMERCE  products"
                      // className="card-img-top m-1  p-3  w-75 "
                      className="card-img-top m-1  p-1"
                      width={336}
                      height={230}
                      layout="responsive"
                    />
                  ) : (
                    <Skeleton height={200} />
                  )}
                  

                  <div className="card-body p-0">
                    <motion.div
                      animate={{ opacity: 1 }}
                      initial={{ opacity: 0 }}
                      className="title"
                    >
                      <p
                        className="card-title ms-2 my-2 fs-6 fw-bolder"
                        style={{
                          color: "#000000",
                          border: 0,
                        }}
                      >
                        {product.name?.slice(0, 50)}
                      </p>{" "}
                    </motion.div>
                  </div>
                  {/* test button */}
                </motion.div>
                <div className=" p-2 mx-2 d-flex justify-content-between">
                  <p
                    className="text-center fs-6 fw-bold  "
                    style={{
                      // color: "#FF0099",
                      border: 0,
                    }}
                  >
                    ৳ {product.price}
                  </p>
                  <button
                    type="button"
                    className="btn ml-1 px-2 btn-block btn-sm text-white   fw-bold  me-2  "
                    style={{
                      backgroundColor: "#59330E",
                      // color: "#FF0099",
                      border: 0,
                    }}
                    onClick={() => handleAddItem(product)}
                  >
                    <i className="fas fa-shopping-cart me-1 py-1"></i>
                    Add To Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div>
              
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
            </div>
          )}

          {currentItems?.length===0 &&  <h1 className="text-center fs-4 fw-bolder text-warning">
                We're sorry, but there are no products available at the moment.
                Please check back later.
              </h1>}
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

export default ProductsShowcase;
