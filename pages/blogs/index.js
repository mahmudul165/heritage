import React from "react";
import dynamic from "next/dynamic";
import ThreeDotsWave from "@/components/common/ThreeDot";
import RouteNavSlider from "@/components/common/RouteNavSlider";
import HeroBanner from "@/components/common/Banner";
const BlogsShowcase = dynamic(
  () => import("/components/blogs/BlogsShowcase.js"),
  {
    loading: () => (
      <>
        <ThreeDotsWave />
      </>
    ),
  }
);

// export const getStaticProps = async () => {
//   const res = await fetch(
//     "https://arshi365.lamptechs.com/api/admin/todaysDeal"
//   );
//   const data = await res.json();
//   return { props: { data } };
//   revalidate: 3;
// };
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: { data },
    revalidate: 10,
  };
};

function TodayDeals({ data }) {
  return (
    <>
      {/* <RouteNavSlider router='blog'/> */}
      <HeroBanner name="Blog" />
      <BlogsShowcase data={data} />
    </>
  );
}

export default TodayDeals;
