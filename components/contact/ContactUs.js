// import React from "react";
// const ContactUs = () => {
//   return (
//     <section className="container mb-4">
//       {/*Section heading*/}
//       <h2 className="fs-2 fw-bolder h1-responsive font-weight-bold text-center my-4">
//         Contact us
//       </h2>
//       <div className="Card">
//         <div className="row">
//           <div className="col-md-3 text-center">
//             <ul className="list-unstyled mb-0">
//               <li>
//                 <i className="fas fa-map-marker-alt fa-2x" />
//                 <p>San Francisco, CA 94126, USA</p>
//               </li>
//               <li>
//                 <i className="fas fa-phone mt-4 fa-2x" />
//                 <p>+ 01 234 567 89</p>
//               </li>
//               <li>
//                 <i className="fas fa-envelope mt-4 fa-2x" />
//                 <p>contact@mdbootstrap.com</p>
//               </li>
//             </ul>
//           </div>
//           <div className="col-md-9 mb-md-0 mb-5">
//             <form
//               id="contact-form"
//               name="contact-form"
//               action="mail.php"
//               method="POST"
//             >
//               <div className="row">
//                 <div className="col-md-6">
//                   <div className="md-form mb-0">
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       className="form-control"
//                     />
//                     <label htmlFor="name" className>
//                       Your name
//                     </label>
//                   </div>
//                 </div>
//                 <div className="col-md-6">
//                   <div className="md-form mb-0">
//                     <input
//                       type="text"
//                       id="email"
//                       name="email"
//                       className="form-control"
//                     />
//                     <label htmlFor="email" className>
//                       Your email
//                     </label>
//                   </div>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col-md-12">
//                   <div className="md-form mb-0">
//                     <input
//                       type="text"
//                       id="subject"
//                       name="subject"
//                       className="form-control"
//                     />
//                     <label htmlFor="subject" className>
//                       Subject
//                     </label>
//                   </div>
//                 </div>
//               </div>
//               <div className="row">
//                 {/*Grid column*/}
//                 <div className="col-md-12">
//                   <div className="md-form">
//                     <textarea
//                       type="text"
//                       id="message"
//                       name="message"
//                       rows={2}
//                       className="form-control md-textarea"
//                       defaultValue={""}
//                     />
//                     <label htmlFor="message">Your message</label>
//                   </div>
//                 </div>
//               </div>
//             </form>
//             <div className="text-center text-md-left">
//               <a
//                 className="btn btn-primary"
//                 onclick="document.getElementById('contact-form').submit();"
//               >
//                 Send
//               </a>
//             </div>
//             <div className="status" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;

import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <Container className="mb-4  p-2  ">
      <h2 className="fs-2 fw-bolder h1-responsive font-weight-bold text-center my-4">
        Contact Us
      </h2>
      <Card className=" bg-light border-0">
        <div className="p-3">
          <Row className="p-3">
            <Col md={5} className="text-center p-2 ">
              <Card className="p-3 border-0">
                <ul className="list-unstyled mb-0">
                  <li>
                    <FaMapMarkerAlt size={25} className="d-inline m-2 " />
                    <p className="fs-5 fw-bolder">
                      San Francisco, CA 94126, USA
                    </p>
                  </li>
                  <li className="my-3">
                    <FaPhone size={25} className="d-inline m-2" />
                    <p className="fs-5 fw-bolder">+ 01 234 567 89</p>
                  </li>
                  <li>
                    <FaEnvelope size={25} className="d-inline m-2" />
                    <p className="fs-5 fw-bolder">contact@mdbootstrap.com</p>
                  </li>
                </ul>
              </Card>
              {/* map include */}
              <div className="tile is-child box  mt-3">
                <Card className="p-2 border-0">
                  <div className="p-1  ">
                    <iframe
                      src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=115%20Ahmedbag,%20Global%20Islami%20Bank%20Building,%20Budhho%20Mondir,%20Dhaka-1214%201214%20Dhaka,%20Dhaka%20Division,%20Bangladesh+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      aria-hidden="false"
                      tabIndex={0}
                    ></iframe>
                  </div>
                </Card>
              </div>
            </Col>
            <Col md={7}>
            <Card className="p-5  my-1 border-0">
              <Form
                id="contact-form"
                name="contact-form p-2"
                action="mail.php"
                method="POST"
              >
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="name">
                      <Form.Label>Your name</Form.Label>
                      <Form.Control type="text" name="name" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="email">
                      <Form.Label>Your email</Form.Label>
                      <Form.Control type="text" name="email" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Form.Group controlId="subject">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control type="text" name="subject" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Form.Group controlId="message">
                      <Form.Label>Your message</Form.Label>
                      <Form.Control
                        className="p-4"
                        as="textarea"
                        rows={2}
                        name="message"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Button type="submit " bg="#E49E48" className="mt-2">
                  Send Message
                </Button>
              </Form>
              </Card>
            </Col>
          </Row>
        </div>
      </Card>
    </Container>
  );
};

export default ContactUs;
