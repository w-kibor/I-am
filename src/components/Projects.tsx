import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';

export function Projects() {
  // Prioritize projects with live demos, then fill up to 4
  const featuredProjects = [
    ...projects.filter((project) => project.liveUrl),
    ...projects.filter((project) => !project.liveUrl),
  ].slice(0, 6);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A selection of applications, platforms, and intelligent systems I’ve built while exploring software development, AI, data, and digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {featuredProjects.map((project) => {
            const IconComponent = project.icon;
            return (
              <Card key={project.id} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-t-4 border-t-accent flex flex-col">
                <div className="aspect-video overflow-hidden relative">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-accent/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.metrics}
                  </div>
                </div>
                <CardHeader className="px-4 pt-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <IconComponent className="w-5 h-5 text-accent" />
                    </div>
                    <CardTitle className="text-lg text-primary line-clamp-1">{project.title}</CardTitle>
                  </div>
                  <CardDescription className="text-xs leading-relaxed line-clamp-3">{project.longDescription}</CardDescription>
                </CardHeader>
                <CardContent className="px-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs bg-accent/10 text-accent border-accent/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 4 && (
                      <Badge variant="secondary" className="text-xs bg-accent/10 text-accent border-accent/20">
                        +{project.tags.length - 4} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-3 mt-auto px-4 pb-4">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild className="flex-1 border-accent text-accent hover:bg-accent hover:text-white">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button size="sm" asChild className="flex-1 bg-primary hover:bg-primary/90">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-4">
          <Button className="bg-primary hover:bg-primary/90 w-auto" size="xs" asChild>
            <Link to="/projects">
              View All Projects <ArrowRight className="w-2.5 h-2.5 ml-1" />
            </Link>
          </Button>
          <Button variant="outline" className="border-muted-foreground text-foreground hover:bg-accent hover:text-white w-auto" size="xs" asChild>
            <a href="https://github.com/w-kibor" target="_blank" rel="noopener noreferrer">
              <Github className="w-2.5 h-2.5 mr-1" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}