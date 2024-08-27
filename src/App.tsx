import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LandingPageIndex from './pages/landing'; // Adjust the path as necessary
import NotFoundIndex from './pages/notfound';
import Navbar from './components/Navbar';
import OnboardingIndex from './pages/onboarding';
import SignUpIndex from './pages/signup';
import LogIn from './pages/login';

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/onboard';

  return (
    <>
      {!hideNavbar && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<LandingPageIndex />} />
          <Route path="*" element={<NotFoundIndex />} /> {/* Catch-all route for 404 */}
          <Route path="/onboard" element={<OnboardingIndex />} /> 
          <Route path="/signup" element={<SignUpIndex/>} />
          <Route path="/login" element={<LogIn/>} /> 
        </Routes>
      </main>
    </>
  );
}

export default App;
