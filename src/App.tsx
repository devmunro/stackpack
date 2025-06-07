import "./App.css";
import { useState, useEffect } from "react";

import Footer from "./components/Footer";
import Cards from "./components/Cards";
import Header from "./components/Header";

function App() {
  const [stars, setStars] = useState<
    Array<{ id: number; x: number; y: number; delay: number }>
  >([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 3,
      }));
      setStars(newStars);
    };
    generateStars();
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />

      {/* Grid Floor Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-64 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            transform: "perspective(500px) rotateX(60deg)",
            transformOrigin: "bottom",
          }}
        />
      </div>

      {/* STARS */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: "2s",
          }}
        />
      ))}

      {/* BODY */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <Header />
        <Cards />
        <Footer />
      </div>
    </div>
  );
}

export default App;
