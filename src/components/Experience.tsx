import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Briefcase, Building2, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    role: "Software Developer",
    company: "Excellent Operations Consultants (EOC)",
    location: "Nairobi, Kenya",
    period: "July 17, 2026 – Present",
    isCurrent: true,
    summary: "I work as a software developer building and supporting digital solutions for organizational and business needs. My role combines software development with technical support and digital transformation initiatives.",
    contributions: [
      "Develop and maintain web-based applications and digital platforms.",
      "Contribute to the development and improvement of SAIT 360, a SACCO assessment and analytics platform.",
      "Work across application functionality, databases, APIs, deployment, and troubleshooting.",
      "Provide technical support for the organization's day-to-day IT operations.",
      "Troubleshoot software, hardware, networking, and system-related issues.",
      "Collaborate with internal teams to identify technical needs and develop practical solutions.",
      "Support digital initiatives involving technology, data, and organizational transformation."
    ],
    technologies: ["PHP", "Laravel", "JavaScript", "SQL", "Git", "GitHub", "Linux", "Vercel"]
  },
  {
    role: "IT Intern",
    company: "Anti-Counterfeit Authority of Kenya (ACA)",
    location: "Nairobi, Kenya",
    period: "January 2026 – April 2026",
    isCurrent: false,
    summary: "Worked as an IT intern providing technical support and assisting with the organization's day-to-day technology operations.",
    contributions: [
      "Provided first-line technical support to staff and assisted in resolving IT-related issues.",
      "Assisted with computer hardware, software, and system troubleshooting.",
      "Supported users with software installation, configuration, and general technical issues.",
      "Assisted with network and connectivity troubleshooting.",
      "Helped maintain and support IT equipment and organizational systems.",
      "Gained practical experience working within an organization's IT environment and supporting users with different technical needs."
    ],
    technologies: ["IT Support", "Troubleshooting", "Networking", "Hardware & Software Support", "System Administration"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Hands-on software development, systems troubleshooting, and digital solutions engineering
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-accent hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardHeader className="p-6 md:p-8 pb-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-2">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <Briefcase className="w-5 h-5 text-accent" />
                      </div>
                      <CardTitle className="text-xl md:text-2xl text-primary font-bold">{exp.role}</CardTitle>
                    </div>
                    <div className="flex items-center gap-2 text-accent font-semibold text-base mt-2">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="text-sm text-muted-foreground space-y-1 self-start md:text-right">
                    <div className="flex items-center md:justify-end gap-1.5">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center md:justify-end gap-1.5 font-medium">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span>{exp.period}</span>
                    </div>
                    {exp.isCurrent && (
                      <div className="pt-1 md:text-right">
                        <Badge variant="secondary" className="bg-accent/10 text-accent font-medium text-xs">
                          Current Role
                        </Badge>
                      </div>
                    )}
                  </div>
                </div>

                <CardDescription className="text-base leading-relaxed text-muted-foreground mt-3 pt-2 border-t border-border/60">
                  {exp.summary}
                </CardDescription>
              </CardHeader>

              <CardContent className="px-6 md:px-8 pb-8 pt-0">
                <div className="mb-6">
                  <h4 className="font-semibold text-primary text-sm uppercase tracking-wider mb-3">Key Responsibilities & Contributions</h4>
                  <ul className="grid grid-cols-1 gap-2.5">
                    {exp.contributions.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-primary text-sm uppercase tracking-wider mb-3">Technologies & Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-xs px-3 py-1 bg-accent/10 text-accent border-accent/20 hover:bg-accent hover:text-white transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
