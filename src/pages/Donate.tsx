import React, { useState } from 'react';
import { Heart, ShieldCheck, PieChart, FileText } from 'lucide-react';

const Donate = () => {
  const [amount, setAmount] = useState('50');
  const [frequency, setFrequency] = useState('Monthly');

  const impactPoints = [
    { amount: '20', description: 'Provides educational materials for one student for a month.' },
    { amount: '50', description: 'Supports a youth leadership workshop for 10 participants.' },
    { amount: '100', description: 'Funds a community environmental initiative in Khouribga.' },
    { amount: '200', description: 'Sponsors a full vocational training program for a young adult.' },
  ];

  return (
    <div className="bg-white pt-32 pb-20 font-sans">
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-brand-text-primary">
              Invest in the <br />
              <span className="text-brand-green">Future of Youth.</span>
            </h1>
            <p className="text-brand-text-secondary text-lg md:text-xl mb-12 leading-relaxed max-w-lg">
              Your contribution directly supports our programs in Khouribga, empowering young people through education, leadership, and economic inclusion.
            </p>

            <div className="space-y-6">
              {impactPoints.map((point) => (
                <div key={point.amount} className="flex gap-4 items-start">
                  <div className="w-14 h-12 rounded-xl bg-brand-bg-secondary flex items-center justify-center shrink-0">
                    <span className="font-bold text-sm text-brand-red">{point.amount} MAD</span>
                  </div>
                  <p className="text-sm text-brand-text-secondary leading-relaxed pt-3">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-bg-secondary rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="flex gap-2 mb-12 p-1 bg-white rounded-full border border-gray-100">
              {['One-time', 'Monthly'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFrequency(f)}
                  className={`flex-1 py-3 rounded-full text-sm font-bold transition-all ${
                    frequency === f ? 'bg-brand-red text-white' : 'text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {['20', '50', '100', '200', '500', 'Custom'].map((a) => (
                <button
                  key={a}
                  onClick={() => setAmount(a)}
                  className={`py-4 rounded-xl text-lg font-bold border-2 transition-all ${
                    amount === a 
                      ? 'border-brand-red bg-white text-brand-red' 
                      : 'border-transparent bg-white text-gray-600 hover:border-gray-200'
                  }`}
                >
                  {a === 'Custom' ? a : `${a} MAD`}
                </button>
              ))}
            </div>

            <div className="mb-12">
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                Full Name
              </label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full bg-white border border-gray-100 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-red transition-colors"
              />
            </div>

            <button className="w-full bg-brand-red text-white py-5 rounded-xl font-bold text-xl hover:bg-brand-red/90 transition-colors shadow-lg flex items-center justify-center gap-3">
              Donate Now
              <Heart size={20} fill="currentColor" />
            </button>

            <p className="text-center mt-8 text-xs text-gray-400">
              Secure payment processed by Stripe. Your donation is tax-deductible.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="bg-white border border-gray-100 rounded-2xl p-12 md:p-20 text-center">
          <h2 className="text-3xl font-bold mb-12 text-brand-text-primary">Transparency & Trust</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="w-16 h-16 rounded-full bg-brand-bg-secondary flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="text-brand-green" size={32} />
              </div>
              <h4 className="font-bold mb-4 text-brand-text-primary">100% Secure</h4>
              <p className="text-sm text-brand-text-secondary">We use industry-standard encryption to protect your financial information.</p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-brand-bg-secondary flex items-center justify-center mx-auto mb-6">
                <PieChart className="text-brand-red" size={32} />
              </div>
              <h4 className="font-bold mb-4 text-brand-text-primary">Full Accountability</h4>
              <p className="text-sm text-brand-text-secondary">90% of every dirham goes directly to our community programs in Khouribga.</p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-brand-bg-secondary flex items-center justify-center mx-auto mb-6">
                <FileText className="text-brand-green" size={32} />
              </div>
              <h4 className="font-bold mb-4 text-brand-text-primary">Tax Deductible</h4>
              <p className="text-sm text-brand-text-secondary">Receive an official receipt for your records immediately after donating.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
