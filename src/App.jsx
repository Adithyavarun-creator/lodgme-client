import React, { Suspense } from "react";
import { GlobalStyles } from "./theme/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollTop/ScrollToTop";
import Spinner from "./components/Spinner/Spinner";
import Animate from "./Animate";
import OnlySpinner from "./components/OnlySpinner/OnlySpinner";
import EmailVerify from "./components/EmailVerify/EmailVerify";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import { useSelector } from "react-redux";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const LazyHomepageComponent = React.lazy(() =>
  import("./pages/Homepage/Homepage")
);
const LazyRegisterComponent = React.lazy(() =>
  import("./pages/RegisterPage/RegisterPage")
);
const LazySigninComponent = React.lazy(() =>
  import("./pages/SigninPage/SigninPage")
);
const LazyCompanyDetailsPageComponent = React.lazy(() =>
  import("./pages/CompanyDetails/CompanyDetailsPage")
);
const LazyConditionsPageComponent = React.lazy(() =>
  import("./pages/ConditionsPage/ConditionsPage")
);
const LazySingleHousePageComponent = React.lazy(() =>
  import("./pages/SingleHousePage/SingleHousePage")
);
const LazyForgotPasswordPageComponent = React.lazy(() =>
  import("./pages/ForgotPassword/ForgotPassword")
);
const LazyResetPasswordPageComponent = React.lazy(() =>
  import("./pages/ResetPassword/ResetPassword")
);

const LazyAddListingPageComponent = React.lazy(() =>
  import("./pages/AddListing/AddListingPage")
);

const LazySearchPageComponent = React.lazy(() =>
  import("./pages/SearchPage/SearchPage")
);

const LazyNotFoundPageComponent = React.lazy(() =>
  import("./pages/NotFoundPage/NotFound")
);

function App() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <BrowserRouter>
          <ScrollToTop />
          <GlobalStyles />
          <Navbar />
          <Routes>
            <Route path="/" element={<LazyHomepageComponent />} />
            <Route
              path="/register-user-in"
              element={<LazyRegisterComponent />}
            />
            <Route path="/user-sign-in" element={<LazySigninComponent />} />
            <Route
              path="/company-details"
              element={<LazyCompanyDetailsPageComponent />}
            />
            <Route
              path="/conditions-general"
              element={<LazyConditionsPageComponent />}
            />
            <Route path="/animate" element={<Animate />} />
            <Route path="/spinner" element={<OnlySpinner />} />
            <Route
              path="/forgot-password"
              element={<LazyForgotPasswordPageComponent />}
            />
            <Route
              path="/reset-password/:id/:token"
              element={<LazyResetPasswordPageComponent />}
            />
            <Route path="*" element={<LazyNotFoundPageComponent />} />

            <Route path="/user/:id/verify/:token" element={<EmailVerify />} />

            <Route
              path="/homes&rooms/:id"
              element={<LazySingleHousePageComponent />}
            />
            <Route
              path="/add-new-listing"
              element={<LazyAddListingPageComponent />}
            />
            <Route path="/search-results" element={<LazySearchPageComponent />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard-user" element={<UserDashboard />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
