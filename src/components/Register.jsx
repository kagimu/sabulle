import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
const Register = ({ setUser }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5173/api/auth/register", { username, email, password });
            if (response && response.data) {
                setMessage(response.data.message);

                // Automatically log in the user after successful registration
                const loginResponse = await axios.post("http://localhost:5173/api/auth/login", { email, password });
                if (loginResponse && loginResponse.data) {
                    localStorage.setItem("token", loginResponse.data.token);
                    const decodedToken = jwtDecode(loginResponse.data.token);
                    setUser({ username: decodedToken.username });

                    // Redirect to the home page
                    navigate("/");
                } else {
                    setMessage("Login failed. Please try again.");
                }
            } else {
                setMessage("Registration failed. Please try again.");
            }
        } catch (error) {
            setMessage(error.response?.data?.error || "An error occurred. Please try again.");
        }
    };

    return (
            <section class="bg-[#ede4d5] dark:bg-gray-900">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 motion-preset-slide-up-md ">
                        <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                            <img class="w-8 h-8 mr-2" src="logo-min.png" alt="logo" />
                            SABULLE    
                        </a>
                        <div class="w-full bg-white/40  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Inscrivez-vous
                                </h1>
                                <form class="space-y-4 md:space-y-6" onSubmit={handleRegister}>
                                    <div>
                                        <label for="Username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom d'utilisateur</label>
                                        <input type="text" placeholder="Nom d'utilisateur" value={username} onChange={(e) => setUsername(e.target.value)} required name="Username" id="Username" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
                                    </div>
                                    <div>
                                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                        <input type="email"placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   />
                                    </div>
                                    <div>
                                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
                                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}requiredname="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    </div>
                            
                                    <button type="submit" class="w-full text-gray-600 bg-white/80 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">S'inscrire</button>
                                   
                                </form>
                                {message && <p>{message}</p>}
                            </div>
                        </div>
                    </div>
                </section>
     
        
        
        
    );
};

export default Register;