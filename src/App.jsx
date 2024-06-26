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
import BookingPreviewPage from "./pages/BookingPreviewPage/BookingPreviewPage";
import UserListingPage from "./pages/UserListingPage/UserListingPage";
import BillingPage from "./pages/BillingPage/BillingPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import Success from "./components/Success/Success";
import OrdersPage from "./pages/OrdersPage/OrdersPage";
import Error from "./components/Error/Error";
import SearchFiltersPage from "./pages/SearchFiltersPage/SearchFiltersPage";
import OTPPage from "./pages/OTPPage/OTPPage";
import GoogleUserDashboard from "./pages/GoogleUserDashboard/GoogleUserDashboard";
import RegisterUser from "./pages/RegisterUser/RegisterUser";
import EditListingPage from "./pages/EditListing/EditListingPage";
import FacebookUserDashboard from "./pages/FacebookUserDashboard/FacebookUserDashboard";
import FacebookOrdersPage from "./pages/OrdersPage/FacebookOrdersPage";
import GoogleOrdersPage from "./pages/OrdersPage/GoogleOrdersPage";
import AddReview from "./components/AddReview/AddReview";
import EmailDashboardVerfiy from "./components/EmailVerify/EmailDashboardVerfiy";
import DeletePopup from "./components/DeletePopup/DeletePopup";
import DeleteListing from "./pages/DeleteFolder/DeleteListing";
import DeleteUserPage from "./pages/DeleteFolder/DeleteUser";
import DeleteGoogleUserPage from "./pages/DeleteFolder/DeleteGoogleUser";
import DeleteFacebookUserPage from "./pages/DeleteFolder/DeleteFacebookUserPage";
import SingleHousePage from "./pages/SingleHousePage/SingleHousePage";
import Homepage from "./pages/Homepage/Homepage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SigninPage from "./pages/SigninPage/SigninPage";
import CompanyDetailsPage from "./pages/CompanyDetails/CompanyDetailsPage";
import ConditionsPage from "./pages/ConditionsPage/ConditionsPage";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import SearchPage from "./pages/SearchPage/SearchPage";
import EditProfile from "./pages/EditProfile/EditProfile";
import AddListingPage from "./pages/AddListing/AddListingPage";
import AddListingPageBox from "./pages/AddListingPageBox/AddListingPageBox";
import Mapbox from "./components/MapBox/MapBox";
import Reservation from "./pages/Reservation/Reservation";
import HousePage from "./pages/HousePage/HousePage";
//import Mapbox from "./pages/Mapbox";

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
            <Route path="/" element={<Homepage />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/house" element={<HousePage />} />

            <Route path="/register-user-in" element={<RegisterPage />} />
            <Route path="/user-sign-in" element={<SigninPage />} />
            <Route path="/company-details" element={<CompanyDetailsPage />} />
            <Route path="/conditions-general" element={<ConditionsPage />} />
            <Route path="/animate" element={<Animate />} />
            <Route path="/spinner" element={<OnlySpinner />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route
              path="/reset-password/:id/:token"
              element={<ResetPassword />}
            />
            <Route path="/user/:id/verify/:token" element={<EmailVerify />} />
            {/* <Route path="/add-new-listing" element={<AddListingPage />} /> */}

            <Route path="/homes&rooms/:id" element={<SingleHousePage />} />
            <Route path="/homes&map-box" element={<SingleHousePage />} />

            <Route
              path="/booking-preview"
              element={<LazyBookingPreviewPageComponent />}
            />
            <Route path="/search-results" element={<SearchPage />} />
            <Route
              path="/search-filter-results"
              element={<SearchFiltersPage />}
            />

            <Route
              path="/lodgeme-otp-verification-page"
              element={<OTPPage />}
            />
            <Route path="/map-box" element={<Mapbox />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard-user" element={<UserDashboard />} />
              <Route path="/add-new-listing" element={<AddListingPageBox />} />
              <Route path="/user-listings" element={<UserListingPage />} />
              <Route path="/edit-user-profile" element={<EditProfile />} />
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

              <Route path="/delete-listing/:id" element={<DeleteListing />} />

              <Route path="/delete-profile" element={<DeleteUserPage />} />

              <Route
                path="/delete-google-user-accounts"
                element={<DeleteGoogleUserPage />}
              />

              <Route
                path="/delete-facebook-user-accounts"
                element={<DeleteFacebookUserPage />}
              />

              <Route path="/user/:id/verify/:token" element={<EmailVerify />} />

              <Route path="/email-verify" element={<EmailDashboardVerfiy />} />

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
