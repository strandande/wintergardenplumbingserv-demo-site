import { Clock, Shield, DollarSign, ThumbsUp, Award, Users } from "lucide-react";

const reasons = [
  { icon: Clock, title: "24/7 Availability", desc: "Day or night, weekends and holidays — we're always on call." },
  { icon: Shield, title: "Licensed & Insured", desc: "Fully licensed Florida plumbers with comprehensive insurance." },
  { icon: DollarSign, title: "Upfront Pricing", desc: "No hidden fees. You approve the price before work begins." },
  { icon: ThumbsUp, title: "Satisfaction Guaranteed", desc: "We stand behind our work with a 100% satisfaction guarantee." },
  { icon: Award, title: "4.7★ Rated", desc: "Trusted by 49+ happy customers across Winter Garden." },
  { icon: Users, title: "Family Owned", desc: "Local business that treats your home like our own." },
];

const WhyUsSection = () => (
  <section id="why-us" className="section-padding">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
          The Winter Garden Difference
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          We've built our reputation on trust, quality, and treating every customer like family.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((r) => (
          <div key={r.title} className="flex gap-4">
            <div className="shrink-0 w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
              <r.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-1">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
