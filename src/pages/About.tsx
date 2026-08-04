import { Target, Eye, User } from "lucide-react";
import SEO from "@/components/SEO";
import founderPhoto from "@/assets/anil-trivedi.jpg.asset.json";


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
              alt="Anil Trivedi, founder of Trade Intelligence"
              width={783}
              height={1376}
              loading="lazy"
              className="w-56 h-auto object-contain rounded-lg border border-border shadow-sm bg-muted"
            />
            <p className="mt-3 text-center">
              <span className="block font-semibold text-foreground">Anil Trivedi</span>
              <span className="block text-sm text-muted-foreground">Founder</span>
            </p>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              <span className="font-semibold text-foreground">Anil Trivedi</span> is the founder of Trade Intelligence, a Mumbai-based export-import advisory practice. With decades of hands-on experience in international trade, market research, buyer due diligence and trade compliance, he has guided exporters and importers across diverse sectors to enter new markets, identify reliable buyers and navigate complex customs and regulatory frameworks.
            </p>
            <p>
              His work blends deep domain expertise with data-driven research, helping clients turn global trade data into clear, actionable strategy. Trade Intelligence was founded with the conviction that every business — large or small — deserves access to the same caliber of insight that drives the world's most successful exporters.
            </p>
          </div>
        </div>

      </div>
    </section>
  </div>
);

export default About;

