import {
  ContactsTableTH,
  OrdersTableTH,
} from "@/components/admin/common/CustomTable";
import { PageHeader } from "@/components/admin/common/PageHeader";
import PrivateRoute from "@/components/PrivateRoute";
import axios from "axios";
import {
  MdCancel,
  MdOutlineDone,
  MdOutlineLocalShipping,
} from "react-icons/md";

import { dateFormat, trackStatus } from "@/components/admin/common/Fomater";
import { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { FaHandHoldingWater } from "react-icons/fa";
import useAuth from "@/lib/hook/useAuth";
import {
  CONTACT_ENDPOINT,
  useContactCollectionQuery,
  useOrderCollectionQuery,
} from "@/lib/hook/useApi";
import SingleView from "@/components/admin/common/SingleView";

import * as XLSX from "xlsx";
import { RiFileExcel2Fill } from "react-icons/ri";
function OrdersHomePage() {
  const [singleViewModal, setSingleViewModal] = useState(false);
  const [getId, setId] = useState(null);

  const { orderStatus, deleteData, apiUrl } = useAuth();
  const { data: contacts } = useContactCollectionQuery();
  const excelData = contacts?.map(({ _id, __v, ...reset }) => reset);

  // excel  function
  const exportToExcel = async () => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(excelData);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
    XLSX.writeFile(
      workbook,
      `customers-query-list-${dateFormat(new Date())}.xlsx`
    );
  };

  return (
    <PrivateRoute>
      <SingleView
        show={singleViewModal}
        onHide={() => setSingleViewModal(false)}
        getId={getId}
        apiURL={CONTACT_ENDPOINT}
      />
      <PageHeader name="CustomerQuery" />

      {/* <CustomTable tableName="Orders Table" headers={OrdersTableTH} /> */}
      <div className="border rounded-3 p-4 cus-table shadow-sm bg-white">
        <div className="d-flex justify-content-end mb-2">
          <button
            type="button"
            className="btn border-primary py-1 px-3 "
            onClick={() => exportToExcel()}
          >
            <RiFileExcel2Fill size={20} className="text-primary" />

            <span className="pl-2"> Export</span>
          </button>
        </div>
        <table className="table text-center">
          <thead>
            <tr className="fs-6">
              {ContactsTableTH &&
                ContactsTableTH.map((header, index) => (
                  <th scope="col" key={index}>
                    {header}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody className="fs-6 fw-normal">
            {contacts &&
              contacts.map((row, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{row?.name}</td>
                  <td>{row?.email}</td>
                  <td>{row?.phone}</td>
                  <td>
                    {row.message?.length > 20
                      ? row.message?.substring(0, 20) + "..."
                      : row?.message}
                  </td>

                  <td>
                    <div className="d-flex justify-content-center gap-2 position-relative">
                      <span
                        onClick={() => {
                          setId(row._id), setSingleViewModal(true);
                        }}
                      >
                        <AiOutlineEye size={18} className="text-success" />
                      </span>

                      <span
                        onClick={() =>
                          deleteData(
                            `${apiUrl.apiRootUrl}/${apiUrl.apiEndpoint?.contact}/${row?._id}`
                          )
                        }
                      >
                        <AiOutlineDelete size={16} className="text-danger" />
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </PrivateRoute>
  );
}

export default OrdersHomePage;

OrdersHomePage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
