import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import Cookies from "js-cookie";

const Account = ({ setUser }) => {
    const [userInfo, setUserInfo] = useState(null);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = Cookies.get("token");
        if (token) {
            const decodedToken = jwtDecode(token);
            setUserInfo({ username: decodedToken.username });
            fetchOrders(decodedToken.userId);
        }
    }, []);

    const fetchOrders = async (userId) => {
        try {
            const response = await axios.get(`http://localhost:5173/api/orders/${userId}`);
            setOrders(response.data);
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    };

    const handleLogout = async () => {
        try {
            await axios.post("http://localhost:5173/api/auth/logout", {}, { withCredentials: true });
            Cookies.remove("token");
            setUser(null);
            navigate("/login");
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    return (
        <div className="account-container flex flex-col items-center justify-center min-h-screen">
            {userInfo ? (
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Welcome, {userInfo.username}</h2>
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-4 py-2 rounded mb-8"
                    >
                        Logout
                    </button>
                    <h3 className="text-xl font-semibold mb-4">Previous Orders</h3>
                    {orders.length > 0 ? (
                        <ul className="list-disc list-inside">
                            {orders.map((order) => (
                                <li key={order.id}>
                                    Order #{order.id} - {order.date} - {order.total}$
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No previous orders found.</p>
                    )}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Account;