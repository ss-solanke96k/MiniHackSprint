import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar'; // Sahi path
import { Sidebar } from '../components/common/Sidebar'; // Sahi path
import { useAuth } from '../context/AuthContext';

export const DashboardLayout = () => {
  const { user } = useAuth();
  
  if (!user) return <Navigate to="/login" replace />;

  return (
    <div className="min-h-screen flex flex-col bg-darkbg">
      <Navbar />
      <div className="flex flex-grow max-w-[1600px] w-full mx-auto">
        <Sidebar />
        <main className="flex-grow p-4 md:p-8 overflow-y-auto max-h-[calc(100vh-4rem)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};