import { Helmet } from "react-helmet-async";
import defaultSocialImage from "@/assets/hero-globe.jpg";

const SITE = "https://www.globaltradeintell.com";

type Props = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  type?: "website" | "article";
  image?: string;
  imageAlt?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

const absoluteUrl = (value: string) =>
  /^https?:\/\//i.test(value) ? value : new URL(value, SITE).toString();

const SEO = ({
  title,
  description,
  path,
  keywords,
  type = "website",
  image,
  imageAlt,
  jsonLd,
}: Props) => {
  const url = absoluteUrl(path);
  const socialImage = absoluteUrl(image || defaultSocialImage);
  const ldArray = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Global Trade Intell" />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Global Trade Intell" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={socialImage} />
      <meta property="og:image:alt" content={imageAlt || "Global Trade Intell — international trade advisory"} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialImage} />
      {ldArray.map((ld, index) => (
        <script key={index} type="application/ld+json">{JSON.stringify(ld)}</script>
      ))}
    </Helmet>
  );
};

export default SEO;
