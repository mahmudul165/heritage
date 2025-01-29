import SectionTitle from "@/components/common/SectionTitle";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Outlet = () => {
  return (
    <div className="my-3 py-2">
      <Container>
        <SectionTitle title="Our Presence" />
        <Row className="">
          <Col sm={12} md={6}>
            <Card style={{position: 'relative', height: '400px', backgroundImage: `url(https://i.ibb.co/pRn7J7c/our-presence-2.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <h1 className="fs-6 fw-bold" style={{position: 'absolute', bottom: '40px', left: '0px',right: '90px', background: 'rgba(0, 0, 0, 0.8)', color: 'white', padding: '10px'}}>Our Presence at Swapno</h1>
          </Card>
            {/* <div>



              <img
                src="https://i.ibb.co/34bsxvZ/outlet-1.png"
                alt="outlet-1  "
              ></img>
            </div> */}
          </Col>
          <Col sm={12} md={6}>
            <Card style={{position: 'relative', height: '400px', backgroundImage: `url(https://i.ibb.co/mB8D2Xf/our-presence-1.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <h1 className="fs-6 fw-bold" style={{position: 'absolute', bottom: '40px', left: '0px', right: '90px', background: 'rgba(0, 0, 0, 0.8)', color: 'white', padding: '10px'}}>Our Presence at Hazrat Shajalal International Airport Dhaka</h1>
          </Card>
            {/* <div className="xs-mt-2">
              <img
                src="https://i.ibb.co/1zzg6NP/outlet-2.png"
                alt="outlet-2"
              ></img>
            </div> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Outlet;
