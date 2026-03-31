import { Wrench, Droplets, Flame, ShowerHead, Search, PipetteIcon, Home, Waves } from "lucide-react";

const services = [
  { icon: Wrench, title: "Emergency Repairs", desc: "Burst pipes, overflows & urgent fixes — we're there fast, 24/7." },
  { icon: Droplets, title: "Drain Cleaning", desc: "Stubborn clogs cleared with professional hydro-jetting equipment." },
  { icon: Flame, title: "Water Heaters", desc: "Tank & tankless installation, repair, and maintenance." },
  { icon: ShowerHead, title: "Bathroom Remodels", desc: "Full-service bathroom renovations from fixtures to finish." },
  { icon: Search, title: "Leak Detection", desc: "Advanced technology to locate hidden leaks without demolition." },
  { icon: PipetteIcon, title: "Pipe Repair", desc: "Trenchless repair & repiping for lasting results." },
  { icon: Home, title: "New Construction", desc: "Complete plumbing systems for residential & commercial builds." },
  { icon: Waves, title: "Sewer Services", desc: "Video inspection, cleaning, and sewer line replacement." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-section-alt">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-secondary font-semibold text-sm uppercase tracking-widest">What We Do</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
          Professional Plumbing Services
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Comprehensive plumbing solutions for homes and businesses throughout Winter Garden and Central Florida.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="group bg-card rounded-xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border/50"
          >
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
              <s.icon className="w-6 h-6 text-secondary group-hover:text-secondary-foreground transition-colors" />
            </div>
            <h3 className="font-display font-semibold text-lg text-card-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
