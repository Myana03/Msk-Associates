import React from 'react';
import '../Css/Contact.css'; // Import the contact section CSS

function Contact() {
  return (
    <section id="contact"className="contact-section">
      <div className="contact-container">
        {/* Left side: Google Map */}
        <div className="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.6323747528895!2d79.53462937555837!3d17.995832784991617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334f0c04600ca3%3A0xf1e2e7e4204fd514!2sMSK%20ASSOCIATES!5e0!3m2!1sen!2sus!4v1746580010533!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Map Location"
          ></iframe>
        </div>

        {/* Right side: Contact Info */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <div className="contact-details">
            <p><strong>Name:</strong> MSK Associates</p>
            <p><strong>Email:</strong> contact@mskassociates.com</p>
            <p><strong>Phone:</strong> +1 (123) 456-7890</p>
            <p><strong>Address:</strong> Pranay Marg, Waddepally, Phase 1, Teachers Colony, Hanamkonda</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
