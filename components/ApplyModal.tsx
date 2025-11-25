
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Loader2, Send, ShieldCheck, Mail } from 'lucide-react';

// INSTRUCTIONS FOR GOOGLE SHEETS CONNECTION:
// 1. Create a Google Sheet.
// 2. Go to Extensions > Apps Script.
// 3. Paste the following code:
/*
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([new Date(), data.name, data.company, data.email, data.description]);
  return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' })).setMimeType(ContentService.MimeType.JSON);
}
*/
// 4. Deploy > New Deployment > Web App.
// 5. Set "Who has access" to "Anyone".
// 6. Copy the Web App URL and paste it below inside the quotes.

const GOOGLE_FORM_URL = import.meta.env.VITE_GOOGLE_FORM_URL || "";

interface ApplyModalProps {
  onClose: () => void;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    description: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      if (!GOOGLE_FORM_URL) {
        // MOCK SUBMISSION FOR DEMO PURPOSES
        await new Promise(resolve => setTimeout(resolve, 2000));
        setStatus('success');
      } else {
        // REAL SUBMISSION TO GOOGLE FORMS
        const formBody = new FormData();
        formBody.append(import.meta.env.VITE_GOOGLE_FORM_ENTRY_NAME, formData.name);
        formBody.append(import.meta.env.VITE_GOOGLE_FORM_ENTRY_COMPANY, formData.company);
        formBody.append(import.meta.env.VITE_GOOGLE_FORM_ENTRY_EMAIL, formData.email);
        formBody.append(import.meta.env.VITE_GOOGLE_FORM_ENTRY_DESCRIPTION, formData.description);

        // Using 'no-cors' mode to avoid CORS errors from Google Forms
        await fetch(GOOGLE_FORM_URL, {
          method: 'POST',
          body: formBody,
          mode: 'no-cors'
        });
        
        // Since 'no-cors' returns an opaque response, we assume success if no network error threw.
        setStatus('success');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setStatus('error');
      setErrorMessage('Uplink failed. Connection refused by remote server.');
    }
  };

  // Auto-close on success after delay
  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status, onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm cursor-pointer"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-lg bg-navy-950 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
      >
        {/* Tech Decor - Corner Accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-pacific-500"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-pacific-500"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-pacific-500"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-pacific-500"></div>

        {/* Scanline Effect */}
        <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(transparent_0%,rgba(255,255,255,0.1)_50%,transparent_51%)] bg-[length:100%_4px]"></div>

        {/* Content */}
        <div className="relative z-10 p-8 md:p-10">
          
          {/* Header */}
          <div className="flex justify-between items-start mb-8 border-b border-white/10 pb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                 <div className="w-2 h-2 bg-green-500 animate-pulse"></div>
                 <span className="text-xs font-mono text-pacific-400 tracking-widest uppercase">Secure Connection Est.</span>
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Apply for Membership</h2>
            </div>
            <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {status === 'success' ? (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="py-12 flex flex-col items-center text-center"
            >
              <div className="relative mb-6">
                 <div className="absolute inset-0 bg-pacific-500/20 rounded-full blur-xl animate-pulse"></div>
                 <ShieldCheck className="w-20 h-20 text-pacific-400 relative z-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Application Received</h3>
              <p className="text-slate-400 max-w-xs mx-auto mb-8">
                Your application has been received. We will review it and get back to you as soon as possible.
              </p>
              <div className="w-full bg-navy-900 h-1 mt-4 overflow-hidden">
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3 }}
                  className="h-full bg-pacific-500"
                />
              </div>
              <p className="text-xs font-mono text-slate-500 mt-2">THANK YOU FOR YOUR APPLICATION</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-pacific-400 uppercase tracking-wider">Preferred Name *</label>
                  <input 
                    type="text" 
                    name="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-navy-900 border border-white/10 p-3 text-white focus:outline-none focus:border-pacific-500 transition-colors placeholder:text-slate-600 font-sans"
                    placeholder="J. Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-pacific-400 uppercase tracking-wider">Company *</label>
                  <input 
                    type="text" 
                    name="company" 
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-navy-900 border border-white/10 p-3 text-white focus:outline-none focus:border-pacific-500 transition-colors placeholder:text-slate-600 font-sans"
                    placeholder="Company Name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-pacific-400 uppercase tracking-wider">Email *</label>
                <div className="relative">
                    <input 
                      type="email" 
                      name="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-navy-900 border border-white/10 p-3 pl-10 text-white focus:outline-none focus:border-pacific-500 transition-colors placeholder:text-slate-600 font-sans"
                      placeholder="name@organization.com"
                    />
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-500 uppercase tracking-wider flex justify-between">
                   <span>Company Description (Optional)</span>
                   <span>TXT</span>
                </label>
                <textarea 
                  name="description" 
                  rows={3}
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full bg-navy-900 border border-white/10 p-3 text-white focus:outline-none focus:border-pacific-500 transition-colors placeholder:text-slate-600 font-sans resize-none"
                  placeholder="Brief overview..."
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-900/20 border border-red-500/30 text-red-200 text-sm">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full group relative px-6 py-4 bg-white text-navy-900 font-bold uppercase tracking-widest hover:bg-pacific-500 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      SUBMIT
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>
      </motion.div>
    </div>
  );
};
