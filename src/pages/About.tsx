const About = () => (
  <div className="container mx-auto px-4 py-12">
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-foreground mb-2">About StayEase</h1>
      <p className="text-muted-foreground mb-8">Your trusted partner for comfortable stays.</p>
      <div className="bg-card rounded-lg p-6 card-shadow space-y-4 text-sm text-muted-foreground leading-relaxed">
        <p>
          StayEase is a modern hotel management system designed to provide guests with a seamless booking experience
          and hotel administrators with powerful management tools.
        </p>
        <p>
          Located in the heart of the city, our hotel offers premium rooms ranging from comfortable singles to
          luxurious deluxe suites. Every room is thoughtfully designed with modern amenities to ensure your
          comfort and satisfaction.
        </p>
        <p>
          Our mission is simple: provide a stay that feels like home, managed with precision. Whether you're
          traveling for business or leisure, StayEase is here to make your experience memorable.
        </p>
        <div className="pt-4 border-t">
          <h3 className="font-semibold text-foreground mb-2">Why Choose Us?</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Premium rooms with modern amenities</li>
            <li>Central city location</li>
            <li>Easy online booking system</li>
            <li>24/7 customer support</li>
            <li>Competitive pricing</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default About;
