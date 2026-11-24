# GTI Weekly Insights Publishing SOP

## Purpose
Publish one useful, evidence-led Global Trade Intell Insights article each week in the existing website design. The publishing process is authorised to commit a qualifying article directly to the production branch after the release gates below pass. Do not request routine article-by-article approval.

## Website and repository
- Website: https://www.globaltradeintell.com
- Repository: aniltrivedi99-ai/global-trade-intel
- Production branch: main
- Article data: src/data/articles.ts
- Existing article layout and SEO rendering: src/pages/Insights.tsx, src/pages/InsightDetail.tsx, src/components/SEO.tsx
- Production build pre-renders /insights and every article route. The build script regenerates dist/sitemap.xml from the article records and includes article last-modified dates. Do not manually edit or replace public/sitemap.xml for a new article.

## Editorial selection and research
1. Review official regulatory, customs, trade-policy, market-access, product-compliance, export/import, finance and logistics developments published or officially announced in the preceding seven days. The weekly regulatory watch scope is North America, South America, Europe, Africa, Gulf/GCC, Indian Subcontinent, ASEAN, broader Southeast Asia (kept separate from ASEAN where relevant), East Asia, and Australia & New Zealand.
2. Select one topic with clear practical relevance for Indian exporters, importers, manufacturers or MSMEs. Prefer primary government, regulator, customs, official gazette, treaty, standards-body or international-organisation sources.
3. Verify the exact legal or policy status, publication date, effective date/deadline, affected product/sector, scope, exceptions and affected party. Distinguish final measures from draft proposals, investigations, customs registration, guidance and media reports. Never turn a proposal or investigation into a rule in force.
4. Include at least three working HTTPS source URLs, preferably primary official sources. Open and check each source. Do not invent sources, quotes, dates, duties, tariff codes, eligibility criteria or market statistics.
5. Aim for a 350–500-word main article body, excluding FAQs and source list. Write for business readers with practical exporter/importer implications and actions. Avoid filler, keyword stuffing, generic AI prose, unverified forecasts and legal conclusions.
6. If there is no sufficiently important, verifiable weekly development, choose a useful evergreen trade/compliance/market-access explainer supported by current official sources. If even that cannot be properly evidenced, do not publish; report the reason and provide a proposed topic for the next cycle.

## Article record
Before editing, fetch the latest complete src/data/articles.ts from main. Check that the proposed slug and subject are not already present. Add exactly one new article object to the articles array; do not alter or reorder existing articles.

Every new record must include:
- slug: unique lowercase kebab-case URL segment
- title: clear human-facing headline
- excerpt: specific useful summary (not keyword-stuffed)
- category: one of Trade Policy, Compliance, Market Trends, Supply Chain, Technology
- date: readable publication date in India local date
- dateISO and dateModifiedISO: YYYY-MM-DD using the India local publication date
- autoPublished: true
- readTime
- image, imageAvif, imageWebp, imageAlt
- seoTitle, seoDescription, searchKeywords (4 or more relevant phrases)
- byline: Global Trade Intell Research Desk
- sections: at least 3 meaningful sections, each with unique id, heading and paragraph array; main body at least 300 words
- faqs: 3–5 useful question/answer pairs
- sources: at least 3 checked HTTPS URLs with descriptive source labels
- content: [] when using sections

Use the matching existing imported image aliases already present in src/data/articles.ts:
- Trade Policy: euRegulationsImg / euRegulationsAvif / euRegulationsWebp
- Compliance: complianceChecklistImg / complianceChecklistAvif / complianceChecklistWebp
- Market Trends: emergingMarketsImg / emergingMarketsAvif / emergingMarketsWebp (or aseanFtaImg / aseanFtaAvif / aseanFtaWebp for ASEAN content)
- Technology: aiTradeDataImg / aiTradeDataAvif / aiTradeDataWebp
- Supply Chain: supplyChainImg / supplyChainAvif / supplyChainWebp
Write imageAlt to describe the actual selected image accurately. Do not add new imports or image assets unless the process has an available, validated asset.

SEO requirements:
- seoTitle should be unique, readable and focused on the article's main search intent; include the brand suffix where it fits naturally.
- seoDescription should accurately summarise the article and its value in a natural sentence.
- searchKeywords should be specific topic phrases, not repetitive variants or a keyword dump.
- Use an appropriate headline H1 (title), a distinct summary excerpt, descriptive H2 section headings, useful internal context where relevant, visible FAQs, and source links.
- Do not make unsupported claims about ranking, guaranteed traffic, rich results or Google indexing.

## Release and deployment gates
1. Fetch the latest main branch file and use its current blob SHA. If main moved since retrieval, re-fetch and reconcile instead of overwriting newer changes.
2. Ensure the article record is complete and fact-checked against its sources. Confirm slug uniqueness and the autoPublished=true validation requirements above.
3. Commit only the new article record to src/data/articles.ts on main using the GitHub contents update operation. The user's explicit instruction authorises direct weekly publishing without routine manual review.
4. The Vercel Git integration automatically starts the production build after the main-branch commit. Do not claim publication merely because the GitHub commit succeeded.
5. Confirm Vercel deployment target production, branch main, matching commit SHA, and READY state. Confirm www.globaltradeintell.com is an alias.
6. Verify the new public article URL returns HTTP 200 and contains the expected page title, canonical URL, article body, Article/BreadcrumbList JSON-LD and production image URLs. Verify the public sitemap returns HTTP 200, contains the new article URL and its lastmod date, and that robots.txt still points to https://www.globaltradeintell.com/sitemap.xml.
7. If build, deployment, page, canonical, source or sitemap validation fails, do not describe the article as published. Diagnose safely; do not push repeated speculative fixes. Notify the user and provide the failure and recovery action.
8. Do not make any unrelated homepage, service, contact, navigation, theme, layout, visual design, domain, Vercel-project or existing-article changes. Do not modify already-published article facts unless separately authorised.
9. Do not manually submit the sitemap again each week. It is already submitted in Google Search Console, its URL remains stable, robots.txt references it, and each production build regenerates its contents from the article list. Google controls crawling and indexing; report the sitemap update as completed but never claim Google has indexed the article without checking.

## Weekly completion report
After each successful deployment, report:
- article title and public URL
- publication date
- short summary of audience relevance
- SEO title, description and focus keywords
- primary sources
- Git commit
- Vercel production deployment state
- confirmation that sitemap includes the URL and lastmod
- any caveat or indexing status that has actually been verified

If a connected Vercel or GitHub action is unavailable in a scheduled run, do not pretend a commit or deployment occurred. Provide the prepared article content and clearly flag the required action.
