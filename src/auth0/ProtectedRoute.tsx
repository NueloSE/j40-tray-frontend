import { useAuth0 } from '@auth0/auth0-react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth0(); // Destructure isAuthenticated from Auth0 hook

  if (isLoading) {
	return null;
  }

  if (isAuthenticated) {
	return <Outlet />;
  }

  return <Navigate to="/" replace />;

  // Render the component based on authentication state
};

export default ProtectedRoute;
