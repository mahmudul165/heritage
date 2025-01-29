import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import FetchData from "./FetchData";
import { dateFormat } from "./Fomater";
import { MdLocationPin, MdMail } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const SingleView = (props) => {
  const { getId, apiURL } = props;

  let [getData, setData] = useState(null);

  useEffect(() => {
    if (getId !== null) {
      FetchData(getId, apiURL, setData);
    }
  }, [getId, apiURL]);

  console.log({ getData });

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          View details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mx-2">
          {getData?.image && (
            <div className="text-center  ele-center   my-4  card border-0">
              <img
                src={getData?.image || getData?.url}
                alt="Preview"
                width="70%"
              />
            </div>
          )}
          {getData?.url && (
            <div className="text-center  ele-center   my-4  card border-0">
              <img
                src={getData?.image || getData?.url}
                alt="Preview"
                width="70%"
              />
            </div>
          )}

          {/* View for Contact    */}
          <p className="my-4 fs-4 text-capitalize fw-bold text-secondary">
            {" "}
            {getData?.name}
          </p>
          {getData?.email && (
            <p className="my-2 fs-5 ">
              <FaEnvelope className="text-primary " />{" "}
              <span className="p-2"> {getData?.email}</span>
            </p>
          )}
          {getData?.phone && (
            <p className="my-2 fs-5 ">
              {" "}
              <BsFillTelephoneFill className="text-primary " />{" "}
              <span className="p-2">{getData?.phone}</span>
            </p>
          )}
          {getData?.location && (
            <p className="my-2 fs-5 ">
              {" "}
              <MdLocationPin size={24} className="text-primary " />{" "}
              <span className="p-2">{getData?.location}</span>
            </p>
          )}
          {/* View End contact   */}

          {/* View for gallery   */}
          {getData?.createdOn && (
            <p className="">
              <span className="fs-5">Created Date: </span>
              <span className="text-sm fs-6 text-info">
                {dateFormat(getData?.createdOn)}
              </span>
            </p>
          )}

          {getData?.category && (
            <p className="">
              <span className="fs-5">Category: </span>
              <span className="text-sm fs-6 bg-primary p-1 border text-white fw-bold rounded">
                {getData?.category}
              </span>
            </p>
          )}

          {/* End gallery   */}

          <p className="my-4 fs-4 ">{getData?.title}</p>

          {getData?.price && (
            <p className="fs-5 fw-bold">Price: ${getData?.price} </p>
          )}

          {!getData?.url && (
            <p className="fs-5 mt-2 fw-bold text-secondary ">Description:</p>
          )}

          <p className="mt-2 text-justify">
            {getData?.body || getData?.description || getData?.message}
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SingleView;
