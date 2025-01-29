import React from "react";
import ContactUs from "@/components/contact/ContactUs";
import OurOffices from "@/components/home/our-offices/OurOffices";
import RouteNavSlider from "@/components/common/RouteNavSlider";
import HeroBanner from "@/components/common/Banner";
import DemoImg from "public/press-release-one.png";
import Image from "next/image";
function SinglePressRelease({ data }) {
  return (
    <>
      <HeroBanner name="Press Release One" />
      <div className="container my-5">
        <div>
          <Image src={DemoImg} alt="IMG" />
        </div>
        <div>
          <p className="cus-color-primary my-3 fs-5 cus-text-justify ">
            Lorem Ipsum is simply dummy text of the printing?
          </p>
          <p className="text-justify cus-text-justify ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </div>
    </>
  );
}

export default SinglePressRelease;
