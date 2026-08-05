import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-12 grid gap-8 md:grid-cols-4">
      <div>
        <h3 className="text-lg font-bold mb-3">
          Trade<span className="text-accent">Intelligence</span>
        </h3>
        <p className="text-sm text-primary-foreground/70 leading-relaxed">
          Empowering businesses with data-driven insights for smarter global trade decisions.
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-primary-foreground/80">Quick Links</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/70">
          <li><Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link></li>
          <li><Link to="/about" className="hover:text-primary-foreground transition-colors">About Us</Link></li>
          <li><Link to="/services" className="hover:text-primary-foreground transition-colors">Services</Link></li>
          <li><Link to="/insights" className="hover:text-primary-foreground transition-colors">Insights</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-primary-foreground/80">Services</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/70">
          <li>Export Consulting</li>
          <li>Market Intelligence</li>
          <li>Trade Data Analysis</li>
          
          <li>Buyer Search &amp; Due Diligence</li>
          <li>Risk Analysis</li>
          <li>Export Strategy</li>
          <li>Trade Compliance</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-primary-foreground/80">Contact</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/70">
          <li>aniltrivedi.impex@outlook.com</li>
          <li>+91 9870446898</li>
          <li>B-602, Solitaire, M.G. Cross Road No.1, Kandivali (West), Mumbai 400067, Maharashtra, India.</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10">
      <div className="container py-4 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Trade Intelligence. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
