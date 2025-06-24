// src/components/ToolCard.jsx

import { useNavigate } from "react-router-dom";

const ToolCard = ({ tool }) => {
  const navigate = useNavigate();
  return (
    <div
      className="block bg-white text-black rounded-xl p-5 shadow-lg hover:shadow-2xl transition"
    >
      <h3 className="text-xl font-bold mb-1">{tool.name}</h3>
      <p className="text-gray-700 italic mb-2">{tool.subtitle}</p>
      <p className="text-sm text-gray-600">{tool.description.slice(0, 100)}...</p>
      <div className="flex justify-end mt-2">
        <button
          onClick={() => navigate(`/tools/${tool.id}`)}
          className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-3 py-1.5 rounded-full shadow-md transition-transform duration-200 hover:scale-105"
        >See More</button>
      </div>
    </div>
  );
};

export default ToolCard;
