import { useNavigate } from 'react-router-dom';
import about from '../assets/images/about.webp';
import ServicesSection from './ServicesSection';

export default function HomeSection() {
    const navigate = useNavigate();
    return (
        <>
            <div className="grid md:grid-cols-2 gap-10 mx-5 md:mx-20 my-12">
                {/* About Section */}
                <div className="relative bg-white shadow-2xl border border-gray-200 p-8 rounded-3xl transition-transform hover:scale-[1.02] hover:shadow-red-100">
                    {/* Badge */}
                    <div className="absolute -top-5 left-6 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full text-base font-semibold shadow-lg">
                        About
                    </div>

                    {/* Content */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-8">
                        <div className="flex-1">
                            <p className="text-xl text-gray-600 mb-4 font-medium">Our diverse expertise includes:</p>
                            <ul className="space-y-3 text-gray-800 text-base list-disc pl-6 marker:text-red-500">
                                <li>Artificial Intelligence & Machine Learning</li>
                                <li>Data Science & Analytics</li>
                                <li>Cloud Solutions</li>
                                <li>Mobile App Development (Android & iOS)</li>
                                <li>UI/UX Design & Development</li>
                            </ul>
                        </div>
                        <img
                            src={about}
                            className="w-full max-w-[280px] md:max-w-[320px] object-contain rounded-xl"
                            alt="About"
                        />
                    </div>
                </div>

                {/* Who We Are Section */}
                <div className="relative bg-white shadow-2xl border border-gray-200 p-8 rounded-3xl transition-transform hover:scale-[1.02] hover:shadow-red-100">
                    <div className="absolute -top-5 left-6 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full text-base font-semibold shadow-lg">
                        Who We Are
                    </div>
                    {/* <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">Who We Are</h2> */}
                    <p className="text-base text-gray-700 leading-relaxed text-justify">
                        <strong className="text-gray-800">VisionQ Technology</strong> is a dynamic and innovative startup dedicated to leveraging technology to solve real-world problems. We are driven by a passion for innovation, focusing on creating intelligent, practical solutions across industries. <br /><br />
                        With a talented team of developers, engineers, and creatives, we deliver scalable solutions that enhance business operations and user experiences — from mobile apps and software systems to AI-powered automation tools. <br /><br />
                        Our culture promotes continuous learning, agility, and a user-first mindset, ensuring that we adapt quickly to an ever-changing digital landscape. At VisionQ, we don't just build tools; we drive meaningful digital transformation and contribute to a smarter, more connected future.
                    </p>
                    <div className="absolute bottom-6 right-6">
                        <button
                            onClick={() => navigate('/about')}
                            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-6 py-2.5 rounded-full shadow-md transition-transform duration-200 hover:scale-105"
                        >
                            Read More
                        </button>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <ServicesSection />
        </>
    );
}