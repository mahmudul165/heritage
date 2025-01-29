import { AddButton } from "@/components/admin/common/Buttons";
import CustomTable from "@/components/admin/common/CustomTable";
import { PageHeader } from "@/components/admin/common/PageHeader";
import PrivateRoute from "@/components/PrivateRoute";
import React from "react";

function CustomersHomePage() {
  return (
    <PrivateRoute>
      <PageHeader name="Customers" />

      <CustomTable tableName="Customers Table" />
    </PrivateRoute>
  );
}

export default CustomersHomePage;

CustomersHomePage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
