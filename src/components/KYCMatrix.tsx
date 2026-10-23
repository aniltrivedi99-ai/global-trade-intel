import {
  ShieldCheck,
  TrendingUp,
  Factory,
  CheckCircle2,
} from "lucide-react";

const tiers = [
  {
    tier: "Tier 1",
    title: "Statutory & Legal Registry",
    icon: ShieldCheck,
    accent: "text-emerald-600",
    bg: "bg-emerald-50",
    ring: "ring-emerald-200",
    points: [
      "Corporate registry validation across jurisdictions",
      "Active status & good-standing checks",
      "Ultimate Beneficial Owner (UBO) tracing",
      "Litigation & regulatory action lookup",
    ],
  },
  {
    tier: "Tier 2",
    title: "Financial & Credit Health",
    icon: TrendingUp,
    accent: "text-blue-600",
    bg: "bg-blue-50",
    ring: "ring-blue-200",
    points: [
      "Cross-border credit scoring & risk grading",
      "Balance sheet health indicators",
      "Payment default historical screening",
      "Bank reference & trade-line verification",
    ],
  },
  {
    tier: "Tier 3",
    title: "Operational & ESG Compliance",
    icon: Factory,
    accent: "text-amber-600",
    bg: "bg-amber-50",
    ring: "ring-amber-200",
    points: [
      "Plant capacity & site verification",
      "ISO / CE / RoHS certificate authentication",
      "International sanctions & watchlist matching",
      "ESG, labor & environmental compliance review",
    ],
  },
];

const KYCMatrix = () => {
  return (
    <section className="bg-secondary/40 border-y">
      <div className="container py-20">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3">
            KYC & Due Diligence
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Institutional Due Diligence Framework
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            A layered, evidence-based screening model engineered for
            cross-border trade — combining statutory validation, financial
            scrutiny and operational assurance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map(
            ({ tier, title, icon: Icon, accent, bg, ring, points }) => (
              <div
                key={tier}
                className={`group relative bg-card rounded-xl border p-6 ring-1 ${ring} hover:shadow-lg transition-all`}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${bg} mb-5`}
                >
                  <Icon className={`h-6 w-6 ${accent}`} />
                </div>

                <div className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-1">
                  {tier}
                </div>

                <h3 className="text-xl font-bold mb-4">{title}</h3>

                <ul className="space-y-3">
                  {points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-sm text-foreground/80"
                    >
                      <CheckCircle2
                        className={`h-4 w-4 mt-0.5 flex-shrink-0 ${accent}`}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default KYCMatrix;
