import { useState, useEffect } from "react";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fullText = "Full Stack Developer";
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Typing speed (ms per character)

    return () => clearInterval(typingInterval);
  }, []);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-pulse-glow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse-glow"
        style={{ animationDelay: "-2s" }}
      />

      <div className="relative z-10 text-left md:text-center max-w-3xl mx-auto">
        {/* Intro text */}
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <p className="text-white poppins-regular tracking-wide text-lg mb-4">
            Hi, I'm Lorenzo 👋
          </p>
        </div>

        {/* Typewriter heading */}
        <h1
          className="text-5xl md:text-6xl lg:text-7xl poppins-bold mb-6 opacity-0 animate-fade-in glow-text"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="gradient-text">
            {displayedText}
            <span
              className="inline-block w-1 ml-1 bg-white animate-pulse"
              style={{ visibility: showCursor ? "visible" : "hidden" }}
            ></span>
          </span>
        </h1>

        {/* Description */}
        <p
          className="text-gray-400 poppins-extralight text-lg md:text-xl mb-10 max-w-xl mx-auto opacity-0 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          I specialize in creating beautiful, responsive, and user-friendly digital experiences using the latest web and mobile technologies.
        </p>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <button
            onClick={() => scrollToSection("#projects")}
            className="px-8 py-4 bg-purple-400 rounded-full poppins-medium text-sm btn-glow-hover hover:shadow-purple-500/70 transition-all"
          >
            View Projects
          </button>

          <a
            href="/resume.pdf" // <-- replace with your resume path or URL
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-transparent text-white rounded-full poppins-medium text-sm btn-glow-hover border border-purple-400 text-center"
          >
            View Resume
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="animate-float">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
