import { Card, CardContent } from './ui/card';
import { Brain, Code, Target } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-2 sm:px-4" style={{ paddingLeft: '0.75rem', paddingRight: '0.75rem' }}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Building software that solves real-world problems
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="border-l-4 border-l-accent overflow-hidden shadow-sm">
            <CardContent
              className="py-10 md:py-14 pr-6 sm:pr-10 md:pr-12 pl-12 sm:pl-16 md:pl-24"
              style={{ paddingLeft: '3.5rem', paddingRight: '2.5rem', paddingTop: '3rem', paddingBottom: '3rem' }}
            >
              <div className="text-muted-foreground text-lg leading-relaxed flex flex-col">
                <p
                  className="text-xl font-semibold text-foreground leading-relaxed mb-8"
                  style={{ marginBottom: '2rem' }}
                >
                  I’m a Software Developer focused on building practical, reliable, and user-centered digital solutions. I enjoy taking an idea or a real-world problem and turning it into software that people can actually use.
                </p>

                <p
                  className="mb-8"
                  style={{ marginBottom: '2rem' }}
                >
                  My experience spans full-stack development, APIs, databases, data-driven applications, and AI-powered systems. I’ve worked on everything from business platforms and assessment tools to machine learning applications and intelligent educational systems.
                </p>

                <p
                  className="mb-8"
                  style={{ marginBottom: '2rem' }}
                >
                  Through my work at Excellent Operations Consultants, I’ve gained hands-on experience developing software for real organizational needs, while also supporting technical operations and contributing to digital transformation initiatives. My personal projects have allowed me to explore areas such as machine learning, data engineering, recommendation systems, and AI.
                </p>

                <p
                  className="mb-0"
                  style={{ marginBottom: '0rem' }}
                >
                  I care about writing software that is useful, maintainable, and scalable—not simply software that works once. I’m constantly learning, experimenting with new technologies, and looking for better ways to turn ideas into meaningful products.
                </p>
              </div>

              <div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 pt-10 border-t border-border"
                style={{ marginTop: '3.5rem', paddingTop: '2.5rem' }}
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                    <Brain className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">Software Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Building practical, scalable applications across the frontend, backend, APIs, and databases.
                  </p>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                    <Code className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">AI & Data</h3>
                  <p className="text-sm text-muted-foreground">
                    Using data, machine learning, and AI to make software more intelligent and useful.
                  </p>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                    <Target className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">Problem Solving</h3>
                  <p className="text-sm text-muted-foreground">
                    Turning real-world problems into simple, functional, and user-focused digital solutions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}