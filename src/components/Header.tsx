import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Download } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-bold text-xl text-primary">Wilkister Kibor</div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-foreground hover:text-accent transition-colors font-medium"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-accent transition-colors font-medium"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="text-foreground hover:text-accent transition-colors font-medium"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-foreground hover:text-accent transition-colors font-medium"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('education')}
            className="text-foreground hover:text-accent transition-colors font-medium"
          >
            Education
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-accent transition-colors font-medium"
          >
            Contact
          </button>
          <Button className="ml-4 bg-accent hover:bg-accent/90">
            <Download className="w-4 h-4 mr-2" />
            Resume
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-left text-foreground hover:text-accent transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-left text-foreground hover:text-accent transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-left text-foreground hover:text-accent transition-colors font-medium"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-left text-foreground hover:text-accent transition-colors font-medium"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className="text-left text-foreground hover:text-accent transition-colors font-medium"
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-left text-foreground hover:text-accent transition-colors font-medium"
            >
              Contact
            </button>
            <Button className="self-start bg-accent hover:bg-accent/90">
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}