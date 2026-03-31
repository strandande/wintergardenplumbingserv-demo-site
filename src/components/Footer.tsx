import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background/70 py-12 px-4">
    <div className="container mx-auto grid md:grid-cols-3 gap-8 text-sm">
      <div>
        <h3 className="font-display font-bold text-background text-lg mb-3">Winter Garden Plumbing</h3>
        <p className="leading-relaxed">Professional plumbing services for residential and commercial customers in Winter Garden and Central Florida.</p>
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-secondary" /><a href="tel:+14078630689" className="hover:text-secondary transition-colors">(407) 863-0689</a></div>
        <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-secondary" /> 731 S Dillard St, Winter Garden, FL 34787</div>
        <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-secondary" /> Open 24 Hours</div>
      </div>
      <div>
        <h4 className="font-display font-semibold text-background mb-3">Quick Links</h4>
        <ul className="space-y-2">
          {["Services", "Why Us", "Gallery", "FAQ"].map((l) => (
            <li key={l}><a href={`#${l.toLowerCase().replace(" ", "-")}`} className="hover:text-secondary transition-colors">{l}</a></li>
          ))}
        </ul>
      </div>
    </div>
    <div className="container mx-auto mt-8 pt-6 border-t border-background/10 text-center text-xs text-background/40">
      © {new Date().getFullYear()} Winter Garden Plumbing Services. All rights reserved.
    </div>
  </footer>
);

export default Footer;
