import React from "react";
import { Card, Image } from "react-bootstrap";
import SectionTitle from "../common/SectionTitle";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion } from "framer-motion";
const ObjectsArray = [
  {
    title: "Gerden",
    images: [
      "https://i.ibb.co/vxh7Mcy/rajat-sarki-9t-Io-Mw7-Moz-E-unsplash.jpg",
      " https://i.ibb.co/7C7M7QX/tea-5.jpg",
      "https://media.gettyimages.com/id/121150804/photo/tea-picker.jpg?s=612x612&w=0&k=20&c=zVxSFPacDsE9vziyhTM0aiw481A0Ou0PH3wCAjMS_e0=",
      "https://i.ibb.co/prC1cY8/jaromir-kavan-i9ea-AR4d-Wi8-unsplash.jpg",
    ],
  },
  {
    title: "Factory",
    images: [
      " https://i.ibb.co/7C7M7QX/tea-5.jpg",
      "https://i.ibb.co/vxh7Mcy/rajat-sarki-9t-Io-Mw7-Moz-E-unsplash.jpg",
      "https://i.ibb.co/prC1cY8/jaromir-kavan-i9ea-AR4d-Wi8-unsplash.jpg",
      "https://media.gettyimages.com/id/121150804/photo/tea-picker.jpg?s=612x612&w=0&k=20&c=zVxSFPacDsE9vziyhTM0aiw481A0Ou0PH3wCAjMS_e0=",
    ],
  },
  {
    title: "Factory",
    images: [
      "https://media.gettyimages.com/id/121150804/photo/tea-picker.jpg?s=612x612&w=0&k=20&c=zVxSFPacDsE9vziyhTM0aiw481A0Ou0PH3wCAjMS_e0=",
      "https://i.ibb.co/prC1cY8/jaromir-kavan-i9ea-AR4d-Wi8-unsplash.jpg",
      "https://i.ibb.co/vxh7Mcy/rajat-sarki-9t-Io-Mw7-Moz-E-unsplash.jpg",
      " https://i.ibb.co/7C7M7QX/tea-5.jpg",
    ],
  },
  {
    title: "Factory",
    images: [
      "https://i.ibb.co/prC1cY8/jaromir-kavan-i9ea-AR4d-Wi8-unsplash.jpg",
      "https://i.ibb.co/7C7M7QX/tea-5.jpg",
      "https://media.gettyimages.com/id/121150804/photo/tea-picker.jpg?s=612x612&w=0&k=20&c=zVxSFPacDsE9vziyhTM0aiw481A0Ou0PH3wCAjMS_e0=",
      "https://i.ibb.co/vxh7Mcy/rajat-sarki-9t-Io-Mw7-Moz-E-unsplash.jpg",
    ],
  },
];

const Gallery = () => (
  <> <div className="container"> 
  
    {ObjectsArray.map((object, index) => (
      <>
        <div className="py-2">
        <SectionTitle title= {object.title} />
        <div className="row     ">
          {object.images.map((image, index) => (
            
            <Card key={index} className="col-sm-12 col-md-3  mb-2    border-0" >
              {/* <Card.Body>  */}
                 {image ? (
                    <motion.img
                    className="galleryImage"
                      initial={{ x: 60, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      src={image} alt={`${object.title} - Image ${index + 1}`} fluid                      
                      // className="card-img-top  p-2 "
                      // width={336}
                      // height={230}
                      layout="responsive"
                    />
                  ) : (
                    <Skeleton height={400} />
                  )} 
              {/* </Card.Body> */}
            </Card> 
          ))}
        </div>
        </div>
      </>
    ))}
     </div> 
  </>
);

export default Gallery;
