import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookingSystem, type Booking } from "@/lib/bookings";
import { useToast } from "@/hooks/use-toast";
import { Trash2, LogOut } from "lucide-react";

const ADMIN_USER = "admin";
const ADMIN_PASS = "admin123";

const Admin = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [bookings, setBookings] = useState<Booking[]>([]);
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      setLoggedIn(true);
      setBookings(BookingSystem.getBookings());
    } else {
      toast({ title: "Invalid credentials", description: "Please check your username and password.", variant: "destructive" });
    }
  };

  const handleDelete = (id: number) => {
    BookingSystem.deleteBooking(id);
    setBookings(BookingSystem.getBookings());
    toast({ title: "Booking deleted" });
  };

  const handleClear = () => {
    BookingSystem.clearAll();
    setBookings([]);
    toast({ title: "All bookings cleared" });
  };

  if (!loggedIn) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-sm mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-2">Admin Login</h1>
          <p className="text-muted-foreground mb-8">Access the booking dashboard.</p>
          <form onSubmit={handleLogin} className="bg-card rounded-lg p-6 card-shadow space-y-5">
            <div className="space-y-2">
              <Label htmlFor="user">Username</Label>
              <Input id="user" value={username} onChange={e => setUsername(e.target.value)} placeholder="admin" className="h-11" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pass">Password</Label>
              <Input id="pass" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" className="h-11" />
            </div>
            <Button type="submit" className="w-full h-11">Access Dashboard</Button>
            <p className="text-xs text-muted-foreground text-center">Demo: admin / admin123</p>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Booking Dashboard</h1>
          <p className="text-muted-foreground">{bookings.length} booking(s) found</p>
        </div>
        <div className="flex gap-2">
          {bookings.length > 0 && (
            <Button variant="destructive" size="sm" onClick={handleClear}>Clear All</Button>
          )}
          <Button variant="outline" size="sm" onClick={() => setLoggedIn(false)}>
            <LogOut size={14} className="mr-1" /> Logout
          </Button>
        </div>
      </div>

      {bookings.length === 0 ? (
        <div className="bg-card rounded-lg p-12 card-shadow text-center">
          <p className="text-muted-foreground">No bookings yet.</p>
        </div>
      ) : (
        <div className="bg-card rounded-lg card-shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left px-4 py-3 text-xs uppercase tracking-wider text-muted-foreground font-medium">Name</th>
                  <th className="text-left px-4 py-3 text-xs uppercase tracking-wider text-muted-foreground font-medium">Email</th>
                  <th className="text-left px-4 py-3 text-xs uppercase tracking-wider text-muted-foreground font-medium">Phone</th>
                  <th className="text-left px-4 py-3 text-xs uppercase tracking-wider text-muted-foreground font-medium">Room</th>
                  <th className="text-left px-4 py-3 text-xs uppercase tracking-wider text-muted-foreground font-medium">Check-in</th>
                  <th className="text-left px-4 py-3 text-xs uppercase tracking-wider text-muted-foreground font-medium">Check-out</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {bookings.map(b => (
                  <tr key={b.id} className="border-t hover:bg-muted/50 transition-colors">
                    <td className="px-4 py-3 font-medium text-foreground">{b.name}</td>
                    <td className="px-4 py-3 text-muted-foreground">{b.email}</td>
                    <td className="px-4 py-3 text-muted-foreground tabular-nums">{b.phone}</td>
                    <td className="px-4 py-3 text-muted-foreground">{b.roomType}</td>
                    <td className="px-4 py-3 text-muted-foreground tabular-nums">{b.checkIn}</td>
                    <td className="px-4 py-3 text-muted-foreground tabular-nums">{b.checkOut}</td>
                    <td className="px-4 py-3">
                      <Button variant="ghost" size="sm" onClick={() => handleDelete(b.id)} className="text-destructive hover:text-destructive">
                        <Trash2 size={14} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
