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
const OAuth = lazy(() => import('../pages/OAuth'))
const Blog = lazy(() => import('../pages/Blogs'))

export const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Home />} loading />
      <Route path="/home" element={<Home />} loading />
      <Route path="/blog" element={<Blog />} loading />
      <Route path="/oauth" element={<OAuth />} loading />
    </ReactRoutes>
  )
}
