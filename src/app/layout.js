// Import global styles
import "./globals.css";

// Import shared UI components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Metadata for SEO and social preview
export const metadata = {
  title: "ToyAero – Interactive 3D Toy Plane",
  description:
    "Showcasing a fun and futuristic 3D toy airplane with animations and interactivity.",
};

// The root layout that wraps your entire app
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-white to-gray-100 text-black font-sans">
        {/* Fixed Navbar at top */}
        <Navbar />

        {/* Main content */}
        <main className="min-h-screen">{children}</main>

        {/* Footer at bottom */}
        <Footer />
      </body>
    </html>
  );
}
