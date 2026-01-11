import { Button } from "./ui/button";
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="hero-bg" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white font-[Bungee]">Hi I'm</h1>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-white drop-shadow-[0_1px_8px_rgba(255,255,255,0.6)] font-[Bungee]">
          <TypeAnimation
            sequence={["Hariharan MS", 1500, "Full Stack Developer", 2000, ""]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            className="inline-block"
          />
        </h2>

       <p className="text-xl sm:text-2xl text-slate-400 mb-8">
           Full-Stack Developer skilled in React, Next.js, Spring Boot, and MongoDB — experienced in building real-time applications and REST APIs.
       </p>


        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={scrollToProjects}
            className="w-full sm:w-auto px-8 py-3 bg-transparent text-white border border-white font-semibold shadow-md ring-1 ring-white/50 hover:bg-white hover:text-slate-900 hover:shadow-white/40 transition-all duration-300 btn-glow"
          >
            View My Work
          </Button>

          <a href="/Hariharan MS.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto px-8 py-3 bg-transparent text-white border border-white font-semibold shadow-md ring-1 ring-white/50 hover:bg-white hover:text-slate-900 hover:shadow-white/40 transition-all duration-300 btn-glow">
              View Resume
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
