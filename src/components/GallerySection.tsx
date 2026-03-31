import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, alt: "Luxury bathroom renovation" },
  { src: gallery2, alt: "Kitchen sink installation" },
  { src: gallery3, alt: "Water heater installation" },
  { src: gallery4, alt: "Outdoor plumbing and irrigation" },
];

const GallerySection = () => (
  <section id="gallery" className="section-padding bg-section-alt">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Our Work</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
          Recent Projects
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Quality craftsmanship you can see — and trust.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((img) => (
          <div key={img.alt} className="group relative overflow-hidden rounded-xl aspect-square">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={800}
              height={800}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-colors duration-300 flex items-end p-4">
              <span className="text-primary-foreground font-medium text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                {img.alt}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
