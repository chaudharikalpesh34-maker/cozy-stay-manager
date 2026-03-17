import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookingSystem } from "@/lib/bookings";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const preselectedRoom = searchParams.get("room") || "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    roomType: preselectedRoom,
    checkIn: "",
    checkOut: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.roomType || !form.checkIn || !form.checkOut) {
      toast({ title: "Missing fields", description: "Please fill all required fields.", variant: "destructive" });
      return;
    }
    BookingSystem.saveBooking(form);
    toast({ title: "Booking confirmed", description: "We've saved your details for check-in." });
    navigate("/");
  };

  const update = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }));

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-2">Book a Room</h1>
        <p className="text-muted-foreground mb-8">Fill in your details to reserve your stay.</p>
        <form onSubmit={handleSubmit} className="bg-card rounded-lg p-6 card-shadow space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" value={form.name} onChange={e => update("name", e.target.value)} placeholder="John Doe" required className="h-11" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={form.email} onChange={e => update("email", e.target.value)} placeholder="john@example.com" required className="h-11" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" value={form.phone} onChange={e => update("phone", e.target.value)} placeholder="+91 98765 43210" required className="h-11" />
          </div>
          <div className="space-y-2">
            <Label>Room Type</Label>
            <Select value={form.roomType} onValueChange={v => update("roomType", v)}>
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Select a room type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Single Room">Single Room — ₹2,499/night</SelectItem>
                <SelectItem value="Double Room">Double Room — ₹3,999/night</SelectItem>
                <SelectItem value="Deluxe Room">Deluxe Room — ₹6,999/night</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="checkIn">Check-in</Label>
              <Input id="checkIn" type="date" value={form.checkIn} onChange={e => update("checkIn", e.target.value)} required className="h-11" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="checkOut">Check-out</Label>
              <Input id="checkOut" type="date" value={form.checkOut} onChange={e => update("checkOut", e.target.value)} required className="h-11" />
            </div>
          </div>
          <Button type="submit" className="w-full h-11">Confirm Booking</Button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
