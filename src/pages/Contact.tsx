import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Mail, Phone, MapPin, Send, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import SEO from "@/components/SEO";

const OWNER_EMAIL = "aniltrivedi.impex@outlook.com";

const Contact = () => {
  const { toast } = useToast();
  const location = useLocation();
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (location.hash === "#inquiry-form") {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      const first = formRef.current?.querySelector("input");
      (first as HTMLInputElement | null)?.focus({ preventScroll: true });
    }
  }, [location.hash, location.key]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const { error } = await supabase.from("contact_inquiries").insert({
      name: form.name.trim(),
      email: form.email.trim(),
      company: form.company.trim() || null,
      message: form.message.trim(),
    });
    setSubmitting(false);
    if (error) {
      toast({
        title: "Couldn't send message",
        description: "Please try again, or email us directly at aniltrivedi.impex@outlook.com.",
        variant: "destructive",
      });
      return;
    }
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", company: "", message: "" });
  };

  return (
    <div>
      <SEO
        title="Contact Global Trade Intel | International Trade Advisory, Mumbai India"
        description="Talk to our export-import consultants for trade data, buyer search, KYC, due diligence and customs compliance. Based in Kandivali (West), Mumbai, India."
        path="/contact"
        keywords="contact export consultant, import export consultant Mumbai, trade advisory India, buyer search KYC contact"
      />
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container text-center max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-primary-foreground/70 text-lg">
            Ready to explore new markets? Let's start a conversation.
          </p>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: "aniltrivedi.impex@outlook.com" },
                  { icon: Phone, label: "Phone", value: "+91 9870446898" },
                  { icon: MapPin, label: "Office", value: "B-602, Solitaire, M.G. Cross Road No.1, Kandivali (West), Mumbai 400067, Maharashtra, India." },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-3">
                    <c.icon className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">{c.label}</p>
                      <p className="text-sm text-muted-foreground">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-lg bg-secondary border border-border">
              <h3 className="font-semibold mb-2">Book a Consultation</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Schedule a 30-minute discovery call with our trade experts.
              </p>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a
                  href={`mailto:${OWNER_EMAIL}?subject=${encodeURIComponent(
                    "Request: 30-minute consultation call",
                  )}&body=${encodeURIComponent(
                    "Hello Anil,\n\nI would like to book a 30-minute discovery call.\n\nPreferred date/time:\nCompany:\nTopic:\n\nThank you.",
                  )}`}
                >
                  <CalendarDays className="mr-2 h-4 w-4" /> View Calendar
                </a>
              </Button>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            <form ref={formRef} id="inquiry-form" onSubmit={handleSubmit} className="space-y-5">

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <Input
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    required
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Company</label>
                <Input
                  maxLength={100}
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder="Your company name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  required
                  maxLength={1000}
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your export goals..."
                />
              </div>
              <Button type="submit" size="lg" disabled={submitting}>
                <Send className="mr-2 h-4 w-4" /> {submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
