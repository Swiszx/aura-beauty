import { motion, type HTMLMotionProps, type Transition } from 'motion/react';
import { type ReactNode } from 'react';

export type RevealKind =
  | 'rise'        // fade + rise from below
  | 'rise-blur'   // fade + rise + drops blur (cinematic)
  | 'scale'       // soft fade + scale up
  | 'pop'         // springy bounce in
  | 'slide-left'  // enters from the right
  | 'slide-right' // enters from the left
  | 'deal'        // tilts and rises like a dealt card
  | 'fall'        // drops from above with a wobble
  | 'iris'        // expands from a small center
  | 'unmask';     // wipes open from a clipped state

type V = { initial: Record<string, unknown>; animate: Record<string, unknown>; transition?: Transition };

const variants: Record<RevealKind, V> = {
  rise:         { initial: { opacity: 0, y: 28 },                                    animate: { opacity: 1, y: 0 } },
  'rise-blur':  { initial: { opacity: 0, y: 28, filter: 'blur(14px)' },              animate: { opacity: 1, y: 0, filter: 'blur(0px)' } },
  scale:        { initial: { opacity: 0, scale: 0.92 },                              animate: { opacity: 1, scale: 1 } },
  pop:          { initial: { opacity: 0, scale: 0.55 },                              animate: { opacity: 1, scale: 1 }, transition: { type: 'spring', stiffness: 260, damping: 17 } },
  'slide-left': { initial: { opacity: 0, x: 36 },                                    animate: { opacity: 1, x: 0 } },
  'slide-right':{ initial: { opacity: 0, x: -36 },                                   animate: { opacity: 1, x: 0 } },
  deal:         { initial: { opacity: 0, y: 70, rotate: -7, scale: 0.95 },           animate: { opacity: 1, y: 0, rotate: 0, scale: 1 }, transition: { type: 'spring', stiffness: 130, damping: 15 } },
  fall:         { initial: { opacity: 0, y: -70, rotate: 6 },                        animate: { opacity: 1, y: 0, rotate: 0 }, transition: { type: 'spring', stiffness: 130, damping: 15 } },
  iris:         { initial: { opacity: 0, scale: 0.4 },                               animate: { opacity: 1, scale: 1 }, transition: { type: 'spring', stiffness: 150, damping: 18 } },
  unmask:       { initial: { opacity: 0, clipPath: 'inset(0 100% 0 0)' },            animate: { opacity: 1, clipPath: 'inset(0 0% 0 0)' }, transition: { duration: 0.9 } },
};

interface Props extends Omit<HTMLMotionProps<'div'>, 'initial' | 'animate' | 'transition'> {
  kind?: RevealKind;
  delay?: number;
  duration?: number;
  /** Use `whileInView` instead of animate-on-mount. */
  scroll?: boolean;
  children: ReactNode;
}

export default function Reveal({
  kind = 'rise',
  delay = 0,
  duration = 0.7,
  scroll = false,
  children,
  ...rest
}: Props) {
  const v = variants[kind];
  const transition: Transition = { duration, delay, ease: [0.22, 1, 0.36, 1], ...(v.transition ?? {}) };
  const animProps = scroll
    ? { initial: v.initial, whileInView: v.animate, viewport: { once: true, margin: '-60px' } }
    : { initial: v.initial, animate: v.animate };
  return (
    <motion.div transition={transition} {...animProps} {...rest}>
      {children}
    </motion.div>
  );
}
