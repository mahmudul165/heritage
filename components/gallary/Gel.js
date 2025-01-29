import React, { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const Gallery = () => {
  const [tab, setTab] = useState('all');

  const handleTabClick = (event, tabName) => {
    event.preventDefault();
    setTab(tabName);
  };

  const images = [
    { id: 1, url: 'image1.jpg', category: 'all' },
    { id: 2, url: 'image2.jpg', category: 'garden' },
    { id: 3, url: 'image3.jpg', category: 'factory' },
    { id: 4, url: 'image4.jpg', category: 'office' },
    { id: 5, url: 'image5.jpg', category: 'garden' },
    { id: 6, url: 'image6.jpg', category: 'factory' },
    { id: 7, url: 'image7.jpg', category: 'office' },
    { id: 8, url: 'image8.jpg', category: 'garden' },
  ];

  const filteredImages = images.filter((image) => image.category === tab || tab === 'all');

  const imageRows = [];

  for (let i = 0; i < filteredImages.length; i += 4) {
    const row = filteredImages.slice(i, i + 4);
    imageRows.push(row);
  }

  return (
    <Container className="my-5">
      <Nav className="mb-3">
        <Nav.Item>
          <Nav.Link href="#" active={tab === 'all'} onClick={(e) => handleTabClick(e, 'all')}>
            View All
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" active={tab === 'garden'} onClick={(e) => handleTabClick(e, 'garden')}>
            Garden
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" active={tab === 'factory'} onClick={(e) => handleTabClick(e, 'factory')}>
            Factory
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" active={tab === 'office'} onClick={(e) => handleTabClick(e, 'office')}>
            Office
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {imageRows.map((row) => (
        <Row key={row[0].id} className="mb-4">
          {row.map((image) => (
            <Col key={image.id} xs={6} md={3} className="mb-4">
              <img src={image.url} alt={image.category} className="img-fluid rounded" />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default Gallery;
