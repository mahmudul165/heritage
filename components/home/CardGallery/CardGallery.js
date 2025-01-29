import React from "react";
import { Row, Col, Card, Image } from "react-bootstrap";

const CardGallery = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "This is the description of product 1",
      image: "https://i.ibb.co/Hz2FYr1/card-gellery-1.png",
      price: 49.99,
    },
    {
      id: 2,
      // name: 'Product 2',
      // description: 'This is the description of product 2',
      image: "https://i.ibb.co/vct1J8w/card-gellary-2.png",
      price: 59.99,
    },
    {
      id: 3,
      // name: 'Product 3',
      // description: 'This is the description of product 3',
      image: "https://i.ibb.co/tZMSP3x/card-gellery-3.png",
      price: 69.99,
    },
  ];

  return (
    <div className="container py-3 my-3">
      <Row>
        {products?.map((product) => {
          return (
            <>
              <Col sm={12} md={4} key={product.id} className="py-2">
                {/* <Card  style={{ width: "22rem", height: "auto"}} > */}
                <Card.Img
                  className="gelleryCardImg"
                  variant="top"
                  src={product?.image}
                  fluid
                />
                <Card.Body>
                  {/* <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                {product.description}
                </Card.Text> */}
                </Card.Body>
                {/* </Card> */}
              </Col>
            </>
          );
        })}
      </Row>
    </div>
  );
};

export default CardGallery;
