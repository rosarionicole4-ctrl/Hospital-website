import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';

export default function DepartmentCard({ department }) {
  const IconComponent = Icons[department.icon];

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={department.image}
          alt={department.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/0 transition-colors"></div>
      </div>
      <div className="p-6">
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
          {IconComponent && <IconComponent className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{department.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-6">
          {department.description}
        </p>
        <Link
          to={`/departments`}
          className="text-blue-600 font-semibold text-sm flex items-center hover:translate-x-2 transition-transform"
        >
          Learn More <Icons.ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}
