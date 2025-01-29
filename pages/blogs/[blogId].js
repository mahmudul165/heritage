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
import RouteNavSlider from "@/components/common/RouteNavSlider";
import HeroBanner from "@/components/common/Banner";
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const paths = await data.map((post) => {
    return {
      params: { blogId: post?.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.blogId}`
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
      <HeroBanner name="Press Releases" />
      <div className="container">
        {data ? (
          <Container className="my-4 ">
            <Card className="border-0  p-2">
              {/* <Image
  src="/image.jpg"
  alt="description"
  width={500}
  height={500}
/> */}
              <Card.Img
                className="h-50"
                variant="top"
                src="https://i.ibb.co/7C7M7QX/tea-5.jpg"
              />

              <Card.Title className="py-3 fs-4  fw-bolder cus-color-primary">
                {data.title}
              </Card.Title>
              <Card.Text className="fs-5  cus-text-justify">
                {data.body}
              </Card.Text>
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
