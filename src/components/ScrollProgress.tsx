import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      setProgress(pct);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-px z-[100] pointer-events-none"
      style={{
        width: `${progress * 100}%`,
        background: 'linear-gradient(90deg, #E8A8B4 0%, #D4866B 50%, #C9A26C 100%)',
        boxShadow: '0 0 12px rgba(212, 134, 107, 0.6)',
        transition: 'width 0.1s linear',
      }}
    />
  );
}
