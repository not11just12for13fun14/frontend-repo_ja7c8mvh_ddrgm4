import { Github, Twitter, Youtube, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-gradient-to-br from-blue-500 to-red-500 shadow ring-1 ring-white/20" />
          <span className="text-white font-semibold tracking-tight">Eilon Grouper</span>
        </a>
        <nav className="flex items-center gap-3">
          <a
            href="https://youtube.com" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 transition"
            aria-label="YouTube"
          >
            <Youtube size={18} />
            <span className="hidden sm:inline">YouTube</span>
          </a>
          <a
            href="https://twitter.com" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 transition"
            aria-label="Twitter/X"
          >
            <Twitter size={18} />
            <span className="hidden sm:inline">Twitter</span>
          </a>
          <a
            href="https://github.com" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 transition"
            aria-label="GitHub"
          >
            <Github size={18} />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="mailto:hello@eilongrouper.ai"
            className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm bg-gradient-to-r from-blue-600 to-rose-600 text-white hover:from-blue-500 hover:to-rose-500 transition"
          >
            <Mail size={18} />
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
