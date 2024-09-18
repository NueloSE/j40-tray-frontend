import React from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Enables routing for the app
import AppRoutes from './AppRoutes'; // Main application routes
import Auth0ProviderWithNavigate from './auth0/Auth0ProviderWithNavigate'; // Auth0 provider with navigation handling
import { QueryClient, QueryClientProvider } from 'react-query'; // React Query for server state management
import { Toaster } from 'sonner'; // Toaster for displaying notifications


// Configure the React Query client with default options
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Disable refetching on window focus
    },
  },
});

// Render the app into the root element with various providers
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <Auth0ProviderWithNavigate>
          <AppRoutes />
		  <Toaster visibleToasts={1} position="top-right" richColors />
        </Auth0ProviderWithNavigate>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>
);
