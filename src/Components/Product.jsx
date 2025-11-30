const Product = ({ id, title, description, category, price }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex-shrink-0 w-80">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4">
                <div className="flex justify-between items-center text-white">
                    <span className="text-xs font-semibold opacity-90">ID: {id}</span>
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
                        {category}
                    </span>
                </div>
            </div>

            {/* Card Body */}
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {title}
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {description}
                </p>

                {/* Card Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                        <span className="text-xs text-gray-500 block mb-1">Price</span>
                        <span className="text-3xl font-bold text-gray-900">${price}</span>
                    </div>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-200 hover:scale-105">
                        View
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Product;