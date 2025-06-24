import { BsTwitterX, BsLinkedin } from "react-icons/bs";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white px-6 md:px-16 pt-7">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
                {/* Company Info */}
                <div className="flex flex-col gap-5 text-base leading-relaxed">
                    <div>
                        <h1 className="text-4xl font-bold mb-4 text-red-500">VisionQ</h1>
                        <p>
                            VisionQ Technologies <br />
                            Sidharth Apartment,<br />
                            Near Friends Apartment, First Floor,<br />
                            Chinchapada, Kalyan East,<br />
                            Mumbai, Maharashtra - 421306
                        </p>
                        <p className="mt-3"><strong>Phone:</strong> +91 70393 76572</p>
                        <p><strong>Email:</strong> info@visionqtechnology.com</p>
                    </div>
                    <div className="flex gap-4 mt-4">
                        <a href="#" className="hover:text-red-400 transition"><BsTwitterX size={24} /></a>
                        <a href="https://www.linkedin.com/company/visionq-technology" target="blank" className="hover:text-red-400 transition"><BsLinkedin size={24} /></a>
                    </div>
                </div>

                {/* Useful Links */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Useful Links</h2>
                    <ul className="space-y-3 text-base">
                        <li><a href="/" className="hover:text-red-400">Home</a></li>
                        <li><a href="/about" className="hover:text-red-400">About Us</a></li>
                        <li><a href="/service" className="hover:text-red-400">Services</a></li>
                        <li><a href="#" className="hover:text-red-400">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-red-400">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
                    <ul className="space-y-3 text-base">
                        <li><a href="#" className="hover:text-red-400">Custom Software Development</a></li>
                        <li><a href="#" className="hover:text-red-400">Mobile App Development</a></li>
                        <li><a href="#" className="hover:text-red-400">Web Applications</a></li>
                        <li><a href="#" className="hover:text-red-400">AI & ML Solutions</a></li>
                        <li><a href="#" className="hover:text-red-400">Startup Tech Support</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Stay Connected</h2>
                    <p className="text-base mb-5">
                        Join our newsletter to get the latest tech updates, offers, and tips delivered straight to your inbox.
                    </p>
                    <div className="flex rounded-lg shadow-md overflow-hidden border border-gray-600">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 font-medium transition-all">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-7 py-5 border-t-1">
                <p className="text-center text-sm">© 2025 VisionQ Technology. All rights reserved.</p>
            </div>
        </footer>
    );
}