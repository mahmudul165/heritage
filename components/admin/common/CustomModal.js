import { MyButton } from "@/components/common/Buttons";

import Image from "next/image";
import Link from "next/link";
import { Modal } from "react-bootstrap";

import { FloatingLabel, Form } from "react-bootstrap";

const CheckOutForm = () => {
  return (
    <Form
      id="contact-form"
      name="contact-form p-2"
      action="mail.php"
      method="POST"
    >
      <FloatingLabel
        controlId="floatingInputGrid"
        label="Enter Your Email"
        className="mb-4"
      >
        <Form.Control type="email" placeholder="Enter Your Email" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInputGrid"
        label="Enter Your Name"
        className="mb-4"
      >
        <Form.Control type="text" placeholder="Enter Your Name" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInputGrid"
        label="Phone Number"
        className="mb-4"
      >
        <Form.Control type="number" placeholder="Phone Number" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInputGrid" label="Address">
        <Form.Control type="text" placeholder="Address" />
      </FloatingLabel>
      <div className="ele-center ">
        <MyButton
          type="submit"
          size="lg"
          className=" text-white  cus-bg-secondary  mt-3 w-100"
        >
          Add Product
        </MyButton>
      </div>
    </Form>
  );
};
const CustomModal = (props) => {
  const { name, children, size } = { ...props };
  console.log(name);

  return (
    <Modal
      {...props}
      size={size || "lg"}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h2>{name}</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container my-3">
          <div className="row ">
            <div className="col-12 ">{children}</div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CustomModal;
