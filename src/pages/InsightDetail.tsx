import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import { articles } from "@/data/articles";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import Picture from "@/components/Picture";

const SITE = "https://www.globaltradeintell.com";

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

  const canonicalUrl = SITE + "/insights/" + article.slug;
  const imageUrl = new URL(article.image, SITE).toString();
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": canonicalUrl + "#article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    headline: article.title,
    description: article.seoDescription || article.excerpt,
    image: [imageUrl],
    datePublished: article.dateISO || article.date,
    dateModified: article.dateISO || article.date,
    articleSection: article.category,
    keywords: article.searchKeywords || [article.category, article.title],
    inLanguage: "en-IN",
    author: {
      "@type": "Organization",
      name: "Global Trade Intell",
      url: SITE,
    },
    publisher: {
      "@type": "Organization",
      name: "Global Trade Intell",
      url: SITE,
    },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
      { "@type": "ListItem", position: 2, name: "Insights", item: SITE + "/insights" },
      { "@type": "ListItem", position: 3, name: article.title, item: canonicalUrl },
    ],
  };

  return (
    <div>
      <SEO
        title={article.seoTitle || article.title + " | Global Trade Intell Insights"}
        description={article.seoDescription || article.excerpt}
        path={"/insights/" + article.slug}
        type="article"
        keywords={(article.searchKeywords || [article.category, "export", "import", "international trade", article.title]).join(", ")}
        image={article.image}
        imageAlt={article.imageAlt}
        jsonLd={[articleJsonLd, breadcrumbJsonLd]}
      />
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container max-w-3xl">
          <Link
            to="/insights"
            className="inline-flex items-center text-sm text-primary-foreground/70 hover:text-primary-foreground mb-6"
          >
            <ArrowLeft className="mr-1 h-4 w-4" /> All Insights
          </Link>
          <div className="flex flex-wrap items-center gap-3 text-sm text-primary-foreground/70 mb-4">
            <span className="bg-accent/20 text-accent-foreground px-2 py-0.5 rounded-full text-xs font-medium">
              {article.category}
            </span>
            <time dateTime={article.dateISO || undefined}>{article.date}</time>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" /> {article.readTime}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">{article.title}</h1>
        </div>
      </section>

      <article className="container max-w-3xl py-12 space-y-5">
        <Picture
          avif={article.imageAvif}
          webp={article.imageWebp}
          src={article.image}
          alt={article.imageAlt}
          width={1024}
          height={640}
          fetchpriority="high"
          className="w-full rounded-lg object-cover shadow-sm"
        />
        <p className="text-lg text-muted-foreground leading-relaxed">{article.excerpt}</p>
        {article.byline && (
          <p className="text-sm text-muted-foreground">
            Research and editorial: {article.byline}
          </p>
        )}

        {article.sections && article.sections.length > 0 ? (
          article.sections.map((section) => (
            <section key={section.id} aria-labelledby={section.id} className="space-y-3">
              <h2 id={section.id} className="text-xl font-semibold text-foreground">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-base leading-relaxed text-foreground">
                  {paragraph}
                </p>
              ))}
            </section>
          ))
        ) : (
          article.content.map((paragraph, index) => (
            <p key={index} className="text-base leading-relaxed text-foreground">
              {paragraph}
            </p>
          ))
        )}

        {article.faqs && article.faqs.length > 0 && (
          <section
            aria-labelledby="article-faq-heading"
            className="pt-6 border-t border-border space-y-4"
          >
            <h2 id="article-faq-heading" className="text-xl font-semibold text-foreground">
              Frequently asked questions
            </h2>
            {article.faqs.map((faq, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-base font-semibold text-foreground">{faq.question}</h3>
                <p className="text-base leading-relaxed text-foreground">{faq.answer}</p>
              </div>
            ))}
          </section>
        )}

        {article.sources && article.sources.length > 0 && (
          <section
            aria-labelledby="article-sources-heading"
            className="pt-6 border-t border-border space-y-3"
          >
            <h2 id="article-sources-heading" className="text-lg font-semibold text-foreground">
              Official sources and further reading
            </h2>
            <ul className="space-y-2">
              {article.sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent underline underline-offset-4 hover:text-primary"
                  >
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
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
