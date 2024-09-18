import { useCreateMyUser } from '@/api/MyUserApi'; // Hook for creating a new user
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; //Hooks for navigation

const AuthCallbackPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth0();
  const { createUser } = useCreateMyUser(); // function to create a user in the application

  const hasCreatedUser = useRef(false); // Ref to track if user has been created

  useEffect(() => {
    if (user?.sub && user?.email && !hasCreatedUser.current) {
      // If user data is available and user has not been created yet
      createUser({ auth0Id: user.sub, email: user.email });

      hasCreatedUser.current = true;
    }
    navigate('/'); // Redirect to the home page after processing
  }, [createUser, navigate, user]); // Dependencies for the useEffect hook

  return <>Loading...</>;
};

export default AuthCallbackPage;
