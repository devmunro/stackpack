import { Github } from "lucide-react";

interface ButtonProps {
  link?: string;
}

function Button({ link }: ButtonProps) {
  return (
    <>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center gap-2"
        >
          <Github className="w-5 h-5" />
          <span className="tracking-wider">VIEW ON GITHUB</span>

          {/* Button Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-xl blur opacity-0 hover:opacity-30 transition-opacity duration-300 -z-10" />
        </a>
      ) : (
        <button
          disabled
          className="relative w-full bg-gray-400 text-white font-bold py-4 px-6 rounded-xl opacity-60"
        >
          Coming Soon!
        </button>
      )}
    </>
  );
}

export default Button;
