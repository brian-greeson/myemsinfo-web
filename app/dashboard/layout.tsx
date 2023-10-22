import DashboardNav from '@/components/dashboard-nav';
import React from 'react';

export default async function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <DashboardNav />
      <div>{children}</div>
    </div>
  );
}
