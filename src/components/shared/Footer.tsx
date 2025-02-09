const Footer = () => {
  return (
    <footer className="bg-gray-900 relative text-white z-50">
      <div className="container mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between gap-1">
          {/* About Section */}
          <div className="w-full md:w-[30%]">
            <h2 className="text-2xl font-bold">Next-Commerce</h2>
            <p className="mt-4 text-gray-400">
              Discover the latest gadgets and tech essentials at unbeatable prices. Your one-stop shop for everything tech.
            </p>
          </div>

          {/* Links Section */}
          <div className="w-full md:w-[30%]">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/about" className="hover:text-white">About Us</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">Contact Us</a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-white">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="w-full md:w-[30%]">
            <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-gray-900 rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 px-4 py-2 rounded-r-md text-white hover:bg-blue-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="flex flex-wrap justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Next-Commerce. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-facebook"></i> Facebook
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
