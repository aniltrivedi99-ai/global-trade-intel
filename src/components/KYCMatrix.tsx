import { useState } from "react";
import { ShieldCheck, TrendingUp, Factory, Download, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

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
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setOpen(false);
      setForm({ name: "", email: "", company: "" });
      toast.success("Sample report sent", {
        description: "Check your inbox shortly for the redacted KYC report.",
      });
    }, 800);
  };

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
            A layered, evidence-based screening model engineered for cross-border trade —
            combining statutory validation, financial scrutiny and operational assurance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map(({ tier, title, icon: Icon, accent, bg, ring, points }) => (
            <div
              key={tier}
              className={`group relative bg-card rounded-xl border p-6 ring-1 ${ring} hover:shadow-lg transition-all`}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${bg} mb-5`}>
                <Icon className={`h-6 w-6 ${accent}`} />
              </div>
              <div className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-1">
                {tier}
              </div>
              <h3 className="text-xl font-bold mb-4">{title}</h3>
              <ul className="space-y-3">
                {points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className={`h-4 w-4 mt-0.5 flex-shrink-0 ${accent}`} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button size="lg" variant="hero" onClick={() => setOpen(true)} className="gap-2">
            <Download className="h-4 w-4" />
            Download Sample Redacted Report (PDF)
          </Button>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Get the Sample Redacted Report</DialogTitle>
            <DialogDescription>
              Enter your details and we'll email you a redacted sample of our institutional KYC report.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="kyc-name">Full Name</Label>
              <Input
                id="kyc-name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Jane Doe"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="kyc-email">Work Email</Label>
              <Input
                id="kyc-email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="jane@company.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="kyc-company">Company</Label>
              <Input
                id="kyc-company"
                required
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                placeholder="Acme Exports Ltd."
              />
            </div>
            <DialogFooter>
              <Button type="submit" disabled={submitting} className="w-full gap-2">
                <Download className="h-4 w-4" />
                {submitting ? "Sending..." : "Send Me the Report"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default KYCMatrix;
