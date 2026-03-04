export default function Button() {
  return (
    <button className="group/btn inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-widest text-cyan-300 border border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_16px_rgba(34,211,238,0.15)] transition-all duration-300">
      Más información
      <span className="flex items-center justify-center w-6 h-6 rounded-md bg-cyan-400/10 group-hover/btn:bg-cyan-400/20 group-hover/btn:translate-x-1 transition-all duration-300">
        <svg height="14" width="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
        </svg>
      </span>
    </button>
  );
}