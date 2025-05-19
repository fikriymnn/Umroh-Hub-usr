import { BrowserRouter as Router, Routes, Route } from "react-router";
import PageTitle from "./components/PageTitle";
import HomePage from "./pages/Home/HomePage";
import UmrohPackagePage from "./pages/UmrohPackage/UmrohPackagePage";
import OurPartnersPage from "./pages/OurPartners/OurPartnersPage";
import PartnersDetail from "./pages/OurPartners/[id]/PartnersDetail";
import PackageDetail from "./pages/UmrohPackage/[id]/PackageDetail";
import Register from "./pages/Authentications/Register";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
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
          <Route
            path="/OurPartners/:id"
            element={
              <>
                <PageTitle title="PT CBL" />

                <PartnersDetail />
              </>
            }
          />
          <Route
            path="/UmrohPackage/:id"
            element={
              <>
                <PageTitle title="PT CBL" />

                <PackageDetail />
              </>
            }
          />
           <Route
            path="/Register"
            element={
              <>
                <PageTitle title="PT CBL" />

                <Register />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}
