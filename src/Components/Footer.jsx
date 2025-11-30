const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-auto">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-white text-xl font-bold mb-4">MyApp</h3>
                        <p className="text-sm leading-relaxed">
                            Your trusted platform for quality products and exceptional service. Shop with confidence.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="/products" className="hover:text-white transition-colors">Products</a></li>
                            <li><a href="/users" className="hover:text-white transition-colors">Users</a></li>
                            <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Support</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
                            <li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li>
                            <li><a href="/shipping" className="hover:text-white transition-colors">Shipping Info</a></li>
                            <li><a href="/returns" className="hover:text-white transition-colors">Returns</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2 text-sm">
                            <li>Email: info@myapp.com</li>
                            <li>Phone: +1 (555) 123-4567</li>
                            <li>Address: 123 Main St</li>
                            <li>City, State 12345</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>&copy; 2024 MyApp. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="/cookies" className="hover:text-white transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;