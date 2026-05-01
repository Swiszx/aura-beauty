/**
 * Animated aurora — four blurred radial-gradient layers slowly drifting
 * over each other. Used as the hero background and accent panels.
 */
interface Props {
  className?: string;
  intensity?: 'full' | 'soft';
}

export default function AuroraBackground({ className = '', intensity = 'full' }: Props) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <div className="aurora-layer aurora-layer-1" style={intensity === 'soft' ? { opacity: 0.55 } : undefined} />
      <div className="aurora-layer aurora-layer-2" style={intensity === 'soft' ? { opacity: 0.5 } : undefined} />
      <div className="aurora-layer aurora-layer-3" style={intensity === 'soft' ? { opacity: 0.45 } : undefined} />
      <div className="aurora-layer aurora-layer-4" style={intensity === 'soft' ? { opacity: 0.35 } : undefined} />
      <div className="absolute inset-0 bg-gradient-to-b from-bg/30 via-transparent to-bg" />
    </div>
  );
}
