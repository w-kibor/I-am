import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Brain, Database, BarChart3, Code, TrendingUp, Cloud } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    description: "Core programming languages for data science and development",
    skills: [
      "Python",
      "SQL",
      "R",
      "JavaScript"
    ]
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "ML libraries and frameworks for building intelligent systems",
    skills: [
      "scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Keras"
    ]
  },
  {
    icon: Database,
    title: "Data Processing",
    description: "Tools for data manipulation and analysis",
    skills: [
      "pandas",
      "NumPy",
      "Apache Spark",
      "ETL Pipelines"
    ]
  },
  {
    icon: BarChart3,
    title: "Data Visualization",
    description: "Creating compelling visual stories from data",
    skills: [
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Tableau"
    ]
  },
  {
    icon: TrendingUp,
    title: "Development Tools",
    description: "Version control and development environments",
    skills: [
      "GitHub",
      "Git",
      "Jupyter",
      "VS Code"
    ]
  },
  {
    icon: Cloud,
    title: "Cloud & Deployment",
    description: "Cloud platforms and deployment technologies",
    skills: [
      "AWS Basics",
      "Docker",
      "Flask",
      "React"
    ]
  }
];

const technologies = [
  "Python", "SQL", "scikit-learn", "TensorFlow", "PyTorch", "pandas", "NumPy", 
  "Matplotlib", "Seaborn", "GitHub", "Git", "AWS", "Docker", "Flask", "React",
  "Jupyter", "VS Code", "Tableau", "Apache Spark", "Keras", "Plotly"
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-secondary/30 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive toolkit for data science, machine learning, and AI development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-accent">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-lg text-primary">{category.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary" 
                        className="text-sm py-1.5 px-3 bg-accent/10 text-accent border-accent/20 hover:bg-accent hover:text-white transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-primary">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-sm py-2 px-4 bg-accent/10 text-accent border-accent/20 hover:bg-accent hover:text-white transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}