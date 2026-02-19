import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Download } from 'lucide-react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      // The scrolling will be handled by a useEffect in App.tsx or similar, 
      // but simple hash navigation is often easier: navigate(`/#${sectionId}`)
      // Let's use simple hash navigation for consistency, but react-router sometimes swallows hashes.
      // An alternative is:
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle navigation from other pages or just simple scroll on home page
  const handleNavClick = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      // We need a short delay to allow the page to mount before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl text-primary">Wilkister Kibor</Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => handleNavClick('home')}
            className="text-foreground hover:text-accent transition-colors font-medium"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="text-foreground hover:text-accent transition-colors font-medium"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('skills')}
            className="text-foreground hover:text-accent transition-colors font-medium"
          >
            Skills
          </button>
          <button
            onClick={() => handleNavClick('projects')}
            className="text-foreground hover:text-accent transition-colors font-medium"
          >
            Projects
          </button>
          <button
            onClick={() => handleNavClick('education')}
            className="text-foreground hover:text-accent transition-colors font-medium"
          >
            Education
          </button>
          <Link
            to="/blog"
            className="text-foreground hover:text-accent transition-colors font-medium"
          >
            Blog
          </Link>
          <button
            onClick={() => handleNavClick('contact')}
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
              onClick={() => handleNavClick('home')}
              className="text-left text-foreground hover:text-accent transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-left text-foreground hover:text-accent transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('skills')}
              className="text-left text-foreground hover:text-accent transition-colors font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => handleNavClick('projects')}
              className="text-left text-foreground hover:text-accent transition-colors font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => handleNavClick('education')}
              className="text-left text-foreground hover:text-accent transition-colors font-medium"
            >
              Education
            </button>
            <Link
              to="/blog"
              className="text-left text-foreground hover:text-accent transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <button
              onClick={() => handleNavClick('contact')}
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