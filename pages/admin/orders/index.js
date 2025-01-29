import { OrdersTableTH } from "@/components/admin/common/CustomTable";
import { PageHeader } from "@/components/admin/common/PageHeader";
import PrivateRoute from "@/components/PrivateRoute";
import {
  MdCancel,
  MdOutlineDone,
  MdOutlineLocalShipping,
} from "react-icons/md";

import { dateFormat, trackStatus } from "@/components/admin/common/Fomater";
import SingleOrderView from "@/components/admin/common/SingleOrderView";
import { useOrderCollectionQuery } from "@/lib/hook/useApi";
import useAuth from "@/lib/hook/useAuth";
import { useState } from "react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
function OrdersHomePage() {
  const { orderStatus, deleteData, apiUrl } = useAuth();
  const [ordersData, setOrdersData] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("placed");
  const { data: data } = useOrderCollectionQuery();
  const [singleOrderId, setSingleOrderId] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  // console.log({ odata });

  // const getOrdersData = async () => {

  //  await setOrdersData(orders);
  // };
  const orders = data?.sort(
    (a, b) => new Date(b.orderDate) - new Date(a.orderDate)
  );
  const filteredData =
    selectedStatus === "placed"
      ? orders?.filter((order) => order.status === "placed")
      : selectedStatus === "all"
      ? orders
      : orders?.filter((order) => order.status === selectedStatus);
  // useEffect(() => {
  //   getOrdersData();
  // }, []);
  console.log("filter oredr", filteredData);
  return (
    <PrivateRoute>
      <SingleOrderView
        show={modalShow}
        onHide={() => setModalShow(false)}
        getOrderId={singleOrderId}
      />
      <PageHeader name="Orders" />

      {/* <CustomTable tableName="Orders Table" headers={OrdersTableTH} /> */}
      <div className="border rounded-3 p-4 cus-table shadow-sm bg-white">
        <div className="d-flex justify-content-between my-1">
          <div>Orders Data</div>
          <div>
            <select
              className="px-2 py-1 rounded-sm"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="all">All</option>
              <option value="placed">Placed</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>
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
            {filteredData &&
              filteredData.map((row, index) => (
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
                      <span>
                        <AiOutlineEye
                          size={18}
                          className="text-primary"
                          onClick={() => {
                            setSingleOrderId(row?._id), setModalShow(true);
                          }}
                        />
                      </span>
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
                        <MdOutlineDone size={18} className="text-success" />
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

export default OrdersHomePage;

OrdersHomePage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
