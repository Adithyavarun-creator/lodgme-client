import React, { Suspense, useEffect } from "react";
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
import BookingPreviewPage from "./pages/BookingPreviewPage/BookingPreviewPage";
import UserListingPage from "./pages/UserListingPage/UserListingPage";
import BillingPage from "./pages/BillingPage/BillingPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import Success from "./components/Success/Success";
import OrdersPage from "./pages/OrdersPage/OrdersPage";
import Error from "./components/Error/Error";
import SearchFiltersPage from "./pages/SearchFiltersPage/SearchFiltersPage";
import OTPPage from "./pages/OTPPage";
import GoogleUserDashboard from "./pages/GoogleUserDashboard/GoogleUserDashboard";
import RegisterUser from "./pages/RegisterUser/RegisterUser";
import EditListingPage from "./pages/EditListing/EditListingPage";
import FacebookUserDashboard from "./pages/FacebookUserDashboard/FacebookUserDashboard";
import FacebookOrdersPage from "./pages/OrdersPage/FacebookOrdersPage";
import GoogleOrdersPage from "./pages/OrdersPage/GoogleOrdersPage";
import AddReview from "./components/AddReview/AddReview";
import SupportPage from "./pages/SupportPage/SupportPage";

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

const LazyBookingPreviewPageComponent = React.lazy(() =>
  import("./pages/BookingPreviewPage/BookingPreviewPage")
);

const LazyEditProfilePageComponent = React.lazy(() =>
  import("./pages/EditProfile/EditProfile")
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
            <Route path="/user/:id/verify/:token" element={<EmailVerify />} />
            <Route
              path="/homes&rooms/:id"
              element={<LazySingleHousePageComponent />}
            />
            <Route
              path="/booking-preview"
              element={<LazyBookingPreviewPageComponent />}
            />
            <Route
              path="/search-results"
              element={<LazySearchPageComponent />}
            />
            <Route
              path="/search-filter-results"
              element={<SearchFiltersPage />}
            />
            <Route path="/lodgeme-support-q&a" element={<SupportPage />} />
            {/* <Route
              path="/add-new-listing"
              element={<LazyAddListingPageComponent />}
            /> */}
            <Route path="/otp-page" element={<OTPPage />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard-user" element={<UserDashboard />} />
              <Route path="/user-listings" element={<UserListingPage />} />
              <Route
                path="/edit-user-profile"
                element={<LazyEditProfilePageComponent />}
              />
              <Route
                path="/dashboard-google-user"
                element={<GoogleUserDashboard />}
              />

              <Route
                path="/dashboard-facebook-user"
                element={<FacebookUserDashboard />}
              />
              <Route
                path="/facebook-orders-page"
                element={<FacebookOrdersPage />}
              />
              <Route
                path="/google-orders-page"
                element={<GoogleOrdersPage />}
              />
              <Route path="/order-details" element={<OrdersPage />} />

              <Route path="/register-social-user" element={<RegisterUser />} />

              <Route path="/edit-listing/:id" element={<EditListingPage />} />

              <Route
                path="/add-new-listing"
                element={<LazyAddListingPageComponent />}
              />
              <Route path="/billing-details" element={<BillingPage />} />
              <Route path="/checkout-options" element={<CheckoutPage />} />
              {/* <Route path="/otp-page" element={<OTPPage />} /> */}
              <Route path="/success" element={<Success />} />
              <Route path="/error" element={<Error />} />
            </Route>
            {/* <Route path="*" element={<LazyNotFoundPageComponent />} /> */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
