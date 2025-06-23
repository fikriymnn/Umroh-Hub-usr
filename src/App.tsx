import { BrowserRouter as Router, Routes, Route } from "react-router";
import PageTitle from "./components/PageTitle";
import HomePage from "./pages/Home/HomePage";
import UmrohPackagePage from "./pages/UmrohPackage/UmrohPackagePage";
import OurPartnersPage from "./pages/OurPartners/OurPartnersPage";
import PartnersDetail from "./pages/OurPartners/[id]/PartnersDetail";
import PackageDetail from "./pages/UmrohPackage/[id]/PackageDetail";
import LoginRegister from "./pages/Authentications/LoginRegister";
import Payment from "./pages/Payment/[order_id]/Payment";
import PaymentData from "./pages/Payment/PaymentData";
import Profile from "./pages/Profile/Profile";
import Transaction from "./pages/Profile/MyTransactions";
import AboutUs from "./pages/AboutUs/AboutUs";
import Forum from "./pages/Forum/Forum";
import ForumDetail from "./pages/Forum/[id]/Detail";
import Review from "./pages/AddReview/AddReview";

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
            path="/LoginRegister"
            element={
              <>
                <PageTitle title="PT CBL" />

                <LoginRegister />
              </>
            }
          />
          <Route
            path="/Payment/:order_id"
            element={
              <>
                <PageTitle title="PT CBL" />

                <Payment />
              </>
            }
          />
          <Route
            path="/PaymentData"
            element={
              <>
                <PageTitle title="PT CBL" />

                <PaymentData />
              </>
            }
          />
          <Route
            path="/Profile"
            element={
              <>
                <PageTitle title="PT CBL" />

                <Profile />
              </>
            }
          />
          <Route
            path="/MyTransactions"
            element={
              <>
                <PageTitle title="PT CBL" />

                <Transaction />
              </>
            }
          />
          <Route
            path="/AboutUs"
            element={
              <>
                <PageTitle title="PT CBL" />

                <AboutUs />
              </>
            }
          />
          <Route
            path="/Forum"
            element={
              <>
                <PageTitle title="PT CBL" />

                <Forum />
              </>
            }
          />
          <Route
            path="/Forum/:id"
            element={
              <>
                <PageTitle title="PT CBL" />

                <ForumDetail />
              </>
            }
          />
          <Route
            path="/AddReview"
            element={
              <>
                <PageTitle title="PT CBL" />

                <Review />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}
