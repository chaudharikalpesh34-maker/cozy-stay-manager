import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hotel-hero.jpg";

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="StayEase Hotel exterior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>
      <div className="relative container mx-auto px-4 py-32 md:py-44">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-card mb-4 leading-tight">
            A stay that feels like home, managed with precision.
          </h1>
          <p className="text-card/80 text-lg mb-8">
            Modern comfort in the heart of the city. Book your perfect room with StayEase today.
          </p>
          <div className="flex gap-3">
            <Button asChild size="lg">
              <Link to="/rooms">View Rooms</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-card/10 border-card/30 text-card hover:bg-card/20">
              <Link to="/booking">Book Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Premium Rooms", desc: "From cozy singles to luxurious deluxe suites, find your perfect stay." },
          { title: "Easy Booking", desc: "Simple and fast booking process. Reserve your room in minutes." },
          { title: "24/7 Support", desc: "Our team is available around the clock for any assistance you need." },
        ].map(f => (
          <div key={f.title} className="bg-card rounded-lg p-6 card-shadow">
            <h3 className="font-semibold text-foreground text-lg mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Index;
