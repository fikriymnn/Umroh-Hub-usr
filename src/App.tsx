import { BrowserRouter as Router, Routes, Route } from "react-router";
import PageTitle from "./components/PageTitle";
import HomePage from "./pages/Home/HomePage";
import UmrohPackagePage from "./pages/UmrohPackage/UmrohPackagePage";
import OurPartnersPage from "./pages/OurPartners/OurPartnersPage";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/HomePage"
            element={
              <>
                <PageTitle title="PT CBL" />

                <HomePage />
              </>
            }
          />
          <Route
            path="/UmrohPackage"
            element={
              <>
                <PageTitle title="PT CBL" />

                <UmrohPackagePage />
              </>
            }
          />
          <Route
            path="/OurPartners"
            element={
              <>
                <PageTitle title="PT CBL" />

                <OurPartnersPage />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}
