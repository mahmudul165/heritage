import React from "react";

function SectionTitle(props) {
  return (
    <h1 className="fs-4 fw-bolder my-2 py-1 mb-2" style={{ color: "#59330E" }}>
      {props.title}
    </h1>
  );
}

export default SectionTitle;
