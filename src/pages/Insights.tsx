import { Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";
import SEO from "@/components/SEO";

const categoryColors: Record<string, string> = {
  "Market Trends": "bg-accent/10 text-accent",
  "Trade Policy": "bg-primary/10 text-primary",
  Technology: "bg-accent/10 text-accent",
  "Supply Chain": "bg-primary/10 text-primary",
  Compliance: "bg-accent/10 text-accent",
};

const Insights = () => (
  <div>
    <SEO
      title="Trade Insights | Export Market Research, Compliance & Buyer Intelligence"
      description="Expert insights on global trade, export markets, customs and trade compliance, buyer due diligence, KYC and supply chain strategy."
      path="/insights"
      keywords="trade insights, export market research, trade compliance, customs, buyer due diligence, KYC, supply chain, international trade analysis"
    />
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
          <Link
            to={`/insights/${a.slug}`}
            key={a.slug}
            className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-md transition-shadow group"
          >
            <div className="h-40 bg-secondary flex items-center justify-center">
              <span className="text-4xl text-muted-foreground/20 font-bold">TI</span>
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
          </Link>
        ))}
      </div>
    </section>
  </div>
);

export default Insights;
