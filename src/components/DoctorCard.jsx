import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function DoctorCard({ doctor }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-1">{doctor.name}</h3>
        <p className="text-blue-600 font-medium mb-2">{doctor.specialization}</p>
        <p className="text-slate-500 text-sm mb-6">{doctor.experience} Experience</p>
        <div className="flex gap-3">
          <Link
            to={`/doctors/${doctor.id}`}
            className="flex-1 text-center py-2.5 bg-slate-50 text-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-100 transition-colors"
          >
            Profile
          </Link>
          <Link
            to="/appointment"
            className="flex-1 text-center py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors shadow-md shadow-blue-100"
          >
            Book
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
