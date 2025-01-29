import { MyButton } from "@/components/common/Buttons";

import Image from "next/image";
import Link from "next/link";
import { Modal } from "react-bootstrap";
import { FaLongArrowAltRight } from "react-icons/fa";

import demoPic from "public/products/p-1.jpg";
import IconWithBackground from "@/components/common/IconWithBackground";
import { FloatingLabel, Form } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useCart } from "react-use-cart";
import { useState } from "react";
import useAuth from "@/lib/hook/useAuth";

const CartItem = ({ item }) => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  console.log(items);
  return (
    <>
      <div className="">
        <div className="row ele-center ">
          {items.map((item, index) => (
            <>
              <div className="col-3">
                <div className="border p-2 rounded ele-center w-100">
                  <img
                    src={item?.images[0].url}
                    alt="Product"
                    height={100}
                    width={100}
                  />
                </div>
              </div>
              <div className="col-8">
                <div>
                  <p className="fs-6 fw-bold cus-color-secondary my-3">
                    {/* Sultan Tea CD 500gm */}
                    {item.name}
                  </p>
                  <div className="d-flex gap-4 ">
                    <p className="fs-5 p-2">TK {item.price}</p>

                    <div className=" border  rounded ele-center ">
                      <span className=" fw-bold border-end p-1">
                        <AiOutlinePlus
                          size={20}
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        />
                      </span>
                      <span className="fw-bold fs-6 p-2">{item.quantity}</span>
                      <span className=" border-start p-1">
                        <AiOutlineMinus
                          size={20}
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1 ele-center">
                <button
                  onClick={() => removeItem(item.id)}
                  className="btn btn-sm"
                >
                  <IconWithBackground>
                    <RiDeleteBin5Fill size={18} className="" />
                  </IconWithBackground>
                </button>
              </div>
            </>
          ))}
        </div>
      </div>
      <hr className="my-4"></hr>
    </>
  );
};

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
      <div className="ele-center my-5">
        <MyButton
          type="submit"
          size="lg"
          className=" text-white px-5 cus-bg-secondary  w-100"
        >
          CHECKOUT
        </MyButton>
      </div>
    </Form>
  );
};
const CartItemsModal = (props) => {
  const { apiUrl } = useAuth();
  const { isEmpty, totalUniqueItems, items, totalItems, cartTotal, updateItemQuantity, removeItem, emptyCart } = useCart();
  const itemIds = items.map(item => item._id);
  const ids = [...itemIds];
  // console.log('test',`${apiUrl.apiRootUrl}/api/v1/order`)
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [errors, setErrors] = useState({});
  
  const handleChange = (event) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Validate form values
    const newErrors = {};
    if (!formValues.name) {
      newErrors.name = 'Please enter your name';
    }
    if (!formValues.email) {
      newErrors.email = 'Please enter your email';
    }
    if (!formValues.phone) {
      newErrors.phone = 'Please enter your phone number';
    }
    if (!formValues.address) {
      newErrors.address = 'Please enter your address';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
  
    try {
      // Set the dynamic data for totalItems, totalUniqueItems, cartTotal, and products
      const updatedFormValues = {
        ...formValues,
        totalItems: totalItems || 0,
        totalUniqueItems: totalUniqueItems || 0,
        cartTotal: cartTotal || 0,
        products: ids,
      };
  
      // Submit form data
      const response = await axios.post(`${apiUrl.apiRootUrl}/api/v1/order`,totalItems > 0 && updatedFormValues);
  
      // Handle successful response
      setFormValues({
        name: '',
        email: '',
        phone: '',
        address: '',
      });
  
      toast.success('🦄 Order place successfully!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      emptyCart();
      const handleEntered = () => {
        setTimeout(props.onHide, 5000);
      };
      handleEntered();
    } catch (error) {
      // Handle error response
      toast.error('Checkout failed. Please try again later.');
    }
  };
  // console.log('modal',props.onHide())
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div className="d-flex align-items-center gap-3">
            <AiOutlineShoppingCart size={40} />
            <p className="fs-5 fw-bold">{totalItems} items</p>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container my-5">
          <div className="row ">
            <div className="col-12  ">
              {/* <CartItem /> */}
              <>
                <div className="">
                  <div className="row ele-center ">
                    {items.map((item, index) => (
                      <>
                        <div className="col-3">
                          <div className="border p-2 rounded ele-center w-100">
                            <img
                              src={item?.images[0].url}
                              alt="Product"
                              height={100}
                              width={100}
                            />
                          </div>
                        </div>
                        <div className="col-8">
                          <div>
                            <p className="fs-6 fw-bold cus-color-secondary my-3">
                              {/* Sultan Tea CD 500gm */}
                              {item.name}
                            </p>
                            <div className="d-flex gap-4 ">
                              <p className="fs-5 p-2">TK {item.price}</p>

                              <div className=" border  rounded ele-center ">
                                <span className=" fw-bold border-end p-1">
                                  <AiOutlinePlus
                                    size={20}
                                    onClick={() =>
                                      updateItemQuantity(
                                        item.id,
                                        item.quantity + 1
                                      )
                                    }
                                  />
                                </span>
                                <span className="fw-bold fs-6 p-2">
                                  {item.quantity}
                                </span>
                                <span className=" border-start p-1">
                                  <AiOutlineMinus
                                    size={20}
                                    onClick={() =>
                                      updateItemQuantity(
                                        item.id,
                                        item.quantity - 1
                                      )
                                    }
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-1 ele-center">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="btn btn-sm"
                          >
                            <IconWithBackground>
                              <RiDeleteBin5Fill size={18} className="" />
                            </IconWithBackground>
                          </button>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
                <hr className="my-4"></hr>
              </>
              {/* <CartItem /> */}

              <div className="d-flex justify-content-between my-4 ">
                <div>
                  <p className="fs-4 fw-bold">Total</p>
                </div>
                <div>
                  <p className="fs-4 fw-bold">Tk {cartTotal}</p>
                </div>
              </div>
              <hr className="my-4  d-md-none "></hr>
            </div>
            <div className="col-12  ">
              {/* <CheckOutForm /> */}

              <>
              <ToastContainer />
              <Form onSubmit={handleSubmit}>
                <FloatingLabel
                  controlId="name"
                  label="Enter Your Name"
                  className="mb-4"
                >
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    value={formValues.name}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </FloatingLabel>
                <FloatingLabel
                  controlId="email"
                  label="Enter Your Email"
                  className="mb-4"
                >
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    value={formValues.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </FloatingLabel>
                <FloatingLabel
                  controlId="phone"
                  label="Phone Number"
                  className="mb-4"
                >
                  <Form.Control
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formValues.phone}
                    onChange={handleChange}
                    isInvalid={!!errors.phone}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.phone}
                  </Form.Control.Feedback>
                </FloatingLabel>
                <FloatingLabel controlId="address" label="Address">
                  <Form.Control
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formValues.address}
                    onChange={handleChange}
                    isInvalid={!!errors.address}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.address}
                  </Form.Control.Feedback>
                </FloatingLabel>
                <div className="ele-center my-5">
                  <button type="submit" className="btn btn-primary">
                    CHECKOUT
                  </button>
                </div>
              </Form></>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CartItemsModal;
