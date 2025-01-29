import Image from "next/image";
import { FloatingLabel, Form } from "react-bootstrap";
import React, { useState } from "react";

export const CustomFloatingLabel = ({ labelName, children }) => {
  return (
    <>
      <FloatingLabel
        controlId="floatingInputGrid"
        label={labelName}
        className="mb-4"
      >
        {children}
      </FloatingLabel>
    </>
  );
};

export const CustomInput = ({ typeIs, nameIs, placeholderIs }) => {
  return (
    <>
      <Form.Control type={typeIs} name={nameIs} placeholder={placeholderIs} />
    </>
  );
};

export const acceptPattern =
  /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?$/;
