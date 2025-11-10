import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/XuAg4PYWfzmy0iW1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-300/80">AI Creator • Technologist</p>
            <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold leading-tight">
              Eilon Grouper
            </h1>
            <p className="mt-4 text-lg text-white/80">
              I create engaging content about artificial intelligence — from practical tutorials to
              thought‑provoking explorations — helping people build, automate, and ship with AI.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#work" className="rounded-md bg-gradient-to-r from-blue-600 to-rose-600 px-5 py-3 font-medium shadow-lg shadow-rose-600/20 ring-1 ring-white/10 hover:from-blue-500 hover:to-rose-500 transition">
                Explore My Work
              </a>
              <a href="#newsletter" className="rounded-md px-5 py-3 font-medium bg-white/5 ring-1 ring-white/15 hover:bg-white/10 transition">
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black" />
    </section>
  );
}
