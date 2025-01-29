import { MyButton } from "@/components/common/Buttons";
import useAuth from "@/lib/hook/useAuth";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useCart } from "react-use-cart";

const ProductDetailsModal = (props) => {
  const { apiUrl } = useAuth();
  // console.log('test',`${apiUrl.apiRootUrl}`)
  // console.log("product details data", props?.data);
  const { getProductId } = props;
  let [singleProduct, setSingleProduct] = useState(null);
  let [topImg, setTopImg] = useState(null);

  const handleClick = (value) => {
    setTopImg(value);
  };
  useEffect(() => {
    if (getProductId !== null) {
      axios
        .get(
          `${apiUrl.apiRootUrl}/api/v1/product/${getProductId}`
        )
        .then((res) => {
          setSingleProduct(res.data);
          setTopImg(res?.data?.images[0]?.url);
        })
        .catch((error) => {
          console.log({ error });
        });
    }
  }, [getProductId]);

  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    removeItem,
    emptyCart,
    addItem,
    updateItemQuantity,
  } = useCart();
  const foundItem = items.find((item) => item?._id === singleProduct?._id);

  // console.log("foundItem", foundItem);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Product Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row my-4">
          <div className="col-md-4">
            <div className=" img-zoom  p-3 d-flex ele-center border rounded  ">
              <img
                src={topImg}
                alt={singleProduct?.images[0].altText}
                width={140}
                height={140}
              />
            </div>

            <div className="d-flex justify-content-between p-2">
              {singleProduct?.images.map((el, index) => (
                <div key={index} className="border p-2">
                  <img
                    src={el?.url}
                    alt={el?.altText}
                    width={50}
                    height={50}
                    onClick={() => {
                      handleClick(el.url);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-8 ">
            <div>
              <h2 className="fs-5 fw-bold cus-color-secondary ">
                {singleProduct?.name}
              </h2>
              <p className="fs-5 ">Tk {singleProduct?.price}</p>

              <p className="mt-4 text-justify">{singleProduct?.description}</p>

              <Link href="#">
                <div className="cus-color-secondary mt-2 d-flex gap-3  algin-items-center">
                  <p className="cus-color-secondary">View Product</p>

                  <FaLongArrowAltRight className="mt-1" />
                </div>
              </Link>

              <div className="d-flex gap-4  mt-4 ">
                {foundItem && (
                  <>
                    {" "}
                    <div className=" border rounded ele-center ">
                      {" "}
                      <span className=" fw-bold border-end p-1  ">
                        <AiOutlinePlus
                          size={20}
                          onClick={() =>
                            updateItemQuantity(
                              foundItem?.id,
                              foundItem?.quantity + 1
                            )
                          }
                        />
                      </span>
                      <span className="fw-bold fs-6 p-2">
                        {foundItem?.quantity || 0}
                      </span>
                      <span
                        className="border-start p-1"
                        onClick={() =>
                          updateItemQuantity(
                            foundItem?.id,
                            foundItem?.quantity - 1
                          )
                        }
                      >
                        <AiOutlineMinus size={20} />
                      </span>{" "}
                    </div>
                  </>
                )}
                <div>
                <MyButton
                  type="submit"
                  size="md"
                  className=" text-white px-3 fs-6 cus-bg-secondary"
                  onClick={() => addItem(singleProduct)}
                >
                  ADD TO CART
                </MyButton>
              </div>
              </div>
               
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProductDetailsModal;
