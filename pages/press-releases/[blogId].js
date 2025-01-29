import React, { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
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
import RouteNavSlider from "@/components/common/RouteNavSlider";
import HeroBanner from "@/components/common/Banner";
import DemoImg from "public/press-release-one.png";
import Image from "next/image";

export const getStaticPaths = async () => {
  // const res = await fetch(
  //   "https://crabby-pocketbook-eel.cyclic.app/api/v1/press"
  // );
  const res = await fetch(
  `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/press`
);

  const data = await res.json();
  const paths = await data.map((post) => {
    return {
      params: { blogId: post?._id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  // const res = await fetch(
  //   `https://crabby-pocketbook-eel.cyclic.app/api/v1/press/${params.blogId}`
  // );
  const res = await fetch(
  `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/press/${params.blogId}`
);

  // console.log(res);
  const data = await res.json();
  console.log("product data is :", data);

  return {
    props: { data },
    revalidate: 10,
  };
};

function BlogDetails({ data }) {
  return (
    <div>
      {/* <RouteNavSlider router='Press Releases'/> */}
      <HeroBanner name="Press Releases" />
      <div className="container   ">
        {data ? (
          <Container className="container my-4">
            <Card className="border-0 p-2">
              <div className="ele-center my-2 p-2">
                <Card.Img
                  variant="top"
                  src={data?.image}
                  // style={{ width: "950px", height: "400px", objectFit: "cover" }}

                  className=""
                  alt="description"
                />
              </div>
              <p className="cus-color-primary my-3 fs-2 py-1">{data.title}</p>
              <p className="fs-5 text-justify cus-text-justify my-2 py-1">
                {data.body}
              </p>
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
    </div>
  );
}

export default BlogDetails;
