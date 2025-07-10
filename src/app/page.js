// Import the Hero section (main landing area)
import Hero from "../components/Hero";

// Home page component
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section with plane model + intro text */}
      <Hero />
    </div>
  );
}
