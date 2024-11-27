import { BrowserRouter, Route, Routes } from "react-router-dom"
import AdminRoot from "./routes/adminRoot"
import UserRoot from "./routes/userRoot"
// import UserRoot from "./routes/userRoot"

function App() {
   return (
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<UserRoot />} />
          <Route path="/admin/*" element={<AdminRoot />} />
        </Routes>
      </BrowserRouter>
   )
}

export default App
