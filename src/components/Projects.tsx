import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Github, ExternalLink, TrendingUp, Shield, Monitor, Globe } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  metrics: string;
  icon: any;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Power Outage Prediction Dashboard",
    description: "Predictive analytics dashboard for power outage forecasting",
    longDescription: "Built an intelligent dashboard that predicts power outages with 85% accuracy using advanced machine learning algorithms. The system processes historical power grid data, weather patterns, and infrastructure metrics to provide early warning alerts for potential outages.",
    image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzU4MzQ4MDMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Python", "scikit-learn", "Flask", "React", "Pandas", "Machine Learning"],
    githubUrl: "https://github.com/wilkister-kibor/power-outage-prediction",
    liveUrl: "https://power-outage-dashboard.example.com",
    metrics: "≈85% Accuracy",
    icon: Monitor
  },
  {
    id: "2",
    title: "Cyber Security Threats Insights",
    description: "Comprehensive analysis of cybersecurity incident patterns",
    longDescription: "Conducted in-depth analysis of over 10,000 cyber security incidents to identify threat patterns, attack vectors, and vulnerability trends. The project provides actionable insights for improving organizational security posture and incident response strategies.",
    image: "https://images.unsplash.com/photo-1691435828932-911a7801adfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NTgzNzk0NzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Python", "pandas", "Matplotlib", "Data Analysis", "Cybersecurity"],
    githubUrl: "https://github.com/wilkister-kibor/cyber-threats-analysis",
    metrics: "10,000+ Incidents Analyzed",
    icon: Shield
  },
  {
    id: "3",
    title: "Cyber Impact Classifier",
    description: "ML model for predicting cybersecurity incident severity",
    longDescription: "Developed a machine learning classifier that predicts the impact level of cybersecurity incidents with an F1-score of 0.82. The model helps security teams prioritize incident response and allocate resources more effectively.",
    image: "https://images.unsplash.com/photo-1646583288948-24548aedffd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBjbGFzc2lmaWNhdGlvbnxlbnwxfHx8fDE3NTgzNzk0Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["scikit-learn", "Python", "Machine Learning", "Classification", "Feature Engineering"],
    githubUrl: "https://github.com/wilkister-kibor/cyber-impact-classifier",
    metrics: "F1-score: 0.82",
    icon: TrendingUp
  },
  {
    id: "4",
    title: "Africa News Web Scraper",
    description: "Scalable web scraping system for African news content",
    longDescription: "Built a robust and scalable web scraping system that collects over 5,000 African news articles weekly from multiple sources. The system includes data cleaning, deduplication, and automated categorization to provide comprehensive news coverage across the continent.",
    image: "https://images.unsplash.com/photo-1583932334951-9a74f88ea6aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBzY3JhcGluZyUyMG5ld3N8ZW58MXx8fHwxNzU4Mzc5NDc1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Python", "BeautifulSoup", "pandas", "Web Scraping", "Data Processing"],
    githubUrl: "https://github.com/wilkister-kibor/africa-news-scraper",
    metrics: "5,000+ Articles/Week",
    icon: Globe
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Real-world applications of data science and machine learning to solve complex problems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <Card key={project.id} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-l-4 border-l-accent">
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
                    <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">{project.longDescription}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs bg-accent/10 text-accent border-accent/20 hover:bg-accent hover:text-white transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-3">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild className="border-accent text-accent hover:bg-accent hover:text-white">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button size="sm" asChild className="bg-primary hover:bg-primary/90">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground text-lg mb-6">
            Interested in seeing more of my work or collaborating on a project?
          </p>
          <Button className="bg-accent hover:bg-accent/90" asChild>
            <a href="https://github.com/w-kibor" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}