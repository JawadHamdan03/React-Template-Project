import { useEffect, useState } from "react";
import User from "./User";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await fetch("https://dummyjson.com/users");
                if (!res.ok) return new Error("failed to fetch users")
                const data = await res.json();
                console.log(data.users)
                setUsers(data.users)
            } catch (err) {
                setError(err)
            }
            finally {
                setLoading(false);
            }
        }

        getUsers();
    }, [])

    const renderUsers = users.map(user => (
        <User
            key={user.id}
            id={user.id}
            firstName={user.firstName}
            age={user.age}
        />
    ))

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                    Our Users
                </h1>

                {loading && (
                    <div className="flex justify-center items-center py-20">
                        <div className="text-xl text-gray-600 font-semibold">Loading...</div>
                    </div>
                )}

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg max-w-md mx-auto">
                        {error}
                    </div>
                )}

                <div className="flex flex-wrap gap-6 justify-center">
                    {renderUsers}
                </div>
            </div>
        </div>
    );
}

export default Users;