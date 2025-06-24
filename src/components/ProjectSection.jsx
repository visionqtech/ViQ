import tools from "./tools";
import ToolCard from "./ToolsCard";

const products = [
  {
    name: "VoiceQ",
    subtitle: "Clone Any Voice. Animate Any Story.",
    description:
      "Generate hyper-realistic AI voices with emotion & turn scripts into animated videos — realistic or cartoon-style.",
    features: [
      "Few-shot voice cloning",
      "Emotion & tone control",
      "Real-time TTS API",
      "Multilingual voice synthesis",
      "Prompt-to-video animation",
      "Script-based content generation",
    ],
    useCases: [
      "Voice assistants and AI agents",
      "Game characters and NPCs",
      "Multilingual dubbing",
      "AI-generated videos",
      "Short-form storytelling",
    ],
    cta: "🎧 Try VoiceQ →",
  },
  {
    name: "AvatarQ",
    subtitle: "Turn Your Selfie into a 3D Game-Ready Avatar.",
    description:
      "Upload a photo to get a rigged 3D avatar for games, VTubing, AR/VR, and metaverse platforms.",
    features: [
      "2D-to-3D avatar generation",
      "Rigging & facial animation",
      "Unity/Unreal/WebGL exports",
      "AR/VR compatible",
      "Avatar customization",
    ],
    useCases: ["Gaming", "VTubers", "Virtual Events", "Metaverse Apps"],
    cta: "🎮 Create Your Avatar →",
  },
  {
    name: "VisionLab",
    subtitle: "Label, Train, Deploy. Complete Vision Intelligence.",
    description:
      "Train and deploy computer vision models for detection, segmentation, classification, and more — with edge correction too.",
    features: [
      "Smart dataset uploader",
      "Object Detection & Classification",
      "Auto-annotation with AI",
      "Edge detection & correction",
      "YOLO, Detectron, custom models",
      "Dataset versioning & export",
    ],
    useCases: [
      "Surveillance",
      "Retail Analytics",
      "Robotics",
      "Image-based AI apps",
    ],
    cta: "🧠 Explore VisionLab →",
  },
  {
    name: "API Access",
    subtitle: "Power your app, game, or tool with VisionQ APIs.",
    description:
      "Secure endpoints with SDKs for Python, JS, Unity. Includes built-in cloud storage and caching.",
    features: [
      "Fast & secure endpoints",
      "SDKs for Python, JS, Unity",
      "Built-in cloud storage & caching",
      "Webhooks & usage dashboard (Coming soon)",
    ],
    useCases: ["Games", "AI Tools", "Voice Apps", "Computer Vision Projects"],
    cta: "📩 Request API Keys →",
  },
];

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
