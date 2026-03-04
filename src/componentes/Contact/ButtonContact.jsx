const ButtonContact = () => {
  return (
    <a
      href="tel://+59898414718"
      className="group inline-flex flex-col items-center w-max px-6 py-3 rounded-lg
        bg-emerald-600 border border-emerald-500
        hover:bg-transparent hover:border-cyan-400
        shadow-[0_0_20px_rgba(5,132,6,0.3)] hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]
        transition-all duration-300 uppercase"
    >
      <div className="flex items-center gap-2">
        <p className="text-slate-50 group-hover:text-cyan-300 font-black text-sm md:text-base lg:text-xl transition-colors duration-300">
          Contáctanos
        </p>
        <svg
          className="w-5 md:w-6 text-slate-50 group-hover:text-cyan-300 animate-pulse transition-colors duration-300"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
          <path d="M15 9l5 -5" />
          <path d="M15 5l0 4l4 0" />
        </svg>
      </div>
      <small className="font-light capitalize text-xs md:text-sm lg:text-base text-slate-200 group-hover:text-slate-400 transition-colors duration-300">
        Lunes a Viernes 9:00 - 18:00
      </small>
    </a>
  );
};

export default ButtonContact;