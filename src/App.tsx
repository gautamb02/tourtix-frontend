
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPageIndex from './pages/landing'; // Adjust the path as necessary
import NotFoundIndex from './pages/notfound';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <main>
      <Routes>
        <Route path="/" element={<LandingPageIndex />} />
        <Route path="*" element={<NotFoundIndex />} /> {/* Catch-all route for 404 */}
      </Routes>
      </main>
    </Router>
  );
}

export default App;
