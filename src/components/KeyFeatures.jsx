import { useState } from "react";
import tab1 from '../assets/images/tab-1.png'
import tab2 from '../assets/images/tab-2.png'
import tab3 from '../assets/images/tab-3.png'
import tab4 from '../assets/images/tab-4.png'
import tab5 from '../assets/images/tab-5.png'

const features = [
    {
        title: "Effortless Integration with Your Workflow",
        key: "Seamless Integration",
        description1:
            "Our system integrates smoothly with your existing tools and infrastructure to reduce onboarding time and boost efficiency.",
        description2:
            "We provide plug-and-play compatibility with popular platforms, making it easy to adopt without disrupting current operations. Whether it’s CRM, ERP, or custom APIs, our solution fits right in.",
        image: tab1,
    },
    {
        title: "Instant Insights with Real-Time Analytics",
        key: "Real-Time Analytics",
        description1:
            "Make data-driven decisions with real-time dashboards and intelligent reporting.",
        description2:
            "Track key metrics as they happen. From user activity to performance indicators, our analytics engine gives you a complete picture — updated in seconds, not hours.",
        image: tab2,
    },
    {
        title: "Enterprise-Grade Security",
        key: "Enhanced Security",
        description1:
            "Protect your data and users with built-in, end-to-end security measures.",
        description2:
            "From role-based access control to encrypted data storage and transmission, our platform is built with security at its core. Compliance with standards like GDPR, ISO, and SOC2 ensures peace of mind.",
        image: tab3,
    },
    {
        title: "Built to Scale with You",
        key: "Scalability",
        description1:
            "Whether you're a startup or an enterprise, our platform grows with your needs.",
        description2:
            "Handle thousands of users, expand across geographies, and integrate new features without compromising performance. Our cloud-native architecture ensures reliability and speed, always.",
        image: tab4,
    },
    {
        title: "Designed for Simplicity and Efficiency",
        key: "User-Friendly Design",
        description1:
            "Clean, intuitive interfaces built for all users — from beginners to power users.",
        description2:
            "We prioritize usability. Our UI/UX is crafted with user feedback, making navigation seamless, reducing training time, and maximizing productivity. Every feature is just a few clicks away.",
        image: tab5,
    },
];

export default function KeyFeatures() {
    const [selected, setSelected] = useState(features[0]);

    return (
        <section className="px-6 py-16 bg-white/80">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-12 text-center">
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">
                        Our Key Features
                    </p>
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mt-2 leading-tight">
                        Discover how our platform transforms your experience
                        <br className="hidden md:block" />
                        through innovation and user-centric design.
                    </h2>
                </div>

                {/* Tab Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {features.map((feature) => (
                        <button
                            key={feature.key}
                            onClick={() => setSelected(feature)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-xl border ${selected.key === feature.key
                                ? "bg-red-600 text-white border-red-600 shadow"
                                : "bg-gray-100 text-gray-700 hover:bg-red-100 border-gray-300"
                                }`}
                        >
                            {feature.key}
                        </button>
                    ))}
                </div>

                {/* Content Box with Floating Title */}
                <div
                    className="rounded-lg border border-gray-300 overflow-hidden shadow-2xl bg-cover bg-center"
                >

                    {/* Overlay Content */}
                    <div className="flex md:flex-row flex-col items-center justify-between gap-5 bg-white  p-6 md:p-10 ">
                        <div className="space-y-5">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                                {selected.title}
                            </h3>
                            <p className="text-gray-600 text-justify italic">{selected.description1}</p>
                            <p className="text-gray-700 text-justify">{selected.description2}</p>
                        </div>
                        <img src={selected.image} className="h-65 w-65" alt="" />
                    </div>
                </div>
            </div>
        </section>

    );
};
