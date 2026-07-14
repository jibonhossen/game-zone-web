import { useEffect, useMemo, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Download, Star } from "lucide-react";
import { translations } from "@/lib/translations";

interface HeroProps {
  language?: "bn" | "en";
  onDownloadClick?: () => void;
}

// Sparkle/Starburst SVG component
const Sparkle = ({ className, delay = 0 }: { className?: string; delay?: number }) => (
  <motion.svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    animate={{
      scale: [1, 1.2, 1],
      rotate: [0, 90, 180, 270, 360],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "linear",
      delay,
    }}
  >
    <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
  </motion.svg>
);

function Hero({ language = "bn", onDownloadClick }: HeroProps) {
  const [titleNumber, setTitleNumber] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const t = translations[language];

  const titles = useMemo(
    () => t.hero.adjectives,
    [t.hero.adjectives]
  );

  // Reset title number when language changes (Standard React way instead of useEffect to avoid lint warning)
  const [prevLanguage, setPrevLanguage] = useState(language);
  if (language !== prevLanguage) {
    setPrevLanguage(language);
    setTitleNumber(0);
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles.length]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: x * 15, y: y * -15 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full bg-[var(--background)] neo-grid-bg relative overflow-hidden min-h-[90vh] flex items-center pt-24 pb-16 md:py-24 border-b-4 border-black" 
      id="hero-section"
    >
      {/* Decorative Starbursts */}
      <Sparkle className="absolute top-12 left-[8%] h-8 w-8 text-[var(--neo-pink)] hidden md:block" delay={0.2} />
      <Sparkle className="absolute bottom-16 left-[5%] h-12 w-12 text-[var(--neo-cyan)] hidden md:block" delay={0.8} />
      <Sparkle className="absolute top-20 right-[10%] h-10 w-10 text-[var(--neo-yellow)] hidden md:block" delay={0.5} />
      
      {/* Dot accent blocks */}
      <div className="absolute top-28 left-6 w-16 h-16 neo-dot-bg border-2 border-black opacity-30 rounded-none hidden xl:block" />
      <div className="absolute bottom-20 right-12 w-24 h-24 neo-dot-bg border-2 border-black opacity-30 rounded-none hidden xl:block" />

      {/* Decorative floating badge */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10 block md:hidden">
        <div className="inline-flex items-center gap-2 bg-[var(--neo-yellow)] text-black border-2 border-black px-4 py-1 text-xs font-black uppercase rotate-[-2deg] shadow-[3px_3px_0px_0px_#000]">
          {t.hero.badge}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Heading & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Tagline / Subtitle */}
            <div className="hidden lg:block">
              <div className="inline-flex items-center gap-2 bg-[var(--neo-yellow)] text-black border-2 border-black px-5 py-2 text-sm font-black uppercase rotate-[-2deg] shadow-[4px_4px_0px_0px_#000] hover:rotate-[1deg] transition-transform">
                {t.hero.badge} 
                <Star className="w-4 h-4 fill-black text-black animate-spin-slow" />
              </div>
            </div>

            <div className="space-y-4">
              <span className={`block text-black text-lg sm:text-2xl font-black uppercase tracking-wider ${language === 'bn' ? 'font-bangla' : ''}`}>
                {t.hero.bangladeshMost}
              </span>
              
              {/* Animated Text Block */}
              <div className="relative h-[80px] sm:h-[100px] flex items-center justify-center lg:justify-start overflow-hidden">
                {titles.map((title, index) => (
                  <motion.div
                    key={index}
                    className="absolute"
                    initial={{ y: "150%", opacity: 0, rotate: 10 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1, rotate: index % 2 === 0 ? -3 : 2 }
                        : { y: titleNumber > index ? "-150%" : "150%", opacity: 0 }
                    }
                    transition={{ type: "spring", stiffness: 100, damping: 12 }}
                  >
                    <div className="inline-block bg-[var(--primary)] text-black text-4xl sm:text-6xl font-black uppercase tracking-tight px-6 py-2 border-4 border-black shadow-[6px_6px_0px_0px_#000]">
                      {title}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <h1 className={`text-4xl sm:text-6xl md:text-7xl font-black text-black leading-tight tracking-tight uppercase ${language === 'bn' ? 'font-bangla' : ''}`}>
                <span className="sr-only">
                  Fast Gaming Free Fire Tournament PUBG Mobile Tournament Ludo Cash Game Tournaments Bangladesh Fast Gaming BD
                </span>
                {t.hero.gamingPlatform}
              </h1>
            </div>

            <p className={`text-base sm:text-lg leading-relaxed text-slate-800 max-w-xl font-bold bg-white p-4 border-3 border-black shadow-[5px_5px_0px_0px_#000] ${language === 'bn' ? 'font-bangla' : ''}`}>
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
              <button
                id="hero-btn-download"
                onClick={onDownloadClick}
                className={`inline-flex items-center justify-center gap-3 bg-[var(--neo-green)] text-black border-4 border-black py-4 px-8 text-xl font-black uppercase shadow-[6px_6px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#000] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none transition-all cursor-pointer ${language === 'bn' ? 'font-bangla' : ''}`}
              >
                <Download className="w-6 h-6 stroke-[2.5]" />
                {t.hero.downloadBtn}
              </button>
            </div>
          </div>

          {/* RIGHT: Gamepad SVG Card (with tilt interaction) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <motion.div
              style={{
                rotateX: mousePos.y,
                rotateY: mousePos.x,
                transformStyle: "preserve-3d",
              }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="relative w-full max-w-[400px] aspect-square bg-[var(--neo-pink)] border-4 border-black shadow-[10px_10px_0px_0px_#000] p-6 flex items-center justify-center cursor-pointer group"
            >
              {/* Inner card grid pattern */}
              <div className="absolute inset-0 neo-dot-bg opacity-20 pointer-events-none" />
              
              {/* Top left sticker */}
              <div className="absolute -top-4 -left-4 bg-[var(--neo-cyan)] text-black text-xs font-black px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_#000] rotate-[-5deg] group-hover:rotate-[5deg] transition-transform">
                FAST BD
              </div>

              {/* Bottom right sticker */}
              <div className="absolute -bottom-4 -right-4 bg-[var(--neo-yellow)] text-black text-xs font-black px-3.5 py-1 border-2 border-black shadow-[2px_2px_0px_0px_#000] rotate-[8deg] group-hover:rotate-[-8deg] transition-transform font-mono uppercase">
                PLAY & WIN
              </div>

              {/* SVG Gamepad */}
              <div className="w-full h-full flex items-center justify-center">
                <svg
                  viewBox="0 0 400 280"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto drop-shadow-[4px_4px_0px_#000000] group-hover:scale-105 transition-transform duration-300"
                >
                  {/* Controller Body Outer Border */}
                  <path
                    d="M70 140C70 80 120 70 200 70C280 70 330 80 330 140C330 200 350 250 310 250C280 250 260 210 200 210C140 210 120 250 90 250C50 250 70 200 70 140Z"
                    fill="white"
                    stroke="black"
                    strokeWidth="10"
                    strokeLinejoin="round"
                  />
                  {/* Controller Inner Body */}
                  <path
                    d="M70 140C70 80 120 70 200 70C280 70 330 80 330 140C330 200 350 250 310 250C280 250 260 210 200 210C140 210 120 250 90 250C50 250 70 200 70 140Z"
                    fill="#22D3EE"
                    stroke="black"
                    strokeWidth="4"
                    strokeLinejoin="round"
                  />
                  
                  {/* Left Grip Accent */}
                  <path
                    d="M73 140C73 110 90 100 110 100C110 100 115 150 105 190C95 230 73 230 73 140Z"
                    fill="#A3E635"
                    stroke="black"
                    strokeWidth="4"
                  />

                  {/* Right Grip Accent */}
                  <path
                    d="M327 140C327 110 310 100 290 100C290 100 285 150 295 190C305 230 327 230 327 140Z"
                    fill="#A3E635"
                    stroke="black"
                    strokeWidth="4"
                  />

                  {/* D-PAD (Left Side) */}
                  <g transform="translate(110, 110)">
                    {/* D-pad Base */}
                    <rect x="15" y="0" width="15" height="45" fill="black" rx="3" />
                    <rect x="0" y="15" width="45" height="15" fill="black" rx="3" />
                    <rect x="18" y="3" width="9" height="39" fill="#1E293B" rx="1" />
                    <rect x="3" y="18" width="39" height="9" fill="#1E293B" rx="1" />
                    {/* Dpad center dot */}
                    <circle cx="22.5" cy="22.5" r="3.5" fill="#A3E635" />
                  </g>

                  {/* ACTION BUTTONS (Right Side) */}
                  <g transform="translate(235, 105)">
                    {/* Yellow Button (Top / Y) */}
                    <circle cx="25" cy="10" r="10" fill="#FDE047" stroke="black" strokeWidth="3" />
                    <text x="22" y="14" fill="black" fontSize="11" fontWeight="bold" fontFamily="monospace">Y</text>
                    
                    {/* Orange Button (Right / X) */}
                    <circle cx="43" cy="25" r="10" fill="#FB923C" stroke="black" strokeWidth="3" />
                    <text x="40" y="29" fill="black" fontSize="11" fontWeight="bold" fontFamily="monospace">X</text>
                    
                    {/* Pink Button (Left / A) */}
                    <circle cx="7" cy="25" r="10" fill="#F472B6" stroke="black" strokeWidth="3" />
                    <text x="4" y="29" fill="black" fontSize="11" fontWeight="bold" fontFamily="monospace">A</text>
                    
                    {/* Green Button (Bottom / B) */}
                    <circle cx="25" cy="40" r="10" fill="#4ADE80" stroke="black" strokeWidth="3" />
                    <text x="22" y="44" fill="black" fontSize="11" fontWeight="bold" fontFamily="monospace">B</text>
                  </g>

                  {/* Joysticks */}
                  {/* Left Analog */}
                  <circle cx="155" cy="170" r="18" fill="black" stroke="black" strokeWidth="2" />
                  <circle cx="155" cy="170" r="14" fill="#0F172A" />
                  <circle cx="151" cy="166" r="6" fill="#475569" />

                  {/* Right Analog */}
                  <circle cx="245" cy="170" r="18" fill="black" stroke="black" strokeWidth="2" />
                  <circle cx="245" cy="170" r="14" fill="#0F172A" />
                  <circle cx="241" cy="166" r="6" fill="#475569" />

                  {/* Middle Buttons (Select/Start) */}
                  <rect x="170" y="125" width="22" height="7" rx="3" transform="rotate(-20, 170, 125)" fill="black" />
                  <rect x="208" y="125" width="22" height="7" rx="3" transform="rotate(-20, 208, 125)" fill="black" />

                  {/* Center glowing logo */}
                  <circle cx="200" cy="100" r="12" fill="black" />
                  <circle cx="200" cy="100" r="8" fill="#A3E635" />
                  <path d="M198 96L203 100L198 104" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}

export { Hero };

