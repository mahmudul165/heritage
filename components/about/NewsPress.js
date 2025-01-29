import React from "react";
import { Row, Col, Card, Image } from "react-bootstrap";
import ReadMoreLessButton from "../common/ReadMore";
import SectionTitle from "../common/SectionTitle";

const NewsPress = () => {
  const products = [
    {
      id: 1,
      name: "The Wonders of Tea: From Antioxidants to Aromatherapy",
      description: "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
      image: "https://cosmosgroup.sgp1.cdn.digitaloceanspaces.com/news/9782559_best%20tea%20gardens%20Bangladesh.jpg",
      price: 49.99,
    },
    {
      id: 2,
   name: 'Exploring the World of Teas: A Guide to Different Varieties',
  description: 'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.',
      image: "https://media.istockphoto.com/id/531854300/photo/first-flush-tea-leaves.jpg?b=1&s=170667a&w=0&k=20&c=kCIF1ISSozkSewK1oSW7j6e34z5mgo8SR7xTEo719xw=",
      price: 59.99,
    },
    {
      id: 3,
        name: 'The Art of Brewing the Perfect Cup of Tea',
        description: ' Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.',
      image: "https://images.unsplash.com/photo-1620903375315-e70f97af6288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRlYSUyMGdhcmRlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
      price: 69.99,
    },
  ];

  return (
    <div className="container  py-3 my-3">
         <SectionTitle title='News Press'/>
      <Row>
        {products?.map((product) => {
          return(
          <>
          <Col  sm={12} md={4} key={product.id}>
            <Card style={{ width: "22rem", height: "auto"}}>
              <Card.Img className="gelleryCardImg" variant="top" src={product?.image} fluid />
              <Card.Body>
                <Card.Title className="fs-5 fw-bolder">{product.name}</Card.Title>
                <Card.Text>
                {/* {product.description} */}
                <ReadMoreLessButton text= {product.description}  limit={50}/>
                </Card.Text>
               
              </Card.Body>
            </Card>
          </Col>
          </>
        )})
      }
      </Row>
    </div>
  );
};

export default NewsPress;
