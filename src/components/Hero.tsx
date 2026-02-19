import { Button } from './ui/button';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

import chem4 from './ui/chem 4.jpeg';

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="w-full min-h-screen flex flex-col items-center justify-center pt-32 md:pt-40 bg-gradient-to-br from-background via-secondary/30 to-accent/10">
      <div className="pt-4 w-full flex justify-center relative z-10">
        <img
          src={chem4}
          alt="Wilkister Kibor"
          className="rounded-full object-cover border-2 border-primary shadow-lg"
          style={{ width: '300px', height: '300px', objectPosition: 'center 20%' }}
        />
      </div>
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent text-center">
            Wilkister Kibor
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl text-primary mb-4">
            Data Scientist & AI Engineer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Specializing in Data Science, Machine Learning, and Artificial Intelligence.
            Passionate about transforming data into actionable insights and building intelligent systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" onClick={scrollToProjects} className="bg-primary hover:bg-primary/90">
              View My Projects
            </Button>
            <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-white">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 mb-16">
            <a
              href="mailto:kiborwilkister29@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors transform hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/w-kibor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/wilkister-kibor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 mx-auto text-accent" />
        </div>
      </div>
    </section>
  );
}