import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, HeartPulse } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="p-1 bg-white rounded-lg">
                <img
                  src="https://res.cloudinary.com/dgcyqntse/image/upload/v1773725210/1000572077-removebg-preview_o0stug.png"
                  alt="Q9 Multy speciality Hospital Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">Q9 MULTY SPECIALITY <span className="text-blue-500">HOSPITAL</span></span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Providing world-class healthcare services with a patient-first approach. Our mission is to improve lives through advanced medical technology and compassionate care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/doctors" className="hover:text-blue-400 transition-colors">Our Doctors</Link></li>
              <li><Link to="/departments" className="hover:text-blue-400 transition-colors">Departments</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link to="/appointment" className="hover:text-blue-400 transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Departments</h3>
            <ul className="space-y-4">
              <li><Link to="/departments" className="hover:text-blue-400 transition-colors">Cardiology</Link></li>
              <li><Link to="/departments" className="hover:text-blue-400 transition-colors">Neurology</Link></li>
              <li><Link to="/departments" className="hover:text-blue-400 transition-colors">Orthopedics</Link></li>
              <li><Link to="/departments" className="hover:text-blue-400 transition-colors">Pediatrics</Link></li>
              <li><Link to="/departments" className="hover:text-blue-400 transition-colors">Dermatology</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">D.No: 10-21/1/6, Sriramanagar,<br />Near Petrol Bunk, Opp. GVMC Park,<br />Lankelapalem, Anakapalli Dist - 531019</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-500 shrink-0" />
                <span>+91 7702021224<br />+91 7672021224</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                <span>q9hospital2026@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} MediCare Plus Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
