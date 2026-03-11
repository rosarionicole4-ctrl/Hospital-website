import { motion } from 'motion/react';
import { Activity, Beaker, Heart, ShieldPlus, Stethoscope, Microscope, Pill, Ambulance } from 'lucide-react';

const services = [
  { icon: Activity, title: 'Diagnostic Imaging', desc: 'Advanced MRI, CT scans, and X-ray services for accurate diagnosis.' },
  { icon: Beaker, title: 'Laboratory Services', desc: 'Comprehensive blood tests and pathology services with quick results.' },
  { icon: Heart, title: 'Cardiology Center', desc: 'Expert heart care including ECG, TMT, and interventional procedures.' },
  { icon: ShieldPlus, title: 'Health Checkups', desc: 'Preventive health screening packages tailored for all age groups.' },
  { icon: Stethoscope, title: 'Outpatient Clinic', desc: 'Consultations with specialists across all medical disciplines.' },
  { icon: Microscope, title: 'Cancer Care', desc: 'Comprehensive oncology services including chemotherapy and radiation.' },
  { icon: Pill, title: 'Pharmacy', desc: '24/7 in-house pharmacy with a wide range of medicines and supplies.' },
  { icon: Ambulance, title: 'Emergency Care', desc: 'Rapid response emergency services with advanced life support.' },
];

export default function Services() {
  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-slate-50 py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Our Premium Services</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            We provide a wide range of medical services designed to meet all your healthcare needs under one roof.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <service.icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Featured Service */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Featured Service</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Advanced Telemedicine Services</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Consult with our expert doctors from the comfort of your home. Our secure telemedicine platform allows you to have video consultations, share reports, and get prescriptions digitally.
            </p>
            <ul className="space-y-4 mb-10">
              {['Secure Video Calls', 'Digital Prescriptions', 'Report Sharing', 'Easy Scheduling'].map((item, i) => (
                <li key={i} className="flex items-center text-slate-700 font-medium">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                    <Activity className="h-3 w-3 text-emerald-600" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <button className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg">
              Learn More About Telemedicine
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000"
              alt="Telemedicine Service"
              className="rounded-[3rem] shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
