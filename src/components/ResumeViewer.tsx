import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDownToLine, ArrowLeft, ExternalLink, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const isResumeHash = () => window.location.hash === '#resume';

/* Full-screen resume page, opened by any link to #resume. */
export const ResumeViewer = () => {
  const [open, setOpen] = useState(isResumeHash);
  const url = encodeURI(personalInfo.resumeUrl);

  useEffect(() => {
    const onHash = () => setOpen(isResumeHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const close = () => {
    history.replaceState(null, '', window.location.pathname + window.location.search);
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="resume"
          role="dialog"
          aria-modal="true"
          aria-label="Resume"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.55, ease: [0.6, 0, 0.3, 1] }}
          className="paper-dots fixed inset-0 z-[60] flex flex-col text-ink"
        >
          <header className="border-b-2 border-ink/10 bg-paper/85 backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
              <button onClick={close} className="btn bg-paper px-3 py-1.5 text-sm text-ink sm:px-4">
                <ArrowLeft size={16} /> Back
              </button>
              <div className="hidden items-center gap-2 md:flex">
                <span className="font-anton text-xl uppercase">{personalInfo.name}</span>
                <span className="tag -rotate-3 bg-mustard text-ink">Resume</span>
              </div>
              <div className="flex items-center gap-3">
                <a href={url} download className="btn bg-orange px-3 py-1.5 text-sm text-paper sm:px-4">
                  Download <ArrowDownToLine size={16} />
                </a>
                <button onClick={close} aria-label="Close resume" className="btn bg-paper p-2 text-ink">
                  <X size={18} />
                </button>
              </div>
            </div>
          </header>

          <main className="flex min-h-0 flex-1 p-3 sm:p-6">
            <div className="card mx-auto flex w-full max-w-5xl flex-1 overflow-hidden">
              {/* phones often can't render PDFs inline, so the fallback offers both actions */}
              <object data={`${url}#view=FitH`} type="application/pdf" className="h-full w-full" aria-label="Resume PDF">
                <div className="grid h-full place-items-center p-6 text-center">
                  <div>
                    <img src="/me/books.webp" alt="" className="mx-auto w-32 -rotate-3" />
                    <h2 className="mt-4 font-anton text-3xl uppercase">Resume preview</h2>
                    <p className="mt-2 text-ink/70">This browser can't show the PDF inline.</p>
                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                      <a href={url} target="_blank" rel="noreferrer" className="btn bg-paper text-ink">
                        Open <ExternalLink size={18} />
                      </a>
                      <a href={url} download className="btn bg-orange text-paper">
                        Download <ArrowDownToLine size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </object>
            </div>
          </main>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
