import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { studio } from '../data';

export default function WhatsAppFAB() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 320);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0, y: 20 }}
          transition={{ type: 'spring', stiffness: 220, damping: 22 }}
          href={studio.contact.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="Per WhatsApp anfragen"
          style={{ bottom: 'calc(1.25rem + env(safe-area-inset-bottom, 0px))' }}
          className="fixed right-4 md:right-6 z-[110] flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white shadow-2xl rounded-full pl-4 pr-5 py-3.5 md:py-4 transition-colors group"
        >
          <span className="absolute inset-0 rounded-full opacity-50 blur-xl bg-[#25D366] -z-10" />
          <MessageCircle size={22} className="group-hover:scale-110 transition-transform" />
          <span className="font-semibold text-sm tracking-wide">WhatsApp</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
