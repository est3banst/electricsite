export default function Whats() {
  return (
    <a
      href="https://wa.me/+59898414718?text=Hola,%20estoy%20interesado%20en%20un%20presupuesto%20para%20.."
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-5 right-4 z-[9989]"
    >
  
      <div className="absolute inset-0 rounded-full bg-emerald-500/20 scale-100 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md" />

      <div className="relative flex items-center gap-0 group-hover:gap-2 w-12 group-hover:w-40 transition-all duration-300 ease-in-out h-12 rounded-full bg-slate-900 border border-emerald-500/40 group-hover:border-emerald-400 shadow-[0_0_16px_rgba(16,185,129,0.2)] group-hover:shadow-[0_0_24px_rgba(16,185,129,0.4)] px-3">

        <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-red-500 border-2 border-slate-950 flex items-center justify-center text-[9px] font-bold text-white shadow-[0_0_6px_rgba(239,68,68,0.8)] z-9999 animate-pulse">
          1
        </span>

        <svg
          className="flex-shrink-0 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-200"
          width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5"
          stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
          <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
        </svg>

        <span className="whitespace-nowrap font-mono text-xs font-bold tracking-wider uppercase text-emerald-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100 ml-1">
          WhatsApp
        </span>
      </div>
    </a>
  );
}