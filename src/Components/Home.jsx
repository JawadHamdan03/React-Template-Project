const Home = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Welcome to MyApp
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-blue-100">
                        Discover amazing products and exceptional service
                    </p>
                    <div className="flex gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105">
                            Shop Now
                        </button>
                        <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                        Why Choose Us
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="text-4xl mb-4">🚀</div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-900">Fast Delivery</h3>
                            <p className="text-gray-600">
                                Get your products delivered quickly with our express shipping options available nationwide.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="text-4xl mb-4">💎</div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-900">Premium Quality</h3>
                            <p className="text-gray-600">
                                We source only the finest products to ensure you receive the best quality every time.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="text-4xl mb-4">🛡️</div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-900">Secure Shopping</h3>
                            <p className="text-gray-600">
                                Shop with confidence knowing your data is protected with industry-leading security.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
                            <div className="text-gray-600">Happy Customers</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
                            <div className="text-gray-600">Products</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-blue-600 mb-2">99%</div>
                            <div className="text-gray-600">Satisfaction Rate</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
                            <div className="text-gray-600">Support</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl mb-8 text-purple-100">
                        Join thousands of satisfied customers today
                    </p>
                    <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105">
                        Browse Products
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Home;