import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Home, SquareUser, Phone, Wallet } from "lucide-react";

const slides = [
    "https://pbs.twimg.com/media/GfeXmNmbQAAmVsC?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/GfeXmNoakAAYCAN?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/GfeXmNmbQAAmVsC?format=jpg&name=4096x4096",
];

function HomePage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
            {/* Top Bar */}
            <div className="bg-primary-800 text-white py-2 px-4 flex justify-between items-center">
                <div className="text-sm">Monday, January 20, 2025 4:35:18 PM</div>
                <div className="flex items-center gap-4">
                    <button className="text-sm hover:text-primary-200">Screen Reader Access</button>
                    <button className="text-sm hover:text-primary-200">Skip to Main Content</button>
                    <button className="text-sm hover:text-primary-200">Sitemap</button>
                </div>
            </div>

            {/* Main Header */}
            <header className="bg-white shadow-lg">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <img
                                src="https://pbs.twimg.com/profile_images/1585959847488417792/wHiIqsUp_400x400.jpg"
                                alt="CLF Logo"
                                className="w-16 h-16"
                            />
                            <div>
                                <h1 className="text-2xl font-bold text-primary-600">CLF Accounting</h1>
                                <h2 className="text-xl text-primary-500">Management System</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Navigation */}
            <nav className="bg-primary-600 text-white">
                <div className="container mx-auto px-4">
                    <ul className="flex items-center gap-4">
                        <li className="flex items-center gap-2 py-3 hover:bg-primary-700 px-4 cursor-pointer transition-colors">
                            <Home className="h-4 w-4" /> Home
                        </li>
                        <li className="flex items-center gap-2 py-3 hover:bg-primary-700 px-4 cursor-pointer transition-colors">
                            <SquareUser className="h-4 w-4" /> About Us
                        </li>
                        <li className="flex items-center gap-2 py-3 hover:bg-primary-700 px-4 cursor-pointer transition-colors">
                            <Phone className="h-4 w-4" /> Contact Us
                        </li>
                        <li
                            className="flex items-center gap-2 py-3 hover:bg-primary-700 px-4 cursor-pointer transition-colors"
                            onClick={() => navigate("/dashboard")}
                        >
                            <Wallet className="h-4 w-4" /> Login
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Slideshow */}
            <div
                className="relative h-[500px] overflow-hidden group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full transition-opacity duration-1000 ${currentSlide === index ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <img
                            src={slide}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
                <div
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <button
                        onClick={() => navigate("/login")}
                        className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                    >
                        Login to Dashboard
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
