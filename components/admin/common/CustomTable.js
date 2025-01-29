import React from "react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const defaultHeader = ["SL", "Name", "Email", "Status", "Actions"];

export const ProductTableTH = [
  "SL",
  "Created",
  "Category",
  "Name",
  "Price",
  "Images",
  "Discount",
  "Promo",
  "quantity",
  "Stock Status",
  "Actions",
];
export const SlideTableTH = [
  "SL",
  "Title",
  "Images",
  "Path Name",
  "Description",
  "Actions",
];
export const GalleryTableTH = [
  "SL",
  "Created",
  "Category",
  "Images",
  "Actions",
];

export const CarrierTableTH = [
  "SL",
  "Job Title",
  "Vacancy",
  "Location",
  "Salary",
  "Deadline",
  "Time",
  "Actions",
];
export const UsersTableTH = ["SL", "Created", "User Name", "Actions"];
export const BusinessTableTH = ["SL", "Title", "Images", "Body", "Actions"];
export const OurBrandsTableTH = ["SL", "Title", "Images", "Body", "Actions"];
export const OurOfficeTableTH = [
  "SL",
  "Name",
  "Phone",
  "Email",
  "Location",
  "Image",
  "Actions",
];
export const PressTableTH = ["SL", "Title", "Images", "Body", "Actions"];
export const ContactsTableTH = [
  "SL",
  "Name",
  "Email",
  "Phone",
  "Message",
  "Actions",
];
export const OrdersTableTH = [
  "SL",
  "Date",
  "Email",
  "Name",
  "Phone",
  "Address",
  "P. Name",
  "Price",
  "Items",
  "Unique items",
  "T. price",
  "Status",
  "Actions",
];

function CustomTable({ tableName, headers, data }) {
  return (
    <>
      <div className="border rounded-3 p-4 cus-table shadow-sm bg-white">
        <table className="table text-center">
          <thead>
            <tr>
              {headers &&
                headers.map((header, index) => (
                  <th scope="col" key={index}>
                    {header}
                  </th>
                ))}
              {!headers &&
                defaultHeader.map((header, index) => (
                  <th scope="col" key={index}>
                    {header}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((row, index) => {
                <tr key={index}></tr>;
              })}

            <tr className="my-2  fs-6 fw-normal ">
              <td className="">2</td>
              <td>Md Kamal</td>
              <td>examle@gmail.com</td>
              <td>
                <span className="bg-success p-2 rounded-3 text-white  ">
                  Success
                </span>
              </td>
              <td className="">
                <div className="d-flex justify-content-center gap-2">
                  <span>
                    <AiOutlineEye size={18} className="text-success" />
                  </span>
                  <span>
                    <FiEdit size={15} className="text-warning" />
                  </span>
                  <span>
                    <AiOutlineDelete size={16} className="text-danger" />
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CustomTable;
