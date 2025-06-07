import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUsers, FaChalkboardTeacher, FaBook, FaCalendarAlt, FaImages, FaChartBar, FaCog } from 'react-icons/fa';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const menuItems = [
    { path: '/admin', icon: <FaHome />, label: 'Dashboard' },
    { path: '/admin/students', icon: <FaUsers />, label: 'Students' },
    { path: '/admin/teachers', icon: <FaChalkboardTeacher />, label: 'Teachers' },
    { path: '/admin/courses', icon: <FaBook />, label: 'Courses' },
    { path: '/admin/events', icon: <FaCalendarAlt />, label: 'Events' },
    { path: '/admin/media', icon: <FaImages />, label: 'Media' },
    { path: '/admin/analytics', icon: <FaChartBar />, label: 'Analytics' },
    { path: '/admin/settings', icon: <FaCog />, label: 'Settings' },
  ];

  return (
    <div className="admin-layout">
      <aside className={`admin-sidebar ${sidebarOpen ? '' : 'closed'}`}>
        <div className="sidebar-header">
          <h3>{sidebarOpen ? 'School Admin' : ''}</h3>
          <button className="toggle-sidebar" onClick={toggleSidebar}>
            {sidebarOpen ? '←' : '→'}
          </button>
        </div>
        <nav className="sidebar-nav">
          <ul>
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={location.pathname === item.path ? 'active' : ''}
                >
                  {item.icon}
                  {sidebarOpen && <span>{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="sidebar-footer">
          {sidebarOpen && (
            <div className="user-info">
              <p>Admin User</p>
              <button className="btn btn-link">Logout</button>
            </div>
          )}
        </div>
      </aside>
      <main className="admin-main">
        <header className="admin-header">
          <div className="header-content">
            <h2>{menuItems.find(item => item.path === location.pathname)?.label || 'Dashboard'}</h2>
            <div className="header-actions">
              <button className="btn btn-primary">New Item</button>
            </div>
          </div>
        </header>
        <div className="admin-content">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout; 