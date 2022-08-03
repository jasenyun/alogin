import React, { lazy } from 'react'
import { Routes as ReactRoutes, Route, topbar } from 'react-router-loading'

topbar.config({
  barColors: {
    '0': 'rgba(202,50,17, 1)',
    '1': 'rgba(202,50,17,  1)',
  },
  shadowBlur: 0,
})

const Home = lazy(() => import('../pages/Home'))

export const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Home />} loading />
    </ReactRoutes>
  )
}
