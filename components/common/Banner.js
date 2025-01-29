import { useSlideCollectionQuery } from "@/lib/hook/useApi";
import { useRouter } from "next/router";

const HeroBanner = ({ name }) => {
  const router = useRouter();

  const { data } = useSlideCollectionQuery({
    // Enable caching for this query
    cacheTime: 60,
    // Set the stale time to 5 minutes
    staleTime: 300000,
  });
  console.log("slide data:", data, router.pathname);
  // Find the slide
  // const mySlide = data?.find((slide) => slide.pathName == router.pathname);
  const mySlide =
    data &&
    Array.isArray(data) &&
    data.find((slide) => slide.pathName == router.pathname);

  console.log("test slider router path", mySlide, router.pathname);
  return (
    <>
      {mySlide ? (
        <div
          className="position-relative"
          style={{
            backgroundImage: `url(${mySlide?.image})`,

            backgroundSize: "cover",
            backgroundPosition: "center bottom",
            height: "55vh",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            }}
            className="   position-absolute w-100 bottom-0 py-4"
          >
            <div className="d-flex justify-content-between container align-items-center">
              <div className="bg-light  px-4 rounded cus-color-secondary">
                <h2 className="fs-4 fw-bold text-capitalize  cus-color-secondary">
                  {" "}
                  {mySlide?.title}
                </h2>
                <p className="fs-6  cus-color-secondary ">Home / {name}</p>
              </div>
              <div>{/* <SearchBar /> */}</div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="position-relative"
          style={{
            backgroundImage: "url(https://i.ibb.co/0hy2GWR/Rectangle-45.png)",
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
            height: "55vh",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            }}
            className="   position-absolute w-100 bottom-0 py-4"
          >
            <div className="d-flex justify-content-between container align-items-center gap-2 ">
              <div className="bg-light  px-4 rounded ">
                <h2 className="fs-4 fw-bold   text-capitalize cus-color-secondary">
                  {" "}
                  {name}
                </h2>
                <p className="fs-6   cus-color-secondary">Home / {name}</p>
              </div>
              <div>{/* <SearchBar /> */}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroBanner;
