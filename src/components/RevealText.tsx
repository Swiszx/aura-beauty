import { motion } from 'motion/react';

interface Props {
  text: string;
  by?: 'word' | 'letter';
  delay?: number;
  /** Per-piece stagger. Defaults to 0.06 (word) / 0.025 (letter). */
  stagger?: number;
  duration?: number;
  className?: string;
  /** Use whileInView instead of mount-time animation. */
  scroll?: boolean;
}

/**
 * Splits `text` into words or letters, then animates each piece up from
 * a clipped starting position. Newlines (\n) become block-level breaks.
 *
 * Lives inline — wrap in your own h1/p/etc. so styles inherit.
 */
export default function RevealText({
  text,
  by = 'word',
  delay = 0,
  stagger,
  duration = 0.75,
  className = '',
  scroll = false,
}: Props) {
  const lines = text.split('\n');
  const s = stagger ?? (by === 'word' ? 0.06 : 0.025);
  let counter = 0;

  return (
    <span className={className}>
      {lines.map((line, li) => {
        const parts = by === 'word' ? line.split(' ') : Array.from(line);
        return (
          <span key={li} className="block whitespace-nowrap">
            {parts.map((p, i) => {
              const idx = counter++;
              const initial = { y: '110%', opacity: 0 };
              const animate = { y: 0, opacity: 1 };
              const transition = {
                delay: delay + idx * s,
                duration,
                ease: [0.22, 1, 0.36, 1] as const,
              };
              // In letter mode, a literal space inside an inline-block span
              // collapses to zero width. Substitute a non-breaking space so the
              // gap between words actually renders.
              const char = by === 'letter' && p === ' ' ? '\u00A0' : p;
              return (
                <span
                  key={i}
                  className="inline-block overflow-hidden align-baseline"
                  // Extend the clipping box top and bottom so serif ascenders/caps
                  // and descenders (g, p, q, y, j) aren't sliced at large display
                  // sizes. Negative margins keep layout height unchanged.
                  style={{
                    paddingTop: '0.2em',
                    marginTop: '-0.2em',
                    paddingBottom: '0.3em',
                    marginBottom: '-0.3em',
                  }}
                >
                  <motion.span
                    className="inline-block"
                    initial={initial}
                    {...(scroll
                      ? { whileInView: animate, viewport: { once: true, margin: '-40px' } }
                      : { animate })}
                    transition={transition}
                  >
                    {char}
                    {by === 'word' && i < parts.length - 1 ? '\u00A0' : ''}
                  </motion.span>
                </span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
}
