export default function Footer() {
  return (
    <footer className="bg-black text-white/70 py-10 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Eilon Grouper — All rights reserved.</p>
        <p className="text-sm">Built with ❤️, AI, and lots of caffeine.</p>
      </div>
    </footer>
  );
}
