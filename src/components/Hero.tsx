import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { WordsPullUp } from './Animations';

export function Hero() {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Github", href: "https://github.com/mayberaunak", target: "_blank" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/raunakysingh/", target: "_blank" },
    { label: "Resume", href: "#", target: "_blank" }
  ];

  return (
    <section className="h-screen w-full p-4 md:p-6 bg-black flex flex-col">
      <div className="relative flex-1 w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        />

        {/* Noise & Gradient Overlays */}
        <div className="absolute inset-0 noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

        {/* Navbar Pill */}
        <nav className="absolute top-0 left-1/2 -translate-x-1/2 bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14 z-20">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.target}
              rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
              className="text-[10px] sm:text-xs md:text-sm whitespace-nowrap transition-colors duration-300"
              style={{ color: 'rgba(225, 224, 204, 0.8)' }}
              onMouseOver={(e) => (e.currentTarget.style.color = '#E1E0CC')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)')}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Bottom Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end w-full">
            
            {/* Left 8 Cols - Heading */}
            <div className="lg:col-span-8 flex">
              <WordsPullUp
                text="Raunak"
                showAsterisk={true}
                className="text-[#E1E0CC] font-medium leading-[0.85] tracking-[-0.07em] text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]"
              />
            </div>

            {/* Right 4 Cols - Description & CTA */}
            <div className="lg:col-span-4 flex flex-col items-start gap-6 lg:pb-8">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-primary/70 text-xs sm:text-sm md:text-base leading-[1.2] max-w-md"
              >
                I’m Raunak, an aspiring developer currently pursuing Computer Science Engineering at Shiv Nadar University, driven by curiosity, creativity, and a love for building things that feel simple, useful, and well-crafted.
              </motion.p>
              
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center bg-primary rounded-full pl-5 pr-2 py-2 gap-3 hover:gap-4 transition-all duration-300"
              >
                <span className="text-black font-medium text-sm sm:text-base">See More</span>
                <div className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <ArrowRight className="text-[#DEDBC8] w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </motion.button>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
