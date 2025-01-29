import useAuth from "@/lib/hook/useAuth";

import axios from "axios";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

import { dateFormat } from "./Fomater";

const SingleProductView = (props) => {
  const { apiUrl } = useAuth();

  const { getProductId } = props;
  let [singleProduct, setSingleProduct] = useState(null);
  let [topImg, setTopImg] = useState(null);

  console.log({ singleProduct });

  const handleClick = (value) => {
    setTopImg(value);
  };
  useEffect(() => {
    if (getProductId !== null) {
      axios
        .get(`${apiUrl.apiRootUrl}/api/v1/product/${getProductId}`)
        .then((res) => {
          setSingleProduct(res.data);
          setTopImg(res?.data?.images[0]?.url);
        })
        .catch((error) => {
          console.log({ error });
        });
    }
  }, [getProductId]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          View an product details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row my-4">
          <div className="col-8 offset-2  ">
            <div className=" img-zoom  p-5  ele-center border rounded  ">
              <img
                src={topImg}
                alt={singleProduct?.images[0].altText}
                width={180}
                height={180}
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
          <div className="col-md-12 ">
            <div>
              <h2 className="fs-5 fw-bold cus-color-secondary ">
                {singleProduct?.name}
              </h2>
              <p className="fs-5 ">Tk {singleProduct?.price}</p>

              <div className="py-2">
                <table className="table border table-striped">
                  <tbody>
                    <tr>
                      <td>Category</td>
                      <td>{singleProduct?.category}</td>
                    </tr>
                    <tr>
                      <td>Name</td>
                      <td>{singleProduct?.name}</td>
                    </tr>
                    <tr>
                      <td>Price</td>
                      <td>{singleProduct?.price} tk</td>
                    </tr>
                    <tr>
                      <td>Promo Code</td>
                      <td>{singleProduct?.promo?.code}</td>
                    </tr>
                    <tr>
                      <td>Expire Date</td>
                      <td>{dateFormat(singleProduct?.promo?.expiresAt)}</td>
                    </tr>
                    <tr>
                      <td>Discount</td>
                      <td>{singleProduct?.discount?.amount}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="fs-5 fw-bold border-bottom">Description</p>

              <p className="mt-4 text-justify">{singleProduct?.description}</p>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SingleProductView;
