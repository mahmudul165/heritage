import { Modal } from "react-bootstrap";

const ShowMore = (props) => {
  const { title, subTitle, description } = props;

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <p className="fw-bold fs-4 my-2">{subTitle}</p> */}
        <p className="my-3 py-1 px-2   text-secondary text-sm text-justify">
          {description}
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default ShowMore;
