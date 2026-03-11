import { departments } from '../data/departments';
import DepartmentCard from '../components/DepartmentCard';
import { motion } from 'motion/react';

export default function Departments() {
  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-blue-600 py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Medical Departments</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Comprehensive medical services across all major specialties, delivered by expert teams using advanced technology.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, i) => (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <DepartmentCard department={dept} />
            </motion.div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-24 bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/20 blur-3xl rounded-full translate-x-1/2"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Can't find what you're looking for?</h2>
              <p className="text-slate-400 text-lg mb-8">
                We offer many more specialized services and treatments. Contact our help desk for more information about our full range of medical services.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+15551234567" className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all">
                  Call Help Desk
                </a>
                <a href="/contact" className="px-8 py-3 bg-transparent border border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition-all">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Emergency Care', 'Diagnostic Lab', 'Pharmacy', 'Rehabilitation', 'Health Checkups', 'Telemedicine'
              ].map((item, i) => (
                <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center font-medium">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
