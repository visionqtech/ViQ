import { useEffect, useState } from "react";

const skills = [
  { title: "Web Development (HTML, CSS, JavaScript)", value: 95 },
  { title: "React, Angular, Vue.js", value: 90 },
  { title: "Python, Django, Flask, Node, Express", value: 92 },
  { title: "Artificial Intelligence & Machine Learning", value: 88 },
  { title: "Data Science & Analytics", value: 85 },
  { title: "Cloud Solutions & Software Architecture", value: 90 },
];

export default function SkillsSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 bg-whitex px-4 md:px-8" id="skills">
      <div className="max-w-6xl mx-auto bg-white/90 p-14 rounded-2xl shadow-2xl">
        <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-2 border-b-2 border-red-500 inline-block">
          Skills
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-12">
          Explore the Technical Expertise That Drives Our Innovation.
        </h3>

        <div className="grid md:grid-cols-2 gap-10">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 font-medium">{skill.title}</span>
                <span className="text-gray-700 font-semibold">{skill.value}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-red-500 h-3 rounded-full transition-all duration-3000 ease-in-out"
                  style={{
                    width: loaded ? `${skill.value}%` : "0%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}