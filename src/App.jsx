import { useEffect } from "react"
import { BrowserRouter, useLocation } from "react-router-dom"
import AppRoutes from "./AppRoutes"
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes/>
    </BrowserRouter>
  )
}
