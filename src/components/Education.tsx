import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    honours: "Second Class Honours (Upper Division)",
    school: "Kabarak University",
    location: "Nakuru, Kenya",
    period: "2022 – 2026",
    description: "A broad foundation in information technology, software development, databases, systems analysis, networking, and data-driven technologies, with practical experience applying these concepts to real-world software projects.",
    coursework: [
      "Software Engineering",
      "Database Systems",
      "Web Development",
      "Systems Analysis & Design",
      "Data Structures & Algorithms",
      "Computer Networks",
      "Operating Systems",
      "Database Management",
      "Data Mining & Analytics",
      "Artificial Intelligence",
      "Machine Learning"
    ]
  }
];

interface Certification {
  title: string;
  issuer: string;
  period: string;
  badgeText: string;
  description: string;
  skills: string[];
  credentialUrl?: string;
}

const certifications: Certification[] = [
  {
    title: "AI Safari — 4-Week Program",
    issuer: "Power Learn Project (PLP) / Next Chymia Consulting",
    period: "2026",
    badgeText: "Certificate of Completion",
    description: "Successfully completed a four-week program focused on emerging AI technologies and practical applications, with training in Agentic AI Frameworks, AI Automation, Prompt Engineering, and AI Ethics & Governance.",
    skills: ["Agentic AI", "AI Automation", "Prompt Engineering", "AI Ethics", "AI Governance"]
  },
  {
    title: "Global Mentorship Initiative",
    issuer: "Global Mentorship Initiative",
    period: "2026",
    badgeText: "Certificate",
    description: "Completed the Global Mentorship Initiative program, gaining professional development through mentorship, career guidance, and practical exposure to workplace and professional skills.",
    skills: ["Professional Development", "Career Growth", "Mentorship", "Communication"]
  },
  {
    title: "Microsoft AI & Machine Learning",
    issuer: "Microsoft",
    period: "2024",
    badgeText: "Credential",
    description: "Completed Microsoft training focused on artificial intelligence and machine learning concepts, with practical exposure to AI technologies and machine learning workflows.",
    skills: ["Artificial Intelligence", "Machine Learning", "AI Development"]
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
                        <CardTitle className="text-xl text-primary mb-1">{edu.degree}</CardTitle>
                        {edu.honours && (
                          <p className="text-accent font-semibold text-base mb-1">
                            {edu.honours}
                          </p>
                        )}
                        <p className="text-primary font-medium text-base">{edu.school}</p>
                      </div>
                      <div className="text-sm text-muted-foreground mt-3 md:mt-0">
                        <div className="flex items-center mb-1">
                          <MapPin className="w-4 h-4 mr-1 text-accent" />
                          {edu.location}
                        </div>
                        <div className="flex items-center mb-1">
                          <Calendar className="w-4 h-4 mr-1 text-accent" />
                          {edu.period}
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed">{edu.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-medium mb-3 text-primary">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <Badge key={i} variant="outline" className="p-2 text-xs border-accent/20 text-foreground bg-accent/5">
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
            Certifications & Professional Development
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-accent flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2 gap-2">
                    <CardTitle className="text-lg text-primary leading-tight">{cert.title}</CardTitle>
                    {cert.badgeText && (
                      <Badge variant="secondary" className="bg-accent/10 text-accent text-xs shrink-0">
                        {cert.badgeText}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <p className="text-accent font-medium">{cert.issuer}</p>
                    <span className="text-muted-foreground font-medium">{cert.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 justify-between">
                  <CardDescription className="text-sm mb-4 leading-relaxed">
                    {cert.description}
                  </CardDescription>
                  <div className="space-y-3 mt-auto">
                    <div>
                      <h5 className="text-xs font-semibold uppercase tracking-wider mb-2 text-muted-foreground">Skills & Topics:</h5>
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.map((skill, i) => (
                          <Badge key={i} variant="secondary" className="text-xs bg-secondary text-foreground">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    {cert.credentialUrl && (
                      <Button variant="outline" size="sm" className="w-full border-accent text-accent hover:bg-accent hover:text-white mt-2" asChild>
                        <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3.5 h-3.5 mr-2" />
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