import { useTypingEffect } from "../hooks/useTypingEffect";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import ButtonContact from "../Contact/ButtonContact";

const imgs = [
  "imgs/huge-hero.jpeg",
  "imgs/hugo-tr.jpeg",
  "imgs/hugo-fr-o.jpeg",
  "imgs/huheinst.jpeg",
  "imgs/w-img.jpeg",
  "imgs/cableopt.jpeg",
  "imgs/huge-hero2.jpg",
];

const NewHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [prevImageIndex, setPrevImageIndex] = useState(null);
  const [fade, setFade] = useState(true);
  const { ref: titleRef, inView: isTitleVisible } = useInView({ triggerOnce: true });
  const titletext = useTypingEffect("SERVICIO TÉCNICO ESPECIALIZADO", 80);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevImageIndex(currentImageIndex);
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % imgs.length);
        setFade(true);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <section className="relative h-screen md:h-[100vh] w-full overflow-hidden">
  
      <div
        className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-700 ${fade ? "opacity-100" : "opacity-0"}`}
        style={{ backgroundImage: `url(${imgs[currentImageIndex]})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-blue-950/80 to-cyan-950/75" />

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(56,189,248,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.4) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

      <div className="relative z-10 h-full flex flex-col justify-end pb-10 md:justify-center px-6 md:px-16 lg:px-24 max-w-5xl">
       
        <div className="mb-4 inline-flex items-center gap-2 self-start">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_2px_rgba(34,211,238,0.7)]" />
          <span className="text-cyan-400 text-xs font-mono tracking-[0.3em] uppercase">
            Salto, Uruguay
          </span>
          <a
            href="https://www.google.com/maps/place/Agraciada,+50000+Salto,+Departamento+de+Salto"
            target="_blank"
            rel="noreferrer"
            className="ml-1 text-cyan-400/70 hover:text-cyan-300 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M12.02 21.485a1.996 1.996 0 0 1 -1.433-.585l-4.244 -4.243a8 8 0 1 1 13.403 -3.651" />
              <path d="M16 22l5 -5" />
              <path d="M21 21.5v-4.5h-4.5" />
            </svg>
          </a>
        </div>

        <div
          ref={titleRef}
          className={`transition-all duration-700 ${isTitleVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight mb-2">
            SALTO
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight mb-6"
            style={{ WebkitTextStroke: "1.5px rgba(56,189,248,0.8)", color: "transparent" }}
          >
            Instalaciones
          </h1>
        </div>

        <div className="mb-6 flex items-center gap-3">
          <div className="w-8 h-[2px] bg-cyan-400" />
          <p className="font-mono text-cyan-300 text-xs sm:text-sm md:text-base tracking-widest uppercase">
            {titletext}
            <span className="inline-block w-[2px] h-4 bg-cyan-400 ml-1 animate-pulse" />
          </p>
        </div>

        <div className="mb-8 max-w-xl backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-5 border-l-2 border-l-cyan-400 shadow-[inset_0_0_30px_rgba(56,189,248,0.05)]">
          <p className="text-slate-200 text-sm md:text-base lg:text-lg font-medium leading-relaxed mb-3">
            Especializados en mantenimiento y asesoramiento en el área de la electricidad y la electrónica.
          </p>
          <p className="text-slate-300 text-sm md:text-base font-normal leading-relaxed">
            Planos, puesta en marcha y ejecución de proyectos en infraestructura eléctrica.
          </p>
        </div>

        <div>
          <ButtonContact />
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-10 flex gap-2">
        {imgs.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImageIndex(i)}
            className={`transition-all duration-300 rounded-full ${
              i === currentImageIndex
                ? "w-6 h-2 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                : "w-2 h-2 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
};

export default NewHero;