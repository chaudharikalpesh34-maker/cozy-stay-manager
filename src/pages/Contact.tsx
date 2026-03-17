import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "42 MG Road, Connaught Place, New Delhi 110001" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: Mail, label: "Email", value: "info@stayease.in" },
  { icon: Clock, label: "Front Desk", value: "Open 24 hours, 7 days a week" },
];

const Contact = () => (
  <div className="container mx-auto px-4 py-12">
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-foreground mb-2">Contact Us</h1>
      <p className="text-muted-foreground mb-8">We'd love to hear from you. Reach out anytime.</p>
      <div className="bg-card rounded-lg p-6 card-shadow space-y-6">
        {contactInfo.map(item => (
          <div key={item.label} className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <item.icon size={18} className="text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-foreground text-sm">{item.label}</h3>
              <p className="text-muted-foreground text-sm">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Contact;
