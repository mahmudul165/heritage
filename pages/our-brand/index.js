import React from "react";
import dynamic from "next/dynamic";
import ThreeDotsWave from "@/components/common/ThreeDot";
import HeroBanner from "@/components/common/Banner";

const OurbusinessShowcase = dynamic(
  () => import("/components/our-brand/BusinessShowcase.js"),
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
//   //   "https://crabby-pocketbook-eel.cyclic.app/api/v1/brand"
//   // );
//   const res = await fetch(
//   `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/brand`
// );

//   const data = await res.json();
//   return {
//     props: { data },
//     revalidate: 10,
//   };
// };
export const getStaticProps = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const apiUrl = `${baseUrl}/api/v1/brand`;
  console.log('Fetching data from:', apiUrl);

  try {
    const res = await fetch(apiUrl);

    if (!res.ok) {
      console.error('Failed to fetch data:', res.statusText);
      return {
        notFound: true,
      };
    }

    const data = await res.json();
    return {
      props: { data },
      revalidate: 3,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: { data: [] }, // Return an empty array or handle the error as needed
      revalidate: 3,
    };
  }
};
function OurBusiness({ data }) {
  return (
    <>
      <HeroBanner name="Our Brand" />

      <OurbusinessShowcase data={data} />
    </>
  );
}

export default OurBusiness;
