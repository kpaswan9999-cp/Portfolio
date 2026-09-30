import React, { useEffect } from 'react';
import { X, ExternalLink, Download, Award, CheckCircle2, ShieldCheck } from 'lucide-react';

export interface CertificateModalData {
  title: string;
  issuer: string;
  date?: string;
  certificateUrl?: string;
  certificateType?: 'image' | 'pdf';
  certificateId?: string;
  rank?: string;
  description?: string;
}

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificate: CertificateModalData | null;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  certificate
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !certificate) return null;

  const isPdf = certificate.certificateType === 'pdf' || certificate.certificateUrl?.endsWith('.pdf');

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden z-10">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 sm:px-7 sm:py-5 border-b border-gray-100 dark:border-gray-800 bg-gray-50/70 dark:bg-gray-800">
          <div className="flex items-center gap-3 pr-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 dark:bg-amber-400/20 dark:text-amber-400 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white leading-snug">
                  {certificate.title}
                </h3>
                <span className="inline-flex items-center gap-1 text-[0.7rem] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/20 dark:text-emerald-400 border border-emerald-500/20">
                  <ShieldCheck className="w-3 h-3" /> Verified Credential
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                Issued by <span className="font-medium text-gray-700 dark:text-gray-300">{certificate.issuer}</span>
                {certificate.date ? ` • ${certificate.date}` : ''}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 transition shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Display Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-gray-100/60 dark:bg-gray-950 flex flex-col items-center justify-center min-h-[320px] sm:min-h-[460px]">
          {certificate.certificateUrl ? (
            isPdf ? (
              <div className="w-full h-[65vh] rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-800 bg-white">
                <iframe
                  src={`${certificate.certificateUrl}#toolbar=0&navpanes=0`}
                  title={certificate.title}
                  className="w-full h-full border-none"
                />
              </div>
            ) : (
              <div className="relative group max-h-[65vh] overflow-hidden rounded-xl shadow-lg border border-gray-200/80 dark:border-gray-800 bg-white flex items-center justify-center">
                <img
                  src={certificate.certificateUrl}
                  alt={certificate.title}
                  className="max-h-[65vh] w-auto object-contain rounded-xl"
                />
              </div>
            )
          ) : (
            <div className="text-center py-12 text-gray-500 dark:text-gray-400">
              <CheckCircle2 className="w-12 h-12 mx-auto text-emerald-500 mb-3" />
              <p className="font-semibold text-lg">Official Credential Verified</p>
              <p className="text-sm text-gray-500 mt-1 max-w-md">
                This achievement was awarded by {certificate.issuer}.
              </p>
            </div>
          )}

          {/* Certificate metadata footer note */}
          {certificate.certificateId && (
            <div className="mt-3 text-xs font-mono text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-800">
              Certificate ID: <span className="font-semibold text-gray-800 dark:text-gray-200">{certificate.certificateId}</span>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="flex items-center justify-between px-5 py-3.5 sm:px-7 sm:py-4 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
          <div className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block">
            {certificate.rank || 'Official Proof of Participation & Achievement'}
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            {certificate.certificateUrl && (
              <>
                <a
                  href={certificate.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-white/10 dark:hover:bg-white/20 dark:text-gray-200 transition"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Open Fullscreen
                </a>
                <a
                  href={certificate.certificateUrl}
                  download
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-gray-900 hover:bg-gray-950 text-white dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 transition shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" /> Download
                </a>
              </>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
