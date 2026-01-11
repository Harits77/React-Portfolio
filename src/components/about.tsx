import hari from "../assets/hari.jpeg"
export default function About() {

  return (
    <section id="about" className="py-20 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">About Me</h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center justify-items-center">
          {/* Image Section */}
          <div className="relative animate-slide-up group">
            <div className="absolute -inset-2 rounded-3xl group-hover:scale-105 transition-transform duration-500"></div>
            <img
              src={hari}
              alt="Professional developer portrait"
              className="relative z-10 rounded-3xl shadow-xl w-full max-w-md mx-auto lg:mx-0 transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Text Section */}
          <div className="animate-slide-up">
             <h3 className="text-3xl font-semibold mb-6 text-white">
               Full Stack Developer
             </h3>
 
             <p className="text-slate-300 text-lg leading-relaxed mb-6">
              I’m Hariharan MS, an aspiring Full-Stack Developer with 6 months of internship experience building scalable web applications using
              React.js, Next.js, Spring Boot, and MongoDB.
             </p>

             <p className="text-slate-300 text-lg leading-relaxed">
              During my internship, I worked on real-time applications, developed REST APIs, and improved deployment workflows using Git, GitHub Actions, and Docker.
              I enjoy creating clean, responsive interfaces and supporting them with reliable backend systems. I’m passionate about learning, solving real-world problems,
              and contributing to impactful software projects.
             </p>


          </div>
        </div>
      </div>
    </section>

  );
}
