import React from "react"
import { Routes, Route, Navigate } from "react-router"
import HomePage from "./HomePage"
import { City } from "./City"
import SearchPage from "../components/SearchPage"
import Layout from "../components/Layout"

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path=":name/:id" element={<City />} />
        <Route path="*" element={<Navigate replace to="/search" />} />
      </Route>
    </Routes>
  )
}

export default Routing
