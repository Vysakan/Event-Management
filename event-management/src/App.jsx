import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

/* Public Pages */
import LandingPage from './pages/LandingPage'
import EventDetails from './pages/EventDetails'

/* Admin Pages */
import Login from './pages/admin/Login'
import AdminLogin from './pages/admin/AdminLogin'
import Dashboard from './pages/admin/Dashboard'
import Events from './pages/admin/Events'
import Users from './pages/admin/Users'
import Companies from './pages/admin/Companies'

/* User Pages */
import UserDashboard from './pages/user/UserDashboard'
import MyBookings from './pages/user/MyBookings'


/* Company Pages */
import CompanyDashboard from './pages/company/CompanyDashboard'
import AddEvents from './pages/company/AddEvents'

import BookingRequests from './pages/company/BookingRequests'

/* Protected Route */
import ProtectedRoute from './routes/ProtectedRoute'
import Payments from './pages/user/Payments'
import Revenue from './pages/company/Revenue'
import About from './pages/public/About'
import Portfolio from './pages/public/Portfolio'
import Contact from './pages/public/Contact'

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Public Routes */}
        <Route
          path="/"
          element={<LandingPage />}
        />

        <Route
          path="/event-details"
          element={<EventDetails />}
        />

        {/* Login Routes */}
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/admin-login"
          element={<AdminLogin />}
        />

        {/* Admin Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/events"
          element={
            <ProtectedRoute>
              <Events />
            </ProtectedRoute>
          }
        />

        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />

        <Route
          path="/companies"
          element={
            <ProtectedRoute>
              <Companies />
            </ProtectedRoute>
          }
        />

        {/* User Routes */}
        <Route
          path="/user-dashboard"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-bookings"
          element={
            <ProtectedRoute>
              <MyBookings />
            </ProtectedRoute>
          }
        />

        <Route
          path="/payments"
          element={
            <ProtectedRoute>
              <Payments />
            </ProtectedRoute>
          }
        />

        {/* Company Routes */}
        <Route
          path="/company-dashboard"
          element={
            <ProtectedRoute>
              <CompanyDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-events"
          element={
            <ProtectedRoute>
              <AddEvents />
            </ProtectedRoute>
          }
        />

        <Route
          path="/revenue"
          element={
            <ProtectedRoute>
              <Revenue/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/booking-requests"
          element={
            <ProtectedRoute>
              <BookingRequests />
            </ProtectedRoute>
          }
        />
      <Route
  path="/about"
  element={<About />}
/>

<Route
  path="/portfolio"
  element={<Portfolio />}
/>

<Route
  path="/contact"
  element={<Contact />}
/>

      </Routes>

    </BrowserRouter>

  )
}

export default App