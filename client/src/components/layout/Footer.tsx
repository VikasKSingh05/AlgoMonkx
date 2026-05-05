const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="/" className="font-heading text-2xl font-bold text-white">AlgoMonkx</a>
            <p className="text-gray-400 mt-4 text-sm">Master data structures and competitive programming with structured learning.</p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">MENU</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition text-sm">About</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-white transition text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">SERVICE</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Learning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Schedules</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Communities</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">All Services</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">FOLLOW US</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" className="text-gray-400 hover:text-white transition"><i className="fab fa-facebook-f text-lg"></i></a>
              <a href="https://www.twitter.com" className="text-gray-400 hover:text-white transition"><i className="fab fa-twitter text-lg"></i></a>
              <a href="https://www.instagram.com" className="text-gray-400 hover:text-white transition"><i className="fab fa-instagram text-lg"></i></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">Copyright &copy; 2026 AlgoMonkx. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition text-sm">Terms of Use</a>
            <a href="#" className="text-gray-400 hover:text-white transition text-sm">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
