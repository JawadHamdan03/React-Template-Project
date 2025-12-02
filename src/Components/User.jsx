// User.jsx
const User = ({ id, firstName, age }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex-shrink-0 w-80">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4">
                <div className="text-white text-xs font-semibold opacity-90">
                    User ID: {id}
                </div>
            </div>

            {/* Card Body */}
            <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                        {firstName.charAt(0)}
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
                    {firstName}
                </h2>

                <div className="flex items-center justify-center gap-2 text-gray-600">
                    <span className="text-sm">Age:</span>
                    <span className="text-xl font-semibold text-gray-900">{age}</span>
                    <span className="text-sm">years</span>
                </div>
            </div>
        </div>
    );
}

export default User