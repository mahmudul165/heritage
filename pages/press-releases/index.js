import React from "react";
 import dynamic from "next/dynamic";
import ThreeDotsWave from "@/components/common/ThreeDot";
import RouteNavSlider from "@/components/common/RouteNavSlider";
import HeroBanner from "@/components/common/Banner";
const PressReleasesBlog = dynamic(
  () => import("/components/pressReleases/PressReleasesBlog.js"),
  {
    loading: () => <><ThreeDotsWave/></>,
  }
);
  
 
// export const getStaticProps = async () => {
//     // const res = await fetch(
//     //   "https://crabby-pocketbook-eel.cyclic.app/api/v1/press"
//     // );
//  const res = await fetch(
//   `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/press`
// );

//     const data = await res.json();
//     return {
//       props: { data },
//       revalidate: 10
//     };
//   };
export const getStaticProps = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const apiUrl = `${baseUrl}/api/v1/press`;
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
      revalidate: 10,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: { data: [] }, // Return an empty array or handle the error as needed
      revalidate: 3,
    };
  }
};
function TodayDeals({ data }) {
   
  return (
    <>
     {/* <RouteNavSlider router='Press Releases'/> */}
     <HeroBanner name='Press Releases' />
      <PressReleasesBlog data={data} />
    </>
  );
}

export default TodayDeals;
