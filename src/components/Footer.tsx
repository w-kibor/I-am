import { Github, Linkedin, Mail, Heart, Code } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white border-t border-accent/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-accent">Wilkister Kibor</h3>
            <p className="text-gray-200 text-sm mb-4 leading-relaxed">
              Data Scientist passionate about data science, machine learning, and AI. 
              Building intelligent solutions to solve real-world problems.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="mailto:kiborwilkister29@gmail.com"
                className="text-gray-300 hover:text-accent transition-colors transform hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/w-kibor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent transition-colors transform hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/wilkister-kibor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent transition-colors transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-accent">Quick Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-200 hover:text-accent transition-colors hover:underline"
                >
                  About Me
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-200 hover:text-accent transition-colors hover:underline"
                >
                  Technical Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-200 hover:text-accent transition-colors hover:underline"
                >
                  Featured Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-200 hover:text-accent transition-colors hover:underline"
                >
                  Education & Certifications
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-200 hover:text-accent transition-colors hover:underline"
                >
                  Get In Touch
                </button>
              </li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-accent">Core Technologies</h3>
            <div className="text-sm text-gray-200 space-y-1">
              <p className="flex items-center">
                <Code className="w-3 h-3 mr-2 text-accent" />
                Python • SQL • scikit-learn
              </p>
              <p className="flex items-center">
                <Code className="w-3 h-3 mr-2 text-accent" />
                TensorFlow • PyTorch • pandas
              </p>
              <p className="flex items-center">
                <Code className="w-3 h-3 mr-2 text-accent" />
                NumPy • Matplotlib • Seaborn
              </p>
              <p className="flex items-center">
                <Code className="w-3 h-3 mr-2 text-accent" />
                GitHub • AWS • Flask • React
              </p>
            </div>
            <div className="mt-4 p-3 bg-accent/10 rounded-lg">
              <p className="text-xs text-gray-200">
                🎯 <strong className="text-accent">Currently seeking:</strong> Data Science internships and ML project collaborations
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-300 flex items-center justify-center gap-2 mb-2">
            © {currentYear} Wilkister Kibor. Built with 
            <Heart className="w-4 h-4 text-red-400" /> 
            and lots of data.
          </p>
          <p className="text-xs text-gray-400">
            Transforming data into insights • Building the future with AI
          </p>
        </div>
      </div>
    </footer>
  );
}