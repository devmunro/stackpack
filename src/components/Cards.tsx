import { Zap, Code, Rocket } from "lucide-react";
import Button from "./Button";

function Cards() {

const starterPacks = [
    {
      title: "React + TypeScript + Vite + Tailwind",
      description:
        "Lightning-fast React development with modern tooling and utility-first CSS framework.",
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-pink-500 to-purple-600",
      link: "https://github.com/devmunro/react-typescript-vite-tailwind",
    },
    {
      title: "Next.js + TypeScript",
      description:
        "Full-stack React framework with TypeScript for type-safe, production-ready applications.",
      icon: <Code className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      title: "Node.js + Express API",
      description:
        "Robust backend starter with Express.js, middleware, and database integration ready to go.",
      icon: <Rocket className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
    },
  ];


  return (
  <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
  {starterPacks.map((pack, index) => (
    <div key={index} className="group relative">
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${pack.gradient} rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300`}
      />

      <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full flex flex-col justify-between hover:border-white/20 transition-all duration-300 min-h-[350px]">
        <div>
          <div
            className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${pack.gradient} mb-6`}
          >
            {pack.icon}
          </div>

          <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">
            {pack.title}
          </h3>
          <p className="text-purple-200 mb-8 leading-relaxed">
            {pack.description}
          </p>
        </div>

        <div>
          <Button link={pack.link} />
        </div>
      </div>
    </div>
  ))}
</div>

  )
}

export default Cards
