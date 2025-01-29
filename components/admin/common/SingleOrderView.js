import useAuth from "@/lib/hook/useAuth";
import axios from "axios";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { dateFormat } from "./Fomater";

const SingleOrderView = (props) => {
  const { apiUrl } = useAuth();
  const { getOrderId } = props;
  let [singleOrder, setSingleOrder] = useState(null);
  let [topImg, setTopImg] = useState(null);

  const handleClick = ({ value }) => {
    setTopImg(value);
  };
  useEffect(() => {
    if (getOrderId !== null) {
      axios
        .get(`${apiUrl.apiRootUrl}/api/v1/order/${getOrderId}`)
        .then((res) => {
          setSingleOrder(res.data);
          setTopImg(res?.data?.images[0]?.url);
        })
        .catch((error) => {
          console.log({ error });
        });
    }
  }, [getOrderId]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          View an order details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row my-4">
          <div className="col-8 offset-2  ">
            <div className=" img-zoom  p-5  ele-center border rounded  ">
              <img
                src={singleOrder?.products[0]?.images[0]?.url}
                alt={singleOrder?.products[0]?.images[0]?.altText}
                width={180}
                height={180}
              />
            </div>

            <div className="d-flex justify-content-between p-2">
              {singleOrder?.products.map((el, index) => (
                <div key={index} className="border p-2">
                  <img
                    src={el?.images[0].url}
                    alt={el?.images[0].altText}
                    width={50}
                    height={50}
                    onClick={() => {
                      handleClick(el?.images[0].url);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-12 ">
            <div>
              <h4 className="fs-5 fw-bold cus-color-secondary my-2">
                {singleOrder?.name} order product
              </h4>
              <p className="fs-5 ">Total {singleOrder?.cartTotal} TK</p>

              <div className="py-2">
                <table className="table border table-striped">
                  <tbody>
                    <tr>
                      <td>Order Date</td>
                      <td>{dateFormat(singleOrder?.orderDate)}</td>
                    </tr>
                    <tr>
                      <td>Name</td>
                      <td>{singleOrder?.name}</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>{singleOrder?.address}</td>
                    </tr>
                    <tr>
                      <td>Phone</td>
                      <td>{singleOrder?.phone}</td>
                    </tr>
                    <tr>
                      <td>Discount</td>
                      <td>{singleOrder?.products[0]?.discount?.amount}</td>
                    </tr>
                    <tr>
                      <td>Total Price</td>
                      <td>{singleOrder?.cartTotal} tk</td>
                    </tr>
                    <tr>
                      <td>Promo Code</td>
                      <td>{singleOrder?.products[0]?.promo?.code}</td>
                    </tr>
                    <tr>
                      <td>Expire Date</td>
                      <td>
                        {dateFormat(singleOrder?.products[0]?.promo?.expiresAt)}
                      </td>
                    </tr>

                    <tr>
                      <td>Status</td>
                      <td>
                        {" "}
                        <span className="p-2 bg-primary rounded-lg text-white fw-bold">
                          {singleOrder?.status}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="fs-5 fw-bold border-bottom">Description</p>

              <p className="mt-4 text-justify">
                {singleOrder?.products[0]?.description}
              </p>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SingleOrderView;
