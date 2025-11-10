import { useState } from 'react';
import { MailCheck } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  return (
    <section id="newsletter" className="relative bg-gradient-to-b from-black via-black to-[#06060e] text-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-12">
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold">Get the latest in AI — weekly.</h3>
            <p className="mt-2 text-white/70">
              Short, practical notes on tools, prompts, and workflows. No spam. Unsubscribe anytime.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@domain.com"
                className="w-full sm:flex-1 rounded-md bg-black/40 border border-white/15 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-600 to-rose-600 px-5 py-3 font-medium hover:from-blue-500 hover:to-rose-500 transition disabled:opacity-60"
                disabled={status === 'loading' || status === 'success'}
              >
                {status === 'success' ? <MailCheck size={18} /> : null}
                {status === 'loading' ? 'Subscribing…' : status === 'success' ? 'Subscribed' : 'Subscribe'}
              </button>
            </form>
            {status === 'error' && (
              <p className="mt-2 text-sm text-rose-400">Please enter a valid email.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
