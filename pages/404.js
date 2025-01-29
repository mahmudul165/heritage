import { SearchBar } from "@/components/common/SearchBar";
import { useRouter } from "next/router";
import React from "react";

function PageNowFound() {
  const router = useRouter();
  return (
    <div className="d-flex justify-content-center my-5 text-center">
      <div>
        <h1 style={{ fontSize: "128px" }} className=" fw-bold my-5">
          404
        </h1>
        <h3 className="fs-2 fw-bold mb-3">Oop, that link is broken</h3>
        <p>Page doesn’t exist or some other error occurred. Go to our</p>
        <p>
          <button
            type="button"
            onClick={() => {
              history.back();
            }}
            className="cus-color-primary"
          >
            Previous page
          </button>{" "}
          or go back to{" "}
          <button
            type="button"
            onClick={() => {
              router.push("/");
            }}
            className="cus-color-primary"
          >
            Home page
          </button>
        </p>

        <div className="my-5">
          <SearchBar btnColor="primary" />
        </div>
      </div>
    </div>
  );
}

export default PageNowFound;
