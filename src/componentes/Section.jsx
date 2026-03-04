import ButtonContact from './Contact/ButtonContact';

export default function Section() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
   
      <video
        src="/imgs/work-galler/paneles/panelsvidcomp.mp4"
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-blue-950/60 to-transparent" />

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(rgba(56,189,248,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.8) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute top-1/2 -translate-y-1/2 left-0 max-w-[85vw] md:max-w-xl lg:max-w-2xl">
  
        <div className="absolute left-0 top-4 bottom-4 w-[3px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent rounded-full" />

        <div className="ml-[3px] bg-slate-950/70 backdrop-blur-md border border-white/10 border-l-0 rounded-r-xl px-6 py-8 md:px-8 md:py-10 flex flex-col gap-5">
  
          <div className="flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-cyan-400">
              Experiencia comprobada
            </span>
          </div>

          <p className="text-slate-100 text-base md:text-xl lg:text-2xl font-semibold leading-snug">
            Más de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-black">
              20 años
            </span>{" "}
            de experiencia certificada por nuestros clientes.
          </p>

          <p className="text-slate-300 text-sm md:text-base lg:text-xl font-medium leading-relaxed">
            Asesoría de primera mano para soluciones energéticas sustentables.
          </p>

          <ButtonContact />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" />
    </div>
  );
}