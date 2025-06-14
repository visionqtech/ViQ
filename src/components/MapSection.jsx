

export default function MapSection() {
    return (
        <section className="py-12 px-4 md:px-10 bg-white" id="location">
            <div className="max-w-6xl mx-auto text-center">

                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                    Find Us on the Map
                </h3>

                <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        title="VisionQ Technology Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.8957650060118!2d73.0928505!3d19.2208761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795f4b216b8bd%3A0xd1b1d7c807434709!2sSiddharth%20Apartments!5e0!3m2!1sen!2sin!4v1718194982974!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};