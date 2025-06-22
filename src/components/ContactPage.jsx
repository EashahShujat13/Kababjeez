import React from 'react';
import BgImage2 from './ContactBg';
import ContactPage from './Contact';

function Contact() {
  return (
    <section className="relative min-h-screen">
      <BgImage2 />
      <div className="relative z-10">
        <ContactPage />
      </div>
    </section>
  );
}

export default Contact;
