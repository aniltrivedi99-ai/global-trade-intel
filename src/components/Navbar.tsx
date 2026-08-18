import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="text-lg md:text-xl font-bold text-primary tracking-tight whitespace-nowrap">
          GlobalTrade<span className="text-accent">Intell</span>
        </Link>


        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname === l.to
                  ? "text-primary bg-secondary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact#inquiry-form" className="ml-2">
            <Button size="sm">Get Consultation</Button>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-card border-b border-border animate-fade-in">
          <div className="container py-4 flex flex-col gap-2">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 text-sm font-medium rounded-md ${
                  location.pathname === l.to
                    ? "text-primary bg-secondary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact#inquiry-form" onClick={() => setOpen(false)}>
              <Button size="sm" className="w-full mt-2">Get Consultation</Button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
