import PrivateRoute from "@/components/PrivateRoute";


const DashboardPage = () => {
  return (
    <PrivateRoute>
      <div>
        <h1>Dashboard</h1>
        <p>
          This is the dashboard page. Only logged-in users can access it.
        </p>{" "}
      </div>
    </PrivateRoute>
  );
};

export default DashboardPage;
DashboardPage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};