import { Globe, BarChart3, TrendingUp, Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import KYCMatrix from "@/components/KYCMatrix";

const services = [
  {
    icon: Globe,
    title: "Export Consulting",
    desc: "Navigate the complexities of international trade with strategic guidance tailored to your business goals.",
    features: ["Market entry strategy", "Trade Compliance", "Pricing & positioning", "Risk assessment"],
  },
  {
    icon: BarChart3,
    title: "Market Intelligence",
    desc: "Make informed decisions with comprehensive market research and competitive analysis.",
    features: ["Demand forecasting", "Competitor mapping", "Consumer insights", "Opportunity scoring", "Country Profiles", "Sector Deep Dives"],
  },
  {
    icon: TrendingUp,
    title: "Trade Data Analytics",
    desc: "Leverage real-time trade data and advanced analytics to identify trends and opportunities.",
    features: ["Custom dashboards", "Trade flow analysis", "Tariff impact modeling", "Supply chain mapping"],
  },
  {
    icon: Search,
    title: "Buyer Search & Due Diligence",
    desc: "Identify and verify reliable international buyers with comprehensive background checks and KYC verification.",
    features: ["Buyer identification", "Due diligence", "KYC verification", "Credit assessment"],
  },
];

const Services = () => (
  <div>
    <SEO
      title="Services | Export Consulting, Buyer Search, KYC, Due Diligence & Trade Compliance"
      description="Export consulting, market intelligence, trade data analytics, buyer search & due diligence, KYC verification, risk analysis, export strategy and customs & trade compliance services."
      path="/services"
      keywords="export consulting services, import services, buyer search, due diligence, KYC, trade compliance, customs compliance, market research, trade data analytics, risk analysis, export strategy"
    />
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-primary-foreground/70 text-lg">
          End-to-end solutions for businesses looking to export smarter and grow faster.
        </p>
      </div>
    </section>

    <section className="container py-16 space-y-12">
      {services.map((s, i) => (
        <div
          key={s.title}
          className={`flex flex-col md:flex-row gap-8 items-start ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
        >
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-accent/10">
                <s.icon className="h-7 w-7 text-accent" />
              </div>
              <h2 className="text-2xl font-bold">{s.title}</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            <ul className="grid grid-cols-2 gap-2">
              {s.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                  <ArrowRight className="h-3 w-3 text-accent flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full h-48 rounded-lg bg-secondary flex items-center justify-center">
            <s.icon className="h-16 w-16 text-muted-foreground/30" />
          </div>
        </div>
      ))}
    </section>

    <section className="bg-primary">
      <div className="container py-16 text-center">
        <h2 className="text-3xl font-bold text-primary-foreground mb-4">Need a Custom Solution?</h2>
        <p className="text-primary-foreground/70 mb-8">Let's discuss how we can tailor our services to your specific needs.</p>
        <Link to="/contact">
          <Button variant="hero" size="lg">Contact Us</Button>
        </Link>
      </div>
    </section>
  </div>
);

export default Services;
