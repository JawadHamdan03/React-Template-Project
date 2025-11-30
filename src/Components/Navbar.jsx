import { Link } from "react-router";

const NavBar = () => {
    return (
        <nav className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-white text-2xl font-bold">
                        MyApp
                    </div>

                    <div className="flex gap-8">
                        <Link
                            to="/"
                            className="text-white font-semibold hover:text-blue-100 transition-colors duration-200 relative group"
                        >
                            Home
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                        </Link>
                        <Link
                            to="/products"
                            className="text-white font-semibold hover:text-blue-100 transition-colors duration-200 relative group"
                        >
                            Products
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                        </Link>
                        <Link
                            to="/users"
                            className="text-white font-semibold hover:text-blue-100 transition-colors duration-200 relative group"
                        >
                            Users
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;