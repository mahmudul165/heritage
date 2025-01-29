import { OrdersTableTH } from "@/components/admin/common/CustomTable";
import { PageHeader } from "@/components/admin/common/PageHeader";
import PrivateRoute from "@/components/PrivateRoute";
import axios from "axios";
import {
  MdCancel,
  MdOutlineDone,
  MdOutlineLocalShipping,
} from "react-icons/md";

import { dateFormat, trackStatus } from "@/components/admin/common/Fomater";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import useAuth from "@/lib/hook/useAuth";
import { useOrderCollectionQuery } from "@/lib/hook/useApi";
function ShippedOrdersPage() {
  const { orderStatus, deleteData,apiUrl } = useAuth();

  const { data: orders } = useOrderCollectionQuery();

  const shippedOrders = orders?.filter((el) => el.status === "shipped");

  return (
    <PrivateRoute>
      <PageHeader name="Orders" />

      {/* <CustomTable tableName="Orders Table" headers={OrdersTableTH} /> */}
      <div className="border rounded-3 p-4 cus-table shadow-sm bg-white">
        <table className="table text-center">
          <thead>
            <tr className="fs-6">
              {OrdersTableTH &&
                OrdersTableTH.map((header, index) => (
                  <th scope="col" key={index}>
                    {header}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody className="fs-6 fw-normal">
            {shippedOrders &&
              shippedOrders.map((row, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{dateFormat(row?.orderDate)}</td>
                  <td>{row?.email}</td>
                  <td>{row?.name}</td>
                  <td>{row?.phone}</td>
                  <td>{row?.address}</td>
                  <td>{row?.products[0]?.name}</td>
                  <td>{row?.products[0]?.price}</td>
                  <td>{row?.totalItems}</td>
                  <td>{row?.totalUniqueItems}</td>
                  <td>{row?.cartTotal}</td>
                  <td>
                    <span
                      className={`p-2 rounded-3 text-capitalize  text-white ${trackStatus(
                        row.status
                      )} `}
                    >
                      {row.status}
                    </span>
                  </td>

                  <td>
                     
                  <div className="d-flex justify-content-center gap-2 position-relative">
                      <span
                        onClick={() =>
                          orderStatus(
                            `${apiUrl.apiRootUrl}/${apiUrl.apiEndpoint?.order}/${row?._id}`,
                            { status: "shipped" }
                          )
                        }
                      >
                        <MdOutlineLocalShipping
                          size={18}
                          className="text-warning"
                        />
                      </span>
                      <span
                        onClick={() =>
                          orderStatus(
                            `${apiUrl.apiRootUrl}/${apiUrl.apiEndpoint?.order}/${row?._id}`,
                            { status: "delivered" }
                          )
                        }
                      >
                        <MdOutlineDone size={18} className="text-warning" />
                      </span>
                      <span
                        onClick={() =>
                          orderStatus(
                            `${apiUrl.apiRootUrl}/${apiUrl.apiEndpoint?.order}/${row?._id}`,
                            { status: "cancelled" }
                          )
                        }
                      >
                        <MdCancel size={18} className="text-warning" />
                      </span>
                      {/* <span>
                        <AiOutlineEye size={18} className="text-success" />
                      </span>                      
                      <span>
                        <FaHandHoldingWater
                          size={18}
                          className="text-primary"
                        />
                      </span> */}

                      <span
                        onClick={() =>
                          deleteData(
                            `${apiUrl.apiRootUrl}/${apiUrl.apiEndpoint?.order}/${row?._id}`
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

export default ShippedOrdersPage;

ShippedOrdersPage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
