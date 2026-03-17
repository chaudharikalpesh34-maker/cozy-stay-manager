import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t bg-card mt-16">
    <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="font-semibold text-foreground mb-3">StayEase</h3>
        <p className="text-sm text-muted-foreground">
          Modern comfort in the heart of the city. A stay that feels like home, managed with precision.
        </p>
      </div>
      <div>
        <h3 className="font-semibold text-foreground mb-3">Navigation</h3>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <Link to="/rooms" className="hover:text-foreground transition-colors">Rooms</Link>
          <Link to="/booking" className="hover:text-foreground transition-colors">Booking</Link>
          <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-foreground mb-3">Contact</h3>
        <div className="text-sm text-muted-foreground space-y-1">
          <p>42 MG Road, Connaught Place, New Delhi</p>
          <p>+91 98765 43210</p>
          <p>info@stayease.in</p>
        </div>
      </div>
    </div>
    <div className="border-t text-center py-4 text-xs text-muted-foreground">
      © 2026 StayEase. Hotel Management System — College Project.
    </div>
  </footer>
);

export default Footer;
