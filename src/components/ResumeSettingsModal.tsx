import React, { useState, useEffect } from 'react';
import { X, Upload, Link as LinkIcon, FileText, Check, AlertCircle, RefreshCw, Download, ExternalLink } from 'lucide-react';
import { RESUME_CONFIG } from '../data/portfolioData';

interface ResumeSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdateResumeUrl: (url: string) => void;
  currentResumeUrl: string;
}

export const ResumeSettingsModal: React.FC<ResumeSettingsModalProps> = ({
  isOpen,
  onClose,
  onUpdateResumeUrl,
  currentResumeUrl
}) => {
  const [customUrl, setCustomUrl] = useState('');
  const [uploadedFileName, setUploadedFileName] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('custom_resume_url');
    if (saved) {
      setCustomUrl(saved);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSaveCustomUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (customUrl.trim()) {
      localStorage.setItem('custom_resume_url', customUrl.trim());
      onUpdateResumeUrl(customUrl.trim());
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2500);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        alert('Please select a valid PDF document.');
        return;
      }
      const objectUrl = URL.createObjectURL(file);
      localStorage.setItem('custom_resume_url', objectUrl);
      setUploadedFileName(file.name);
      onUpdateResumeUrl(objectUrl);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2500);
    }
  };

  const handleResetToDefault = () => {
    localStorage.removeItem('custom_resume_url');
    setCustomUrl('');
    setUploadedFileName('');
    onUpdateResumeUrl(RESUME_CONFIG.localPdfPath);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 mb-4">
          <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Resume Settings & Update
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Easily update or change your resume at any time
            </p>
          </div>
        </div>

        {saveSuccess && (
          <div className="mb-4 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs flex items-center space-x-2">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>Resume link updated successfully!</span>
          </div>
        )}

        <div className="space-y-5 text-sm">
          {/* Method 1: Google Drive or Cloud Link */}
          <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/40">
            <h4 className="font-semibold text-gray-900 dark:text-white flex items-center space-x-2 mb-1.5">
              <LinkIcon className="w-4 h-4 text-blue-600" />
              <span>Method 1: Google Drive or Cloud Link</span>
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
              Paste a public Google Drive share link, Dropbox link, or web URL:
            </p>
            <form onSubmit={handleSaveCustomUrl} className="flex gap-2">
              <input
                type="url"
                value={customUrl}
                onChange={(e) => setCustomUrl(e.target.value)}
                placeholder="https://drive.google.com/file/d/..."
                className="flex-1 px-3 py-2 text-xs rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-lg text-xs font-semibold hover:opacity-90 transition"
              >
                Save
              </button>
            </form>
          </div>

          {/* Method 2: Direct Browser Upload (Instant preview) */}
          <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/40">
            <h4 className="font-semibold text-gray-900 dark:text-white flex items-center space-x-2 mb-1.5">
              <Upload className="w-4 h-4 text-emerald-600" />
              <span>Method 2: Select New PDF from Computer</span>
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
              Instantly replace the active resume file in this browser:
            </p>
            <label className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-xs font-medium cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition">
              <Upload className="w-3.5 h-3.5" />
              <span>{uploadedFileName || 'Choose PDF File...'}</span>
              <input
                type="file"
                accept="application/pdf"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>

          {/* Method 3: Permanent Code Replacement Guide */}
          <div className="p-4 rounded-xl border border-blue-100 dark:border-blue-900/50 bg-blue-50/40 dark:bg-blue-950/20 text-xs text-blue-900 dark:text-blue-200 space-y-1.5">
            <div className="flex items-center space-x-1.5 font-semibold">
              <AlertCircle className="w-4 h-4 text-blue-600" />
              <span>Permanent Codebase Update for Deployment:</span>
            </div>
            <p className="text-[11px] leading-relaxed text-blue-800/90 dark:text-blue-300/80">
              Whenever you have a new resume version, simply drop your new file into your project folder at{' '}
              <code className="px-1 py-0.5 rounded bg-blue-100 dark:bg-blue-900 font-mono">
                public/Krishna_Paswan_Resume.pdf
              </code>{' '}
              (using the same filename). It will automatically update everywhere!
            </p>
          </div>

          {/* Action Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-800">
            <button
              onClick={handleResetToDefault}
              className="text-xs text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center space-x-1"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset to Default PDF</span>
            </button>

            <a
              href={currentResumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Krishna_Paswan_Resume.pdf"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-gray-900 text-white dark:bg-white dark:text-gray-900 text-xs font-semibold hover:opacity-90 transition"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Test Download</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
