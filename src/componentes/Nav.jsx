import { useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { to: "/", label: "Inicio" },
  { to: "/services", label: "Servicios" },
  { to: "/contact", label: "Contacto" },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[9877] flex items-center justify-between h-16 px-4 md:px-8 bg-slate-950/80 backdrop-blur-md border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">

        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

        <a href="/" className="flex-shrink-0 h-full flex items-center">
          <motion.img
            src="/imgs/erasebglogo.png"
            alt="brand logo"
            className="max-h-[52px] md:max-h-[56px] w-auto object-contain"
            animate={{ scale: [1, 1.02, 1.03, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
        </a>

        <ol className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="relative group px-4 py-2 text-sm font-mono font-bold tracking-widest uppercase text-slate-400 hover:text-cyan-300 transition-colors duration-200"
            >
              <span className="absolute bottom-0 left-4 right-4 h-[1px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              {label}
            </Link>
          ))}
        </ol>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://www.instagram.com/saltoinstalaciones/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-cyan-300 transition-colors duration-200 p-1.5 rounded-md hover:bg-cyan-400/10"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M16.5 7.5l0 .01" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/salto.salto.9678?mibextid=ZbWKwL"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-cyan-300 transition-colors duration-200 p-1.5 rounded-md hover:bg-cyan-400/10"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
          </a>

          <div className="w-px h-5 bg-slate-700 mx-1" />

          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.9)] animate-pulse" />
            <span className="font-mono text-[10px] text-cyan-400 tracking-wider uppercase">Salto, UY</span>
          </div>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <a href="https://www.instagram.com/saltoinstalaciones/" className="text-slate-400 hover:text-cyan-300 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M16.5 7.5l0 .01" />
            </svg>
          </a>
          <AnimatedHamburgerButton isOpen={isOpen} onToggle={() => setIsOpen((p) => !p)} />
        </div>
      </header>

      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, y: 0, pointerEvents: "auto" },
          closed: { opacity: 0, y: -8, pointerEvents: "none" },
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="md:hidden fixed top-16 left-0 right-0 z-[9876] bg-slate-950/95 backdrop-blur-md border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
      >
        <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

        <ul className="flex flex-col px-6 py-4 gap-1">
          {NAV_LINKS.map(({ to, label }, i) => (
            <motion.li
              key={to}
              variants={{
                open: { opacity: 1, x: 0 },
                closed: { opacity: 0, x: -12 },
              }}
              transition={{ delay: i * 0.06 }}
            >
              <Link
                to={to}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 py-3 border-b border-white/5 group"
              >
                <span className="w-1 h-1 rounded-full bg-cyan-400/50 group-hover:bg-cyan-400 group-hover:shadow-[0_0_6px_rgba(34,211,238,0.8)] transition-all duration-200" />
                <span className="font-mono text-sm tracking-widest uppercase text-slate-400 group-hover:text-cyan-300 transition-colors duration-200">
                  {label}
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>

        <div className="px-6 py-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
          <small className="font-mono text-xs text-slate-500 tracking-widest uppercase">
            Servicio técnico especializado
          </small>
        </div>
      </motion.nav>
    </>
  );
};

const AnimatedHamburgerButton = ({ isOpen, onToggle }) => (
  <MotionConfig transition={{ duration: 0.45, ease: "easeInOut" }}>
    <motion.button
      initial={false}
      animate={isOpen ? "open" : "closed"}
      onClick={onToggle}
      aria-label="Toggle menu"
      className="relative h-10 w-10 flex items-center justify-center rounded-md hover:bg-cyan-400/10 transition-colors duration-200 cursor-pointer"
    >
      <motion.span
        variants={{ open: { rotate: "45deg", top: "50%" }, closed: { rotate: "0deg", top: "35%" } }}
        className="absolute h-[2px] w-5 bg-slate-200 rounded-full"
        style={{ left: "50%", x: "-50%", y: "-50%" }}
      />
      <motion.span
        variants={{ open: { opacity: 0, x: 6 }, closed: { opacity: 1, x: 0 } }}
        className="absolute h-[2px] w-5 bg-slate-200 rounded-full"
        style={{ left: "50%", x: "50%", top: "50%", y: "-50%" }}
      />
      <motion.span
        variants={{ open: { rotate: "-45deg", bottom: "50%" }, closed: { rotate: "0deg", bottom: "35%" } }}
        className="absolute h-[2px] w-5 bg-slate-200 rounded-full"
        style={{ left: "50%", x: "-50%", y: "50%" }}
      />
    </motion.button>
  </MotionConfig>
);

export default Nav;