import { Routes, Route } from "react-router-dom"
import Checkout from "./components/pages/Checkout"
import { Home } from "./components/pages/Home"

interface IRoutesProps {
  units: number
  setUnits: (n: number) => void
}

export default function MainRoutes({ units, setUnits }: IRoutesProps) {
  return (
    <Routes>
      <Route path="/" element={<Home units={units} setUnits={setUnits} />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  )
}
