import { useForm, ValidationError } from '@formspree/react';
import { API_KEY } from '../../data/form';

export default function Form() {
  const [state, handleSubmit] = useForm(API_KEY);

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 p-8 rounded-xl border border-cyan-400/30 bg-cyan-400/5 backdrop-blur-sm text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-300 text-2xl">✓</span>
        <p className="text-cyan-300 font-bold text-lg">¡Gracias por contactarnos!</p>
        <p className="text-slate-400 text-sm">Nos comunicaremos a la brevedad.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 w-full backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 md:p-8"
    >
      {/* Form header */}
      <div className="flex items-center gap-3 mb-1">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
        <p className="font-mono text-xs text-cyan-400 tracking-[0.3em] uppercase">Dejanos un mensaje</p>
      </div>

      {/* Name */}
      <div className="relative group">
        <input
          required
          autoComplete="off"
          type="text"
          id="name"
          name="name"
          placeholder=" "
          className="peer w-full bg-slate-900/60 border border-white/10 rounded-lg px-4 pt-6 pb-2 text-white text-sm outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30 transition-all duration-200 placeholder-transparent"
        />
        <label
          htmlFor="name"
          className="absolute left-4 top-2 text-xs font-mono text-slate-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-cyan-400 transition-all duration-200 pointer-events-none"
        >
          Nombre
        </label>
        <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-xs mt-1 pl-1" />
      </div>

      {/* Email */}
      <div className="relative group">
        <input
          required
          autoComplete="off"
          type="email"
          id="email"
          name="email"
          placeholder=" "
          className="peer w-full bg-slate-900/60 border border-white/10 rounded-lg px-4 pt-6 pb-2 text-white text-sm outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30 transition-all duration-200 placeholder-transparent"
        />
        <label
          htmlFor="email"
          className="absolute left-4 top-2 text-xs font-mono text-slate-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-cyan-400 transition-all duration-200 pointer-events-none"
        >
          E-mail
        </label>
        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1 pl-1" />
      </div>

      {/* Message */}
      <div className="relative group">
        <textarea
          required
          id="message"
          name="message"
          rows="4"
          placeholder=" "
          className="peer w-full bg-slate-900/60 border border-white/10 rounded-lg px-4 pt-6 pb-2 text-white text-sm outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30 transition-all duration-200 placeholder-transparent resize-none"
        />
        <label
          htmlFor="message"
          className="absolute left-4 top-2 text-xs font-mono text-slate-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-cyan-400 transition-all duration-200 pointer-events-none"
        >
          Mensaje
        </label>
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1 pl-1" />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={state.submitting}
        className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 font-black text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(34,211,238,0.25)] hover:shadow-[0_0_28px_rgba(34,211,238,0.4)] transition-all duration-300"
      >
        {state.submitting ? (
          <>
            <span className="w-4 h-4 border-2 border-slate-950/30 border-t-slate-950 rounded-full animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            Enviar mensaje
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </>
        )}
      </button>
    </form>
  );
}