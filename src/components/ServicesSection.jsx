import aiImage from '../assets/images/ai.png';
import dsa from '../assets/images/data.jpg';
import uiux from '../assets/images/ui-ux.png';
import cloud from '../assets/images/cloud.webp';
import mobile from '../assets/images/mobile.png';
import innovate from '../assets/images/innovate.png';


export default function ServicesSection() {

    const services = [
            {
                icon: aiImage,
                title: 'Artificial Intelligence',
                content:
                    'We deliver intelligent solutions using advanced AI/ML models that automate processes, predict trends, and drive smarter decision-making for your business.'
            },
            {
                icon: dsa,
                title: 'Data Science & Analytics',
                content:
                    'Transform raw data into meaningful insights. Our data analytics services help businesses uncover patterns, optimize strategies, and make data-driven decisions.',
            },
            {
                icon: uiux,
                title: 'UI/UX Design',
                content:
                    'Create stunning user interfaces that offer seamless experiences. We focus on usability, aesthetics, and functionality to boost user satisfaction and engagement.',
            },
            {
                icon: cloud,
                title: 'Cloud Solutions',
                content:
                    'Scale your infrastructure with our secure, reliable, and cost-effective cloud services. We help you migrate, manage, and optimize your operations in the cloud.',
            },
            {
                icon: mobile,
                title: 'Mobile App & Web Development',
                content:
                    'We build high-performance Android and iOS apps tailored to your business goals. From concept to deployment, we ensure quality and functionality at every step.',
            },
            {
                icon: innovate,
                title: 'Innovation & Custom Solutions',
                content:
                    'At VisionQ Technology, innovation is our core. We build tailor-made digital solutions to meet your unique business challenges and accelerate growth.',
            },
        ]

    return (
        <>
        <div className="grid md:grid-cols-3 gap-10 mx-5 md:mx-20 my-16">
                {services.map((data, i) => (
                    <div
                        key={i}
                        className="relative group w-full h-72 rounded-2xl bg-white overflow-hidden border border-gray-300 shadow-2xl hover:shadow-xl transition-shadow bg-cover bg-center"
                        style={{ backgroundImage: `url(${data.icon})` }}
                    >
                        {/* Overlay to darken/lighten image slightly */}
                        <div className="absolute inset-0 bg-white/50 transition-opacity duration-300 group-hover:bg-white/80"></div>

                        {/* Title Centered - visible before hover */}
                        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0 z-10">
                            <h3 className="text-xl font-bold text-gray-800 bg-white/70 px-4 py-2 rounded-lg">
                                {data.title}
                            </h3>
                        </div>

                        {/* Content on Hover */}
                        <div className="absolute inset-0 flex flex-col justify-center px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                            <h3 className="text-xl font-semibold text-black mb-2">{data.title}</h3>
                            <p className="text-md text-black leading-relaxed">{data.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}