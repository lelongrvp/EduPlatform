import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./pages/Login";
import Admin from "./pages/Admin/Admin";
import Dashboard from "./pages/Admin/Content/Dashboard";
import UserManagement from "./pages/Admin/Content/UserManagement";
import CategoryManagement from "./pages/Admin/Content/CategoryManagement";

const App = () => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path="manage-users" element={<UserManagement />} />
          <Route path="manage-categories" element={<CategoryManagement />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
