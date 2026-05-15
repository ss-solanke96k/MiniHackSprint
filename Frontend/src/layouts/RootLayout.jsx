import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar'; // Sahi path

export const RootLayout = () => (
  <div className="min-h-screen flex flex-col bg-darkbg">
    <Navbar />
    <main className="flex-grow">
      <Outlet />
    </main>
  </div>
);