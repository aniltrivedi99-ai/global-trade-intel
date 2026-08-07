import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Globe, Search, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import GlobalTradeMap from "@/components/GlobalTradeMap";
import Picture from "@/components/Picture";
import heroImage from "@/assets/hero-globe.jpg";
import heroAvif from "@/assets/hero-globe.jpg?format=avif&w=1600&quality=52";
import heroWebp from "@/assets/hero-globe.jpg?format=webp&w=1600&quality=65";

const specialities = [
  { title: "Export Strategy & International Market Entry", desc: "Market selection, positioning and a practical roadmap to enter new geographies." },
  { title: "Export Market Research & Buyer Mapping", desc: "Demand research, competitor mapping and buyer identification in target markets." },
  { title: "Buyer Verification & Commercial Due Diligence", desc: "KYC, credit and background checks before you commit to a counterparty." },
  { title: "Trade Compliance & Documentation", desc: "Export-import documentation, HS codes, customs and regulatory compliance." },
  { title: "Letter of Credit (LC) Advisory", desc: "LC scrutiny, negotiation support and documentary trade risk control." },
  { title: "Export Operations & Supply Chain Coordination", desc: "Order management, freight negotiation and end-to-end shipment coordination." },
  { title: "AI-enabled Export Intelligence", desc: "Modern data and AI-assisted research turning trade data into clear strategy." },
  { title: "Training, Workshops & Advisory Support", desc: "Hands-on EXIM training and ongoing advisory support for your team." },
];

const marketsServed = ["India", "Middle East", "Africa", "APAC", "South East Asia", "Latin America"];

const industriesServed = [
  "Agro Commodities",
  "Chemicals",
  "Plastics & Polymers",
  "Engineering & Industrial Products",
  "Leather Products",
  "Apparels & Textiles",
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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <Picture
        avif={heroAvif}
        webp={heroWebp}
        src={heroImage}
        alt="Global trade network"
        width={1920}
        height={1080}
        loading="eager"
        fetchpriority="high"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="container relative z-10 py-16">
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
          <GlobalTradeMap />
        </div>
      </div>
    </section>

    {/* Specialized in */}
    <section className="bg-card border-b border-border">
      <div className="container py-14">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Specialized In</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            International trade, export strategy, market intelligence and trade compliance consulting — built on 23+ years of hands-on EXIM experience.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialities.map((s) => (
            <div key={s.title} className="border-l-2 border-accent pl-4">
              <h3 className="font-semibold text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Markets & Industries served */}
    <section className="border-b border-border">
      <div className="container py-14 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-bold mb-4">Markets Served</h2>
          <ul className="flex flex-wrap gap-2">
            {marketsServed.map((m) => (
              <li key={m} className="rounded-full border border-border bg-secondary px-3 py-1 text-sm text-foreground">{m}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Industries Served</h2>
          <ul className="flex flex-wrap gap-2">
            {industriesServed.map((i) => (
              <li key={i} className="rounded-full border border-border bg-secondary px-3 py-1 text-sm text-foreground">{i}</li>
            ))}
          </ul>
        </div>
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
