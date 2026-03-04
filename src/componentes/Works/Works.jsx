import Button from './Button';

export default function Works({ src, alt, title, descr }) {
  return (
    <article className="group relative flex flex-col sm:flex-row w-full overflow-hidden bg-slate-900 hover:bg-slate-800/80 transition-colors duration-300">
      {/* Image */}
      <div className="w-full sm:w-48 md:w-56 flex-shrink-0 overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="w-full h-48 sm:h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between gap-3 p-5 flex-1">
        <div className="flex flex-col gap-2">
          {/* Title with left accent */}
          <div className="flex items-start gap-3">
            <span className="mt-1 w-[3px] flex-shrink-0 self-stretch rounded-full bg-gradient-to-b from-cyan-400 to-blue-600 min-h-[1.2em]" />
            <p className="text-white font-black text-lg md:text-xl leading-snug">{title}</p>
          </div>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed pl-6">{descr}</p>
        </div>
        <div className="pl-6">
          <Button />
        </div>
      </div>
    </article>
  );
}