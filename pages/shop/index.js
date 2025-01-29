import React from "react";
import dynamic from "next/dynamic";
import ThreeDotsWave from "@/components/common/ThreeDot";
import RouteNavSlider from "@/components/common/RouteNavSlider";
import HeroBanner from "@/components/common/Banner";
import { ToastContainer } from "react-toastify";
const ProductsShowcase = dynamic(
  () => import("/components/products/ProductsShowcase.js"),
  {
    loading: () => (
      <>
        <ThreeDotsWave />
      </>
    ),
  }
);

 
// export const getStaticProps = async () => {
//   // const res = await fetch(
//   //   "https://crabby-pocketbook-eel.cyclic.app/api/v1/product"
//   // );
//   const res = await fetch(
//   `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/product`
// );
//   const data = await res.json();
//   return {
//     props: { data },
//     revalidate: 3,
//   };
// };
export const getStaticProps = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/product`);

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data = await res.json();
    return {
      props: { data },
      revalidate: 60,  // Optional: sets revalidation time (in seconds)
    };
  } catch (err) {
    console.error("Error fetching data:", err);
     
  }
};

function TodayDeals({ data }) {
  return (
    <>
      {/* <RouteNavSlider router='Shop'/> */}

      <HeroBanner name="Shop" />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ProductsShowcase data={data} />
    </>
  );
}

export default TodayDeals;
