import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-12 grid gap-8 md:grid-cols-4">
      <div>
        <h3 className="text-lg font-bold mb-3">
          Global Trade <span className="text-accent">Intel</span>
        </h3>
        <p className="text-sm text-primary-foreground/70 leading-relaxed">
          Practical trade intelligence and advisory for exporters, manufacturers and international businesses.
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-primary-foreground/80">Quick Links</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/70">
          <li><Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link></li>
          <li><Link to="/about" className="hover:text-primary-foreground transition-colors">About Us</Link></li>
          <li><Link to="/services" className="hover:text-primary-foreground transition-colors">Services</Link></li>
          <li><Link to="/insights" className="hover:text-primary-foreground transition-colors">Insights</Link></li>
          <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-primary-foreground/80">Advisory</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/70">
          <li>Export Strategy &amp; Market Entry</li>
          <li>Market Research &amp; Trade Intelligence</li>
          <li>Buyer Identification &amp; Verification</li>
          <li>Export Compliance &amp; Documentation</li>
          <li>Trade Finance &amp; LC Advisory</li>
          <li>AI-enabled Trade Intelligence</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-primary-foreground/80">Contact</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/70">
          <li>aniltrivedi.impex@outlook.com</li>
          <li>+91 9870446898</li>
          <li>Mumbai, Maharashtra, India</li>
        </ul>
      </div>

    </div>
    <div className="border-t border-primary-foreground/10">
      <div className="container py-4 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} l. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
