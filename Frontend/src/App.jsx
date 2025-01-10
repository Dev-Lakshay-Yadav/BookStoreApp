import Signup from "./Components/Signup"
import CoursePage from "./Pages/CoursePage"
import HomePage from "./Pages/HomePage"
import { Navigate, Route, Routes } from "react-router-dom"
import {Toaster} from "react-hot-toast"
import { useAuth } from "./context/AuthProvider"

const App = () => {
  const [authUser,setAuthUser] = useAuth()
  console.log(authUser)
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course" element={authUser?<CoursePage />:<Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App