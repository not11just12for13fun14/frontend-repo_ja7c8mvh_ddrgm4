import { Film, Bot, Cpu, Rocket } from 'lucide-react';

const items = [
  {
    icon: Film,
    title: 'Videos & Tutorials',
    desc: 'Deep-dives, walkthroughs, and hands-on projects covering practical AI tools and workflows.',
    hue: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Bot,
    title: 'AI Automation',
    desc: 'Agents, prompts, and pipelines that save hours — shipped with clarity and real examples.',
    hue: 'from-rose-500 to-orange-500',
  },
  {
    icon: Cpu,
    title: 'Model Insights',
    desc: 'Understand models and frameworks the simple way: what matters, what doesn’t, and why.',
    hue: 'from-fuchsia-500 to-purple-500',
  },
  {
    icon: Rocket,
    title: 'Build Faster',
    desc: 'Templates, starters, and techniques to go from idea to production quickly and confidently.',
    hue: 'from-sky-500 to-blue-600',
  },
];

export default function ContentGrid() {
  return (
    <section id="work" className="relative bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">What I Make</h2>
          <p className="mt-2 text-white/70 max-w-2xl">
            A mix of educational content and experimental builds — always focused on clarity,
            speed, and real-world impact.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc, hue }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition relative overflow-hidden">
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br ${hue} mix-blend-soft-light`} />
              <div className="relative z-10">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/20">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
