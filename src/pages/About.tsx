import { Target, Eye, User, CheckCircle2, Award, GraduationCap, Globe2 } from "lucide-react";
import SEO from "@/components/SEO";
import founderPhoto from "@/assets/anil-trivedi.jpg.asset.json";

const competencies = [
  "Export-Import Operations & Documentation",
  "Customs Clearance & Regulatory Compliance",
  "Letter of Credit (LC) Verification & Negotiation",
  "Market Research & Competitive Intelligence",
  "Business Analysis & Due Diligence",
  "Buyer Identification & Lead Generation",
  "HS Code Classification & Tariff Analysis",
  "FTA Rules of Origin & EXIM Consulting",
  "Freight Negotiation & Logistics Coordination",
  "International Trade Finance & Credit Insurance",
  "Documentary Trade (B/L, COO, Shipping Certificates)",
  "SAP Order Management (OTC, STO, GR, CAC)",
];

const experience = [
  { company: "Ingenia Polymers India Pvt. Ltd.", note: "Subsidiary of Ingenia Polymers Corporation Inc., USA", period: "Jan 2016 – Nov 2024" },
  { company: "Basell Polyolefins India Pvt. Ltd.", note: "Subsidiary of LyondellBasell Industries, Netherlands", period: "Jun 2008 – Jan 2016" },
  { company: "Evonik Degussa India Pvt. Ltd.", note: "Subsidiary of Evonik Industries AG, Germany", period: "Jun 2007 – Jun 2008" },
  { company: "E.I. Du Pont India Pvt. Ltd.", note: "Subsidiary of E.I. Du Pont De Nemours & Co. Inc., USA", period: "Jul 2004 – May 2007" },
  { company: "Adani Exports Ltd.", note: "Adani Group", period: "Aug 2001 – Jun 2004" },
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
      title="About Trade Intelligence | Export-Import Consultants in Mumbai, India"
      description="Trade Intelligence is led by Anil G. Trivedi, an EXIM professional with 23+ years in international trade, documentation, compliance, market research and due diligence."
      path="/about"
      keywords="export import consultants India, trade advisory Mumbai, EXIM consultant, buyer search, KYC due diligence, customs compliance"
    />
    {/* Header */}
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">About Trade Intelligence</h1>
        <p className="text-primary-foreground/70 text-lg">
          A Mumbai-based export-import advisory practice combining 23+ years of hands-on EXIM experience with data-driven trade research.
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
          To give exporters and importers practical, accurate trade intelligence — clean documentation, compliant shipments, verified buyers and honest market analysis — so decisions are made on facts rather than assumptions.
        </p>
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Eye className="h-8 w-8 text-accent" />
          <h2 className="text-2xl font-bold">Our Vision</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          To be a trusted advisory partner for businesses entering new markets, where operational discipline, regulatory compliance and modern research tools come together to deliver measurable results.
        </p>
      </div>
    </section>

    {/* About Founder */}
    <section className="section-gradient">
      <div className="container py-16 max-w-4xl">
        <div className="flex items-center justify-center gap-3 mb-10">
          <User className="h-8 w-8 text-accent" />
          <h2 className="text-3xl font-bold">About the Founder</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-56 flex-shrink-0">
            <img
              src={founderPhoto.url}
              alt="Anil G. Trivedi, founder of Trade Intelligence"
              width={783}
              height={1376}
              loading="lazy"
              decoding="async"
              className="w-56 h-auto object-contain rounded-lg border border-border shadow-sm bg-muted"
            />
            <p className="mt-3 text-center">
              <span className="block font-semibold text-foreground">Anil G. Trivedi</span>
              <span className="block text-sm text-muted-foreground">Founder — International Trade &amp; Export Specialist</span>
            </p>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              <span className="font-semibold text-foreground">Anil G. Trivedi</span> is an international trade and export-import professional with <span className="font-semibold text-foreground">23+ years of experience</span> gained with multinational chemical, polymer and petrochemical corporations including Ingenia Polymers, LyondellBasell, Evonik, DuPont and Adani Exports.
            </p>
            <p>
              His work covers end-to-end EXIM operations — documentation, customs and regulatory compliance, letters of credit and trade finance, HS code and tariff analysis, freight negotiation, SAP-based order management and logistics coordination — across Africa, the Middle East, India, South-East Asia, Australia and Latin America.
            </p>
            <p>
              He complements this domain depth with market research, competitive analysis, buyer identification and due diligence, using modern data and AI-assisted research tools to turn trade data into clear, actionable strategy for clients.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Core competencies */}
    <section className="container py-16">
      <h2 className="text-2xl font-bold mb-8">Core Competencies</h2>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {competencies.map((c) => (
          <li key={c} className="flex items-start gap-2 text-sm text-foreground">
            <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
            {c}
          </li>
        ))}
      </ul>
    </section>

    {/* Experience + Regions */}
    <section className="section-gradient">
      <div className="container py-16 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>
          <ul className="space-y-5">
            {experience.map((e) => (
              <li key={e.company} className="border-l-2 border-accent pl-4">
                <div className="font-semibold text-foreground">{e.company}</div>
                <div className="text-sm text-muted-foreground">{e.note}</div>
                <div className="text-xs text-muted-foreground mt-1">{e.period}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Globe2 className="h-6 w-6 text-accent" />
              <h2 className="text-2xl font-bold">Regions of Expertise</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Africa · Middle East · India · South-East Asia · Australia · Latin America
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Education &amp; Certifications</h2>
            <ul className="space-y-4">
              {credentials.map((c) => (
                <li key={c.title} className="flex items-start gap-3">
                  <c.icon className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground text-sm">{c.title}</div>
                    <div className="text-sm text-muted-foreground">{c.detail}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default About;


