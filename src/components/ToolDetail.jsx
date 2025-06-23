// src/pages/ToolDetail.jsx

import { useParams, Link } from "react-router-dom";
import tools from "./tools";
import HeaderImage from "./HeadImage";

const ToolDetail = () => {
  const { id } = useParams();
  const tool = tools.find((t) => t.id === id);

  if (!tool) return <p className="p-10">Tool not found</p>;

  return (
    <>
        <HeaderImage page={'Project'} page2={tool.name} />
        <div className="bg-gradient-to-br from-[#f9fafb] to-[#e5e7eb] p-8">
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">
            {/* <Link
            to="/"
            className="text-blue-600 hover:text-blue-800 transition font-medium mb-6 inline-block"
            >
            ← Back to Home
            </Link> */}

            <div className="mb-6">
            <h1 className="text-4xl font-bold text-gray-900">{tool.name}</h1>
            <h2 className="text-xl italic text-gray-500">{tool.subtitle}</h2>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">{tool.description}</p>

            <hr className="my-6" />

            <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Key Features</h3>
            <div className="flex flex-wrap gap-2">
                {tool.features.map((feature, i) => (
                <span
                    key={i}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                    {feature}
                </span>
                ))}
            </div>
            </div>

            <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Use Cases</h3>
            <div className="flex flex-wrap gap-2">
                {tool.useCases.map((useCase, i) => (
                <span
                    key={i}
                    className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                    {useCase}
                </span>
                ))}
            </div>
            </div>
        </div>
        </div>
    </>
  );
};

export default ToolDetail;