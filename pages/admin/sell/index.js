import CustomTable from "@/components/admin/common/CustomTable";
import { PageHeader } from "@/components/admin/common/PageHeader";
import PrivateRoute from "@/components/PrivateRoute";
import { useOrderCollectionQuery } from "@/lib/hook/useApi";
import { BsCardChecklist, BsCartCheck, BsSliders } from "react-icons/bs";
import React from "react";
function randomColor() {
  const colors = [
    "#1abc9c",
    "#59330e",
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
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
const NewCard = ({ name, path, bgColor, number, icon }) => {
  return (
    <>
      {/* <Link href={`${path ? path  : "/dashboard"}`}> */}

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

      {/* </Link> */}
    </>
  );
};
function SellHomePage() {
  const { data: orders } = useOrderCollectionQuery({
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
  return (
    <PrivateRoute>
      <PageHeader name="Sell" />

      <main className="p-6  space-y-6 my-1">
        <section className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-6 gy-3 p-3 gap-3">
          <NewCard
            // name="Products"
            name={`Total sales for delivered orders:` || 0}
            number={`${totalSales}` || 0}
            // path="products"
            icon={<BsCardChecklist size={24} />}
          />
          <NewCard
            name={`Total items for delivered orders: `}
            number={`${totalItems}` || 0}
            // path="orders"
            icon={<BsCartCheck size={24} />}
          />
          <NewCard
            name={`Total unique items for delivered orders: `}
            number={`${totalUniqueItems}` || 0}
            // path="orders"
            icon={<BsSliders size={24} />}
          />
        </section>
      </main>
    </PrivateRoute>
  );
}

export default SellHomePage;

SellHomePage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
