import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Mail, ArrowRight, ArrowLeft, Check } from 'lucide-react';

const services = [
  { name: 'Wedding', description: 'Full-day coverage for your special day.' },
  { name: 'Portrait', description: 'Personal, family, or professional sessions.' },
  { name: 'Event', description: 'Corporate functions, parties, and celebrations.' },
  { name: 'Commercial', description: 'Branding, product, and lifestyle shoots.' },
  { name: 'Real Estate', description: 'Architectural and property photography.' },
  { name: 'Other', description: 'Custom projects and general inquiries.' },
];

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);
  
  // Reset form when modal is closed
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep(1);
        setFormData({ service: '', date: '', time: '', name: '', email: '', message: '' });
      }, 300); // Wait for closing animation
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const handleSelectService = (service: string) => {
    setFormData(prev => ({ ...prev, service }));
    handleNext();
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const steps = ['Service', 'Date & Time', 'Details'];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#0A0A0A]/90 border border-white/10 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col m-4 animate-slide-up"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6 border-b border-white/10 flex justify-between items-center flex-shrink-0">
          <div>
            <h2 className="font-serif text-2xl text-white">Book a Session</h2>
            <p className="text-sm text-gray-400">Step {step} of {steps.length}: {steps[step-1]}</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-white/5 h-1">
            <div className="bg-accent h-1 transition-all duration-500" style={{ width: `${(step / steps.length) * 100}%` }}></div>
        </div>

        <div className="p-8 overflow-y-auto">
          {step === 1 && (
            <div>
              <h3 className="text-xl font-semibold text-gray-200 mb-6 text-center">What service are you interested in?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map(s => (
                  <button
                    key={s.name}
                    onClick={() => handleSelectService(s.name)}
                    className="p-4 border border-white/10 rounded-lg text-left group hover:border-accent hover:bg-white/5 transition-all duration-300"
                  >
                    <h4 className="font-bold text-white text-base mb-1 group-hover:text-accent">{s.name}</h4>
                    <p className="text-xs text-gray-400">{s.description}</p>
                  </button>
                ))}
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-200 mb-6 text-center">Select a preferred date and time</h3>
                <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Date</label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent" />
                </div>
                <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Time</label>
                    <input type="time" name="time" value={formData.time} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent" />
                </div>
            </div>
          )}
          {step === 3 && (
            <form action="https://formsubmit.co/brianisaji40@gmail.com" method="POST">
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="Service" value={formData.service} />
                <input type="hidden" name="Preferred Date" value={formData.date} />
                <input type="hidden" name="Preferred Time" value={formData.time} />
                <h3 className="text-xl font-semibold text-gray-200 mb-6 text-center">Your Contact Information</h3>
                <div className="space-y-6">
                    <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent" />
                    </div>
                    <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent" />
                    </div>
                     <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Message (Optional)</label>
                        <textarea name="message" value={formData.message} onChange={handleChange} rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent resize-none"></textarea>
                    </div>
                </div>
                 <button type="submit" className="w-full mt-8 bg-accent text-primary font-bold uppercase tracking-[0.2em] py-4 rounded-xl hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2">
                    Submit Request
                    <Check size={16} />
                 </button>
            </form>
          )}
        </div>

        <div className="p-6 border-t border-white/10 mt-auto flex-shrink-0">
          <div className="flex justify-between items-center">
            <button
              onClick={handleBack}
              disabled={step === 1}
              className="px-6 py-2 text-xs font-bold uppercase tracking-widest text-gray-400 border border-white/20 rounded-full hover:border-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowLeft size={14} className="inline mr-2" /> Back
            </button>
            {step < 3 && (
                <button
                onClick={handleNext}
                disabled={(step === 2 && (!formData.date || !formData.time))}
                className="px-6 py-2 text-xs font-bold uppercase tracking-widest text-primary bg-accent rounded-full hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                Next <ArrowRight size={14} className="inline ml-2" />
                </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
