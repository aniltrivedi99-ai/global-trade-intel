import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  User,
  CheckCircle2,
  Award,
  GraduationCap,
  Globe2,
  Briefcase,
  Search,
  ShieldCheck,
  Cpu,
  ListChecks,
  Factory,
  Rocket,
  Building2,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import founderPhoto from "@/assets/anil-trivedi.jpg.asset.json";

const advisoryAreas = [
  "Export Strategy & Market Entry",
  "Market Research & Trade Intelligence",
  "Overseas Buyer Identification & Mapping",
  "Buyer Verification & Due Diligence",
  "Export Compliance & Documentation",
  "HS Code & Tariff Advisory",
  "Trade Finance & Letter of Credit Advisory",
  "Export Operations & Logistics Coordination",
  "AI-enabled Trade Intelligence",
  "Training, Workshops & Advisory",
];

const whyUs = [
  {
    icon: Briefcase,
    title: "Practical EXIM Experience",
    desc: "Advice grounded in real-world export-import operations rather than theory alone.",
  },
  {
    icon: Search,
    title: "Intelligence Before Action",
    desc: "Market, trade and buyer information is evaluated before recommending an export opportunity.",
  },
  {
    icon: ShieldCheck,
    title: "Risk-aware Approach",
    desc: "Buyer verification, due diligence, compliance and commercial risks are considered alongside market potential.",
  },
  {
    icon: Cpu,
    title: "Technology-enabled Research",
    desc: "Modern data and AI-assisted research tools are used to improve the speed and depth of trade analysis.",
  },
  {
    icon: ListChecks,
    title: "Actionable Advisory",
    desc: "Research is converted into practical priorities, decisions and next steps.",
  },
];

const whoWeHelp = [
  {
    icon: Factory,
    title: "Manufacturers & Exporters",
    desc: "Identify suitable markets, evaluate opportunities and strengthen export strategies.",
  },
  {
    icon: Rocket,
    title: "MSMEs & Emerging Exporters",
    desc: "Build practical export capabilities and avoid costly market, buyer and compliance mistakes.",
  },
  {
    icon: Building2,
    title: "Established Export Businesses",
    desc: "Explore new markets, develop buyer pipelines and strengthen international business decisions.",
  },
  {
    icon: Users,
    title: "International Trade Teams",
    desc: "Support market research, buyer intelligence, due diligence, documentation and trade-compliance requirements.",
  },
];

const approach = [
  { step: "Market", desc: "Identify and assess attractive markets and trade opportunities." },
  { step: "Buyer", desc: "Identify, map and evaluate potential overseas buyers." },
  { step: "Verify", desc: "Conduct appropriate buyer/business verification and due diligence." },
  { step: "Comply", desc: "Review relevant trade, documentation and regulatory requirements." },
  { step: "Decide", desc: "Convert findings into practical commercial recommendations and next steps." },
];

const experience = [
  { company: "Ingenia Polymers India Pvt. Ltd.", period: "Jan 2016 – Nov 2024" },
  { company: "Basell Polyolefins India Pvt. Ltd.", period: "Jun 2008 – Jan 2016" },
  { company: "Evonik Degussa India Pvt. Ltd.", period: "Jun 2007 – Jun 2008" },
  { company: "E.I. Du Pont India Pvt. Ltd.", period: "Jul 2004 – May 2007" },
  { company: "Adani Exports Ltd.", period: "Aug 2001 – Jun 2004" },
];

const credentials = [
  { icon: GraduationCap, title: "M.I.M. — Masters in International Marketing", detail: "Indian Institute of Export & Import Management (IIFT) — 1999" },
  { icon: GraduationCap, title: "B.Com. — Bachelor of Commerce", detail: "Mumbai University — 1996" },
  { icon: Award, title: "Six Sigma Green Belt", detail: "KPMG" },
  { icon: Award, title: "Operational Excellence Award 2011", detail: "Customer focus & service excellence" },
];

const About = () => (
  <div>
    <SEO
      title="About Global Trade Intel | International Trade Advisory & EXIM Expertise"
      description="Learn about Global Trade Intel and its founder, Anil G. Trivedi, with 23+ years of practical EXIM experience in export operations, market research, buyer intelligence, due diligence and trade advisory."
      path="/about"
      keywords="international trade consultant, export-import consultant, EXIM consultant, export market research, buyer identification, buyer due diligence, trade intelligence, export compliance, international trade advisory, export strategy, trade risk assessment"
    />

    {/* Header */}
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container text-center max-w-3xl">
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest rounded-full bg-accent/20 text-accent mb-4">
          About Global Trade Intel
        </span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-primary-foreground">
          Practical International Trade Advisory Backed by 23+ Years of EXIM Experience
        </h1>
        <p className="text-primary-foreground/70 text-lg">
          Global Trade Intel helps exporters, manufacturers and international businesses make better trade decisions
          through practical EXIM expertise, market research, buyer intelligence, due diligence and risk-focused advisory.
        </p>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="container py-16 grid md:grid-cols-2 gap-12">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Target className="h-8 w-8 text-accent" />
          <h2 className="text-2xl font-bold">Our Mission</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          To give exporters and importers practical, accurate trade intelligence — clean documentation, compliant
          shipments, verified buyers and honest market analysis — so decisions are made on facts rather than assumptions.
        </p>
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Eye className="h-8 w-8 text-accent" />
          <h2 className="text-2xl font-bold">Our Vision</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          To be a trusted advisory partner for businesses entering new markets, where operational discipline,
          regulatory compliance and modern research tools come together to deliver measurable results.
        </p>
      </div>
    </section>

    {/* Meet the founder */}
    <section className="section-gradient">
      <div className="container py-16 max-w-4xl">
        <div className="flex items-center justify-center gap-3 mb-10">
          <User className="h-8 w-8 text-accent" />
          <h2 className="text-3xl font-bold">Meet the Founder</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-56 flex-shrink-0">
            <img
              src={founderPhoto.url}
              alt="Anil G. Trivedi, Founder & International Trade Advisor at Global Trade Intel"
              width={783}
              height={1376}
              loading="lazy"
              decoding="async"
              className="w-56 h-auto object-contain rounded-lg border border-border shadow-sm bg-muted"
            />
            <p className="mt-3 text-center">
              <span className="block font-semibold text-foreground">Anil G. Trivedi</span>
              <span className="block text-sm text-muted-foreground">Founder &amp; International Trade Advisor</span>
            </p>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              <span className="font-semibold text-foreground">Anil G. Trivedi</span> is an international trade and
              export-import professional with <span className="font-semibold text-foreground">23+ years</span> of
              practical experience across leading organizations in polymers, chemicals, petrochemicals and export
              businesses.
            </p>
            <p>
              His experience covers end-to-end EXIM operations including export documentation, customs and regulatory
              compliance, trade finance and letters of credit, HS code and tariff analysis, freight and logistics
              coordination, order management and international business operations.
            </p>
            <p>
              He has worked across international markets including India, Africa, the Middle East, Southeast Asia,
              Australia and Latin America.
            </p>
            <p>
              Today, he combines practical EXIM experience with market research, competitive intelligence, buyer
              identification, business verification and AI-assisted research tools to convert trade data into practical,
              actionable recommendations for clients.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Why Global Trade Intel */}
    <section className="container py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Why Global Trade Intel?</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {whyUs.map((w) => (
          <div key={w.title} className="bg-card rounded-lg p-6 border border-border shadow-sm">
            <w.icon className="h-8 w-8 text-accent mb-4" />
            <h3 className="font-semibold text-foreground mb-2">{w.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Who we help */}
    <section className="section-gradient">
      <div className="container py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Who We Help</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whoWeHelp.map((w) => (
            <div key={w.title}>
              <w.icon className="h-7 w-7 text-accent mb-3" />
              <h3 className="font-semibold text-foreground mb-1">{w.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Our approach */}
    <section className="container py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">Our Approach</h2>
      <p className="text-muted-foreground mb-8 max-w-2xl">
        A structured sequence that moves from market and buyer research to verification, compliance and a clear
        commercial decision.
      </p>
      <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {approach.map((a, i) => (
          <li key={a.step} className="border-t-2 border-accent pt-4">
            <div className="text-xs font-semibold text-accent tracking-widest mb-1">STEP {i + 1}</div>
            <h3 className="font-semibold text-foreground uppercase text-sm tracking-wide mb-2">{a.step}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
          </li>
        ))}
      </ol>
    </section>

    {/* Areas of advisory */}
    <section className="section-gradient">
      <div className="container py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Areas of Advisory</h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {advisoryAreas.map((c) => (
            <li key={c} className="flex items-start gap-2 text-sm text-foreground">
              <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* Experience + Regions + Credentials */}
    <section className="container py-16 grid lg:grid-cols-2 gap-12">
      <div>
        <h2 className="text-2xl font-bold mb-3">Experience That Shapes Our Advisory Approach</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Before establishing Global Trade Intel, Anil built extensive practical experience across international trade,
          export operations, polymers, chemicals, petrochemicals and commercial operations — including SAP-based order
          management. This experience provides a practical understanding of the operational, documentation, financial,
          compliance and logistics challenges faced by exporters.
        </p>
        <ul className="space-y-3">
          {experience.map((e) => (
            <li key={e.company} className="flex flex-wrap items-baseline justify-between gap-2 border-l-2 border-accent pl-4">
              <span className="font-medium text-foreground text-sm">{e.company}</span>
              <span className="text-xs text-muted-foreground">{e.period}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Globe2 className="h-6 w-6 text-accent" />
            <h2 className="text-2xl font-bold">International Market Experience</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Trade exposure gained through export operations and commercial work across:
          </p>
          <p className="text-foreground mt-2">
            India · Africa · Middle East · Southeast Asia · Australia · Latin America
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Credentials</h2>
          <ul className="space-y-3">
            {credentials.map((c) => (
              <li key={c.title} className="flex items-start gap-3">
                <c.icon className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                <div>
                  <div className="font-medium text-foreground text-sm">{c.title}</div>
                  <div className="text-xs text-muted-foreground">{c.detail}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary">
      <div className="container py-16 text-center">
        <h2 className="text-3xl font-bold text-primary-foreground mb-4">Planning Your Next Export Move?</h2>
        <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
          Let's evaluate the opportunity, market, buyer and trade risks before you commit resources.
        </p>
        <Link to="/contact#inquiry-form">
          <Button variant="hero" size="lg">Get a Consultation</Button>
        </Link>
      </div>
    </section>
  </div>
);

export default About;
