import { useState } from 'react';
import Nav from '../Nav';
import Footer from '../Footer/Footer';
import Whats from '../Contact/Whats';
import { useScrollTop } from '../hooks/useScrollTop';

/**
 * Reusable service page layout with a techy gallery.
 *
 * @param {string}   title       - Page / service title
 * @param {string}   subtitle    - Short label shown in the badge
 * @param {string}   description - Body text shown beside the main image
 * @param {{ groups: Array<{ heading: string, caption: string, images: string[] }> }} groups
 *   Each group renders its own gallery section.
 */
export default function ServicePage({ title, subtitle, description, groups }) {
  useScrollTop();
  return (
    <>
      <Nav />
      <main className="relative min-h-screen bg-slate-950 pt-16 overflow-hidden">

        <div
          className="fixed inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(56,189,248,0.8) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(56,189,248,0.8) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-14 pb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-cyan-400" />
            <span className="font-mono text-cyan-400 text-xs tracking-[0.3em] uppercase">{subtitle}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed border-l-2 border-cyan-400/40 pl-4">
              {description}
            </p>
          )}
        </div>

        <div className="relative z-10 flex flex-col gap-20 pb-20">
          {groups.map((group, gi) => (
            <GallerySection key={gi} group={group} />
          ))}
        </div>
      </main>

      <Whats />
      <Footer />
    </>
  );
}

/* ── Single gallery section ─────────────────────────────── */
function GallerySection({ group }) {
  const [active, setActive] = useState(0);
  const imgs = group.images;

  return (
    <section className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20">
     
      {group.heading && (
        <div className="flex items-center gap-3 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
          <h2 className="text-white font-black text-xl md:text-2xl">{group.heading}</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent ml-2" />
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-6">

        <div className="flex-1 relative overflow-hidden rounded-xl border border-white/10 bg-slate-900 min-h-[300px] md:min-h-[420px]">
       
          <div className="absolute top-3 left-4 flex gap-1.5 z-10">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
            <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
          </div>

          {imgs.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={group.heading}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                i === active ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'
              }`}
            />
          ))}

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent p-5 pt-10">
            <p className="text-white font-bold text-base md:text-lg leading-snug mb-1">
              {group.heading}
            </p>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed line-clamp-3">
              {group.caption}
            </p>
          </div>

          <button
            onClick={() => setActive((p) => (p - 1 + imgs.length) % imgs.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-lg bg-slate-950/70 border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/50 backdrop-blur-sm transition-all duration-200"
          >
            ‹
          </button>
          <button
            onClick={() => setActive((p) => (p + 1) % imgs.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-lg bg-slate-950/70 border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/50 backdrop-blur-sm transition-all duration-200"
          >
            ›
          </button>

          <div className="absolute top-4 right-4 z-10 font-mono text-xs text-slate-400 bg-slate-950/70 px-2 py-1 rounded-md border border-white/10 backdrop-blur-sm">
            {String(active + 1).padStart(2, '0')} / {String(imgs.length).padStart(2, '0')}
          </div>
        </div>

        <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto lg:max-h-[420px] lg:w-28 pb-1 lg:pb-0 scrollbar-hide">
          {imgs.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex-shrink-0 w-20 h-16 lg:w-full lg:h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                i === active
                  ? 'border-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.4)]'
                  : 'border-white/10 hover:border-white/30 opacity-60 hover:opacity-90'
              }`}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}