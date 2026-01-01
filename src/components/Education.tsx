import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    specialization: "Data Science, Machine Learning & AI",
    school: "Kabarak University",
    location: "Nakuru, Kenya",
    period: "2022 - 2026",
    status: "Currently Pursuing",
    description: "Specializing in Data Science, Machine Learning, and Artificial Intelligence with hands-on experience in building real-world applications and solving complex data problems.",
    coursework: [
      "Advanced Machine Learning",
      "Deep Learning & Neural Networks",
      "Data Mining & Analytics",
      "Statistical Computing",
      "Database Systems",
      "Software Engineering",
      "Computer Vision",
      "Natural Language Processing"
    ]
  }
];

const certifications = [
  {
    title: "Microsoft AI & Machine Learning Course",
    issuer: "Microsoft",
    period: "2024",
    description: "Comprehensive certification covering Azure AI services, machine learning model development, and deployment strategies.",
    skills: ["Azure ML", "AI Services", "Model Deployment", "MLOps"],
    verified: true,
    credentialUrl: "https://example.com/certificate"
  },
  {
    title: "Python for Data Science",
    issuer: "Online Learning Platform",
    period: "2023",
    description: "Advanced Python programming for data analysis, machine learning, and statistical computing.",
    skills: ["Python", "pandas", "NumPy", "Matplotlib"],
    verified: true
  },
  {
    title: "Machine Learning Fundamentals",
    issuer: "Coursera",
    period: "2023",
    description: "Core concepts in supervised and unsupervised learning, model evaluation, and feature engineering.",
    skills: ["scikit-learn", "TensorFlow", "Model Evaluation"],
    verified: true
  }
];


export function Education() {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-secondary/30 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Education & Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Academic foundation and continuous learning in data science and AI
          </p>
        </div>

        <div className="mb-16">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center text-primary">
              <GraduationCap className="w-6 h-6 mr-3 text-accent" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="border-l-4 border-l-accent hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <div className="flex-1">
                        <CardTitle className="text-xl text-primary mb-2">{edu.degree}</CardTitle>
                        <CardDescription className="text-accent font-medium text-base mb-1">
                          {edu.specialization}
                        </CardDescription>
                        <p className="text-primary font-medium">{edu.school}</p>
                      </div>
                      <div className="text-sm text-muted-foreground mt-3 md:mt-0">
                        <div className="flex items-center mb-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          {edu.location}
                        </div>
                        <div className="flex items-center mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          {edu.period}
                        </div>
                        <Badge variant="secondary" className="bg-accent/10 text-accent">
                          {edu.status}
                        </Badge>
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed">{edu.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-medium mb-3 text-primary">Relevant Coursework:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {edu.coursework.map((course, i) => (
                        <Badge key={i} variant="outline" className="justify-start p-2 text-xs border-accent/20 text-foreground">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center text-primary">
            <Award className="w-6 h-6 mr-3 text-accent" />
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-accent">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg text-primary leading-tight">{cert.title}</CardTitle>
                    {cert.verified && (
                      <Badge variant="secondary" className="bg-accent/10 text-accent text-xs">
                        Verified
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <p className="text-accent font-medium">{cert.issuer}</p>
                    <span className="text-muted-foreground">{cert.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm mb-4 leading-relaxed">
                    {cert.description}
                  </CardDescription>
                  <div className="space-y-3">
                    <div>
                      <h5 className="text-sm font-medium mb-2 text-primary">Skills Gained:</h5>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill, i) => (
                          <Badge key={i} variant="secondary" className="text-xs bg-secondary text-foreground">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    {cert.credentialUrl && (
                      <Button variant="outline" size="sm" className="w-full border-accent text-accent hover:bg-accent hover:text-white" asChild>
                        <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-2" />
                          View Credential
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}