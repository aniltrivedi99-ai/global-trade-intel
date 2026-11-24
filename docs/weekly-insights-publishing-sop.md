# GTI Weekly Insights Publishing SOP

## Purpose
Publish one useful, evidence-led Global Trade Intell Insights article each week in the existing website design. The publishing process is authorised to commit a qualifying article directly to the production branch after all editorial, integrity and technical release gates below pass. Do not request routine article-by-article approval for ordinary, compliant articles. However, the mandatory pre-publication integrity and sensitivity gate in this SOP overrides automatic publication: any material risk or unresolved concern must be brought to Anil's attention and the article must remain unpublished pending his decision.

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

## Mandatory pre-publication integrity, conflict and sensitivity gate
Complete this gate on the full draft before creating or committing its article record. Review the headline, article body, examples, FAQs, source quotations, images and alt text, SEO title/description/keywords, and any named people, companies, countries or groups. This is a mandatory release gate, not an optional editorial check.

### A. Copyright, plagiarism and third-party rights
- Write original GTI analysis in your own words. Do not copy, closely paraphrase, translate or reproduce another publisher's article, report, newsletter, database, research, chart, table, photograph, infographic or other protected expression.
- Use source links and accurate attribution, but understand that attribution alone does not grant permission to reproduce copyrighted material.
- Keep quotations exceptional, brief, clearly marked and attributed; do not reproduce substantial text or distinctive wording from a source. Prefer factual summaries and independent analysis.
- Use only the existing GTI image assets and aliases authorised in this SOP unless a separately validated asset with documented reuse rights is available. Do not use a web-found image, logo, illustration or chart merely because it is publicly accessible.
- Check that no third-party confidential, proprietary or client-supplied material is being exposed or republished without documented permission.
- If ownership, licence, permission, substantial similarity or fair-use status is uncertain, HOLD publication and notify Anil. Do not decide that attribution alone resolves the issue.

### B. Actual or potential conflicts of interest
- Check whether the draft could create an actual, potential or perceived conflict involving GTI, Anil, a client, prospect, supplier, commercial partner, competitor, sponsor or another financially interested party.
- Look for undisclosed sponsorship, paid placement, referral or affiliate interests, preferential promotion, personal or commercial relationships relevant to the subject, client-sensitive information, or analysis that could improperly favour one party.
- Do not infer that a conflict exists merely because a company is mentioned. Use only known, evidenced relationships. If a material relationship may exist but cannot be determined from available context, HOLD and ask Anil to clarify before publication.
- Do not disclose a client's identity, transaction, documents, non-public business information or engagement details unless publication permission is clearly established.

### C. Harm, fairness, reputation and reader sensitivities
- Do not publish defamatory, disparaging, harassing, threatening, discriminatory, hateful, inflammatory or humiliating content, or unsupported allegations about a named person, business, government, community or organisation.
- Treat allegations, investigations, complaints, court proceedings and regulatory actions according to their verified procedural status. Do not present an allegation as a proven finding, imply guilt without a final finding, or omit material context that would make the account misleading.
- Use respectful, neutral and professional language about nationalities, countries, cultures, religions, communities, caste, race, ethnicity, gender, political groups and other identities. Do not stereotype, demean, provoke or exploit sensitive events or readers' sentiments.
- Avoid sensational headlines, fear-based marketing, ridicule, political advocacy presented as trade advice, and unnecessarily graphic or distressing material.
- Do not include personal data, private contact details, sensitive personal information or identifiable case details unless they are necessary, lawfully and appropriately sourced, and safe to publish. Prefer public institutional contacts over personal data.
- Do not provide dangerous, unlawful or materially misleading instructions. Explain genuine business risks proportionately and distinguish confirmed facts from uncertainty.

### D. GTI SOP, evidence and editorial integrity
- Confirm that the article fits GTI's export-import consulting scope, professional positioning, approved editorial tone and the topic-selection rules in this SOP.
- Check all material claims against the cited sources, including dates, legal status, rates, tariff/HS codes, scope, exclusions, eligibility, deadlines and country of origin. Do not present assumptions, estimates, media claims or AI-generated content as verified facts.
- Do not invent quotations, statistics, legal interpretations, buyer/supplier endorsements, client results, testimonials, market rankings or guarantees.
- Check for factual balance, misleading omissions, duplicate or substantially repetitive coverage, misleading SEO metadata, keyword stuffing, and claims that GTI or a client has performed an action that has not been confirmed.
- A technical or editorial defect that can be corrected without changing the substance may be corrected before publication. If the correction changes a material claim, the evidence is inconclusive, or a requirement in this SOP cannot be met, HOLD and notify Anil.

### E. Decision and mandatory hold procedure
Classify the integrity gate as one of the following:
- **PASS — CLEAR TO PUBLISH:** No material copyright, conflict, harm, sensitivity, confidentiality, factual-integrity or SOP concern remains. Continue with automatic publication; no routine prior approval is required.
- **HOLD — ANIL'S REVIEW REQUIRED:** A credible concern is identified, a material fact or permission is uncertain, a potential conflict cannot be ruled out, or the draft may violate this SOP. Do not commit the article to `main`, do not trigger publication, and do not attempt to bypass the concern by silently rewriting it. Notify Anil before publication with the proposed title/topic, exact flagged passage or asset, risk category, supporting evidence/source, why it is a concern, and the proposed safe options. Wait for Anil's explicit direction before publishing, revising for publication or abandoning the topic.
- **REJECT — DO NOT PUBLISH:** The draft is clearly infringing, harmful, discriminatory, materially misleading, confidential without permission, or otherwise incompatible with GTI's SOP. Do not publish. Notify Anil with the reason and, where appropriate, propose a materially safer alternative topic.

When uncertain between PASS and HOLD, choose HOLD. Absence of evidence of a conflict is not proof of a conflict; do not invent one. Explain what is known and what remains unknown. The no-routine-approval authorisation applies only to drafts that receive PASS.

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

## SEO requirements
- seoTitle should be unique, readable and focused on the article's main search intent; include the brand suffix where it fits naturally.
- seoDescription should accurately summarise the article and its value in a natural sentence.
- searchKeywords should be specific topic phrases, not repetitive variants or a keyword dump.
- Use an appropriate headline H1 (title), a distinct summary excerpt, descriptive H2 section headings, useful internal context where relevant, visible FAQs, and source links.
- Do not make unsupported claims about ranking, guaranteed traffic, rich results or Google indexing.

## Release and deployment gates
1. Fetch the latest main branch file and use its current blob SHA. If main moved since retrieval, re-fetch and reconcile instead of overwriting newer changes.
2. Complete the mandatory pre-publication integrity, conflict and sensitivity gate above. Only a PASS authorises automatic publication. HOLD and REJECT outcomes must never be committed or deployed.
3. Ensure the article record is complete and fact-checked against its sources. Confirm slug uniqueness and the autoPublished=true validation requirements above.
4. Commit only the new article record to src/data/articles.ts on main using the GitHub contents update operation. The user's explicit instruction authorises direct weekly publishing without routine manual review for PASS articles only.
5. The Vercel Git integration automatically starts the production build after the main-branch commit. Do not claim publication merely because the GitHub commit succeeded.
6. Confirm Vercel deployment target production, branch main, matching commit SHA, and READY state. Confirm www.globaltradeintell.com is an alias.
7. Verify the new public article URL returns HTTP 200 and contains the expected page title, canonical URL, article body, Article/BreadcrumbList JSON-LD and production image URLs. Verify the public sitemap returns HTTP 200, contains the new article URL and its lastmod date, and that robots.txt still points to https://www.globaltradeintell.com/sitemap.xml.
8. If build, deployment, page, canonical, source or sitemap validation fails, do not describe the article as published. Diagnose safely; do not push repeated speculative fixes. Notify the user and provide the failure and recovery action.
9. Do not make any unrelated homepage, service, contact, navigation, theme, layout, visual design, domain, Vercel-project or existing-article changes. Do not modify already-published article facts unless separately authorised.
10. Do not manually submit the sitemap again each week. It is already submitted in Google Search Console, its URL remains stable, robots.txt references it, and each production build regenerates its contents from the article list. Google controls crawling and indexing; report the sitemap update as completed but never claim Google has indexed the article without checking.

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
