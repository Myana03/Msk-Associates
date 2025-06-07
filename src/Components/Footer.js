import React from 'react';
import '../Css/Footer.css'; // Import the footer CSS

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        {/* Left side: Copyright */}
        <div className="footer-left">
          <p>&copy; 2025 MSK Associates. All Rights Reserved.</p>
        </div>

        {/* Right side: Contact or Social Media Links */}
        <div className="footer-right">
          <ul className="footer-links">
            <li><a href="mailto:contact@mskassociates.com">Email</a></li>
            <li><a href="tel:+11234567890">Phone</a></li>
            <li><a href="https://www.linkedin.com/company/msk-associates">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/msk_associates">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
