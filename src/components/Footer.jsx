export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-sm text-gray-300">
        {/* Left: Copyright Text */}
        <p className="mb-2 sm:mb-0">© 2025 ToyAero. All rights reserved.</p>

        {/* Right: Contact Link */}
        <a href="#" className="hover:underline hover:text-white transition">
          Contact Us
        </a>
      </div>
    </footer>
  );
}
