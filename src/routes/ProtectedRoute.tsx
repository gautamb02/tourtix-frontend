import { Navigate, useLocation } from 'react-router-dom';
import { getLogged, getOnboard } from '../utils/localStorage';

interface RouteGuardProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<RouteGuardProps> = ({ children }) => {
  const location = useLocation();
  const logged = getLogged();
  const onboarded = getOnboard();

  
  if (['/login', '/signup'].includes(location.pathname) && logged && onboarded) {
    return <Navigate to="/dashboard" replace />;
  }
  
  // Redirect to landing page if not logged in and trying to access other routes
  if (location.pathname !== '/login' && location.pathname !== '/signup' && location.pathname !== '/' && !logged) {
    return <Navigate to="/" replace />;
  } 
  
  // Redirect to onboarding if logged in but not onboarded
  if (logged && !onboarded && location.pathname !== '/onboard') {
    return <Navigate to="/onboard" replace />;
  } 
  
  // Prevent access to onboarding page if already onboarded
  if (logged && onboarded && location.pathname === '/onboard') {
    return <Navigate to="/dashboard" replace />;
  }

  // Render children if none of the above conditions apply
  return <>{children}</>;
};

export default ProtectedRoute;
