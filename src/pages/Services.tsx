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
    icon: FileCheck,
    image: docComplianceImg,
    imageAvif: docComplianceAvif,
    imageWebp: docComplianceWebp,
    imageAlt: "Export documentation and letter of credit paperwork on a desk",
    title: "Documentation & Trade Compliance",
    desc: "Export-import documentation, LC verification, customs and regulatory compliance handled end to end.",
    features: ["Export-import documentation", "LC verification & scrutiny", "HS code classification", "Customs & regulatory compliance"],
  },
  {
    icon: BarChart3,
    image: marketIntelligenceImg,
    imageAvif: marketIntelligenceAvif,
    imageWebp: marketIntelligenceWebp,
    imageAlt: "Analysts reviewing global market research charts and world map",
    title: "Market Intelligence & Data Analysis",
    desc: "Market research, competitive analysis, HS code, duty and tariff insights for informed decisions.",
    features: ["Market research", "Competitor mapping", "Duty & tariff insights", "Country profiles", "Sector deep dives", "Opportunity scoring"],
  },
  {
    icon: Search,
    image: buyerDueDiligenceImg,
    imageAvif: buyerDueDiligenceAvif,
    imageWebp: buyerDueDiligenceWebp,
    imageAlt: "Business handshake over a verification checklist for buyer due diligence",
    title: "New Buyer Search & Due Diligence",
    desc: "Buyer identification across target markets, backed by KYC and credit verification before you commit.",
    features: ["Buyer identification", "Lead generation", "KYC verification", "Credit assessment"],
  },
  {
    icon: TrendingUp,
    image: tradeAnalyticsImg,
    imageAvif: tradeAnalyticsAvif,
    imageWebp: tradeAnalyticsWebp,
    imageAlt: "Trade data analytics dashboard with charts on monitors",
    title: "Trade Data Analytics",
    desc: "Insights from trade data and economic indicators to track flows, pricing and demand shifts.",
    features: ["Trade flow analysis", "Tariff impact review", "Supply chain mapping", "Custom reports"],
  },
  {
    icon: Globe,
    image: exportConsultingImg,
    imageAvif: exportConsultingAvif,
    imageWebp: exportConsultingWebp,
    imageAlt: "Container ship and port cranes representing export consulting services",
    title: "Export Consulting",
    desc: "Practical guidance to enter and expand in international markets, drawn from 23+ years in chemicals, polymers and petrochemicals.",
    features: ["Market entry strategy", "Pricing & positioning", "Risk assessment", "Export strategy"],
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
