import HeroBanner from "@/components/common/Banner";
import { useGalleryCollectionQuery } from "@/lib/hook/useApi";
import { motion } from "framer-motion";
import { useState } from "react";
import { Card, Container, Nav, Pagination, Row } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Gallery = () => {
  const [tab, setTab] = useState("all");
  const { data: images } = useGalleryCollectionQuery();
  const [loadingImages, setLoadingImages] = useState(true);
  const handleTabClick = (event, tabName) => {
    event.preventDefault();
    setTab(tabName);
  };

 
  // console.log({ images });

  const filteredImages = images?.filter(
    (image) => image.category === tab || tab === "all"
  );

  const imageRows = [];

  for (let i = 0; i < filteredImages?.length; i += 4) {
    const row = filteredImages?.slice(i, i + 4);
    imageRows.push(row);
  }
  // setup pagination
  const initialImage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const lastItemIndex = currentPage * initialImage;
  const firstItemIndex = lastItemIndex - initialImage;
  const currentItems = filteredImages?.slice(firstItemIndex, lastItemIndex);
  const totalPages = Math.ceil(filteredImages?.length / initialImage);
  console.log({ totalPages });

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  //

  return (
    <div>
      {" "}
      {/* <RouteNavSlider router="Gellary" /> */}
      <HeroBanner name="Gellary" />
      <Container className="my-5">
        <Nav className="mb-3">
          <Nav.Item>
            <Nav.Link
              href="#"
              active={tab === "all"}
              onClick={(e) => handleTabClick(e, "all")}
            >
              View All
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="#"
              active={tab === "garden"}
              onClick={(e) => handleTabClick(e, "garden")}
            >
              Garden
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="#"
              active={tab === "factory"}
              onClick={(e) => handleTabClick(e, "factory")}
            >
              Factory
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="#"
              active={tab === "office"}
              onClick={(e) => handleTabClick(e, "office")}
            >
              Office
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Row className="mb-4 overflow-hidden">
           



        {currentItems ? (
            currentItems?.map((image, index) => (
              <Card
                key={image.id}
                className="col-sm-12 col-md-3 mb-3 border-0 rounded"
              >
                <motion.img
                  className="galleryImage"
                  initial={{ x: 60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  src={image.url}
                  alt={image.category}
                  layout="responsive"
                  loading="lazy"
                  onLoad={() => setLoadingImages(false)} // Set loading state to false when image is loaded
                />
              </Card>
            ))
          ) : (
            // Loading state
            Array.from({ length: initialImage }).map((_, index) => (
              <Card
                key={index}
                className="col-sm-12 col-md-3 mb-3 border-0 rounded"
              >
                <Skeleton height={400} />
              </Card>
            ))
          )}

{/* {currentItems ? (
            currentItems?.map((image, index) => (
              <Card
                key={image.id}
                className="col-sm-12 col-md-3 mb-3 border-0 rounded"
              >
                <motion.img
                  className="galleryImage"
                  initial={{ x: 60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  src={image.url}
                  alt={image.category}
                  layout="responsive"
                  loading="lazy"
                />
              </Card>
            ))
          ) : (
            // Loading state
            Array.from({ length: initialImage }).map((_, index) => (
              <Card
                key={index}
                className="col-sm-12 col-md-3 mb-3 border-0 rounded"
              >
                <Skeleton height={400} />
              </Card>
            ))
          )} */}
        </Row>
 {/* Show loading state only while images are still loading */}
 {loadingImages && (
          <div className="text-center">
            <Skeleton width={200} height={40} />
          </div>
        )}
        <Pagination className="d-flex justify-content-end">
          <Pagination.First onClick={() => handlePageChange(1)} />
          <Pagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {[totalPages].map((_, index) => (
            <Pagination.Item
              className="cus-bg-primary visually"
              key={index}
              active={currentPage === index + 1}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}

          <Pagination.Next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
          <Pagination.Last onClick={() => handlePageChange(totalPages)} />
        </Pagination>
      </Container>
    </div>
  );
};

export default Gallery;

// const images = [
//   { id: 1, url: "https://i.ibb.co/7C7M7QX/tea-5.jpg", category: "all" },
//   {
//     id: 2,
//     url: "https://i.ibb.co/vxh7Mcy/rajat-sarki-9t-Io-Mw7-Moz-E-unsplash.jpg",
//     category: "garden",
//   },
//   { id: 3, url: "https://i.ibb.co/7C7M7QX/tea-5.jpg", category: "garden" },
//   {
//     id: 4,
//     url: "https://media.gettyimages.com/id/121150804/photo/tea-picker.jpg?s=612x612&w=0&k=20&c=zVxSFPacDsE9vziyhTM0aiw481A0Ou0PH3wCAjMS_e0=",
//     category: "garden",
//   },
//   {
//     id: 5,
//     url: "https://i.ibb.co/prC1cY8/jaromir-kavan-i9ea-AR4d-Wi8-unsplash.jpg",
//     category: "garden",
//   },
//   { id: 6, url: "https://i.ibb.co/7C7M7QX/tea-5.jpg", category: "factory" },
//   {
//     id: 7,
//     url: "https://i.ibb.co/vxh7Mcy/rajat-sarki-9t-Io-Mw7-Moz-E-unsplash.jpg",
//     category: "factory",
//   },
//   {
//     id: 8,
//     url: "https://i.ibb.co/prC1cY8/jaromir-kavan-i9ea-AR4d-Wi8-unsplash.jpg",
//     category: "factory",
//   },
//   {
//     id: 9,
//     url: "https://media.gettyimages.com/id/121150804/photo/tea-picker.jpg?s=612x612&w=0&k=20&c=zVxSFPacDsE9vziyhTM0aiw481A0Ou0PH3wCAjMS_e0=",
//     category: "factory",
//   },

//   {
//     id: 10,
//     url: "https://media.gettyimages.com/id/121150804/photo/tea-picker.jpg?s=612x612&w=0&k=20&c=zVxSFPacDsE9vziyhTM0aiw481A0Ou0PH3wCAjMS_e0=",
//     category: "office",
//   },
//   {
//     id: 11,
//     url: "https://i.ibb.co/prC1cY8/jaromir-kavan-i9ea-AR4d-Wi8-unsplash.jpg",
//     category: "office",
//   },
//   {
//     id: 12,
//     url: "https://i.ibb.co/vxh7Mcy/rajat-sarki-9t-Io-Mw7-Moz-E-unsplash.jpg",
//     category: "office",
//   },
//   { id: 13, url: " https://i.ibb.co/7C7M7QX/tea-5.jpg", category: "office" },
// ];
