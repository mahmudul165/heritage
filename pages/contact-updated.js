import HeroBanner from "@/components/common/Banner";
import { MyButton } from "@/components/common/Buttons";
import IconWithBackground from "@/components/common/IconWithBackground";
import OurOffices from "@/components/home/our-offices/OurOffices";
import { Card, Form } from "react-bootstrap";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

import useAuth from "@/lib/hook/useAuth";
import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OurLocationCard = () => {
  return (
    <>
      <Card className="card border rounded w-25 p-4  position-absolute top-50  mx-5 translate-middle-y d-sm-none d-md-block d-xs-none pb-5">
        <div className="d-grid my-4">
          <MyButton
            style={{ backgroundColor: "#59330E" }}
            type="button"
            size="lg"
            className="fw-bold text-white fs-5"
          >
            Our Locations{" "}
          </MyButton>
        </div>
        <h5 className="my-2">Located in Green Road</h5>
        <div className="mt-2">
          <p>
            Address: Corporate Office: Plot No. SW(I) 4, 25 Gulshan Avenue 1212,
            Bangladesh
          </p>
          <p>Tel: +88 02 9888211</p>
          <p>Fax: 88 02 9888158, 1 Bir Uttam Mir Shawkat Sarak, Dhaka 1208</p>
        </div>
      </Card>
    </>
  );
};

const ContactForm = () => {
  const { apiUrl } = useAuth();
  // console.log('test',`${apiUrl.apiRootUrl}`)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.message) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      axios
        .post(`${apiUrl.apiRootUrl}/api/v1/contact`, formData)
        .then((response) => {
          console.log(response);
          toast.success("Form submitted successfully!");
        })
        .catch((error) => {
          console.log(error);
          toast.error(error);
        });
    } else {
      setErrors(errors);
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Form id="contact-form" name="contact-form p-2" onSubmit={handleSubmit}>
        <h2 className="mb-2 fs-5 fw-bold cus-color-secondary">Contact Form</h2>
        <ToastContainer position="top-center" />
        <Form.Group controlId="name" className="mb-3">
          <Form.Control
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="email" className="mb-3">
          <Form.Control
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="phone" className="mb-3">
          <Form.Control
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="message" className="mb-3">
          <Form.Control
            className="p-4"
            as="textarea"
            rows={10}
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            isInvalid={!!errors.message}
          />
          <Form.Control.Feedback type="invalid">
            {errors.message}
          </Form.Control.Feedback>
        </Form.Group>

        {/* <MyButton
          type="submit"
          size="lg"
          className="text-white px-5 cus-bg-primary"
        >
          SEND
        </MyButton> */}
        <button
          type="submit"
          size="lg"
          className=" text-white px-5 cus-bg-primary py-2 btn "
          // onClick={handleClick}
        >
          SEND
        </button>
      </Form>
    </>
  );
};

function contact() {
  return (
    <>
      {" "}
      {/* <RouteNavSlider router="Contact Us" /> */}
      <HeroBanner name="Contact Us" />
      <div className="  container my-5  ">
        <div className="rounded border position-relative">
          <OurLocationCard />
          <iframe
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=115%20Ahmedbag,%20Global%20Islami%20Bank%20Building,%20Budhho%20Mondir,%20Dhaka-1214%201214%20Dhaka,%20Dhaka%20Division,%20Bangladesh+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="100%"
            height="450px"
            frameBorder="0"
            aria-hidden="false"
          ></iframe>
        </div>

        <div className="row my-4">
          <div className="col-md-4  cus-color-secondary">
            <Card className="card border rounded  p-5 mb-4 ">
              <div className="d-flex gap-5 align-items-center">
                <IconWithBackground>
                  <FaPhoneAlt size={25} className="" />
                </IconWithBackground>

                <div className="cus-color-secondary">
                  <h5 className="mb-2">Phone</h5>
                  <p className="cus-color-secondary">Tel: 000123-8657</p>
                  <p className="cus-color-secondary">Fax: 000123-8657</p>
                </div>
              </div>
            </Card>
            <Card className="card border rounded  p-5 mb-4">
              <div className="d-flex gap-4 align-items-center">
                <IconWithBackground>
                  <FaEnvelope size={25} className="" />
                </IconWithBackground>

                <div>
                  <h5 className="mb-2">Email</h5>
                  <p className="cus-color-secondary">mail@example.com</p>
                  <p className="cus-color-secondary">support@example.com</p>
                </div>
              </div>
            </Card>
            <Card className="card border rounded  p-5 ">
              <div className="d-flex gap-4 align-items-center">
                <IconWithBackground>
                  <FaMapMarkerAlt size={25} className="" />
                </IconWithBackground>

                <div>
                  <h5 className="mb-2">Address</h5>
                  <p className="cus-color-secondary">No: 34 A, Green Road</p>
                  <p className="cus-color-secondary">Dhaka, 6775</p>
                </div>
              </div>
            </Card>
          </div>
          <div className="col-md-8">
            <ContactForm />
          </div>
        </div>
      </div>
      <OurOffices />
    </>
  );
}

export default contact;
