import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, MessageSquare, Send, Github, Linkedin, MapPin, Phone } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceId || !templateId || !publicKey) {
      toast.error('Email service is not configured yet.');
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        { publicKey }
      );
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Let's Connect</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Open to collaboration opportunities, internships, and discussing exciting data science projects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Mail className="w-5 h-5 mr-3 text-accent" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">kiborwilkister29@gmail.com</p>
                <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-white" asChild>
                  <a href="mailto:kiborwilkister29@gmail.com">Send Email</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <MapPin className="w-5 h-5 mr-3 text-accent" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-1">Based in Kenya</p>
                <p className="text-sm text-muted-foreground">Open to remote opportunities globally</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="text-primary">Professional Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" size="sm" className="w-full justify-start border-accent text-accent hover:bg-accent hover:text-white" asChild>
                    <a href="https://github.com/w-kibor" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-3" />
                      GitHub Profile
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start border-accent text-accent hover:bg-accent hover:text-white" asChild>
                    <a href="https://linkedin.com/in/wilkister-kibor" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 mr-3" />
                      LinkedIn Profile
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent bg-accent/5">
              <CardHeader>
                <CardTitle className="text-primary">Available For</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Data Science Internships
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    ML/AI Project Collaborations
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Research Opportunities
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Freelance Projects
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <MessageSquare className="w-5 h-5 mr-3 text-accent" />
                  Send Me a Message
                </CardTitle>
                <CardDescription className="text-base">
                  I'd love to hear about your project ideas, collaboration opportunities, or just to connect with fellow data enthusiasts!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-primary">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="border-accent/20 focus:border-accent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-primary">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                        className="border-accent/20 focus:border-accent"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-primary">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What would you like to discuss?"
                      className="border-accent/20 focus:border-accent"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-primary">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project, opportunity, or just say hello! I'm always excited to discuss data science, machine learning, and AI."
                      rows={6}
                      className="border-accent/20 focus:border-accent"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white" disabled={isSubmitting}>
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground text-lg mb-4">
            Prefer a quick chat? Let's connect on social media!
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white" asChild>
              <a href="https://linkedin.com/in/wilkister-kibor" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white" asChild>
              <a href="https://github.com/w-kibor" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}