import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'

function Logout() {
	localStorage.clear()
	return (<Navigate to="/login" />)
}



function App() {

  return (
    <BrowserRouter>
	  <Routes>
		<Route path="/" element={<Home />} />
		<Route path="/login" element={<Login />} />
		<Route path="/logout" element={<Logout />} />
		{/* <Route path="/checklist" element={<ProtectedRoute><Checklist /></ProtectedRoute>} /> */}
		{/* <Route path="*" element={<Navigate to="/login" />} /> */}
	  </Routes>
	</BrowserRouter>
  )
}

export default App
