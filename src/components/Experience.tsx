import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const EXPERIENCES = [
  {
    role: "Software Developer Intern",
    company: "Frigate Engineering Services Pvt Ltd",
    location: "Trichy",
    duration: "Mar 2025 – Sep 2025",
    points: [
      "Developed and deployed a real-time application using Next.js, React, Spring Boot, and Zustand to improve workflow visibility.",
      "Integrated REST APIs using Spring Boot and connected them with MongoDB for fast CRUD operations.",
      "Improved deployment efficiency using Git, GitHub Actions, and Docker (CI/CD + containerized builds).",
      "Optimized frontend performance using Zustand for lightweight and scalable state management.",
      "Worked as SPOC (Single Point of Contact) to coordinate tasks, testing, and feature delivery.",
    ],
    tech: ["Next.js", "React", "Spring Boot", "MongoDB", "Zustand", "Docker", "GitHub Actions"],
  },
  {
    role: "Web Development Intern",
    company: "Institute of Training Trains",
    location: "",
    duration: "May 2023",
    points: [
      "Developed responsive UI layouts using HTML, CSS, and JavaScript for mobile and desktop usability.",
      "Enhanced UI/UX by applying modern design patterns and cross-device responsiveness.",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EXPERIENCES.map((exp, index) => (
            <Card
              key={index}
              className="card-gradient border-black/50 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl card-glow"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-slate-300 text-sm mt-1">
                      {exp.company} {exp.location ? `• ${exp.location}` : ""}
                    </p>
                  </div>

                  <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80 whitespace-nowrap">
                    {exp.duration}
                  </span>
                </div>

                <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm leading-relaxed">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-5">
                  {exp.tech.map((t, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-white/10 text-white/90 hover:bg-white/20 transition-colors duration-300"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
