import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import { articles } from "@/data/articles";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const InsightDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Article not found</h1>
        <Button asChild variant="outline">
          <Link to="/insights">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Insights
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      <SEO
        title={`${article.title} | Trade Intelligence Insights`}
        description={article.excerpt}
        path={`/insights/${article.slug}`}
        type="article"
        keywords={`${article.category}, export, import, international trade, ${article.title}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.excerpt,
          datePublished: article.date,
          articleSection: article.category,
          author: { "@type": "Organization", name: "Trade Intelligence" },
          publisher: { "@type": "Organization", name: "Trade Intelligence" },
        }}
      />
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container max-w-3xl">
          <Link
            to="/insights"
            className="inline-flex items-center text-sm text-primary-foreground/70 hover:text-primary-foreground mb-6"
          >
            <ArrowLeft className="mr-1 h-4 w-4" /> All Insights
          </Link>
          <div className="flex items-center gap-3 text-sm text-primary-foreground/70 mb-4">
            <span className="bg-accent/20 text-accent-foreground px-2 py-0.5 rounded-full text-xs font-medium">
              {article.category}
            </span>
            <span>{article.date}</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" /> {article.readTime}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">{article.title}</h1>
        </div>
      </section>

      <article className="container max-w-3xl py-12 space-y-5">
        <p className="text-lg text-muted-foreground leading-relaxed">{article.excerpt}</p>
        {article.content.map((para, i) => (
          <p key={i} className="text-base leading-relaxed text-foreground">
            {para}
          </p>
        ))}
        <div className="pt-8 border-t border-border">
          <Button asChild>
            <Link to="/contact">Talk to our experts</Link>
          </Button>
        </div>
      </article>
    </div>
  );
};

export default InsightDetail;
