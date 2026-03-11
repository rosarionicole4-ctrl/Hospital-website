import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HOME from './pages/Home';
import ABOUT from './pages/About';
import DOCTORS from './pages/Doctors';
import DOCTORPROFILE from './pages/DoctorProfile';
import DEPARTMENTS from './pages/Departments';
import SERVICES from './pages/Services';
import APPOINTMENT from './pages/Appointment';
import GALLERY from './pages/Gallery';
import FAQ from './pages/FAQ';
import CONTACT from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HOME />} />
          <Route path="about" element={<ABOUT />} />
          <Route path="doctors" element={<DOCTORS />} />
          <Route path="doctors/:doctorId" element={<DOCTORPROFILE />} />
          <Route path="departments" element={<DEPARTMENTS />} />
          <Route path="services" element={<SERVICES />} />
          <Route path="appointment" element={<APPOINTMENT />} />
          <Route path="gallery" element={<GALLERY />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<CONTACT />} />
        </Route>
      </Routes>
    </Router>
  );
}
