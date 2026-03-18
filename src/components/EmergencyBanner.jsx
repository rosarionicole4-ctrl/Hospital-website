import React from 'react';
import { Phone, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function EmergencyBanner() {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-4 right-4 z-[100] sm:bottom-8 sm:right-8"
      >
        <div className="bg-red-600 text-white p-4 sm:p-5 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-4 sm:gap-6 border border-red-500 hover:bg-red-700 transition-colors cursor-default">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-[pulse_2s_infinite]">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-red-100 mb-0.5 uppercase tracking-wider">24/7 Emergency Services</p>
              <p className="text-lg font-bold leading-none">Ambulance & Critical Care</p>
            </div>
          </div>

          <div className="flex gap-2 w-full md:w-auto">
            <a
              href="tel:+917702021224"
              className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white text-red-600 px-6 py-2.5 rounded-xl font-bold hover:bg-red-50 transition-colors shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <button
              onClick={() => setIsVisible(false)}
              className="px-4 bg-red-800/40 hover:bg-red-900/60 text-white rounded-xl transition-colors font-bold text-xl flex items-center justify-center"
              aria-label="Close emergency banner"
            >
              &times;
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
