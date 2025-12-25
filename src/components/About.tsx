import { Card, CardContent } from './ui/card';
import { Brain, Code, Target } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Turning complex data into functional, user-centric systems
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-l-4 border-l-accent">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p className="text-xl font-semibold text-foreground mb-4">
                  I am a Data Scientist and AI Developer dedicated to turning complex data into functional, user-centric systems. 
                  My work lives at the intersection of analytical insights and robust software engineering.
                </p>
                
                <p>
                  A prime example of this is a <strong className="text-foreground">CBC (Competency-Based Curriculum) system</strong> I developed, 
                  where I leveraged AI to bridge the gap between educational standards and digital accessibility. 
                  My goal is never just to build a model or a website in isolation, but to create intelligent platforms 
                  that solve real-world problems.
                </p>
                
                <p>
                  Whether I'm tuning a machine learning pipeline or architecting a full-stack application, 
                  I focus on <strong className="text-foreground">scalability, efficiency, and impact</strong>.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                    <Brain className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">AI & ML</h3>
                  <p className="text-sm text-muted-foreground">
                    Building intelligent systems that learn and adapt
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                    <Code className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">Full-Stack Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Creating robust, scalable applications
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                    <Target className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">Real-World Impact</h3>
                  <p className="text-sm text-muted-foreground">
                    Solving problems that matter
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