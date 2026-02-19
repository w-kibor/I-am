import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';

export function AllProjects() {
    return (
        <section className="py-20 bg-background min-h-screen">
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <Button variant="ghost" asChild className="mb-8 hover:bg-transparent hover:text-primary">
                        <Link to="/" className="flex items-center gap-2 text-muted-foreground">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>
                    </Button>
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">All Projects</h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            A comprehensive collection of my work in Data Science, AI, and Software Engineering.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => {
                        const IconComponent = project.icon;
                        return (
                            <Card key={project.id} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-t-4 border-t-accent">
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
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 bg-accent/10 rounded-lg">
                                            <IconComponent className="w-5 h-5 text-accent" />
                                        </div>
                                        <CardTitle className="text-xl text-primary line-clamp-1">{project.title}</CardTitle>
                                    </div>
                                    <CardDescription className="text-sm line-clamp-3">{project.longDescription}</CardDescription>
                                </CardHeader>
                                <CardContent>
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
                                <CardFooter className="flex gap-3 mt-auto">
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
            </div>
        </section>
    );
}
