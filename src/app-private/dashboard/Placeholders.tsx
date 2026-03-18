import React from 'react';

const Placeholder = ({ title }: { title: string }) => (
  <div className="p-8">
    <div className="bg-white p-12 rounded-[2.5rem] border border-brand-border text-center">
      <h2 className="text-3xl font-serif font-bold text-brand-text-primary mb-4">{title}</h2>
      <p className="text-brand-text-secondary opacity-60">This feature is coming soon to your AMA dashboard.</p>
    </div>
  </div>
);

export const Task = () => <Placeholder title="Tasks" />;
export const Calendar = () => <Placeholder title="Calendar" />;

// Sales
export const Leads = () => <Placeholder title="Leads" />;
export const Opportunities = () => <Placeholder title="Opportunities" />;
export const Contacts = () => <Placeholder title="Contacts" />;
export const Companies = () => <Placeholder title="Companies" />;
export const Analytics = () => <Placeholder title="Analytics" />;

// Marketing
export const Forms = () => <Placeholder title="Forms" />;
export const Emails = () => <Placeholder title="Emails" />;
export const SocialMediaAds = () => <Placeholder title="Social Media Ads" />;

// Help
export const HelpAndSupport = () => <Placeholder title="Help and Support" />;
