import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Globe, Search, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import GlobalTradeMap from "@/components/GlobalTradeMap";
import heroImage from "@/assets/hero-globe.jpg";

const stats = [
  { value: "120+", label: "Countries Covered" },
  { value: "5,000+", label: "Reports Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Years Experience" },
];

const services = [
  { icon: Globe, title: "Export Consulting", desc: "Strategic guidance to help you enter and expand in international markets." },
  { icon: BarChart3, title: "Market Intelligence", desc: "In-depth analysis of global markets, demand trends, and competitive landscapes." },
  { icon: TrendingUp, title: "Trade Data Analytics", desc: "Actionable insights from real-time trade data and economic indicators." },
  { icon: Search, title: "Buyer Search & Due Diligence", desc: "Identify and verify reliable international buyers with comprehensive background checks." },
  
];

const Index = () => (
  <div>
    <SEO
      title="Export & Import Consulting | Trade Intelligence, Buyer Search & KYC"
      description="Data-driven export-import consulting: global trade analytics, buyer search & KYC, due diligence, customs and trade compliance, market research and export strategy."
      path="/"
      keywords="export consulting, import consulting, trade intelligence, trade data analytics, buyer search, KYC, due diligence, customs compliance, trade compliance, market research, export strategy, risk analysis"
    />
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <img src={heroImage} alt="Global trade network" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 hero-overlay" />
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl space-y-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest rounded-full bg-accent/20 text-accent">
            Global Trade Advisory
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-primary-foreground text-balance">
            Smarter Global Trade Decisions
          </h1>
          <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-xl">
            Unlock new markets, reduce risk, and maximize export potential with data-driven intelligence and expert consulting.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link to="/contact">
              <Button variant="hero" size="lg">Get Consultation</Button>
            </Link>
            <Link to="/insights">
              <Button variant="hero-outline" size="lg">
                View Insights <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-card border-b border-border">
      <div className="container py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-3xl md:text-4xl font-bold text-primary">{s.value}</div>
            <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Services Preview */}
    <section className="section-gradient">
      <div className="container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <p className="text-muted-foreground mt-2 max-w-lg mx-auto">Comprehensive solutions to power your international trade strategy.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <s.icon className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services">
            <Button variant="outline">
              Explore All Services <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary">
      <div className="container py-16 text-center">
        <h2 className="text-3xl font-bold text-primary-foreground mb-4">Ready to Expand Globally?</h2>
        <p className="text-primary-foreground/70 max-w-lg mx-auto mb-8">
          Schedule a free consultation with our trade experts and discover untapped market opportunities.
        </p>
        <Link to="/contact">
          <Button variant="hero" size="lg">Schedule Free Consultation</Button>
        </Link>
      </div>
    </section>
  </div>
);

export default Index;
