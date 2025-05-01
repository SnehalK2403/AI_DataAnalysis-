import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Make sure to include Navigate
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import PasswordResetSuccess from './components/PasswordResetSuccess';
import UserDashboard from './components/dashboards/UserDashboard';
import AdminDashboard from './components/dashboards/AdminDashboard';
import UploadExcel from './components/UploadExcel';
import ManualData from './components/ManualData';
import ViewProfile from './components/profile/ViewProfile';
import EditProfile from './components/profile/EditProfile';
import VisualizeGraph from './components/VisualizeGraph';
import Graph2D from './components/Graph2D';
import Graph3D from './components/Graph3D';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />  {/* Redirecting root URL to /login */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/password-reset-success" element={<PasswordResetSuccess />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/upload-excel" element={<UploadExcel />} />
        <Route path="/manual-data" element={<ManualData />} />
        {/* Profile Routes */}
        <Route path="/profile" element={<ViewProfile />} />
        <Route path="/profile/edit" element={<EditProfile />} />
        <Route path="visualize/:graphId" element={<VisualizeGraph />} />
      </Routes>
    </Router>
  );
};

export default App;
