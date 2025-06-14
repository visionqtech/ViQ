import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import aboutImg from "../assets/images/11.png";

const tabs = [
    {
        key: "Who We Are",
        title: "Driven by Passion and Purpose",
        description1:
            "We believe in turning ideas into impactful digital products using cutting-edge technologies like AI, cloud, and automation.",
        description2:
            "Every project starts with understanding your vision and ends with exceeding your expectations.",
    },
    {
        key: "Our Services",
        title: "Explore the services that power businesses forward",
        description1:
            "Custom Software Development — Robust, scalable, and secure applications tailored to your business needs.",
        description2:
            "AI and Data Solutions — From data analytics to machine learning, we make your data work for you.",
    },
    {
        key: "Why Choose Us",
        title: "Empowering Innovation with Vision Q",
        description1:
            "Innovation at Core — We constantly experiment and evolve to stay ahead of the curve.",
        description2:
            "Experienced Team — A passionate group of developers, designers, and strategists who care deeply about your success.",
        description3:
            "End-to-End Support — From idea to execution and beyond – we’re with you every step of the way.",
    },
];

export default function AboutSection() {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    return (
        <>
            <section className="px-4 py-16">
                <div className="max-w-5xl mx-auto bg-white/80 p-6 sm:p-8 md:p-10 rounded-2xl">
                    {/* Tab Navigation */}
                    <div className="flex justify-center gap-6 sm:gap-8 md:gap-10 border-b mb-8">
                        {tabs.map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setSelectedTab(tab)}
                                className={`pb-2 text-sm sm:text-base md:text-lg font-semibold ${selectedTab.key === tab.key
                                        ? "border-b-2 border-red-500 text-red-600"
                                        : "text-gray-600 hover:text-red-500"
                                    }`}
                            >
                                {tab.key}
                            </button>
                        ))}
                    </div>

                    <div className="flex justify-center">
                        {/* Content Card */}
                        <div
                            className="relative w-full border border-red-200 rounded-xl p-4 sm:p-6 md:p-10 bg-cover bg-center shadow-lg"
                            style={{ backgroundImage: `url(${aboutImg})` }}
                        >
                            {/* Floating Label */}
                            <div className="absolute -top-4 left-6 bg-white px-3 py-1 text-xs sm:text-sm text-red-600 font-semibold border border-red-500 rounded-full shadow-sm">
                                {selectedTab.key}
                            </div>

                            {/* Content Box */}
                            <div className="bg-white/50 bg-opacity-90 backdrop-blur-sm rounded-lg p-4 sm:p-6 space-y-4 sm:space-y-5">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                                    {selectedTab.title}
                                </h2>

                                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-black">
                                    {[selectedTab.description1, selectedTab.description2, selectedTab.description3]
                                        .filter(Boolean)
                                        .map((desc, idx) => (
                                            <li key={idx} className="flex items-start gap-2 sm:gap-3">
                                                <FaCheckCircle className="text-red-500 mt-1" />
                                                <span>{desc}</span>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

    );
}
