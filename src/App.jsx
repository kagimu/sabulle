import React, { useState, useEffect,createContext } from "react";
import ObserverProvider from "./components/ObserverProvider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import { jwtDecode } from "jwt-decode";
import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import CategoryDescription from "./components/product-grid/CategoryDescription";
import ProductGrid from "./components/product-grid/ProductGrid";
import Footer from "./components/Footer";
import Cart from "./components/cart/Cart";
import AgeVerificationPopup from "./components/Ageverificationpopup.jsx";

import Acceuil from './components/Acceuil';
import Abonnement from "./components/Abonnement";
import Contact from "./components/Contact";
import Account from "./components/Account";
import Blog from "./components/Blog.jsx";
import RecetteCBD from "./components/RecetteCBD.jsx";
import Actualites from "./components/Actualites.jsx";
import Cookies from "js-cookie";
import ContentTemplate from './components/ContentTemplate';

export const Context = createContext();

function App() {
    const [cartCounter, setCartCounter] = useState(0);
    const navigationItems = ["Le Club","Contact"];

    
    const [user, setUser] = useState(null);
    useEffect(() => {
        const token = Cookies.get("token");
        console.log(token);
        if (token) {
            const decodedToken = jwtDecode(token);
            console.log("Decoded Token on App Load:", decodedToken); // Log the decoded token
            setUser({ username: decodedToken.username });
        }
    }, []);
    

    return (
        <ObserverProvider>
         <AgeVerificationPopup />
            <Context.Provider value={[cartCounter, setCartCounter]}>
                <div className="flex flex-col min-h-screen">
                {/* <AnnouncementBar title="Free Shipping in Europe" />*/}
                    <Header navigationItems={navigationItems} user={user} />
                    <div className="flex-grow">
                    <Router>
                        <Routes>
                            <Route path="/cart" element={<Cart />}></Route>
                            <Route
                                path="/"
                                element={<Acceuil />}
                            />
                            <Route
                                path="/Le Club"
                                element={<Abonnement />}
                            />
                            <Route
                                path="/Contact"
                                element={<Contact/>}
                            />
                            <Route
                                path="/bags"
                                element={
                                    <>
                                        <CategoryDescription
                                            title="E-Liquide"
                                            desc="Discover artisanal excellence in every bag. Our skilled artisans pour heart and soul into crafting each piece from concept to stitch, using eco-conscious materials for elegance with a greener conscience"
                                        />
                                        <ProductGrid category="bags" />
                                    </>
                                }
                            />

                            <Route
                                path="/E-Liquide"
                                element={
                                    <>
                                        <CategoryDescription
                                            title="E-Liquide"
                                            
                                        />
                                        <ProductGrid category="bags" />
                                    </>
                                }
                            />
                            <Route
                                path="/hats"
                                element={
                                    <>
                                        <CategoryDescription
                                            title="Hats"
                                            desc="Our remarkable assortment of hats, where artistry meets functionality. Handpicked materials are thoughtfully sourced, and each hat is crafted to bring you a stunning and versatile accessory. Designed to elevate your style and offer comfort."
                                        />
                                        <ProductGrid category="hats" />
                                    </>
                                }
                            />
                            
                            <Route path="/acceuil" element={<Acceuil />} />
                            <Route path="/register" element={<Register setUser={setUser} />} />
                            <Route path="/login" element={<Login setUser={setUser} />} />
                            <Route path="/account" element={<Account setUser={setUser} />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/recette-cbd" element={<RecetteCBD />} />
                            <Route path="/actualites" element={<Actualites />} />
                            <Route path="/content/:type/:id" element={<ContentTemplate />} />
                        </Routes>
                    </Router>
                    </div>
                    <Footer />
                </div>
            </Context.Provider>
        </ObserverProvider>
    );
}

export default App;
