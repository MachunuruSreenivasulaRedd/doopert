import React from 'react'
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom'
export default function Home() {
  const location = useLocation();
  return (
    <Navigate to="/login" state={{from:location}}/>
  )
}
