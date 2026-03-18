import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Loader2, CheckCircle2, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const MembershipModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  
  const [step, setStep] = useState<'form' | 'submitting' | 'success'>('form');
  const [formData, setFormData] = useState({
    email: '',
    fullNameAr: '',
    fullNameFr: '',
    dob: '',
    address: '',
    phone: '',
    education: '',
    interests: {
      cultural: false,
      advocacy: false,
      economic: false,
    },
    previousExperience: 'no',
    prevAssocName: '',
    prevAssocRole: 'member',
    nationalId: '',
    confirmation: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.fullNameAr) newErrors.fullNameAr = 'Full Name (Arabic) is required';
    if (!formData.dob) newErrors.dob = 'Date of Birth is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.phone) newErrors.phone = 'Phone Number is required';
    if (!formData.education) newErrors.education = 'Education Level is required';
    
    const hasInterest = formData.interests.cultural || formData.interests.advocacy || formData.interests.economic;
    if (!hasInterest) newErrors.interests = 'Please select at least one interest';
    
    if (formData.previousExperience === 'yes') {
      if (!formData.prevAssocName) newErrors.prevAssocName = 'Association details are required';
    }

    if (!formData.nationalId) newErrors.nationalId = 'National ID Number is required';
    if (!formData.confirmation) newErrors.confirmation = 'You must confirm the information';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setStep('submitting');
      setTimeout(() => {
        setStep('success');
      }, 2000);
    }
  };

  const handleClose = () => {
    if (step === 'submitting') return;
    onClose();
    setTimeout(() => {
      setStep('form');
      setFormData({
        email: '', fullNameAr: '', fullNameFr: '', dob: '', address: '', phone: '',
        education: '', interests: { cultural: false, advocacy: false, economic: false },
        previousExperience: 'no', prevAssocName: '', prevAssocRole: 'member',
        nationalId: '', confirmation: false
      });
      setErrors({});
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-brand-text-primary/5 shrink-0 bg-white z-10">
              <div>
                <h3 className="text-2xl font-bold text-brand-text-primary">Join Our Community</h3>
                <p className="text-sm text-brand-text-secondary mt-1">Become a member of Association Maroc de l'Avenir.</p>
              </div>
              <button 
                onClick={handleClose}
                className="w-10 h-10 rounded-full bg-brand-bg-secondary flex items-center justify-center text-brand-text-primary hover:bg-brand-red hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6 lg:p-8">
              <AnimatePresence mode="wait">
                {step === 'form' && (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-10"
                  >
                    {/* Section 1 */}
                    <section>
                      <h4 className="text-sm font-bold text-brand-text-secondary uppercase tracking-widest mb-6 flex items-center gap-2">
                        <span className="w-6 h-px bg-brand-green"></span>
                        1. Personal Information
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col-span-1 md:col-span-2">
                          <label className="block text-xs font-bold text-brand-text-primary mb-2">Email Address *</label>
                          <input 
                            type="email" 
                            className={`w-full p-4 rounded-xl bg-brand-bg-secondary border-none focus:ring-2 transition-all ${errors.email ? 'ring-2 ring-brand-red' : 'focus:ring-brand-green'}`}
                            value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                            placeholder="your.email@example.com"
                          />
                          {errors.email && <p className="text-brand-red text-xs mt-1 font-medium">{errors.email}</p>}
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-brand-text-primary mb-2">Full Name (Arabic) *</label>
                          <input 
                            type="text" dir="rtl"
                            className={`w-full p-4 rounded-xl bg-brand-bg-secondary border-none focus:ring-2 transition-all ${errors.fullNameAr ? 'ring-2 ring-brand-red' : 'focus:ring-brand-green'}`}
                            value={formData.fullNameAr} onChange={e => setFormData({...formData, fullNameAr: e.target.value})}
                            placeholder="الاسم الكامل"
                          />
                          {errors.fullNameAr && <p className="text-brand-red text-xs mt-1 font-medium">{errors.fullNameAr}</p>}
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-brand-text-primary mb-2">Full Name (French)</label>
                          <input 
                            type="text" 
                            className="w-full p-4 rounded-xl bg-brand-bg-secondary border-none focus:ring-2 focus:ring-brand-green transition-all"
                            value={formData.fullNameFr} onChange={e => setFormData({...formData, fullNameFr: e.target.value})}
                            placeholder="Nom complet"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-brand-text-primary mb-2">Date of Birth *</label>
                          <input 
                            type="date" 
                            className={`w-full p-4 rounded-xl bg-brand-bg-secondary border-none focus:ring-2 transition-all text-brand-text-primary ${errors.dob ? 'ring-2 ring-brand-red' : 'focus:ring-brand-green'}`}
                            value={formData.dob} onChange={e => setFormData({...formData, dob: e.target.value})}
                          />
                          {errors.dob && <p className="text-brand-red text-xs mt-1 font-medium">{errors.dob}</p>}
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-brand-text-primary mb-2">Phone Number *</label>
                          <input 
                            type="tel" 
                            className={`w-full p-4 rounded-xl bg-brand-bg-secondary border-none focus:ring-2 transition-all ${errors.phone ? 'ring-2 ring-brand-red' : 'focus:ring-brand-green'}`}
                            value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                            placeholder="+212 600 000 000"
                          />
                          {errors.phone && <p className="text-brand-red text-xs mt-1 font-medium">{errors.phone}</p>}
                        </div>
                        <div className="col-span-1 md:col-span-2">
                          <label className="block text-xs font-bold text-brand-text-primary mb-2">Address *</label>
                          <input 
                            type="text" 
                            className={`w-full p-4 rounded-xl bg-brand-bg-secondary border-none focus:ring-2 transition-all ${errors.address ? 'ring-2 ring-brand-red' : 'focus:ring-brand-green'}`}
                            value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})}
                            placeholder="Your physical address"
                          />
                          {errors.address && <p className="text-brand-red text-xs mt-1 font-medium">{errors.address}</p>}
                        </div>
                        <div className="col-span-1 md:col-span-2">
                          <label className="block text-xs font-bold text-brand-text-primary mb-2">Education Level *</label>
                          <select 
                            className={`w-full p-4 rounded-xl bg-brand-bg-secondary border-none focus:ring-2 outline-none transition-all ${errors.education ? 'ring-2 ring-brand-red' : 'focus:ring-brand-green'}`}
                            value={formData.education} onChange={e => setFormData({...formData, education: e.target.value})}
                          >
                            <option value="">Select an option</option>
                            <option value="primary">Primary</option>
                            <option value="middle">Middle School</option>
                            <option value="high">High School</option>
                            <option value="university">University / Professional Training</option>
                          </select>
                          {errors.education && <p className="text-brand-red text-xs mt-1 font-medium">{errors.education}</p>}
                        </div>
                      </div>
                    </section>

                    {/* Section 2 */}
                    <section>
                      <h4 className="text-sm font-bold text-brand-text-secondary uppercase tracking-widest mb-6 flex items-center gap-2">
                        <span className="w-6 h-px bg-brand-green"></span>
                        2. Interests *
                      </h4>
                      <div className="space-y-3">
                        <label className="flex items-center gap-4 p-4 rounded-xl border border-brand-text-primary/10 hover:bg-brand-bg-secondary cursor-pointer transition-colors">
                          <input 
                            type="checkbox" 
                            checked={formData.interests.cultural} 
                            onChange={e => setFormData({...formData, interests: {...formData.interests, cultural: e.target.checked}})}
                            className="w-5 h-5 rounded text-brand-green focus:ring-brand-green bg-white border-brand-text-primary/20 accent-brand-green"
                          />
                          <span className="text-sm font-medium text-brand-text-primary">Cultural, Social, and Sports Activities</span>
                        </label>
                        <label className="flex items-center gap-4 p-4 rounded-xl border border-brand-text-primary/10 hover:bg-brand-bg-secondary cursor-pointer transition-colors">
                          <input 
                            type="checkbox" 
                            checked={formData.interests.advocacy} 
                            onChange={e => setFormData({...formData, interests: {...formData.interests, advocacy: e.target.checked}})}
                            className="w-5 h-5 rounded text-brand-green focus:ring-brand-green bg-white border-brand-text-primary/20 accent-brand-green"
                          />
                          <span className="text-sm font-medium text-brand-text-primary">Institutional Advocacy & Public Policy</span>
                        </label>
                        <label className="flex items-center gap-4 p-4 rounded-xl border border-brand-text-primary/10 hover:bg-brand-bg-secondary cursor-pointer transition-colors">
                          <input 
                            type="checkbox" 
                            checked={formData.interests.economic} 
                            onChange={e => setFormData({...formData, interests: {...formData.interests, economic: e.target.checked}})}
                            className="w-5 h-5 rounded text-brand-green focus:ring-brand-green bg-white border-brand-text-primary/20 accent-brand-green"
                          />
                          <span className="text-sm font-medium text-brand-text-primary">Economic Development & Entrepreneurship</span>
                        </label>
                        {errors.interests && <p className="text-brand-red text-xs mt-2 font-medium">{errors.interests}</p>}
                      </div>
                    </section>

                    {/* Section 3 */}
                    <section>
                      <h4 className="text-sm font-bold text-brand-text-secondary uppercase tracking-widest mb-6 flex items-center gap-2">
                        <span className="w-6 h-px bg-brand-green"></span>
                        3. Previous Experience
                      </h4>
                      <div className="mb-6">
                        <p className="text-xs font-bold text-brand-text-primary mb-4">Have you joined an association before? *</p>
                        <div className="flex gap-6">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input 
                              type="radio" 
                              name="prevExp" 
                              value="yes"
                              checked={formData.previousExperience === 'yes'}
                              onChange={(e) => setFormData({...formData, previousExperience: e.target.value})}
                              className="accent-brand-red w-4 h-4"
                            />
                            <span className="text-sm font-medium">Yes</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input 
                              type="radio" 
                              name="prevExp" 
                              value="no"
                              checked={formData.previousExperience === 'no'}
                              onChange={(e) => setFormData({...formData, previousExperience: e.target.value})}
                              className="accent-brand-red w-4 h-4"
                            />
                            <span className="text-sm font-medium">No</span>
                          </label>
                        </div>
                      </div>

                      <AnimatePresence>
                        {formData.previousExperience === 'yes' && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-brand-bg-secondary p-6 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-6"
                          >
                            <div className="col-span-1 md:col-span-2">
                              <label className="block text-xs font-bold text-brand-text-primary mb-2">Association Name & Field *</label>
                              <input 
                                type="text" 
                                className={`w-full p-4 rounded-xl bg-white border-none focus:ring-2 outline-none transition-all ${errors.prevAssocName ? 'ring-2 ring-brand-red' : 'focus:ring-brand-green'}`}
                                value={formData.prevAssocName} onChange={e => setFormData({...formData, prevAssocName: e.target.value})}
                                placeholder="e.g., Green Earth (Environmental)"
                              />
                              {errors.prevAssocName && <p className="text-brand-red text-xs mt-1 font-medium">{errors.prevAssocName}</p>}
                            </div>
                            <div className="col-span-1 md:col-span-2">
                              <label className="block text-xs font-bold text-brand-text-primary mb-2">Role *</label>
                              <select 
                                className="w-full p-4 rounded-xl bg-white border-none focus:ring-2 focus:ring-brand-green outline-none transition-all"
                                value={formData.prevAssocRole} onChange={e => setFormData({...formData, prevAssocRole: e.target.value})}
                              >
                                <option value="member">Member</option>
                                <option value="board">Board Member</option>
                              </select>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </section>

                    {/* Section 4 */}
                    <section>
                      <h4 className="text-sm font-bold text-brand-text-secondary uppercase tracking-widest mb-6 flex items-center gap-2">
                        <span className="w-6 h-px bg-brand-green"></span>
                        4. Legal Information
                      </h4>
                      <div className="mb-6">
                        <label className="block text-xs font-bold text-brand-text-primary mb-2">National ID Number (CIN) *</label>
                        <input 
                          type="text" 
                          className={`w-full p-4 rounded-xl bg-brand-bg-secondary border-none focus:ring-2 outline-none transition-all ${errors.nationalId ? 'ring-2 ring-brand-red' : 'focus:ring-brand-green'}`}
                          value={formData.nationalId} onChange={e => setFormData({...formData, nationalId: e.target.value})}
                          placeholder="e.g., AB123456"
                        />
                        {errors.nationalId && <p className="text-brand-red text-xs mt-1 font-medium">{errors.nationalId}</p>}
                      </div>
                      
                      <label className="flex items-start gap-4 p-4 rounded-xl bg-brand-red/5 cursor-pointer transition-colors border border-brand-red/10">
                        <input 
                          type="checkbox" 
                          checked={formData.confirmation} 
                          onChange={e => setFormData({...formData, confirmation: e.target.checked})}
                          className="mt-1 w-5 h-5 rounded text-brand-red focus:ring-brand-red bg-white border-brand-red/20 accent-brand-red flex-shrink-0"
                        />
                        <span className="text-xs leading-relaxed text-brand-text-primary font-medium">
                          I confirm that the provided information is accurate. I understand that submitting this form does not guarantee immediate membership, and my application will be reviewed by the board.
                        </span>
                      </label>
                      {errors.confirmation && <p className="text-brand-red text-xs mt-2 font-bold px-2">{errors.confirmation}</p>}
                    </section>
                  </motion.form>
                )}

                {step === 'submitting' && (
                  <motion.div 
                    key="submitting"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                  >
                    <Loader2 size={48} className="text-brand-green animate-spin mb-6" />
                    <h3 className="text-xl font-bold text-brand-text-primary">Processing Application</h3>
                    <p className="text-brand-text-secondary text-sm mt-2">Please wait while we securely submit your details...</p>
                  </motion.div>
                )}

                {step === 'success' && (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center shadow-inner mb-6">
                      <CheckCircle2 size={40} className="text-brand-green" />
                    </div>
                    <h3 className="text-3xl font-bold text-brand-text-primary mb-4">Application Submitted!</h3>
                    <p className="text-brand-text-secondary text-sm max-w-sm mx-auto leading-relaxed mb-10">
                      Thank you for applying to join the Association Maroc de l'Avenir. Our team will review your application and contact you soon.
                    </p>
                    <button 
                      onClick={handleClose}
                      className="bg-brand-text-primary text-white font-bold py-4 px-12 rounded-full hover:bg-brand-green transition-all shadow-lg active:scale-95 flex items-center gap-2"
                    >
                      Return to Website <ChevronRight size={18} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer Form Action */}
            {step === 'form' && (
              <div className="p-6 border-t border-black/5 bg-white shrink-0 mt-auto">
                <button 
                  onClick={handleSubmit}
                  className="w-full bg-brand-red text-white font-bold py-5 rounded-2xl hover:bg-brand-green transition-all shadow-xl shadow-brand-red/20 active:scale-95 text-lg"
                >
                  Submit Application
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
