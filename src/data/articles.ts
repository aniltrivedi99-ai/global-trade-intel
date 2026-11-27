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
  dateISO?: string;
  dateModifiedISO?: string;
  autoPublished?: boolean;
  readTime: string;
  content: string[];
  seoTitle?: string;
  seoDescription?: string;
  searchKeywords?: string[];
  byline?: string;
  sections?: { id: string; heading: string; paragraphs: string[] }[];
  faqs?: { question: string; answer: string }[];
  sources?: { label: string; url: string }[];
};

export const articles: Article[] = [
  {
    slug: "dgft-niryat-disha-msme-export-support-2026",
    image: complianceChecklistImg,
    imageAvif: complianceChecklistAvif,
    imageWebp: complianceChecklistWebp,
    imageAlt: "Export compliance checklist with pen and coffee under warm lamp light",
    title: "DGFT Expands Niryat Disha Support: What MSME Exporters Should Check",
    excerpt:
      "Three DGFT amendments widen the reach of freight support, market-access assistance and eligible export certification under the Export Promotion Mission. Here is what Indian MSME exporters should review before planning an activity or incurring costs.",
    category: "Trade Policy",
    date: "Nov 24, 2026",
    dateISO: "2026-11-24",
    readTime: "5 min",
    seoTitle: "DGFT Niryat Disha 2026: MSME Export Support & Eligibility | GTI",
    seoDescription:
      "DGFT's November 2026 Niryat Disha changes explained: MAS airfare assistance, LIFT freight reimbursement and TRACE testing and certification support for eligible MSME exporters.",
    searchKeywords: [
      "DGFT Niryat Disha 2026",
      "Niryat Disha scheme for MSME exporters",
      "Export Promotion Mission",
      "MAS airfare assistance",
      "LIFT freight reimbursement",
      "TRACE testing and certification support",
      "DGFT Trade Notice 35/2026-27",
      "DGFT Trade Notice 36/2026-27",
      "DGFT Trade Notice 37/2026-27",
    ],
    byline: "Global Trade Intell Research Desk",
    content: [],
    sections: [
      {
        id: "niryat-disha-november-2026-amendments",
        heading: "What changed under DGFT Niryat Disha in November 2026?",
        paragraphs: [
          "DGFT issued three amendments under Niryat Disha on 17 November 2026: Trade Notices 35, 36 and 37/2026-27 for Market Access Support (MAS), Logistics Interventions for Freight and Transport (LIFT), and Trade Regulations, Accreditation and Compliance Enablement (TRACE). The Department of Commerce summarised them in a Press Information Bureau release on 18 November."
        ]
      },
      {
        id: "mas-airfare-assistance",
        heading: "Market Access Support (MAS): revised airfare assistance",
        paragraphs: [
          "The preceding-year export-turnover ceiling for eligible airfare support at Buyer-Seller Meets, trade fairs and trade delegations has risen from ₹75 lakh to ₹50 crore. Reimbursement is up to 95% of eligible economy-class airfare for Micro and Small enterprises and 80% for other eligible exporters, within prescribed regional caps. The specified new-IEC registration period and organising-agency membership period before an event have each been reduced from six months to three months. This is not a general travel grant."
        ]
      },
      {
        id: "lift-freight-reimbursement",
        heading: "LIFT: freight reimbursement for eligible MSME exporters",
        paragraphs: [
          "DGFT's detailed notice identifies 308 low-export-intensity districts across 21 States/UTs; the PIB release describes wider programme coverage increasing from 13 to 34 States/UTs. Partial freight reimbursement is available to eligible MSMEs shipping from listed districts, except for negative-list items. Covered movement points now include Land Customs Stations and Integrated Check Posts with attached CFS, and inland waterways are recognised alongside road and rail. The minimum distance falls from 200 km to 100 km; inland freight reimbursement is capped at 400 km, including multimodal movement. Air-freight support also covers Jammu & Kashmir and Ladakh, in addition to the North Eastern Region. Claims require freight invoices, proof of payment, shipping bills and e-way bills; land-frontier exports also require the accepted Bill of Export."
        ]
      },
      {
        id: "trace-testing-certification-support",
        heading: "TRACE: expanded eligible testing and certification list",
        paragraphs: [
          "The annexure of eligible testing, inspection and certification entries has expanded from 462 to 600. This widens the list; it does not make every test or certificate eligible. Match the exact requirement to the current annexure and TRACE guidelines before placing an order."
        ]
      },
      {
        id: "exporter-eligibility-and-documentation-checks",
        heading: "What exporters should check before incurring costs",
        paragraphs: [
          "Before incurring costs, identify the relevant intervention and check the current operational guidelines. For MAS, verify turnover, event, delegate, organiser-membership and airfare-ceiling conditions. For LIFT, confirm MSME status, district, product negative-list status, route, distance and supporting shipment evidence. For TRACE, confirm that the proposed test or certificate is included in the eligible list. Retain quotations, invoices, payment proof and resulting certificates or reports.",
          "The amendments apply prospectively from 17 November 2026; all other provisions of the earlier guidelines remain in force. Reimbursement is conditional on meeting the scheme rules, claim approval and available budget. A district or product appearing in a list does not by itself establish entitlement."
        ]
      },
      {
        id: "implications-for-indian-msme-exporters",
        heading: "What these changes mean for Indian MSME exporters",
        paragraphs: [
          "These changes may help qualifying MSMEs manage selected market-development, freight and compliance costs. They are conditional support measures, not assured subsidies. Export costing, product-market viability and destination-market compliance remain essential."
        ]
      }
    ],
    faqs: [
      {
        question: "What is Niryat Disha under the Export Promotion Mission?",
        answer: "This article covers three Niryat Disha interventions amended by DGFT on 17 November 2026: Market Access Support (MAS), Logistics Interventions for Freight and Transport (LIFT), and Trade Regulations, Accreditation and Compliance Enablement (TRACE)."
      },
      {
        question: "How much airfare assistance is available under MAS?",
        answer: "The amended provisions provide reimbursement of up to 95% of eligible economy-class airfare for Micro and Small enterprises and up to 80% for other eligible exporters, subject to prescribed regional caps and the scheme's event, delegate and other eligibility conditions."
      },
      {
        question: "What is the minimum distance for LIFT freight reimbursement?",
        answer: "The amended minimum distance is 100 km. Inland freight reimbursement is capped at 400 km, including multimodal movement, subject to the detailed LIFT guidelines and other eligibility conditions."
      },
      {
        question: "Does every export test or certificate qualify under TRACE?",
        answer: "No. The eligible testing, inspection and certification annexure has expanded from 462 to 600 entries, but exporters must match the specific test or certificate to the current eligible list and TRACE guidelines before incurring the expense."
      },
      {
        question: "Are Niryat Disha reimbursements automatic?",
        answer: "No. Reimbursement depends on compliance with the applicable scheme rules, supporting documents, claim approval and available budget. Inclusion of a district, product or activity in a list does not by itself establish entitlement."
      }
    ],
    sources: [
      {
        label: "Press Information Bureau — Department of Commerce amends four Export Promotion Mission interventions (18 November 2026)",
        url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2337815&lang=1&reg=48"
      },
      {
        label: "DGFT Trade Notice 35/2026-27 — Market Access Support (official APEDA-hosted PDF)",
        url: "https://apeda.gov.in/sites/default/files/dgft_trade_notice/Trade_Notice_35_2026_27.pdf"
      },
      {
        label: "DGFT Trade Notice 36/2026-27 — LIFT freight and transport (official APEDA-hosted PDF)",
        url: "https://apeda.gov.in/sites/default/files/dgft_trade_notice/Trade_Notice_36_2026_27.pdf"
      },
      {
        label: "DGFT Trade Notice 37/2026-27 — TRACE eligible testing, inspection and certification list (official trade notice register)",
        url: "https://apeda.gov.in/dgft-trade-notice"
      }
    ],
  },
  {
    slug: "eu-trade-defence-indian-steel-pvdf-exports-2026",
    image: euRegulationsImg,
    imageAvif: euRegulationsAvif,
    imageWebp: euRegulationsWebp,
    imageAlt: "EU regulation documents and a small EU flag on a warm-lit wooden table",
    title: "EU Trade Defence: What Indian Steel and PVDF Exporters Need to Know",
    excerpt:
      "The EU has imposed a definitive 9.5% anti-dumping duty on specified Indian cold-rolled steel and introduced customs registration for specified Indian-origin PVDF. The legal status, product scope and exporter response are different in each case.",
    category: "Trade Policy",
    date: "Nov 24, 2026",
    dateISO: "2026-11-24",
    readTime: "7 min",
    content: [
      "Two recent EU trade-defence developments warrant attention from Indian manufacturers and exporters. One is a definitive anti-dumping duty on specified cold-rolled flat steel products. The other is customs registration of specified PVDF imports while an anti-dumping investigation continues. They should not be treated as equivalent: the steel duty is in force, while the PVDF registration preserves the possibility of a future retroactive duty if the legal conditions are ultimately met.",
      "Cold-rolled flat steel: a definitive 9.5% duty. Commission Implementing Regulation (EU) 2026/2547 was adopted on 13 November 2026, published in the EU Official Journal on 16 November and entered into force on 17 November 2026. It imposes a definitive anti-dumping duty of 9.5% on the net, free-at-Union-frontier price, before duty, for the specified products originating in India. The regulation sets the Indian rate at 9.5% for the named Indian producers, other cooperating producers and all other imports originating in India.",
      "The measure is limited to certain flat-rolled products of iron or non-alloy steel, or other alloy steel, excluding stainless steel, of all widths, cold-rolled (cold-reduced), not clad, plated or coated, and not further worked than cold-rolled. The regulation also specifies exclusions, including electrical flat-rolled products, certain annealed black plates below 0.35 mm thickness, silicon-electrical steel and high-speed steel. The listed CN codes include ex 7209 15 00, 7209 16 90, 7209 17 90, 7209 18 91, ex 7209 18 99, ex 7209 25 00, 7209 26 90, 7209 27 90, 7209 28 90, 7211 23 30, ex 7211 23 80, ex 7211 29 00, 7225 50 80 and 7226 92 00, with specified TARIC subcodes. The word “ex” is important: the measure covers only the part of a tariff heading that meets the regulation's product description.",
      "For exporters, the practical point is that neither a broad product label such as “cold-rolled steel” nor a tariff code on its own is enough to determine whether the duty applies. Check the steel grade, width, thickness, coating or plating, further processing, product form and origin against Article 1 of the regulation. The regulation also requires a prescribed manufacturer declaration on a valid commercial invoice for use of the applicable producer-specific TARIC additional code. Indian suppliers should align the manufacturer details, invoice declaration and TARIC information with their EU importer and customs broker before shipment or clearance.",
      "PVDF: registration, not a definitive duty. The Commission initiated an anti-dumping investigation on 28 October 2026 concerning PVDF originating in India, China and Japan, following a complaint lodged on 14 September 2026. Commission Implementing Regulation (EU) 2026/2532 was adopted on 16 November, published on 17 November and entered into force on 18 November 2026. It directs EU customs authorities to register imports of PVDF in primary form, including specified copolymers containing vinylidene fluoride and other monomers. The product is classified under CN code ex 3904 69 80 and TARIC codes 3904 69 80 97 and 3904 69 80 98. Registration is set to expire nine months after the regulation entered into force.",
      "Registration does not mean that a definitive anti-dumping duty has already been imposed, nor does it establish a final finding of dumping or injury. Its purpose is to allow duties to be collected retroactively on registered imports if definitive duties are later imposed and the legal conditions for retroactive collection are satisfied. The regulation refers to dumping-margin estimates in the complaint, but expressly states that the Commission cannot yet estimate any possible future liability. Those complaint estimates must not be presented as Commission findings or as the current duty rate.",
      "The PVDF scope is defined by the product description and its primary form, including the specified copolymers, as well as the relevant tariff classification. Exporters should not assume that every finished article or every product that uses PVDF as an ingredient is automatically covered. Equally, they should not assume that a different commercial grade name or a different declaration by itself removes a product from scope. Confirm the material composition, physical form, CN/TARIC classification and country of origin with the EU importer and customs broker.",
      "What Indian exporters should do now. First, screen every EU-bound steel or PVDF product against the exact legal product description, exclusions and tariff references; obtain a documented classification and scope review where there is doubt. Second, confirm country of origin and manufacturer identity, and check that invoices, packing lists, technical specifications and customs declarations are consistent. Third, review open quotations, contracts, goods in transit and planned shipments with the EU buyer. For steel within scope, factor the definitive 9.5% anti-dumping duty into landed-cost discussions and confirm who bears the cost under the agreed delivery and pricing terms. For PVDF within scope, discuss the registration status and possible future retroactive exposure with the importer; do not describe a future duty as already payable.",
      "Finally, Indian PVDF producers and exporters should preserve transaction-level sales data, price lists, production and cost records, raw-material consumption, inventory records, product specifications and relevant related-party information. These records may be important if the Commission seeks information during the investigation. Monitor the official investigation notice and case file for procedural deadlines and requests. A delayed response or incomplete cost and sales evidence can make it harder for an exporter to present its case.",
      "The key distinction. For specified Indian cold-rolled flat steel, the EU's 9.5% definitive anti-dumping duty has applied since 17 November 2026. For specified Indian-origin PVDF, customs registration has applied since 18 November 2026, but the investigation remains ongoing and any future duty, rate and retroactive collection will depend on the Commission's findings and the applicable legal conditions. Product scope, origin and documentation should be checked before any commercial decision is made."
    ],
    sources: [
      {
        label: "European Commission — definitive duties on certain cold-rolled flat steel products (16 November 2026)",
        url: "https://policy.trade.ec.europa.eu/news/commission-imposes-anti-dumping-duties-certain-cold-rolled-flat-steel-products-2026-11-16_en"
      },
      {
        label: "Commission Implementing Regulation (EU) 2026/2547 — cold-rolled flat steel",
        url: "https://eur-lex.europa.eu/eli/reg_impl/2026/2547/oj"
      },
      {
        label: "Commission Implementing Regulation (EU) 2026/2532 — PVDF customs registration",
        url: "https://eur-lex.europa.eu/eli/reg_impl/2026/2532/oj"
      },
      {
        label: "Notice C/2026/5554 — initiation of the PVDF anti-dumping proceeding",
        url: "https://eur-lex.europa.eu/eli/C/2026/5554/oj"
      },
      {
        label: "European Commission Trade Defence — PVDF investigation, case AD764",
        url: "https://tron.trade.ec.europa.eu/investigations/case-view?caseId=2915"
      }
    ],
  },
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
    dateISO: "2026-04-10",
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
    dateISO: "2026-04-05",
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
    dateISO: "2026-03-28",
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
    dateISO: "2026-03-20",
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
    dateISO: "2026-03-12",
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
    dateISO: "2026-03-05",
    readTime: "4 min",
    content: [
      "Compliance failures are the most expensive — and most preventable — mistakes a new exporter can make. A held shipment can wipe out the margin on an entire order.",
      "Our 12-point checklist walks through HS classification, restricted-party screening, licensing, packing and labelling, INCOTERMS selection, and the documentation pack your freight forwarder will expect.",
      "Use it as a pre-shipment sign-off before every first order to a new destination.",
    ],
  },
  {
    slug: "us-section-301-proposed-tariffs-india-14-economies-2026",
    image: euRegulationsImg,
    imageAvif: euRegulationsAvif,
    imageWebp: euRegulationsWebp,
    imageAlt: "EU flag beside trade-policy documents, representing the European Union among the economies covered by the U.S. Section 301 proposals.",
    title: "U.S. Section 301 Proposals: India and 13 Other Economies",
    excerpt:
      "USTR's 25 November 2026 determinations cover 14 economies. India's proposed additional duties could reach 25%, subject to existing Section 301 duties and specified exemptions. The proposal is open for comment; no effective date is specified in the India notice.",
    category: "Trade Policy",
    date: "Nov 27, 2026",
    dateISO: "2026-11-27",
    dateModifiedISO: "2026-11-27",
    autoPublished: true,
    readTime: "5 min",
    seoTitle: "U.S. Section 301 Proposals: India & 13 Economies | GTI",
    seoDescription:
      "USTR's 25 November Section 301 proposals cover 14 economies. India's proposed extra duties could reach 25%, with exemptions; comments close 5 January 2027.",
    searchKeywords: [
      "U.S. Section 301 India proposal 2026",
      "proposed U.S. tariffs on Indian goods",
      "USTR Section 301 determinations 14 economies",
      "India U.S. tariff comment deadline January 2027",
      "U.S. importer tariff exposure India",
      "Section 301 tariff exemptions and HTSUS",
    ],
    byline: "Global Trade Intell Research Desk",
    content: [],
    sections: [
      {
        id: "section301-14-economy-determinations",
        heading: "What USTR announced on 25 November",
        paragraphs: [
          "On 25 November 2026, the Office of the U.S. Trade Representative (USTR) announced Section 301 determinations concerning structural excess capacity and manufacturing production in 14 economies: China, the European Union, Singapore, Switzerland, Indonesia, Malaysia, Cambodia, Thailand, Korea, Vietnam, Taiwan, Bangladesh, Japan and India. USTR said it had not made determinations for Mexico or Norway at this stage, although both were among the 16 economies originally investigated.",
          "USTR determined that the identified acts, policies and practices in the 14 economies are unreasonable and burden or restrict U.S. commerce under Section 301 of the Trade Act of 1974. It also proposed additional duties for public comment. These proposed duties are not currently in force; the India notice does not specify an effective date.",
        ],
      },
      {
        id: "india-proposed-tariffs-and-comment-dates",
        heading: "India: proposed duties and the comment timetable",
        paragraphs: [
          "For India, USTR proposes to consider additional tariffs of up to 25% on goods of India, net of existing Section 301 tariffs, with specified exemptions. The notice lists certain Section 232-related product categories—including specified metal articles, vehicles and parts, wood products, patented pharmaceutical articles and semiconductor articles—and further product-specific HTSUS lines in an annex. Exporters must check the exact subheading and country of origin; a broad product description is not enough.",
          "USTR's supporting report highlights steel, solar, health and information and communications technology (ICT), but the proposed tariff action is framed more broadly for goods of India, subject to exclusions. The notice also invites comment on a possible reduced-rate mechanism for certain textile and apparel volumes. USTR proposes to consider a 17% rate if India reaches a responsive Agreement on Reciprocal Trade with the United States. This is conditional proposal language, not a rate now applicable or a guaranteed outcome.",
          "The India notice sets 5 January 2027 as the deadline for written comments and requests to appear with a summary of testimony. The Section 301 Committee hearing is scheduled to begin on 25 January 2027. Written comments use docket USTR-2026-0731; requests to appear use USTR-2026-0741.",
        ],
      },
      {
        id: "exporter-importer-action-checklist",
        heading: "What exporters and U.S. importers should check now",
        paragraphs: [
          "Exporters selling to the United States and U.S. importers should build a product-level exposure list: map each item to its U.S. HTSUS subheading and country of origin; compare the line with the notice's exemptions and annex; record existing Section 301 duties and other relevant measures; and model potential exposure separately from current landed cost. A flat 25% uplift across every shipment would be misleading.",
          "Businesses with affected products may consider submitting evidence on product exclusions, supply availability, potential disruption, textile mechanisms or the proposed rate before the deadline. Submissions should be supported by verifiable product and trade data. Confirm classification and procedure with a U.S. customs broker or trade counsel; do not assume an exemption applies until the relevant HTSUS line and notice conditions are checked.",
          "GTI can help organise product-level HS/HTS classification, origin and trade-compliance information for a preliminary exposure review. For export-import documentation and customs compliance support, see GTI's Trade Compliance & Documentation service or use the consultation option below.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are the proposed Section 301 duties on Indian goods already in force?",
        answer:
          "No. USTR's India notice invites public comments and schedules a hearing. It does not specify an effective date for the proposed additional duties. They should not be treated as duties currently payable under this investigation.",
      },
      {
        question: "Does the India proposal apply only to steel, solar, health and ICT products?",
        answer:
          "No. Those sectors are highlighted in USTR's supporting report, but the proposed tariff action is framed more broadly for goods of India, subject to the notice's specified exemptions and annex. Product-level HTSUS checking is necessary.",
      },
      {
        question: "What are the India comment and hearing dates?",
        answer:
          "Written comments and requests to appear with a summary of testimony are due by 5 January 2027. The Section 301 Committee hearing is scheduled to begin on 25 January 2027.",
      },
      {
        question: "Does the proposed 17% rate automatically apply if India signs a trade agreement?",
        answer:
          "No. USTR proposes to consider a 17% rate if India reaches a reciprocal trade agreement responsive to the investigation. It is conditional proposal language, not an automatic or currently effective tariff rate.",
      },
    ],
    sources: [
      {
        label: "USTR — 25 November 2026 determinations and proposed actions in 14 Section 301 investigations",
        url: "https://www.ustr.gov/about/policy-offices/press-office/press-releases/2026/november/ustr-makes-determinations-and-proposes-actions-14-section-301-investigations-relating-structural",
      },
      {
        label: "USTR — India-specific notice of determination and request for comments (PDF; Dockets USTR-2026-0731 and USTR-2026-0741)",
        url: "https://ustr.gov/sites/default/files/files/Press/Releases/2026/India%20FRN.pdf",
      },
      {
        label: "USTR — Section 301 investigation page with economy-specific notices and reports",
        url: "https://ustr.gov/trade-topics/enforcement/section-301-investigations/section-301-structural-excess-capacity-and-production-manufacturing-sectors",
      },
      {
        label: "USTR — India report supporting the Section 301 determination",
        url: "https://ustr.gov/sites/default/files/files/Press/Releases/2026/USTR%20Report%20Sec.%20301%20Investigation%20Acts%20Policies%20Practices%20INDIA%20relating%20to%20Struc%20Excess%20Cap%20and%20Prod%20in%20Mfr%20Sectors.pdf",
      },
      {
        label: "U.S. Code — 19 U.S.C. § 2411, Actions by United States Trade Representative",
        url: "https://uscode.house.gov/us/usc/119-120/t19/s2411/",
      },
      {
        label: "USTR — Official portal for written comments and hearing requests",
        url: "https://comments.ustr.gov/s/",
      },
      {
        label: "GTI related guide — Export Compliance Checklist for New Exporters",
        url: "https://www.globaltradeintell.com/insights/export-compliance-checklist",
      },
      {
        label: "GTI service — Trade Compliance & Documentation",
        url: "https://www.globaltradeintell.com/services",
      },
    ],
  },
];
