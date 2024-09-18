import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './layout/layout';
import HomePage from './pages/HomePage';
import AuthCallbackPage from './pages/AuthCallbackPage';
import UserProfilePage from './pages/UserProfilePage';
import ProtectedRoute from './auth0/ProtectedRoute';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public route for the home page, wrapped with layout and hero section */}
      <Route
        path="/"
        element={
          <Layout showHero>
            <HomePage />
          </Layout>
        }
      />

	  {/* Route for handling the Auth0 authentication callback */}
      <Route path="/auth-callback" element={<AuthCallbackPage />} />

	  {/* Protected route, only accessible by authenticated users */}
      <Route element={<ProtectedRoute />}>
        <Route
          path="/user-profile"
          element={
            <Layout>
              <UserProfilePage />
            </Layout>
          }
        />
      </Route>

	  {/* Redirect any unknown routes to the home page */}
      <Route path="*" element={<Navigate to="/" />} />;
    </Routes>
  );
};

export default AppRoutes;
