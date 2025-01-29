import React, { useEffect, useState } from "react";
import { Container, Image, Card } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion } from "framer-motion";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { useRouter } from "next/router";
//  import Image from "next/image";
// import Link from "next/link";
//  import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
//  import { motion } from "framer-motion"
import SliderImg from "public/slider-2.jpg";

import HeroBanner from "@/components/common/Banner";

export const getStaticPaths = async () => {
  // const res = await fetch(
  //   "https://crabby-pocketbook-eel.cyclic.app/api/v1/business"
  // );
  const res = await fetch(
  `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/business`
);

  const data = await res.json();
  const paths = await data.map((post) => {
    return {
      params: { slugId: post?._id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  // const res = await fetch(
  //   `https://crabby-pocketbook-eel.cyclic.app/api/v1/business/${params.slugId}`
  // );
  const res = await fetch(
  `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/business/${params.slugId}`
);

  console.log("url:", res);
  const data = await res.json();
  console.log("product data is :", data);

  return {
    props: { data },
    revalidate: 10,
  };
};

function BlogDetails({ data }) {
  return (
    <div className="   ">
      <HeroBanner name="Our Business" />
      {data ? (
        <Container className="container my-2">
          <Card className="border-0  p-2">
            <div className="ele-center">
              <Card.Img
                className="w-50"
                variant="top"
                // src="https://i.ibb.co/7C7M7QX/tea-5.jpg"
                src={data.image}
                alt="Brand IMG"
              />
            </div>
            <p className="cus-color-primary my-3 fs-2 py-1  ">{data.title}</p>

            <p className="  text-justify cus-text-justify ">{data.body}</p>
          </Card>
        </Container>
      ) : (
        <div className="row    text-center my-2 py-3 ">
          <div className="col-sm-12 col-md-3 pe-2  ">
            <div>
              <Skeleton height={250}>
                <div className="d-flex">
                  <Skeleton
                    height={30}
                    width={90}
                    borderRadius={10}
                    highlightColor={"red"}
                  />
                  <Skeleton
                    height={30}
                    width={90}
                    borderRadius={10}
                    highlightColor={"red"}
                  />
                </div>{" "}
              </Skeleton>
              <div>
                <div className="d-flex p-2 justify-content-center align-items-center">
                  <Skeleton height={30} width={180} />{" "}
                </div>
                <Skeleton height={30} width={250} />
              </div>
              <div></div>
            </div>
          </div>
          <div className="col-sm-12 col-md-3 pe-2  ">
            <div>
              <Skeleton height={250}>
                <div className="d-flex">
                  <Skeleton
                    height={30}
                    width={90}
                    borderRadius={10}
                    highlightColor={"red"}
                  />
                  <Skeleton
                    height={30}
                    width={90}
                    borderRadius={10}
                    highlightColor={"red"}
                  />
                </div>{" "}
              </Skeleton>
              <div>
                <div className="d-flex p-2 justify-content-center align-items-center">
                  <Skeleton height={30} width={180} />{" "}
                </div>
                <Skeleton height={30} width={250} />
              </div>
              <div></div>
            </div>
          </div>
          <div className="col-sm-12 col-md-3 pe-2  ">
            <div>
              <Skeleton height={250}>
                <div className="d-flex">
                  <Skeleton
                    height={30}
                    width={90}
                    borderRadius={10}
                    highlightColor={"red"}
                  />
                  <Skeleton
                    height={30}
                    width={90}
                    borderRadius={10}
                    highlightColor={"red"}
                  />
                </div>{" "}
              </Skeleton>
              <div>
                <div className="d-flex p-2 justify-content-center align-items-center">
                  <Skeleton height={30} width={180} />{" "}
                </div>
                <Skeleton height={30} width={250} />
              </div>
              <div></div>
            </div>
          </div>
          <div className="col-sm-12 col-md-3 pe-2  ">
            <div className="container">
              <Skeleton height={1000}>
                <div>
                  <Skeleton
                    height={400}
                    width={800}
                    borderRadius={10}
                    highlightColor={"red"}
                  />
                </div>{" "}
                <div>
                  <Skeleton
                    height={200}
                    width={800}
                    borderRadius={10}
                    highlightColor={"red"}
                  />
                </div>{" "}
                <div>
                  <Skeleton
                    height={400}
                    width={800}
                    borderRadius={10}
                    highlightColor={"red"}
                  />
                </div>{" "}
              </Skeleton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BlogDetails;
