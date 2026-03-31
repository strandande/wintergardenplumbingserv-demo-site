import { Phone, ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="relative py-24 px-4 overflow-hidden">
    <div className="absolute inset-0 bg-primary" />
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(30, 90%, 55%) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(213, 60%, 40%) 0%, transparent 50%)" }} />

    <div className="container mx-auto relative z-10 text-center max-w-3xl">
      <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-6 leading-tight">
        Plumbing Problem? <br />
        <span className="text-gradient">We'll Fix It Today.</span>
      </h2>
      <p className="text-primary-foreground/70 text-lg mb-10 max-w-xl mx-auto">
        Don't wait for a small leak to become a big disaster. Call Winter Garden's most trusted plumbing team right now.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+14078630689"
          className="inline-flex items-center justify-center gap-3 bg-secondary text-secondary-foreground px-10 py-5 rounded-xl font-bold text-xl hover:brightness-110 transition-all shadow-xl shadow-secondary/30"
        >
          <Phone className="w-6 h-6" /> (407) 863-0689
        </a>
        <a
          href="#hero"
          className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-10 py-5 rounded-xl font-semibold hover:bg-primary-foreground/10 transition-all"
        >
          Get Free Quote <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
