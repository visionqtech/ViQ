import tools from "./tools";
import ToolCard from "./ToolsCard";

export default function ProjectSection () {
  return (
    <div className="bg-white p-10">
      {/* <h2 className="text-4xl font-bold mb-8 text-center">VisionQ Studio</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
};
