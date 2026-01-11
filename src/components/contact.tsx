import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Mail, MapPin } from "lucide-react";
import { SiGithub, SiLinkedin, SiX, SiInstagram } from "react-icons/si";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hariharants77@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, India",
    },
  ];

  const socialLinks = [
    { icon: SiGithub, href: "https://github.com/Harits77", label: "GitHub" },
    { icon: SiLinkedin, href: "https://www.linkedin.com/in/ms-hariharan", label: "LinkedIn" },
    { icon: SiX, href: "#", label: "X" },
    { icon: SiInstagram, href: "#", label: "Instagram" },
  ];

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-6 text-white">Let's Work Together</h3>
            <p className="text-slate-300 text-lg mb-8">
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      <IconComponent className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <p className="font-medium">{item.value}</p>
                      <p className="text-slate-400 text-sm">{item.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-12 h-12 bg-black hover:bg-white transition-all duration-300 hover:scale-110"
                    >
                      <IconComponent className="h-5 w-5 text-white" />
                    </Button>
                  </a>
                );
              })}
            </div>

          </div>

          <Card className="bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/40 animate-slide-up rounded-2xl">
            <CardContent className="p-8">
              <form
                action="https://formspree.io/f/xpwqbaob"
                method="POST"
                className="space-y-6"
                onSubmit={() => setIsSubmitting(true)}
              >
                <div>
                  <Label htmlFor="name" className="text-sm font-medium mb-2 block text-slate-200">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:border-violet-400 focus:ring-violet-400/30 rounded-xl h-12"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium mb-2 block text-slate-200">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:border-violet-400 focus:ring-violet-400/30 rounded-xl h-12"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-sm font-medium mb-2 block text-slate-200">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Discussion"
                    className="bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:border-violet-400 focus:ring-violet-400/30 rounded-xl h-12"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium mb-2 block text-slate-200">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:border-violet-400 focus:ring-violet-400/30 rounded-xl resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 rounded-xl bg-gradient-to-br from-slate-800 to-black text-white "
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
