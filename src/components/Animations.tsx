import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform, MotionValue } from 'framer-motion';

// --- WordsPullUp ---
interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
}

export function WordsPullUp({ text, className = '', showAsterisk = false }: WordsPullUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const words = text.split(' ');

  return (
    <div ref={ref} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <div key={i} className="overflow-visible mr-[0.2em] last:mr-0">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative inline-block"
            >
              {word}
              {showAsterisk && isLast && (
                <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</span>
              )}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

// --- WordsPullUpMultiStyle ---
interface Segment {
  text: string;
  className: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
}

export function WordsPullUpMultiStyle({ segments, className = '' }: WordsPullUpMultiStyleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Flatten text into array of word objects
  const words = segments.flatMap((seg) =>
    seg.text.split(' ').map((w) => ({ text: w, className: seg.className }))
  );

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {words.map((item, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`mr-[0.25em] last:mr-0 inline-block ${item.className}`}
        >
          {item.text}
        </motion.span>
      ))}
    </div>
  );
}

// --- ScrollRevealText ---
interface AnimatedLetterProps {
  char: string;
  progress: MotionValue<number>;
  index: number;
  total: number;
}

function AnimatedLetter({ char, progress, index, total }: AnimatedLetterProps) {
  const charProgress = index / total;
  // Based on the user instruction: range [charProgress - 0.1, charProgress + 0.05]
  const opacity = useTransform(progress, [charProgress - 0.1, charProgress + 0.05], [0.2, 1]);
  
  return (
    <motion.span style={{ opacity }}>
      {char}
    </motion.span>
  );
}

export function ScrollRevealText({ text, className = '' }: { text: string; className?: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = text.split('');

  return (
    <p ref={ref} className={className}>
      {chars.map((char, i) => (
        <AnimatedLetter
          key={i}
          char={char}
          progress={scrollYProgress}
          index={i}
          total={chars.length}
        />
      ))}
    </p>
  );
}
