/* eslint-disable react/prop-types */
import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {
  FaTachometerAlt,
  FaGem,
  FaGithub,
  FaUserFriends,
  FaBars,
} from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState } from "react";

const SideMenu = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  const { toggled, handleToggleSidebar } = props;
  return (
    <div>
      <ProSidebar
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <FaBars
            onClick={() => setCollapsed(!collapsed)}
            style={{ cursor: "pointer" }}
          />
          <div
            style={{
              padding: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverFlow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            EduPlatform
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem icon={<FaTachometerAlt />}>
              Dashboard
              <Link to="/admin" />
            </MenuItem>
            <SubMenu icon={<FaGem />} title="Features">
              <MenuItem icon={<FaUserFriends />}>
                User Management
                <Link to="manage-users" />
              </MenuItem>
              <MenuItem icon={<BiSolidCategoryAlt />}>
                Category Management
                <Link to="manage-categories" />
              </MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>
        <SidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 24px",
            }}
          >
            <a
              href="https://github.com/lelongrvp/EduPlatform"
              target="_blank"
              className="sidebar-btn"
              rel="noopener noreferrer"
            >
              <FaGithub style={{ color: "#adadad" }} />
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
};

export default SideMenu;
