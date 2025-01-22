import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Home, SquareUser, Phone, Wallet, Menu, X, ArrowRight, Users, Building2, Network, ChevronRight } from "lucide-react";
import '../styles.css';


const slides = [
    "https://pbs.twimg.com/media/GfeXmNmbQAAmVsC?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/GfeXmNoakAAYCAN?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/GfeXmNmbQAAmVsC?format=jpg&name=4096x4096",
];

function HomePage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <div className="bg-primary-800 text-white py-2 px-4 flex flex-wrap justify-between items-center">
                <div className="text-sm">
                    Monday, January 20, 2025 4:35:18 PM
                </div>
                <div className="flex items-center gap-4">
                    <button className="text-sm hover:text-primary-200">
                        Screen Reader Access
                    </button>
                    <button className="text-sm hover:text-primary-200">
                        Skip to Main Content
                    </button>
                    <button className="text-sm hover:text-primary-200">
                        Sitemap
                    </button>
                </div>
            </div>

            {/* Main Header */}
            <header className="bg-white shadow-lg">
                <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <img
                            src="https://pbs.twimg.com/profile_images/1585959847488417792/wHiIqsUp_400x400.jpg"
                            alt="CLF Logo"
                            className="w-12 h-12 sm:w-16 sm:h-16"
                        />
                        <div>
                            <h1 className="text-xl sm:text-2xl font-bold text-primary-600">
                                CLF Accounting
                            </h1>
                            <h2 className="text-sm sm:text-xl text-primary-500">
                                Management System
                            </h2>
                        </div>
                    </div>
                </div>
            </header>

            {/* Menu Section (Visible Only on Mobile) */}
            <div className="bg-primary-600 text-white px-4 py-2 flex items-center justify-between md:hidden">
                <span className="text-lg font-semibold">Menu</span>
                <button
                    className="flex items-center text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <nav
                className={`bg-primary-700 text-white ${isMenuOpen ? "block" : "hidden"} md:hidden`}
            >
                <div className="container mx-auto px-4">
                    <ul className="flex flex-col items-start gap-4">
                        <li className="flex items-center gap-2 py-3 hover:bg-primary-800 px-4 cursor-pointer transition-colors" onClick={() => navigate("/home")}>
                            <Home className="h-4 w-4" /> Home
                        </li>
                        <li className="flex items-center gap-2 py-3 hover:bg-primary-800 px-4 cursor-pointer transition-colors" onClick={() => navigate("/about")}>
                            <SquareUser className="h-4 w-4" /> About Us
                        </li>
                        <li className="flex items-center gap-2 py-3 hover:bg-primary-800 px-4 cursor-pointer transition-colors" onClick={() => navigate("/contact")}>
                            <Phone className="h-4 w-4" /> Contact Us
                        </li>
                        <li className="flex items-center gap-2 py-3 hover:bg-primary-800 px-4 cursor-pointer transition-colors" onClick={() => navigate("/dashboard")}>
                            <Wallet className="h-4 w-4" /> Login
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Desktop Navigation */}
            <nav className="bg-primary-600 text-white hidden md:block">
                <div className="container mx-auto px-4">
                    <ul className="flex items-center gap-8">
                        <li className="flex items-center gap-2 py-3 hover:bg-primary-700 px-4 cursor-pointer transition-colors" onClick={() => navigate("/home")}>
                            <Home className="h-4 w-4" /> Home
                        </li>
                        <li className="flex items-center gap-2 py-3 hover:bg-primary-700 px-4 cursor-pointer transition-colors" onClick={() => navigate("/about")}>
                            <SquareUser className="h-4 w-4" /> About Us
                        </li>
                        <li className="flex items-center gap-2 py-3 hover:bg-primary-700 px-4 cursor-pointer transition-colors" onClick={() => navigate("/contact")}>
                            <Phone className="h-4 w-4" /> Contact Us
                        </li>
                        <li className="flex items-center gap-2 py-3 hover:bg-primary-700 px-4 cursor-pointer transition-colors" onClick={() => navigate("/dashboard")}>
                            <Wallet className="h-4 w-4" /> Login
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Slideshow */}
            <div
                className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full transition-opacity duration-1000 ${currentSlide === index ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                ))}
                <div
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <button
                        onClick={() => navigate("/login")}
                        className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 sm:py-4 px-4 sm:px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                    >
                        Login to Dashboard
                    </button>
                </div>
            </div>

            {/* About CLF Section */}
            <section className="py-16 bg-gradient-to-b from-white to-primary-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16 text-primary-600">
                        About CLF
                        <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-semibold text-gray-800 mb-6">Cluster Level Federation (CLF)</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                CLF is a federation of all PrLFs in the cluster of the villages. CLF brings together all PrLFs and/or all SHGs in the Cluster to achieve economies of scale and critical mass required for solidarity.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Village Level Organisation (VLO) is the primary federation at the village or Panchayat level.
                            </p>
                            <button className="mt-8 bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg flex items-center gap-2 transform hover:translate-x-2 transition-all duration-200">
                                Start Now
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="relative">
                            <img
                                src="https://media.licdn.com/dms/image/v2/D5612AQHPkmxdw3j3XQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1657607818552?e=1743033600&v=beta&t=NV_X50qWUYO2RjaBQrdZZ-k1F3iSG2jitXOEjmLYTw0"
                                alt="Rural community meeting"
                                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-primary-100">
                            <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mb-6">
                                <Users className="text-white w-8 h-8" />
                            </div>
                            <h4 className="text-2xl font-semibold mb-4 text-gray-800">Close Bonding</h4>
                            <p className="text-gray-600 text-lg">5-20 SHGs for thinly populated areas.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-primary-100">
                            <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mb-6">
                                <Building2 className="text-white w-8 h-8" />
                            </div>
                            <h4 className="text-2xl font-semibold mb-4 text-gray-800">Community Development</h4>
                            <p className="text-gray-600 text-lg">Risus quis varius quam quisque id diam.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-primary-100">
                            <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mb-6">
                                <Network className="text-white w-8 h-8" />
                            </div>
                            <h4 className="text-2xl font-semibold mb-4 text-gray-800">Sustainable Growth</h4>
                            <p className="text-gray-600 text-lg">Purus gravida quis blandit turpis cursus in hac habitasse platea.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-primary-800 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-8">
                            <div className="text-6xl font-bold text-primary-300 mb-2">8+</div>
                            <div className="text-2xl text-primary-100">Blocks</div>
                        </div>
                        <div className="p-8">
                            <div className="text-6xl font-bold text-primary-300 mb-2">32+</div>
                            <div className="text-2xl text-primary-100">Cluster Level Federation (CLF)</div>
                        </div>
                        <div className="p-8">
                            <div className="text-6xl font-bold text-primary-300 mb-2">48+</div>
                            <div className="text-2xl text-primary-100">SHGs</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tree Diagram Section */}
            {/* Tree Diagram Section */}
            <section className="py-16 bg-gradient-to-b from-primary-50 to-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16 text-primary-600">
                        Organization Structure
                        <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
                    </h2>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Main Federation */}
                        <div className="flex flex-col items-center mb-12">
                            <div className="bg-primary-600 text-white p-6 rounded-lg shadow-lg w-64 text-center mb-8">
                                <h3 className="font-bold text-xl">Main Federation (MF)</h3>
                                <p className="text-sm mt-2">Executive Body & Directors</p>
                            </div>
                            <ChevronRight className="w-8 h-8 text-primary-500 transform rotate-90" />
                        </div>

                        {/* CLF Level */}
                        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <div className="bg-primary-500 text-white p-4 rounded-lg shadow-lg w-48 text-center mb-4">
                                        <h4 className="font-bold">CLF {i}</h4>
                                        <p className="text-xs mt-2">4 V.O.</p>
                                    </div>
                                    <ChevronRight className="hidden md:block w-6 h-6 text-primary-400 transform rotate-90" />
                                </div>
                            ))}
                        </div>

                        {/* VOs Level */}
                        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <div className="bg-primary-500 text-white p-4 rounded-lg shadow-lg w-48 text-center mb-4">
                                        <h4 className="font-bold">V.O. {i}</h4>
                                        <p className="text-xs mt-2">10-20 SHGs</p>
                                    </div>
                                    <ChevronRight className="hidden md:block w-6 h-6 text-primary-400 transform rotate-90" />
                                </div>
                            ))}
                        </div>

                        {/* SHG Level */}
                        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <div className="bg-primary-400 text-white p-3 rounded-lg shadow-lg w-36 text-center">
                                        <h5 className="font-bold">SHG {i}</h5>
                                        <p className="text-xs mt-1">15-20 Members</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Info Box */}
                        <div className="absolute md:-right-64 top-0 bg-primary-50 p-6 rounded-lg shadow-lg w-full md:w-56 mt-8 md:mt-0">
                            <h4 className="font-bold text-lg mb-4 text-primary-600">Key Points</h4>
                            <ul className="space-y-3 text-sm text-gray-700">
                                <li>• Each CLF has 2 Representatives</li>
                                <li>• Elections every 2 years</li>
                                <li>• Weekly SHG meetings</li>
                                <li>• Democratic structure</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            {/* Gallery Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16 text-primary-600">
                        Our Gallery
                        <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            "https://pbs.twimg.com/media/GfeWzNvagAAJpKv?format=jpg&name=4096x4096",
                            "https://pbs.twimg.com/media/GfeWH1HbMAEzf1M?format=jpg&name=4096x4096",
                            "https://pbs.twimg.com/media/GeqsmWvaAAAroUC?format=jpg&name=large",
                            "https://pbs.twimg.com/media/GeA6_DlbMAA2Z6N?format=jpg&name=large",
                            "https://pbs.twimg.com/media/GcvbPOpbcAAeh28?format=jpg&name=large",
                            "https://pbs.twimg.com/media/GcQuVSda0AAVCck?format=jpg&name=large",
                            "https://pbs.twimg.com/media/GcCD5raXYAAoQnD?format=jpg&name=large",
                            "https://pbs.twimg.com/media/Gb7pFGaW0AAwKpz?format=jpg&name=large",
                            "https://pbs.twimg.com/media/GYeLWu-WcAEaVTV?format=jpg&name=4096x4096"
                        ].map((url, index) => (
                            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src={`${url}`}
                                    alt={`Gallery image ${index + 1}`}
                                    className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <div className="p-4 text-white">
                                        <h3 className="font-semibold text-lg">Community Activity {index + 1}</h3>
                                        <p className="text-sm">Empowering rural communities</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Important Links Section */}
            <section className="py-20 bg-gradient-to-b from-primary-50 to-white relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-primary-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
                <div className="container mx-auto px-4 relative">
                    <h2 className="text-4xl font-bold text-center mb-16 text-primary-600">
                        Important Links
                        <div className="w-32 h-1 bg-gradient-to-r from-primary-500 to-primary-300 mx-auto mt-4 rounded-full"></div>
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {[
                            {
                                title: "National Portal of India",
                                logo: "https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg",
                                url: "https://www.india.gov.in",
                                description: "Official Portal of Indian Government"
                            },
                            {
                                title: "Government of Uttar Pradesh",
                                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Seal_of_Uttar_Pradesh.svg/640px-Seal_of_Uttar_Pradesh.svg.png",
                                url: "#",
                                description: "State Government Portal"
                            },
                            {
                                title: "Rural Development Department",
                                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Seal_of_Uttar_Pradesh.svg/640px-Seal_of_Uttar_Pradesh.svg.png",
                                url: "#",
                                description: "Rural Development Initiatives"
                            },
                            {
                                title: "NIRD & PR",
                                logo: "https://lh4.googleusercontent.com/proxy/LwhytiTsXALQKTeM2Ydj5TH78qgTN0bGgojU9k5evCvdioarq3Iq1FmTUwmf7AOpA6DDPs3AvOKy3CfNVGkhrA4XcFYj",
                                url: "https://nirdpr.org.in",
                                description: "National Institute of Rural Development"
                            },
                            {
                                title: "Digital India",
                                logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Digital_India_logo.svg/1200px-Digital_India_logo.svg.png",
                                url: "https://www.digitalindia.gov.in",
                                description: "Digital Transformation Initiative"
                            },
                            {
                                title: "SWSM UP",
                                logo: "https://www.swsm.up.gov.in/images/jal-shakti-logo.png",
                                url: "#",
                                description: "State Water & Sanitation Mission"
                            }
                        ].map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative"
                            >
                                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-primary-100 flex flex-col items-center justify-center gap-4 h-full">
                                    <div className="w-20 h-20 rounded-full bg-primary-50 flex items-center justify-center p-3 mb-2 group-hover:scale-110 transition-transform duration-300">
                                        <img
                                            src={link.logo}
                                            alt={link.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-primary-500 transition-colors duration-300">
                                            {link.title}
                                        </h3>
                                        <p className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {link.description}
                                        </p>
                                    </div>
                                    <div className="absolute inset-0 border-2 border-primary-500 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 pointer-events-none"></div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>



            {/* Footer */}
            <footer className="bg-primary-900 text-white">
                <div className="container mx-auto px-4">

                    {/* Main Footer Content */}
                    <div className="py-8 border-b border-primary-800">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-sm leading-relaxed text-primary-100">
                                    This is the official Website of U.P State Rural Livelihoods Mission, Department of Rural Development, Government of Uttar Pradesh, India.
                                </p>
                                <p className="text-sm mt-4 leading-relaxed text-primary-100">
                                    Content on this website is published and managed by U.P.State Rural Livelihoods Mission, Department of Rural Development, Government of Uttar Pradesh.
                                </p>
                                <p className="text-sm mt-4 leading-relaxed text-primary-100">
                                    For any query regarding this website, please contact the "Web Information Manager"
                                </p>
                            </div>
                            <div className="flex flex-col md:items-end">
                                <div className="text-sm text-primary-100">
                                    <p>Visitors' No.: <span className="text-primary-300">00056736</span></p>
                                    <p className="mt-2">Powered by: 3i Consulting Pvt. Ltd.</p>
                                    <p className="mt-2">Last Updated on: 03 November 2024 16:33</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Links */}
                    <div className="py-4">
                        <ul className="flex flex-wrap justify-center gap-4 text-sm">
                            <li><a href="#" className="text-primary-100 hover:text-primary-300 transition-colors">Disclaimer</a></li>
                            <li className="text-primary-700">|</li>
                            <li><a href="#" className="text-primary-100 hover:text-primary-300 transition-colors">Terms & Condition</a></li>
                            <li className="text-primary-700">|</li>
                            <li><a href="#" className="text-primary-100 hover:text-primary-300 transition-colors">Privacy Policy</a></li>
                            <li className="text-primary-700">|</li>
                            <li><a href="#" className="text-primary-100 hover:text-primary-300 transition-colors">Hyperlinking Policy</a></li>
                            <li className="text-primary-700">|</li>
                            <li><a href="#" className="text-primary-100 hover:text-primary-300 transition-colors">Copyright Policy</a></li>
                            <li className="text-primary-700">|</li>
                            <li><a href="#" className="text-primary-100 hover:text-primary-300 transition-colors">Help</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div >
    );
}

export default HomePage;
