import PrivateRoute from "@/components/PrivateRoute";
import Link from "next/link";
import {
  AiOutlineDelete,
  AiOutlineDollarCircle,
  AiOutlineEye,
} from "react-icons/ai";
import { BsCardChecklist, BsCartCheck, BsSliders } from "react-icons/bs";
import { FcShipped } from "react-icons/fc";
import { GiCancel, GiTeapotLeaves } from "react-icons/gi";

import { FaUsers } from "react-icons/fa";
import { FiEdit, FiTarget } from "react-icons/fi";
import { useEffect, useState } from "react";
import CartItemsModal from "@/components/common/CartItemsModal";
import CustomTable, {
  UsersTableTH,
} from "@/components/admin/common/CustomTable";
import { RiGalleryFill } from "react-icons/ri";
import {
  MdOutlineBusiness,
  MdOutlineUpdate,
  MdTipsAndUpdates,
} from "react-icons/md";
import useAuth from "@/lib/hook/useAuth";
import {
  useBrandsCollectionQuery,
  useBuninessCollectionQuery,
  useCarrierCollectionQuery,
  useContactCollectionQuery,
  useGalleryCollectionQuery,
  useOfficesCollectionQuery,
  useOrderCollectionQuery,
  usePressCollectionQuery,
  useProductCollectionQuery,
  useSlideCollectionQuery,
  useUserCollectionQuery,
} from "@/lib/hook/useApi";
import { dateFormat } from "@/components/admin/common/Fomater";

function randomColor() {
  const colorsArrOne = [
    "#1abc9c",
    "#8DFF9B",
    "#B871C7",
    "#5A94F5",
    "#ff7f50",
    "#ff1493",
    "#f08080",
    "#00bfff",
    "#32cd32",
    "#8a2be2",
    "#e67e22",
  ];
  const colors = [
    "#f472b6",
    "#fb7185",
    "#e879f9",
    "#c084fc",
    "#a78bfa",
    "#818cf8",
    "#60a5fa",
    "#38bdf8",
    "#22d3ee",
    "#4ade80",
    "#facc15",
    "#f87171",
    "#fb923c",
    "#9ca3af",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
const NewCard = ({ name, path, bgColor, number, icon }) => {
  return (
    <>
      <Link href={`${path ? path : "/dashboard"}`}>
        <div
          className="d-flex justify-content-between p-3 border border-1 rounded-3 shadow-sm"
          style={{
            backgroundColor: randomColor(),
          }}
        >
          <div>
            <p className="fs-6 fw-bold text-light">{name}</p>
            <p className="fs-5 fw-bold text-white">{number}</p>
          </div>
          <div>
            <div className=" p-2 rounded-3 text-secondary bg-light">{icon}</div>
          </div>
        </div>
      </Link>
    </>
  );
};

const DashboardPage = () => {
  const { data: orders } = useOrderCollectionQuery();

  const { data: users, isLoading, isError } = useUserCollectionQuery();

  console.log({ users });

  const shippedOrders = orders?.filter((order) => order.status === "shipped");
  const deliveredOrders = orders?.filter(
    (order) => order.status === "delivered"
  );
  const cancelOrders = orders?.filter((order) => order.status === "cancelled");
  const { data: products } = useProductCollectionQuery();
  const { data: slides } = useSlideCollectionQuery({
    cacheTime: 60,
    staleTime: 300000,
  });
  const { data: gallery } = useGalleryCollectionQuery({
    cacheTime: 60,
    staleTime: 300000,
  });
  const { data: buniness } = useBuninessCollectionQuery({
    cacheTime: 60,
    staleTime: 300000,
  });
  const { data: carrier } = useCarrierCollectionQuery({
    cacheTime: 60,
    staleTime: 300000,
  });
  const { data: contactQuery } = useContactCollectionQuery({
    cacheTime: 60,
    staleTime: 300000,
  });
  const { data: ourBrandsQuery } = useBrandsCollectionQuery({
    cacheTime: 60,
    staleTime: 300000,
  });
  const { data: press } = usePressCollectionQuery({
    cacheTime: 60,
    staleTime: 300000,
  });
  const { data: office } = useOfficesCollectionQuery({
    cacheTime: 60,
    staleTime: 300000,
  });

  // Calculate total sales, total number of items, and total number of unique items for delivered orders only
  let totalSales = 0;
  let totalItems = 0;
  let totalUniqueItems = 0;
  let productCounts = {};
  orders?.forEach((order) => {
    if (order?.status === "delivered") {
      totalSales += order.cartTotal;
      totalItems += order.totalItems;
      totalUniqueItems += order.totalUniqueItems;
    }
  });
  console.log(`Total sales for delivered orders: $${totalSales}`);
  console.log(`Total items for delivered orders: ${totalItems}`);
  console.log(`Total unique items for delivered orders: ${totalUniqueItems}`);
   
   // Initialize variables for metrics
//    let totalSales = 0;
//    let totalItems = 0;
//    let totalUniqueItems = 0;
//    let productCounts = {};
// // Function to fetch data from the API
// async function fetchData() {
//   try {
//     const response = await fetch('https://crabby-pocketbook-eel.cyclic.app/api/v1/order');
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Failed to fetch data:', error);
//     return null;
//   }
// }

// // Function to calculate metrics
// function calculateMetrics(orders) {
//   // Reset metrics
//   totalSales = 0;
//   totalItems = 0;
//   totalUniqueItems = 0;
//   productCounts = {};

//   orders?.forEach((order) => {
//     if (order?.status === 'delivered') {
//       totalSales += order.cartTotal;
//       totalItems += order.totalItems;
//       totalUniqueItems += order.totalUniqueItems;

//       // Calculate product counts
//       order.products?.forEach((product) => {
//         const productId = product._id;
//         const quantity = product.quantity || 1;

//         if (!productCounts[productId]) {
//           productCounts[productId] = quantity;
//         } else {
//           productCounts[productId] += quantity;
//         }
//       });
//     }
//   });

//   // Log the metrics
//   console.log(`Total sales for delivered orders: $${totalSales}`);
//   console.log(`Total items for delivered orders: ${totalItems}`);
//   console.log(`Total unique items for delivered orders: ${totalUniqueItems}`);
//   console.log('Product Counts:', productCounts);
// }

// Function to periodically update metrics
async function updateMetricsPeriodically() {
  try {
    const data = await fetchData();
    if (data !== null) {
      calculateMetrics(data);
    }
  } catch (error) {
    console.error('Failed to update metrics:', error);
  } finally {
    // Set up an interval to update metrics every 5 seconds
    setTimeout(updateMetricsPeriodically, 5000);
  }
}

// Initial call to start the periodic update
updateMetricsPeriodically();



  
  return (
    <PrivateRoute>
      <main className="p-6  space-y-6 my-1">
        <section className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-6 gy-3 p-3">
          <NewCard
            name="Products"
            number={products?.products?.length || 0}
            path="products"
            icon={<BsCardChecklist size={24} />}
          />
          <NewCard
            name="Orders"
            number={orders?.length}
            path="orders"
            icon={<BsCartCheck size={24} />}
          />
          <NewCard
            name="Shipped Orders"
            number={shippedOrders?.length || 0}
            path="/admin/orders/shipped"
            icon={<FcShipped size={24} />}
          />

          <NewCard
            name="delivered orders"
            number={deliveredOrders?.length || 0}
            path="/admin/orders/delivered"
            icon={<AiOutlineDollarCircle size={24} />}
          />

          <NewCard
            name="Cancel Orders"
            number={cancelOrders?.length || 0}
            path="/admin/orders/cancelled"
            icon={<GiCancel size={24} />}
          />
          <NewCard
            name="Sell"
            number={`${totalSales} tk` || 0}
            path="sell"
            icon={<AiOutlineDollarCircle size={24} />}
          />

          <NewCard
            name="Slide"
            number={slides?.length || 0}
            path="slide"
            icon={<BsSliders size={24} />}
          />
          {/* <NewCard
            name="Press Releases"
            number={"145"}
            path="press-releases"
            icon={<MdOutlineUpdate size={24} />}
          /> */}
          <NewCard
            name="Gallery"
            number={gallery?.length || 0}
            path="gallery"
            icon={<RiGalleryFill size={24} />}
          />
          <NewCard
            name="Carrier"
            number={carrier?.length || 0}
            path="carrier"
            icon={<FiTarget size={24} />}
          />
          <NewCard
            name="Business"
            number={buniness?.length || 0}
            path="business"
            icon={<BsSliders size={24} />}
          />

          <NewCard
            name="Customers Query"
            path="contact"
            number={contactQuery?.length || 0}
            icon={<FaUsers size={24} />}
          />
          <NewCard
            name="Our Brands"
            path="our-brands"
            number={ourBrandsQuery?.length || 0}
            icon={<GiTeapotLeaves size={24} />}
          />
          <NewCard
            name="Press Releases"
            path="press"
            number={press?.length || 0}
            icon={<MdTipsAndUpdates size={24} />}
          />
          <NewCard
            name="Our Office"
            path="office"
            number={office?.length || 0}
            icon={<MdOutlineBusiness size={24} />}
          />
        </section>

        <div className="px-3">
          <div className="border rounded-3 p-4 cus-table shadow-sm bg-white">
            <table className="table text-center">
              <thead>
                <tr className="fs-6">
                  {UsersTableTH &&
                    UsersTableTH.map((header, index) => (
                      <th scope="col" key={index}>
                        {header}
                      </th>
                    ))}
                </tr>
              </thead>
              <tbody className="fs-6 fw-normal">
                {isLoading && (
                  <div class="spinner-border text-center" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                )}

                {users?.map((user, index) => (
                  <tr key={index}>
                    <td> {index + 1}</td>
                    <td> {dateFormat(user.createdAt || "Empty")}</td>

                    <td>{user?.username}</td>

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
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </PrivateRoute>
  );
};

export default DashboardPage;
DashboardPage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
