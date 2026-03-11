import Hero from '../components/Hero';
import { departments } from '../data/departments';
import { doctors } from '../data/doctors';
import DepartmentCard from '../components/DepartmentCard';
import DoctorCard from '../components/DoctorCard';
import { motion } from 'motion/react';
import { Shield, Users, Zap, Heart, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  { icon: Zap, title: '24/7 Emergency', desc: 'Round-the-clock emergency medical services with rapid response teams.' },
  { icon: Users, title: 'Qualified Doctors', desc: 'Expert medical professionals with years of experience in various fields.' },
  { icon: Shield, title: 'Advanced Tech', desc: 'Equipped with the latest medical technology for precise diagnosis.' },
  { icon: Heart, title: 'Patient Care', desc: 'Compassionate care focused on patient comfort and recovery.' },
];

const testimonials = [
  { name: 'John Smith', role: 'Patient', text: 'The care I received at MediCare Plus was exceptional. The doctors and staff were professional and caring throughout my recovery.' },
  { name: 'Sarah Williams', role: 'Patient', text: 'State-of-the-art facilities and very knowledgeable doctors. I highly recommend their cardiology department.' },
  { name: 'Michael Brown', role: 'Patient', text: 'Booking an appointment was seamless. The pediatric team is wonderful with children. Truly a world-class hospital.' },
];

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      <Hero />

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Departments Preview */}
      <section className="bg-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Our Departments</h2>
              <p className="text-slate-600 max-w-xl">Explore our specialized medical departments equipped with advanced technology and expert teams.</p>
            </div>
            <Link to="/departments" className="hidden md:flex items-center text-blue-600 font-bold hover:translate-x-2 transition-transform">
              View All <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.slice(0, 6).map((dept) => (
              <DepartmentCard key={dept.id} department={dept} />
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Meet Our Specialists</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Our team of world-class doctors is dedicated to providing you with the best medical care possible.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.slice(0, 4).map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/doctors" className="inline-flex items-center px-8 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all">
            View All Doctors <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-blue-600 rounded-[3rem] overflow-hidden p-12 md:p-20 text-center">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-700 rounded-full blur-3xl opacity-50"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Ready to Schedule Your Visit?</h2>
            <p className="text-xl text-blue-100 mb-10">Don't wait for your health. Book an appointment today with our expert medical team.</p>
            <Link to="/appointment" className="inline-flex items-center px-10 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl shadow-blue-900/20">
              Book Appointment Now
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">What Our Patients Say</h2>
            <p className="text-slate-600">Real stories from people who trusted us with their health.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-slate-50 rounded-3xl relative"
              >
                <Quote className="absolute top-8 right-8 h-10 w-10 text-blue-600/10" />
                <p className="text-slate-600 italic mb-8 leading-relaxed">"{t.text}"</p>
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-blue-600">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
