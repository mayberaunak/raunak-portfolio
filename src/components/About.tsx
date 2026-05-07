import { WordsPullUpMultiStyle, ScrollRevealText } from './Animations';

export function About() {
  const headingSegments = [
    { text: "I am Raunak Singh, ", className: "font-normal" },
    { text: "an aspiring developer. ", className: "font-serif italic" },
    { text: "currently pursuing engineering @ SNU Noida.", className: "font-normal" }
  ];

  return (
    <section id="about" className="bg-black py-20 px-4 md:px-8 w-full flex justify-center">
      <div className="bg-[#101010] w-full max-w-6xl rounded-3xl p-8 md:p-16 lg:p-24 flex flex-col items-center text-center">
        
        {/* Label */}
        <span className="text-primary text-[10px] sm:text-xs uppercase tracking-wider mb-8 md:mb-12">
          Portfolio
        </span>

        {/* Heading */}
        <div className="text-[#E1E0CC] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto leading-[0.95] sm:leading-[0.9] mb-12 md:mb-16">
          <WordsPullUpMultiStyle segments={headingSegments} />
        </div>

        {/* Scroll Linked Reveal Text */}
        <div className="max-w-2xl mx-auto">
          <ScrollRevealText 
            text="Currently pursuing Computer Science Engineering with a growing interest in development, design, and building clean, purposeful digital projects."
            className="text-[#DEDBC8] text-xs sm:text-sm md:text-base leading-relaxed"
          />
        </div>

      </div>
    </section>
  );
}
