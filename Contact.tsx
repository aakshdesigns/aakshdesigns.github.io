import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ArrowUpRight, Check, Loader2, X } from 'lucide-react';
import { useRevealContainer } from '@/useReveal';
import { useMagnetic } from '@/useMagnetic';

const EMAILJS_SERVICE_ID  = 'service_kgecr9f';
const EMAILJS_TEMPLATE_ID = 'template_lic5bc6';
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

const projectTypes = [
  'Brand Identity',
  'Logo Design',
  'Social Media Creatives',
  'Advertising Design',
  'Poster Design',
  'Product Advertising',
  'Other',
];

type FormState = { name: string; email: string; type: string; message: string };
type Errors    = Partial<Record<keyof FormState, string>>;

const COOLDOWN_SECONDS = 20;

function validate(form: FormState): Errors {
  const e: Errors = {};
  const name = form.name.trim();
  const email = form.email.trim();
  const message = form.message.trim();

  if (!name) e.name = 'Name is required.';
  else if (name.length < 2) e.name = 'Name is too short.';

  if (!email) e.email = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Please enter a valid email.';

  if (!message) e.message = 'Message is required.';
  else if (message.length < 10) e.message = 'Please add a few more details (min. 10 characters).';

  return e;
}

type Notice = { type: 'success' | 'error'; text: string } | null;

export default function Contact() {
  const [form, setForm]     = useState<FormState>({ name: '', email: '', type: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [notice, setNotice]   = useState<Notice>(null);
  const [cooldown, setCooldown] = useState(0);
  const ref = useRevealContainer();

  useEffect(() => {
    if (!notice) return;
    const t = setTimeout(() => setNotice(null), 5000);
    return () => clearTimeout(t);
  }, [notice]);

  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [cooldown]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending || cooldown > 0) return;
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSending(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          title: form.type,
          message: form.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setNotice({ type: 'success', text: 'Thank you! Your message has been sent successfully.' });
      setForm({ name: '', email: '', type: '', message: '' });
      setCooldown(COOLDOWN_SECONDS);
    } catch {
      setNotice({ type: 'error', text: 'Failed to send message. Please try again.' });
    } finally {
      setSending(false);
    }
  };

  const field = (key: keyof FormState) => ({
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm({ ...form, [key]: e.target.value }),
  });

  // shared glass input class
  const inputCls = (err?: string) =>
    `w-full glass-input text-[#F5F5F5] placeholder-[#2d2d2d] px-4 py-3.5 text-sm rounded-sm ${
      err ? 'border-red-800/60 !border-red-800/60' : ''
    }`;

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#080808] border-t border-[#111]"
    >
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 py-28 lg:py-36">

        {/* Large headline */}
        <div className="mb-20">
          <p className="reveal-item font-mono text-[#333] text-[0.6rem] tracking-[0.35em] uppercase mb-10" style={{ transitionDelay: '0ms' }}>
            Contact
          </p>
          <h2
            className="reveal-item text-[#F5F5F5] text-[clamp(2.5rem,8vw,8rem)] font-bold uppercase leading-[0.86] tracking-[-0.035em] max-w-4xl"
            style={{ transitionDelay: '60ms' }}
          >
            HAVE A<br />PROJECT<br />IN MIND?
          </h2>
          <div className="reveal-item mt-8 flex items-center gap-4" style={{ transitionDelay: '130ms' }}>
            <span className="h-px w-10 bg-[#1a1a1a]" />
            <p className="text-[#333] text-xs font-mono tracking-[0.22em] uppercase">
              Let&apos;s create something great.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left */}
          <div className="reveal-item" style={{ transitionDelay: '160ms' }}>
            <p className="text-[#555] text-base leading-[1.8] max-w-md mb-10">
              Whether it&apos;s a brand identity, advertising creative, poster or social media campaign — reach out and let&apos;s discuss your project.
            </p>
            <p className="text-[#333] text-sm leading-[1.8] max-w-sm">
              Fill in the form and hit send — your message will be delivered straight to my inbox.
            </p>

            <div className="mt-16">
              <button
                type="button"
                onClick={() => document.querySelector<HTMLInputElement>('#name')?.focus()}
                className="group inline-flex items-center gap-3 text-[#F5F5F5] text-lg font-bold uppercase tracking-wide hover:opacity-50 transition-opacity duration-200"
              >
                LET&apos;S WORK TOGETHER
                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal-item" style={{ transitionDelay: '220ms' }}>
              <form onSubmit={onSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block font-mono text-[#333] text-[0.58rem] tracking-[0.22em] uppercase mb-2.5">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      {...field('name')}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-err' : undefined}
                      className={inputCls(errors.name)}
                      placeholder="Your name"
                    />
                    {errors.name && <p id="name-err" className="mt-1.5 text-red-500/80 font-mono text-[0.56rem] tracking-wide">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-mono text-[#333] text-[0.58rem] tracking-[0.22em] uppercase mb-2.5">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      {...field('email')}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-err' : undefined}
                      className={inputCls(errors.email)}
                      placeholder="you@example.com"
                    />
                    {errors.email && <p id="email-err" className="mt-1.5 text-red-500/80 font-mono text-[0.56rem] tracking-wide">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="type" className="block font-mono text-[#333] text-[0.58rem] tracking-[0.22em] uppercase mb-2.5">
                    Project Type
                  </label>
                  <select
                    id="type"
                    {...field('type')}
                    className="w-full glass-input text-[#888] px-4 py-3.5 text-sm rounded-sm appearance-none"
                    style={{ background: 'rgba(255,255,255,0.03)' }}
                  >
                    <option value="" style={{ background: '#111' }}>Select a type…</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t} style={{ background: '#111' }}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-mono text-[#333] text-[0.58rem] tracking-[0.22em] uppercase mb-2.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...field('message')}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'msg-err' : undefined}
                    className={`${inputCls(errors.message)} resize-none`}
                    placeholder="Tell me about your project…"
                  />
                  {errors.message && <p id="msg-err" className="mt-1.5 text-red-500/80 font-mono text-[0.56rem] tracking-wide">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={sending || cooldown > 0}
                  aria-disabled={sending || cooldown > 0}
                  className="group w-full flex items-center justify-center gap-3 bg-[#F5F5F5] text-[#080808] text-[0.7rem] font-bold tracking-[0.16em] uppercase py-4 hover:bg-white transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <>
                      Sending…
                      <Loader2 size={13} className="animate-spin" />
                    </>
                  ) : cooldown > 0 ? (
                    <>
                      Message Sent
                      <span className="font-mono tabular-nums">
                        {String(cooldown).padStart(2, '0')}s
                      </span>
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowUpRight
                        size={13}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </>
                  )}
                </button>
              </form>
          </div>
        </div>
      </div>

      {/* Toast notification */}
      {notice && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 flex items-start gap-3 glass-02 rounded-sm px-5 py-4 max-w-sm shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-300"
        >
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border animate-in zoom-in-50 duration-500 ${
              notice.type === 'success'
                ? 'border-white/10 text-[#F5F5F5] bg-[#F5F5F5]/[0.04]'
                : 'border-red-800/40 text-red-500/90'
            }`}
          >
            {notice.type === 'success' ? <Check size={16} className="animate-in zoom-in duration-300 delay-150" /> : <X size={16} />}
          </span>
          <p className="text-[#F5F5F5] text-sm leading-relaxed pt-1">{notice.text}</p>
          <button
            type="button"
            onClick={() => setNotice(null)}
            aria-label="Dismiss notification"
            className="ml-1 text-[#555] hover:text-[#F5F5F5] transition-colors duration-200"
          >
            <X size={14} />
          </button>
        </div>
      )}
    </section>
  );
}
