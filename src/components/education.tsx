import { Card, CardContent } from "../components/ui/card";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    level: "College",
    institution: "Erode Sengunthar Engineering College",
    degree: "B.Tech in Information Technology",
    duration: "2021 - 2025",
    result: "CGPA: 7.9",
  },
  {
    level: "Higher Secondary",
    institution: "Sakthi Vigneswara Higher Secondary School",
    degree: "HSC",
    duration: "2020 - 2021",
    result: "83.33%",
  },
  {
    level: "Secondary School",
    institution: "Sakthi Vigneswara Higher Secondary School",
    degree: "SSLC",
    duration: "2017 - 2018",
    result: "75.6%",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold">Education</h2>
          <p className="text-sm text-slate-400 mt-2">A concise timeline of my academic journey</p>
        </div>

        <div className="relative">
          {/* Vertical timeline line for md+ */}
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-white/10 to-white/5 rounded" />

          <div className="space-y-10">
            {educationData.map((edu, idx) => (
              <div key={idx} className="flex flex-col md:flex-row items-start md:items-center md:space-x-8">
                {/* Timeline marker */}
                <div className="flex-shrink-0 mb-4 md:mb-0">
                  <div className="relative flex justify-center md:justify-start">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="hidden md:block absolute left-6 top-12 w-px h-full bg-white/5" />
                  </div>
                </div>

                {/* Card */}
                <Card className="w-full md:flex-1 bg-gradient-to-br from-slate-900/70 to-black/60 border border-white/10 shadow-lg hover:scale-105 transform transition-all duration-300">
                  <CardContent className="p-6 md:p-8">
                    <div className="md:flex md:items-start md:justify-between">
                      <div>
                        <div className="inline-flex items-center gap-3 flex-wrap">
                          <span className="px-3 py-1 rounded-full bg-white text-black text-xs font-semibold">{edu.level}</span>
                          <h3 className="text-xl md:text-2xl font-semibold">{edu.institution}</h3>
                        </div>
                        <p className="text-sm text-slate-300 mt-2">{edu.degree}</p>
                        <p className="text-sm text-slate-400 mt-1">{edu.result}</p>
                      </div>
                      <div className="text-sm text-slate-400 mt-4 md:mt-0">{edu.duration}</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
