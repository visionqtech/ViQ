import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";

export default function ContactSection() {
    return (
        <section className="bg-white py-16 px-4 md:px-10" id="contact">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                {/* Contact Info */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>

                    {/* Address Card */}
                    <div className="flex items-center gap-4 bg-gray-50 p-5 rounded-xl shadow-xl hover:shadow-md transition">
                        <div className="bg-gradient-to-br from-red-500 to-red-700 text-white p-4 rounded-full">
                            <MapPin size={28} />
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-1">Our Address</h4>
                            <p className="text-gray-600 leading-relaxed">
                                Sidharth Apartment,<br />
                                Near Friends Apartment, First Floor,<br />
                                Chinchapada, Kalyan East,<br />
                                Mumbai, Maharashtra - 421306
                            </p>
                        </div>
                    </div>

                    {/* Call Us Card */}
                    <div className="flex items-center gap-4 bg-gray-50 p-5 rounded-xl shadow-xl hover:shadow-md transition">
                        <div className="bg-gradient-to-br from-red-500 to-red-700 text-white p-4 rounded-full">
                            <Phone size={28} />
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-1">Call Us</h4>
                            <p className="text-gray-600">+91 70393 76572</p>
                        </div>
                    </div>

                    {/* Email Us Card */}
                    <div className="flex items-center gap-4 bg-gray-50 p-5 rounded-xl shadow-xl hover:shadow-md transition">
                        <div className="bg-gradient-to-br from-red-500 to-red-700 text-white p-4 rounded-full">
                            <Mail size={28} />
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-1">Email Us</h4>
                            <p className="text-gray-600">info@visionqtechnology.com</p>
                        </div>
                    </div>
                </div>


                {/* Contact Form */}
                <ContactForm />

            </div>
        </section>
    );
};