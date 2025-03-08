import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Loader from "./loaders/Loader";
import HomePage from "./pages/HomePage";
import RootLayout from "./layouts/RootLayout";
import AboutPage from "./pages/AboutPage";
import BusinessPage from "./pages/BusinessPage";
import ResidentialPage from "./pages/ResidentialPage";
import ResidentialView from "./pages/ResidentialView";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Toaster />
      <Router>
        <Routes>
          <Route element={<RootLayout />}>
              <Route index element={<HomePage />} />  {/* Index route */}
              <Route path="aboutus" element={<AboutPage />} />
              <Route path="business" element={<BusinessPage />} />
              <Route path="residential" element={<ResidentialPage />} />
              <Route path="residential/:id/:title" element={<ResidentialView />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  )
}

export default App