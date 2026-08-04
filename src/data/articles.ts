import emergingMarketsImg from "@/assets/insight-emerging-markets.jpg";
import emergingMarketsAvif from "@/assets/insight-emerging-markets.jpg?format=avif&w=720&quality=55";
import emergingMarketsWebp from "@/assets/insight-emerging-markets.jpg?format=webp&w=720&quality=68";
import euRegulationsImg from "@/assets/insight-eu-regulations.jpg";
import euRegulationsAvif from "@/assets/insight-eu-regulations.jpg?format=avif&w=720&quality=55";
import euRegulationsWebp from "@/assets/insight-eu-regulations.jpg?format=webp&w=720&quality=68";
import aiTradeDataImg from "@/assets/insight-ai-trade-data.jpg";
import aiTradeDataAvif from "@/assets/insight-ai-trade-data.jpg?format=avif&w=720&quality=55";
import aiTradeDataWebp from "@/assets/insight-ai-trade-data.jpg?format=webp&w=720&quality=68";
import supplyChainImg from "@/assets/insight-supply-chain.jpg";
import supplyChainAvif from "@/assets/insight-supply-chain.jpg?format=avif&w=720&quality=55";
import supplyChainWebp from "@/assets/insight-supply-chain.jpg?format=webp&w=720&quality=68";
import aseanFtaImg from "@/assets/insight-asean-fta.jpg";
import aseanFtaAvif from "@/assets/insight-asean-fta.jpg?format=avif&w=720&quality=55";
import aseanFtaWebp from "@/assets/insight-asean-fta.jpg?format=webp&w=720&quality=68";
import complianceChecklistImg from "@/assets/insight-compliance-checklist.jpg";
import complianceChecklistAvif from "@/assets/insight-compliance-checklist.jpg?format=avif&w=720&quality=55";
import complianceChecklistWebp from "@/assets/insight-compliance-checklist.jpg?format=webp&w=720&quality=68";

export type Article = {
  slug: string;
  title: string;
  image: string;
  imageAvif: string;
  imageWebp: string;
  imageAlt: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string[];
};

export const articles: Article[] = [
  {
    slug: "top-10-emerging-export-markets-2026",
    image: emergingMarketsImg,
    imageAvif: emergingMarketsAvif,
    imageWebp: emergingMarketsWebp,
    imageAlt: "Sunlit desk with a world map marked with pins, notebook and coffee",
    title: "Top 10 Emerging Export Markets in 2026",
    excerpt:
      "Discover which markets are poised for significant growth and how to position your business to take advantage.",
    category: "Market Trends",
    date: "Apr 10, 2026",
    readTime: "5 min",
    content: [
      "Global trade is shifting. As supply chains diversify away from concentrated hubs, a new wave of high-growth destinations is emerging for exporters in 2026.",
      "From Vietnam and Indonesia in Southeast Asia, to Mexico's nearshoring boom, to the rapid industrialisation of East Africa, the opportunity set has never been wider — or more nuanced.",
      "In this analysis we rank the ten markets we believe deserve the most attention this year, based on GDP growth, import demand, trade-agreement coverage, and ease of market entry for mid-sized exporters.",
      "Each market profile includes the leading product categories, typical buyer profiles, and the regulatory checkpoints you should clear before your first shipment.",
    ],
  },
  {
    slug: "understanding-new-eu-trade-regulations",
    image: euRegulationsImg,
    imageAvif: euRegulationsAvif,
    imageWebp: euRegulationsWebp,
    imageAlt: "EU regulation documents and a small EU flag on a warm-lit wooden table",
    title: "Understanding New EU Trade Regulations",
    excerpt:
      "A comprehensive breakdown of the latest EU trade policy changes and their impact on exporters worldwide.",
    category: "Trade Policy",
    date: "Apr 5, 2026",
    readTime: "8 min",
    content: [
      "The European Union continues to be one of the most demanding regulatory environments in the world — and one of the most rewarding markets for exporters who get compliance right.",
      "The 2026 updates touch carbon border adjustments (CBAM), digital product passports, and revised rules of origin under several preferential trade agreements.",
      "This article walks through the most material changes, what they mean for documentation, and how to avoid the most common reasons shipments are held at the border.",
    ],
  },
  {
    slug: "ai-transforming-trade-data-analysis",
    image: aiTradeDataImg,
    imageAvif: aiTradeDataAvif,
    imageWebp: aiTradeDataWebp,
    imageAlt: "Laptop showing glowing trade analytics charts on a cozy evening desk",
    title: "How AI Is Transforming Trade Data Analysis",
    excerpt:
      "Machine learning and AI are revolutionizing how businesses analyze trade flows and predict market movements.",
    category: "Technology",
    date: "Mar 28, 2026",
    readTime: "6 min",
    content: [
      "Trade data has always been abundant, but until recently it was hard to turn into actionable intelligence. AI changes that.",
      "Modern models can ingest HS-coded shipment records, freight rates, and macro indicators to surface demand shifts weeks before they show up in traditional reports.",
      "We look at the practical use cases — buyer discovery, price benchmarking, and risk monitoring — and what to look for when evaluating an AI-driven trade intelligence platform.",
    ],
  },
  {
    slug: "supply-chain-resilience-lessons",
    image: supplyChainImg,
    imageAvif: supplyChainAvif,
    imageWebp: supplyChainWebp,
    imageAlt: "Container port at golden sunset with cranes and a cargo ship",
    title: "Supply Chain Resilience: Lessons from 2025",
    excerpt:
      "Key takeaways from last year's supply chain disruptions and strategies for building more resilient networks.",
    category: "Supply Chain",
    date: "Mar 20, 2026",
    readTime: "7 min",
    content: [
      "2025 reminded every exporter that resilience is no longer optional. From the Red Sea diversions to extreme weather affecting key ports, single-source supply chains were repeatedly tested.",
      "The exporters who weathered the year best had three things in common: diversified routing, transparent tier-2 supplier visibility, and contractual flexibility with buyers.",
      "We break down each of those practices with concrete examples and a checklist you can apply to your own operation this quarter.",
    ],
  },
  {
    slug: "asean-free-trade-agreements",
    image: aseanFtaImg,
    imageAvif: aseanFtaAvif,
    imageWebp: aseanFtaWebp,
    imageAlt: "Southeast Asian trade port town at golden hour with crates of goods",
    title: "ASEAN Free Trade Agreements: Opportunities for Exporters",
    excerpt:
      "How to leverage ASEAN's expanding trade agreements for competitive advantage in Southeast Asian markets.",
    category: "Market Trends",
    date: "Mar 12, 2026",
    readTime: "6 min",
    content: [
      "ASEAN has quietly become one of the most preferential trade blocks in the world, with overlapping FTAs covering nearly every major economy.",
      "For exporters, the real value is not just lower tariffs — it's the cumulation rules that let you blend inputs across the region to qualify for preferential origin.",
      "This piece explains how to read a certificate of origin, when RCEP beats bilateral FTAs, and the documentation traps that catch first-time shippers.",
    ],
  },
  {
    slug: "export-compliance-checklist",
    image: complianceChecklistImg,
    imageAvif: complianceChecklistAvif,
    imageWebp: complianceChecklistWebp,
    imageAlt: "Export compliance checklist with pen and coffee under warm lamp light",
    title: "Export Compliance Checklist for New Exporters",
    excerpt:
      "Essential steps every new exporter should follow to ensure compliance with international trade regulations.",
    category: "Compliance",
    date: "Mar 5, 2026",
    readTime: "4 min",
    content: [
      "Compliance failures are the most expensive — and most preventable — mistakes a new exporter can make. A held shipment can wipe out the margin on an entire order.",
      "Our 12-point checklist walks through HS classification, restricted-party screening, licensing, packing and labelling, INCOTERMS selection, and the documentation pack your freight forwarder will expect.",
      "Use it as a pre-shipment sign-off before every first order to a new destination.",
    ],
  },
];
