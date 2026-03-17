import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import singleImg from "@/assets/room-single.jpg";
import doubleImg from "@/assets/room-double.jpg";
import deluxeImg from "@/assets/room-deluxe.jpg";

const rooms = [
  { type: "Single Room", price: 2499, img: singleImg, desc: "Comfortable room with a single bed, work desk, and modern amenities. Perfect for solo travelers." },
  { type: "Double Room", price: 3999, img: doubleImg, desc: "Spacious room with a double bed, elegant décor, and premium linens for a restful stay." },
  { type: "Deluxe Room", price: 6999, img: deluxeImg, desc: "Luxurious suite with king bed, city views, premium furniture, and exclusive guest services." },
];

const Rooms = () => (
  <div className="container mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold text-foreground mb-2">Our Rooms</h1>
    <p className="text-muted-foreground mb-8">Choose from our carefully designed room types.</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {rooms.map(room => (
        <div key={room.type} className="bg-card rounded-lg overflow-hidden card-shadow hover:card-shadow-hover transition-shadow duration-200">
          <div className="relative">
            <img src={room.img} alt={room.type} className="w-full h-52 object-cover" />
            <span className="absolute top-3 right-3 bg-card/90 backdrop-blur px-3 py-1 rounded-md text-sm font-mono font-semibold text-foreground">
              ₹{room.price.toLocaleString('en-IN')}<span className="text-muted-foreground font-normal">/night</span>
            </span>
          </div>
          <div className="p-6">
            <h3 className="font-semibold text-foreground text-lg mb-2">{room.type}</h3>
            <p className="text-muted-foreground text-sm mb-4">{room.desc}</p>
            <Button asChild className="w-full">
              <Link to={`/booking?room=${encodeURIComponent(room.type)}`}>Book Now</Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Rooms;
