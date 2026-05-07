import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Terminal, UserPlus, FileText } from 'lucide-react';
import { WordsPullUpMultiStyle } from './Animations';

const PDF_URL = "#"; // Replace with actual PDF URL later

function FeatureCard({ 
  children, 
  delay,
  className = ""
}: { 
  children: React.ReactNode; 
  delay: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-3xl overflow-hidden relative flex flex-col p-6 h-full ${className}`}
    >
      {children}
    </motion.div>
  );
}

function ListCard({ 
  title, 
  number, 
  icon,
  linkUrl,
  linkTarget = "_blank"
}: { 
  title: string; 
  number: string; 
  icon: React.ReactNode;
  linkUrl: string;
  linkTarget?: string;
}) {
  return (
    <div className="flex flex-col h-full bg-[#212121]">
      <div className="flex justify-between items-start mb-12">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded bg-black/30 flex items-center justify-center text-primary">
          {icon}
        </div>
        <span className="text-gray-500 text-sm font-medium">{number}</span>
      </div>
      
      <h3 className="text-primary text-xl sm:text-2xl font-medium mb-auto">{title}</h3>
      
      <a 
        href={linkUrl}
        target={linkTarget}
        rel="noopener noreferrer" 
        className="group inline-flex items-center gap-2 text-primary font-medium mt-8 hover:text-white transition-colors"
      >
        Learn more
        <ArrowRight className="w-4 h-4 -rotate-45 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </a>
    </div>
  );
}

export function Features() {
  const headerSegments = [
    { text: "Projects, Socials, Connect.", className: "text-[#E1E0CC]" }
  ];

  return (
    <section className="min-h-screen bg-black relative py-20 px-4 md:px-6">
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none mix-blend-overlay" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <WordsPullUpMultiStyle 
            segments={headerSegments} 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-left !justify-start"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]">
          
          {/* Card 1: Video Card */}
          <FeatureCard delay={0} className="p-0 border-0 bg-transparent min-h-[300px] lg:min-h-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative h-full flex flex-col justify-end p-6">
              <span className="text-[#E1E0CC] text-2xl font-medium tracking-tight">Still Growing.</span>
            </div>
          </FeatureCard>

          {/* Card 2: Projects */}
          <FeatureCard delay={0.15} className="bg-[#212121]">
            <ListCard 
              title="Projects."
              number="01"
              icon={<Terminal className="w-5 h-5 sm:w-6 sm:h-6" />}
              linkUrl="https://github.com/mayberaunak"
            />
          </FeatureCard>

          {/* Card 3: Connect */}
          <FeatureCard delay={0.3} className="bg-[#212121]">
            <ListCard 
              title="Connect."
              number="02"
              icon={<UserPlus className="w-5 h-5 sm:w-6 sm:h-6" />}
              linkUrl="https://www.linkedin.com/in/raunakysingh/"
            />
          </FeatureCard>

          {/* Card 4: Resume */}
          <FeatureCard delay={0.45} className="bg-[#212121]">
            <ListCard 
              title="Resume."
              number="03"
              icon={<FileText className="w-5 h-5 sm:w-6 sm:h-6" />}
              linkUrl={PDF_URL}
            />
          </FeatureCard>

        </div>
      </div>
    </section>
  );
}
