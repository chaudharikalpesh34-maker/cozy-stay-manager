export interface Booking {
  id: number;
  name: string;
  email: string;
  phone: string;
  roomType: string;
  checkIn: string;
  checkOut: string;
}

export const BookingSystem = {
  saveBooking(data: Omit<Booking, 'id'>) {
    const current = this.getBookings();
    current.push({ ...data, id: Date.now() });
    localStorage.setItem('bookings', JSON.stringify(current));
  },

  getBookings(): Booking[] {
    return JSON.parse(localStorage.getItem('bookings') || '[]');
  },

  deleteBooking(id: number) {
    const current = this.getBookings().filter(b => b.id !== id);
    localStorage.setItem('bookings', JSON.stringify(current));
  },

  clearAll() {
    localStorage.setItem('bookings', JSON.stringify([]));
  }
};
