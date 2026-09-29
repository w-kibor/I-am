import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { 
  Mail, 
  MessageSquare, 
  Send, 
  Github, 
  Linkedin, 
  MapPin, 
  Copy, 
  Check, 
  Clock, 
  Download, 
  Sparkles, 
  HelpCircle, 
  CheckCircle2, 
  Briefcase,
  Globe
} from 'lucide-react';
import { toast } from 'sonner';

const MediumIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 1043.63 592.71"
    aria-hidden="true"
    focusable="false"
    className={className}
  >
    <path
      fill="currentColor"
      d="M588.67 296.35c0 163.69-131.77 296.36-294.33 296.36S0 460.04 0 296.35 131.77 0 294.34 0s294.33 132.67 294.33 296.35zm322.95 0c0 154.16-65.88 279.07-147.17 279.07S617.28 450.51 617.28 296.35 683.16 17.28 764.45 17.28s147.17 124.91 147.17 279.07zm131.01 0c0 138.09-23.36 250.04-52.18 250.04s-52.18-111.95-52.18-250.04S961.63 46.31 990.45 46.31s52.18 111.95 52.18 250.04z"
    />
  </svg>
);

const TOPIC_PRESETS = [
  {
    id: 'project',
    label: '🚀 Project Inquiry',
    subject: 'Project Inquiry: New Collaboration Idea',
    message: "Hi Wilkister,\n\nI'd like to discuss a potential project collaboration regarding..."
  },
  {
    id: 'hiring',
    label: '💼 Hiring / Contract',
    subject: 'Opportunity: Software Development Role',
    message: "Hi Wilkister,\n\nI came across your portfolio and would love to discuss a developer role/contract project with our team..."
  },
  {
    id: 'collab',
    label: '🤝 Technical Collab',
    subject: 'Technical Collaboration Inquiry',
    message: "Hi Wilkister,\n\nI'm working on an interesting tech initiative and would love to collaborate on..."
  },
  {
    id: 'chat',
    label: '☕ Coffee & Tech Chat',
    subject: 'Quick Tech Chat / Intro',
    message: "Hi Wilkister,\n\nI loved checking out your projects! Would love to connect and chat about software engineering..."
  }
];

export function Contact() {
  const contactEmail = 'kiborwilkister29@gmail.com';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [localTime, setLocalTime] = useState<string>('');

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

  // Live Kenya time (EAT - UTC+3)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Nairobi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setLocalTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopiedEmail(true);
      toast.success('Email copied to clipboard!');
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      toast.error('Failed to copy email.');
    }
  };

  const handleDownloadVCard = () => {
    const vCardData = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'FN:Wilkister Kibor',
      'TITLE:Software Engineer',
      `EMAIL;TYPE=INTERNET:${contactEmail}`,
      'URL:https://github.com/w-kibor',
      'ADR;TYPE=WORK:;;Kenya;;;;',
      'NOTE:Software Engineer open to remote opportunities globally.',
      'END:VCARD'
    ].join('\r\n');

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Wilkister_Kibor.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success('Contact card (.vcf) downloaded!');
  };

  const handleSelectTopic = (preset: typeof TOPIC_PRESETS[0]) => {
    setSelectedTopic(preset.id);
    setFormData(prev => ({
      ...prev,
      subject: preset.subject,
      message: prev.message.trim() ? prev.message : preset.message
    }));
    toast.info(`Selected "${preset.label.replace(/^[^\s]+\s/, '')}" template`);
  };

  const buildMailtoLink = () => {
    const subject = encodeURIComponent(formData.subject || `Portfolio inquiry from ${formData.name || 'Website visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );
    return `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceId || !templateId || !publicKey) {
      window.location.href = buildMailtoLink();
      toast.info('Opening your default email app to send this message.');
      setIsSubmitted(true);
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
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSelectedTopic(null);
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error('Failed to send message. Falling back to email client...');
      window.location.href = buildMailtoLink();
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
    <section id="contact" className="py-20 bg-background transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Let's Connect</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Open to software development opportunities, freelance projects, technical collaborations, and building useful digital products.
          </p>

          {/* Live Status & Timezone Banner */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 px-4 py-2 rounded-full border border-border bg-card/60 backdrop-blur-sm text-sm">
            <span className="flex items-center gap-1.5 font-medium text-emerald-500">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Available for new projects
            </span>
            <span className="text-border">•</span>
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <Clock className="w-4 h-4 text-accent" />
              Nairobi, Kenya: <span className="font-mono font-medium text-foreground">{localTime || 'EAT (UTC+3)'}</span>
            </span>
            <span className="text-border">•</span>
            <span className="text-muted-foreground">Responds within 24 hours</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information Cards */}
          <div className="space-y-6">
            {/* Email Card with Copy Action */}
            <Card className="border-l-4 border-l-accent hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-primary text-lg">
                  <Mail className="w-5 h-5 mr-3 text-accent" />
                  Email Address
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground font-mono text-sm break-all">kiborwilkister29@gmail.com</p>
                <div className="flex flex-wrap gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-accent text-accent hover:bg-accent hover:text-white transition-colors" 
                    asChild
                  >
                    <a href="mailto:kiborwilkister29@gmail.com">
                      <Send className="w-3.5 h-3.5 mr-1.5" />
                      Send Email
                    </a>
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    onClick={handleCopyEmail}
                    className="gap-1.5"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Location & Remote Status */}
            <Card className="border-l-4 border-l-accent hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-primary text-lg">
                  <MapPin className="w-5 h-5 mr-3 text-accent" />
                  Location & Work Mode
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground">Kenya</span>
                  <Badge variant="outline" className="border-accent/40 text-accent">UTC+3 (EAT)</Badge>
                </div>
                <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-accent shrink-0" />
                  Open to remote opportunities globally across all timezones.
                </p>
              </CardContent>
            </Card>

            {/* Download vCard */}
            <Card className="border-l-4 border-l-accent bg-accent/5 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-primary text-base">
                  <Download className="w-4 h-4 mr-2 text-accent" />
                  Quick Contact Card
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground mb-3">
                  Save contact details directly to your mobile phone or mail app address book.
                </p>
                <Button 
                  onClick={handleDownloadVCard}
                  variant="outline"
                  size="sm"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-white transition-colors"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Contact Card (.vcf)
                </Button>
              </CardContent>
            </Card>

            {/* Professional Links */}
            <Card className="border-l-4 border-l-accent hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-3">
                <CardTitle className="text-primary text-lg">Professional Profiles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2.5">
                  <Button variant="outline" size="sm" className="w-full justify-start border-accent/40 text-foreground hover:border-accent hover:bg-accent hover:text-white transition-all" asChild>
                    <a href="https://github.com/w-kibor" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-3 text-accent group-hover:text-white" />
                      GitHub Profile
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start border-accent/40 text-foreground hover:border-accent hover:bg-accent hover:text-white transition-all" asChild>
                    <a href="https://linkedin.com/in/wilkister-kibor" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 mr-3 text-accent group-hover:text-white" />
                      LinkedIn Profile
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start border-accent/40 text-foreground hover:border-accent hover:bg-accent hover:text-white transition-all" asChild>
                    <a href="https://medium.com/@kiborwilkister" target="_blank" rel="noopener noreferrer">
                      <MediumIcon className="w-4 h-4 mr-3 text-accent group-hover:text-white" />
                      Medium Profile
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Available For */}
            <Card className="border-l-4 border-l-accent hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-3">
                <CardTitle className="text-primary text-lg flex items-center">
                  <Briefcase className="w-4 h-4 mr-2 text-accent" />
                  Available For
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3 shrink-0"></div>
                    Software Development Roles
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3 shrink-0"></div>
                    Freelance & Contract Projects
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3 shrink-0"></div>
                    Technical Collaborations
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3 shrink-0"></div>
                    Open-Source Contributions
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3 shrink-0"></div>
                    AI & Data Application Engineering
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form Section */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-l-4 border-l-accent hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-primary text-xl">
                  <MessageSquare className="w-5 h-5 mr-3 text-accent" />
                  Send Me a Message
                </CardTitle>
                <CardDescription className="text-base">
                  Have an opportunity, project, or technical question? Choose a topic preset or send a direct message below.
                </CardDescription>

                {/* Quick Topic Chips */}
                <div className="pt-3">
                  <p className="text-xs font-medium text-muted-foreground mb-2">Quick Presets (Click to prefill form):</p>
                  <div className="flex flex-wrap gap-2">
                    {TOPIC_PRESETS.map((preset) => (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => handleSelectTopic(preset)}
                        className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${
                          selectedTopic === preset.id
                            ? 'bg-accent text-white border-accent shadow-sm'
                            : 'bg-background hover:bg-accent/10 border-border text-foreground hover:border-accent/40'
                        }`}
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                {isSubmitted ? (
                  /* Animated Success Card */
                  <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 mb-2">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Message Sent Successfully!</h3>
                    <p className="text-muted-foreground max-w-md mx-auto text-base">
                      Thank you for reaching out! I have received your note and will respond to your email as soon as possible.
                    </p>
                    <div className="pt-4">
                      <Button 
                        onClick={() => setIsSubmitted(false)} 
                        variant="outline"
                        className="border-accent text-accent hover:bg-accent hover:text-white"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  </div>
                ) : (
                  /* Contact Form */
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-primary font-medium">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="e.g. Jane Doe"
                          className="border-accent/20 focus:border-accent transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-primary font-medium">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="jane@example.com"
                          className="border-accent/20 focus:border-accent transition-colors"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-primary font-medium">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="What would you like to discuss?"
                        className="border-accent/20 focus:border-accent transition-colors"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="message" className="text-primary font-medium">Message</Label>
                        <span className={`text-xs ${formData.message.length > 900 ? 'text-destructive font-semibold' : 'text-muted-foreground'}`}>
                          {formData.message.length} / 1000 characters
                        </span>
                      </div>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        maxLength={1000}
                        required
                        placeholder="Tell me about your project, team opportunity, or idea!"
                        rows={6}
                        className="border-accent/20 focus:border-accent transition-colors resize-y"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-accent hover:bg-accent/90 text-white font-medium shadow-md hover:shadow-lg transition-all" 
                      disabled={isSubmitting}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {isSubmitting ? 'Sending Message...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Frequently Asked Questions Section */}
            <Card className="border-l-4 border-l-accent hover:shadow-md transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-primary text-lg">
                  <HelpCircle className="w-5 h-5 mr-2 text-accent" />
                  Frequently Asked Questions
                </CardTitle>
                <CardDescription>
                  Quick answers to common questions about working together.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-sm font-semibold hover:text-accent">
                      What is your typical response time?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                      I usually respond to all inquiries within 24 hours on business days. If your inquiry is urgent, please send a direct email to kiborwilkister29@gmail.com with "[URGENT]" in the subject line.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-sm font-semibold hover:text-accent">
                      Are you open to full-time remote opportunities?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                      Yes! I am fully set up for remote work and open to full-time software engineering roles, long-term contracts, or freelance collaborations globally.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-sm font-semibold hover:text-accent">
                      What tech stack and tools do you specialize in?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                      My main tech stack includes TypeScript/JavaScript, React, TailwindCSS, Python, Node.js, REST APIs, SQL/NoSQL databases, Git, and cloud development practices.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-sm font-semibold hover:text-accent">
                      Can we schedule an introductory call?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                      Absolutely! Send a brief note using the form above with a couple of date/time options that suit your schedule, and I will reply with a Google Meet or Zoom link.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer Social Connect Buttons */}
        <div className="text-center mt-16 pt-8 border-t border-border/60 max-w-4xl mx-auto">
          <p className="text-muted-foreground text-base mb-4 font-medium">
            Prefer a quick chat? Let's connect on social media!
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <Button variant="outline" className="border-accent/40 text-foreground hover:border-accent hover:bg-accent hover:text-white transition-all" asChild>
              <a href="https://linkedin.com/in/wilkister-kibor" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2 text-accent" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" className="border-accent/40 text-foreground hover:border-accent hover:bg-accent hover:text-white transition-all" asChild>
              <a href="https://medium.com/@kiborwilkister" target="_blank" rel="noopener noreferrer">
                <MediumIcon className="w-4 h-4 mr-2 text-accent" />
                Medium
              </a>
            </Button>
            <Button variant="outline" className="border-accent/40 text-foreground hover:border-accent hover:bg-accent hover:text-white transition-all" asChild>
              <a href="https://github.com/w-kibor" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2 text-accent" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}