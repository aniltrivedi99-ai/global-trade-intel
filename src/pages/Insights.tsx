import { Clock, ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Top 10 Emerging Export Markets in 2026",
    excerpt: "Discover which markets are poised for significant growth and how to position your business to take advantage.",
    category: "Market Trends",
    date: "Apr 10, 2026",
    readTime: "5 min",
  },
  {
    title: "Understanding New EU Trade Regulations",
    excerpt: "A comprehensive breakdown of the latest EU trade policy changes and their impact on exporters worldwide.",
    category: "Trade Policy",
    date: "Apr 5, 2026",
    readTime: "8 min",
  },
  {
    title: "How AI Is Transforming Trade Data Analysis",
    excerpt: "Machine learning and AI are revolutionizing how businesses analyze trade flows and predict market movements.",
    category: "Technology",
    date: "Mar 28, 2026",
    readTime: "6 min",
  },
  {
    title: "Supply Chain Resilience: Lessons from 2025",
    excerpt: "Key takeaways from last year's supply chain disruptions and strategies for building more resilient networks.",
    category: "Supply Chain",
    date: "Mar 20, 2026",
    readTime: "7 min",
  },
  {
    title: "ASEAN Free Trade Agreements: Opportunities for Exporters",
    excerpt: "How to leverage ASEAN's expanding trade agreements for competitive advantage in Southeast Asian markets.",
    category: "Market Trends",
    date: "Mar 12, 2026",
    readTime: "6 min",
  },
  {
    title: "Export Compliance Checklist for New Exporters",
    excerpt: "Essential steps every new exporter should follow to ensure compliance with international trade regulations.",
    category: "Compliance",
    date: "Mar 5, 2026",
    readTime: "4 min",
  },
];

const categoryColors: Record<string, string> = {
  "Market Trends": "bg-accent/10 text-accent",
  "Trade Policy": "bg-primary/10 text-primary",
  Technology: "bg-accent/10 text-accent",
  "Supply Chain": "bg-primary/10 text-primary",
  Compliance: "bg-accent/10 text-accent",
};

const Insights = () => (
  <div>
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Insights & Analysis</h1>
        <p className="text-primary-foreground/70 text-lg">
          Expert perspectives on global trade, market trends, and export strategy.
        </p>
      </div>
    </section>

    <section className="container py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((a) => (
          <article key={a.title} className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
            <div className="h-40 bg-secondary flex items-center justify-center">
              <span className="text-4xl text-muted-foreground/20 font-bold">EI</span>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[a.category] || "bg-secondary text-foreground"}`}>
                  {a.category}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {a.readTime}
                </span>
              </div>
              <h3 className="font-semibold leading-snug group-hover:text-accent transition-colors">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.excerpt}</p>
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-muted-foreground">{a.date}</span>
                <span className="text-sm text-accent font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  </div>
);

export default Insights;
