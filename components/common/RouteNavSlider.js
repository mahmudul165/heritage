import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GoChevronRight } from "react-icons/go";
// const styles = {
//   container: {
//     position: "relative",
//     backgroundImage: `url(${"https://i.ibb.co/0hy2GWR/Rectangle-45.png"})`,
//     height: "500px",
//     opacity: 0.5,
//   },
//   text: {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     backgroundColor: "rgba(255, 255, 255, 0.7)",
//     color: "#fff",
//     fontSize: "24px",
//     fontWeight: "bold",
//     // textAlign: 'center',
//     padding: "10px",
//   },
// };
const RouteNavSlider = (props) => (
  <>
{/* {console.log('image is ',props.img)} */}
{/* https://i.ibb.co/jbQ0SGw/jaromir-kavan-i9ea-AR4d-Wi8-unsplash.jpg
https://i.ibb.co/72mWj6z/top-router-slider-4.jpg
https://i.ibb.co/1bVKCv3/top-router-slider-3.jpg
https://i.ibb.co/Cb71LmD/top-router-slider-2.jpg */}
  <div
    className=" py-5 "
    style={{
      backgroundImage: "url(https://i.ibb.co/Cb71LmD/top-router-slider-2.jpg )",
      backgroundSize: "cover",
      opacity: 1,
      backgroundPosition: "center",
      
      // height: "100vh",
    }}
  >

 
    <div
      className="     p-5 align-items-center flex-lg-row-reverse"
      style={{ marginTop: "100px" }}
    >
      <div className=" ">
        {/* /lc-block */}
        <div className="lc-block mb-2 text-center">
        <div editable="rich ">
            <h4 className="d-flex align-items-center justify-content-center lead  text-center text-white pb-2 fs-3 fw-bolder">
          <span>  Home</span> <span> <GoChevronRight className="fs-1"/></span><span> {props?.router}</span>
            </h4>
          </div>
        </div>
        <div className="lc-block mt-2">
          {/* <button className="d-flex align-items-center  fw-bolder btn  btn-lg text-white" style={{backgroundColor:'#E49E48'}}>Shop Now
           <AiOutlineArrowRight className="ms-2"/>
           </button> */}
        </div>
        {/* /lc-block */}
      </div>
      {/* /col */}
    </div>
  </div>
  </>
);

export default RouteNavSlider;
