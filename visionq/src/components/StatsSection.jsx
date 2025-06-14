import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { label: "Satisfied Clients", value: 5 },
  { label: "Projects Delivered", value: 5 },
  { label: "Ongoing Projects", value: 2 },
  { label: "Team Members", value: 10 },
];

export default function StatsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <section className="bg-gray-100/90 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-25 text-center">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div className="text-4xl font-bold text-gray-700 mb-1">
                {inView && <CountUp end={stat.value} duration={2} />}
              </div>
              <div className="w-6 h-1 bg-red-500 mx-auto mb-2"></div>
              <p className="text-gray-500 text-md font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}