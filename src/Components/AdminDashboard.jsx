import Main from "./Main";
import Sidebar from "./Sidebar";

const AdminDashboard = () => {

  return (
    <div className="flex">
      <Sidebar />
      <Main />
    </div>
  );
};

export default AdminDashboard;
