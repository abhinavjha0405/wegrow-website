const ServicesIntro = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium text-primary">Our Services</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive Business{" "}
            <span className="text-primary">Solutions</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            From startup registration to enterprise growth strategies, we provide end-to-end business solutions tailored to your unique needs
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesIntro;
