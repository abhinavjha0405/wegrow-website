const GoogleMapsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit our office in New Delhi
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto animate-fade-in">
          <div className="rounded-lg overflow-hidden shadow-lg border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5659999999997!2d77.1668!3d28.6448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM4JzQxLjMiTiA3N8KwMTAnMDAuNSJF!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin&q=T2612,+West,+near+Sanjay+Park,+Block+B,+Baljit+Nagar,+Patel+Nagar,+New+Delhi,+Delhi,+110008"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMapsSection;
