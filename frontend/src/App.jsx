import Signup from "./Components/Signup"
import CoursePage from "./Pages/CoursePage"
import HomePage from "./Pages/HomePage"
import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/course" element={<CoursePage/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
  )
}

export default App