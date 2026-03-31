import { useState } from "react";
import { Phone, Clock, MapPin, Star, Shield } from "lucide-react";
import heroImage from "@/assets/hero-plumber.jpg";

const HeroSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", phone: "", service: "", message: "" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Professional plumber at work" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      </div>

      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 z-20 border-b border-primary-foreground/10">
        <div className="container mx-auto flex flex-wrap items-center justify-between py-3 px-4 text-primary-foreground/80 text-sm gap-2">
          <div className="flex items-center gap-6 flex-wrap">
            <a href="tel:+14078630689" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="w-4 h-4" /> (407) 863-0689
            </a>
            <span className="hidden sm:flex items-center gap-2">
              <Clock className="w-4 h-4" /> Open 24/7 — Emergency Service
            </span>
            <span className="hidden md:flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Winter Garden, FL
            </span>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < 5 ? "fill-secondary text-secondary" : "text-primary-foreground/30"}`} />
            ))}
            <span className="ml-2 font-medium">4.7 / 5</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-24 pb-16 px-4">
        {/* Left: copy */}
        <div className="text-primary-foreground space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
            <Shield className="w-4 h-4" /> Licensed & Insured — FL
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight">
            Winter Garden's <span className="text-gradient">Most Trusted</span> Plumbing Team
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-lg leading-relaxed">
            From emergency leaks to full bathroom remodels — fast, honest, and affordable service available 24 hours a day, 7 days a week.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="tel:+14078630689" className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:brightness-110 transition-all shadow-lg shadow-secondary/25">
              <Phone className="w-5 h-5" /> Call Now
            </a>
            <a href="#services" className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-all">
              Our Services
            </a>
          </div>

          <div className="flex flex-wrap gap-6 pt-4 text-sm text-primary-foreground/60">
            <span>✓ Free Estimates</span>
            <span>✓ Same-Day Service</span>
            <span>✓ Satisfaction Guaranteed</span>
          </div>
        </div>

        {/* Right: contact form */}
        <div className="bg-card rounded-2xl p-8 shadow-2xl shadow-primary/20 max-w-md mx-auto lg:mx-0 lg:ml-auto w-full">
          <h2 className="text-2xl font-display font-bold text-card-foreground mb-1">Get a Free Quote</h2>
          <p className="text-muted-foreground text-sm mb-6">We'll get back to you within 30 minutes.</p>

          {submitted ? (
            <div className="text-center py-12 space-y-2">
              <div className="text-4xl">✅</div>
              <p className="font-semibold text-card-foreground text-lg">Request Received!</p>
              <p className="text-muted-foreground text-sm">We'll call you back shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                required
                type="text"
                placeholder="Your Name"
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition"
              />
              <input
                required
                type="tel"
                placeholder="Phone Number"
                maxLength={20}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition"
              />
              <select
                required
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition"
              >
                <option value="">Select a Service</option>
                <option>Emergency Plumbing</option>
                <option>Drain Cleaning</option>
                <option>Water Heater</option>
                <option>Bathroom Remodel</option>
                <option>Leak Detection</option>
                <option>Other</option>
              </select>
              <textarea
                placeholder="Describe your issue (optional)"
                maxLength={500}
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition resize-none"
              />
              <button
                type="submit"
                className="w-full bg-secondary text-secondary-foreground py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all shadow-lg shadow-secondary/25"
              >
                Request Free Quote
              </button>
              <p className="text-xs text-muted-foreground text-center">No spam. No obligation. 100% free.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
