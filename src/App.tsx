import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPageIndex from './pages/landing'; // Adjust the path as necessary
import NotFoundIndex from './pages/notfound';
import OnboardingIndex from './pages/onboarding';
import SignUpIndex from './pages/signup';
import LogIn from './pages/login';
import ProtectedRoute from './routes/ProtectedRoute';
import Navbar from './components/navbar/Navbar';
import DashboardIndex from './pages/home';
import AboutPage from './pages/about';


function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  return (
    <>
      <Navbar />
      <main>
        <ProtectedRoute>
          <Routes>
            <Route path="/" element={<LandingPageIndex />} />
            <Route path="*" element={<NotFoundIndex />} /> {/* Catch-all route for 404 */}
            <Route path="/onboard" element={<OnboardingIndex />} />
            <Route path="/signup" element={<SignUpIndex />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/dashboard" element={<DashboardIndex/>} />
            <Route path="/about" element={<AboutPage/>} />
          </Routes>
        </ProtectedRoute>
      </main>
    </>
  );
}

export default App;
