import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
      setEmail('');
      setMessage('');
    }, 800);
  };

  return (
    <section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-28"
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80 text-sm sm:text-base">
        Please contact me directly at{' '}
        <a className="underline font-semibold text-gray-950 dark:text-white" href="mailto:kpaswan9999@gmail.com">
          kpaswan9999@gmail.com
        </a>{' '}
        or through this form.
      </p>

      {submitted ? (
        <div className="mt-10 p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 flex items-center justify-center space-x-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <span className="font-medium text-sm">Thank you for your message! Krishna will get back to you promptly.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-10 flex flex-col dark:text-black">
          <input
            type="email"
            required
            maxLength={500}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="h-14 px-4 rounded-lg borderBlack bg-white dark:bg-white/90 dark:focus:bg-white transition-all outline-none"
          />

          <textarea
            required
            maxLength={5000}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="h-52 my-3 rounded-lg borderBlack p-4 bg-white dark:bg-white/90 dark:focus:bg-white transition-all outline-none resize-none"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:text-gray-900 disabled:scale-100 disabled:bg-opacity-65 self-center"
          >
            {isSubmitting ? (
              <span>Sending...</span>
            ) : (
              <>
                <span>Submit</span>{' '}
                <Send className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </>
            )}
          </button>
        </form>
      )}
    </section>
  );
};
