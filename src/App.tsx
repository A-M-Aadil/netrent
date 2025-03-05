import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Loader from "./loaders/Loader";
import HomePage from "./pages/HomePage";
import RootLayout from "./layouts/RootLayout";
const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Routes>
          <Route element={<RootLayout />}>
              <Route index element={<HomePage />} />  {/* Index route */}
          </Route>
        </Routes>
      </Router>
    </Suspense>
  )
}

export default App