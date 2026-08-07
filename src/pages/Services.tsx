import { Globe, BarChart3, TrendingUp, Search, FileCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import KYCMatrix from "@/components/KYCMatrix";
import Picture from "@/components/Picture";
import docComplianceImg from "@/assets/service-documentation-compliance.jpg";
import docComplianceAvif from "@/assets/service-documentation-compliance.jpg?format=avif&w=720&quality=55";
import docComplianceWebp from "@/assets/service-documentation-compliance.jpg?format=webp&w=720&quality=68";
import exportConsultingImg from "@/assets/service-export-consulting.jpg";
import exportConsultingAvif from "@/assets/service-export-consulting.jpg?format=avif&w=720&quality=55";
import exportConsultingWebp from "@/assets/service-export-consulting.jpg?format=webp&w=720&quality=68";
import marketIntelligenceImg from "@/assets/service-market-intelligence.jpg";
import marketIntelligenceAvif from "@/assets/service-market-intelligence.jpg?format=avif&w=720&quality=55";
import marketIntelligenceWebp from "@/assets/service-market-intelligence.jpg?format=webp&w=720&quality=68";
import tradeAnalyticsImg from "@/assets/service-trade-analytics.jpg";
import tradeAnalyticsAvif from "@/assets/service-trade-analytics.jpg?format=avif&w=720&quality=55";
import tradeAnalyticsWebp from "@/assets/service-trade-analytics.jpg?format=webp&w=720&quality=68";
import buyerDueDiligenceImg from "@/assets/service-buyer-due-diligence.jpg";
import buyerDueDiligenceAvif from "@/assets/service-buyer-due-diligence.jpg?format=avif&w=720&quality=55";
import buyerDueDiligenceWebp from "@/assets/service-buyer-due-diligence.jpg?format=webp&w=720&quality=68";


const services = [
  {
    icon: Globe,
    image: exportConsultingImg,
    imageAvif: exportConsultingAvif,
    imageWebp: exportConsultingWebp,
    imageAlt: "Container ship and port cranes representing export strategy and market entry",
    title: "Export Strategy & International Market Entry",
    desc: "Practical guidance to select markets, position your product and enter new geographies — drawn from 23+ years in chemicals, polymers and petrochemicals.",
    features: ["Market entry strategy", "Pricing & positioning", "Risk assessment", "Export roadmap"],
  },
  {
    icon: BarChart3,
    image: marketIntelligenceImg,
    imageAvif: marketIntelligenceAvif,
    imageWebp: marketIntelligenceWebp,
    imageAlt: "Analysts reviewing global market research charts and world map",
    title: "Export Market Research & Buyer Mapping",
    desc: "Market research, competitive analysis, duty and tariff insights, and buyer mapping across target markets.",
    features: ["Market research", "Competitor mapping", "Buyer identification", "Duty & tariff insights", "Country profiles", "Sector deep dives"],
  },
  {
    icon: Search,
    image: buyerDueDiligenceImg,
    imageAvif: buyerDueDiligenceAvif,
    imageWebp: buyerDueDiligenceWebp,
    imageAlt: "Business handshake over a verification checklist for buyer due diligence",
    title: "Buyer Verification & Commercial Due Diligence",
    desc: "KYC, credit assessment and commercial background checks before you commit to a counterparty.",
    features: ["KYC verification", "Credit assessment", "Legal & statutory checks", "Operational review"],
  },
  {
    icon: FileCheck,
    image: docComplianceImg,
    imageAvif: docComplianceAvif,
    imageWebp: docComplianceWebp,
    imageAlt: "Export documentation and letter of credit paperwork on a desk",
    title: "Trade Compliance & Documentation",
    desc: "Export-import documentation, HS code classification, customs and regulatory compliance handled end to end.",
    features: ["Export-import documentation", "HS code classification", "Customs compliance", "FTA rules of origin"],
  },
  {
    icon: TrendingUp,
    image: tradeAnalyticsImg,
    imageAvif: tradeAnalyticsAvif,
    imageWebp: tradeAnalyticsWebp,
    imageAlt: "Trade data analytics dashboard with charts on monitors",
    title: "AI-enabled Export Intelligence",
    desc: "Modern data and AI-assisted research that turns trade data and economic indicators into clear, actionable strategy.",
    features: ["Trade flow analysis", "Tariff impact review", "Supply chain mapping", "Custom reports"],
  },
];

const additionalServices = [
  {
    icon: FileCheck,
    title: "Letter of Credit (LC) Advisory",
    desc: "LC scrutiny, negotiation support and documentary trade risk control — B/L, COO and shipping certificates reviewed for clean presentation.",
  },
  {
    icon: Globe,
    title: "Export Operations & Supply Chain Coordination",
    desc: "Order management, freight negotiation, logistics coordination and end-to-end shipment follow-through.",
  },
  {
    icon: Users,
    title: "Training, Workshops & Advisory Support",
    desc: "Hands-on EXIM training for your team plus ongoing advisory support on live shipments and market decisions.",
  },
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
          <div className="flex-1 w-full overflow-hidden rounded-lg bg-secondary">
            <Picture
              avif={s.imageAvif}
              webp={s.imageWebp}
              src={s.image}
              alt={s.imageAlt}
              width={1024}
              height={640}
              loading="lazy"
              className="h-56 w-full object-cover md:h-64"
            />
          </div>

        </div>
      ))}
    </section>

    <KYCMatrix />


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
