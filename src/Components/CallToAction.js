import React, { useState } from 'react';
import EnquiryModal from './EnquiryModal';

const CallToAction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Headline + CTA */}
          <div data-aos="fade-right">
            <p className="uppercase tracking-widest font-semibold mb-6" style={{ fontSize: '0.7rem', color: '#C1440E', letterSpacing: '0.15em' }}>
              Start a Project
            </p>
            <h2
              className="font-extrabold mb-6"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: '#fff', lineHeight: 1.1 }}
            >
              Have a site or a set of drawings? Let's look at it together.
            </h2>
            <p style={{ color: '#9ca3af', lineHeight: 1.8, fontSize: '0.95rem', maxWidth: '440px', marginBottom: '2.5rem' }}>
              Whether you're starting from a blank plot or need a structural review of existing plans, get in touch and we'll schedule a site assessment or a design consultation.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-primary inline-block font-bold py-3 px-8"
              style={{ backgroundColor: '#C1440E', color: '#fff', borderRadius: '4px', fontSize: '0.95rem' }}
            >
              Request a Consultation
            </button>
          </div>

          {/* Right: Info card */}
          <div
            data-aos="fade-left"
            className="rounded"
            style={{ backgroundColor: '#EDEAE3', padding: '2.5rem' }}
          >
            {[
              { label: 'Office', value: 'Pranay Marg, Waddepally, Phase 1, Teachers Colony, Hanamakonda, Telangana 506370' },
              { label: 'Phone', value: '+91 99890 90978' },
              { label: 'Email', value: 'designs@mskassociates.com' },
              { label: 'Hours', value: 'Mon – Fri, 9:00 AM – 6:00 PM' },
              { label: 'Response Time', value: 'Within 1 business day' },
            ].map((item, i, arr) => (
              <div
                key={item.label}
                className="py-5"
                style={{ borderBottom: i < arr.length - 1 ? '1px solid #d4d0c8' : 'none' }}
              >
                <p className="uppercase tracking-widest" style={{ fontSize: '0.65rem', color: '#888', letterSpacing: '0.12em', marginBottom: '6px' }}>
                  {item.label}
                </p>
                <p className="font-bold" style={{ color: '#0F2040', fontSize: '0.95rem' }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default CallToAction;
