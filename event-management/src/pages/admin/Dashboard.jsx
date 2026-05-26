import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import DashboardCard from '../../components/DashboardCard'
import BookingTable from '../../components/BookingTable'
import AnalyticsChart from '../../components/AnalyticsChart'

function Dashboard() {

  return (

    <AdminLayout>

      <h1 className='text-4xl font-bold'>
        Dashboard
      </h1>

      <p className='text-gray-500 mt-2'>
        Welcome back Admin 👋
      </p>

      {/* Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>

        <DashboardCard
          title="Total Events"
          value="120"
        />

        <DashboardCard
          title="Bookings"
          value="85"
        />

        <DashboardCard
          title="Companies"
          value="40"
        />

      </div>

      <AnalyticsChart />

      <BookingTable />

    </AdminLayout>
  )
}

export default Dashboard