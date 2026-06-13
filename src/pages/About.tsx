import { Target, Eye, Users } from "lucide-react";
import SEO from "@/components/SEO";

const team = [
  { name: "Sarah Chen", role: "CEO & Founder", bio: "20+ years in international trade policy and market strategy." },
  { name: "Michael Torres", role: "Head of Analytics", bio: "Former World Bank data scientist specializing in trade flows." },
  { name: "Aisha Patel", role: "Compliance Director", bio: "Expert in export regulations across 50+ jurisdictions." },
  { name: "David Kim", role: "Market Strategist", bio: "Helped 200+ companies enter new international markets." },
];

const About = () => (
  <div>
    <SEO
      title="About Trade Intelligence | Export-Import Consultants in Mumbai, India"
      description="Trade Intelligence helps exporters and importers grow globally with trade data analytics, buyer search, KYC, due diligence and customs compliance expertise."
      path="/about"
      keywords="export import consultants India, trade advisory Mumbai, international trade experts, export consulting firm, buyer verification, KYC due diligence"
    />
    {/* Header */}
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">About Trade Intelligence</h1>
        <p className="text-primary-foreground/70 text-lg">
          We combine deep trade expertise with cutting-edge data analytics to help businesses thrive in global markets.
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
          To democratize access to global trade intelligence, enabling businesses of all sizes to make informed export decisions. We believe every company deserves the data and insights needed to compete on the world stage.
        </p>
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Eye className="h-8 w-8 text-accent" />
          <h2 className="text-2xl font-bold">Our Vision</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          A world where international trade barriers are understood and overcome through data-driven decision making, creating a more connected and prosperous global economy for all participants.
        </p>
      </div>
    </section>

    {/* Team */}
    <section className="section-gradient">
      <div className="container py-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Users className="h-8 w-8 text-accent" />
            <h2 className="text-3xl font-bold">Our Team</h2>
          </div>
          <p className="text-muted-foreground">Industry experts dedicated to your global success.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((t) => (
            <div key={t.name} className="bg-card rounded-lg p-6 text-center border border-border shadow-sm">
              <div className="w-20 h-20 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-primary">
                {t.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h3 className="font-semibold">{t.name}</h3>
              <p className="text-sm text-accent font-medium">{t.role}</p>
              <p className="text-sm text-muted-foreground mt-2">{t.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
