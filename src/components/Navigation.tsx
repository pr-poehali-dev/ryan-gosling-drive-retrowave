import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { id: 'hero', label: 'Главная' },
    { id: 'about', label: 'О фильме' },
    { id: 'characters', label: 'Персонажи' },
    { id: 'gallery', label: 'Галерея' },
    { id: 'soundtrack', label: 'Саундтрек' },
    { id: 'quotes', label: 'Цитаты' }
  ];

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0E27]/90 backdrop-blur-md border-b border-neon-pink/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-black tracking-wider neon-text">DRIVE</h1>
          
          <div className="hidden md:flex gap-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => onNavigate(section.id)}
                className={`text-sm uppercase tracking-wider transition-all duration-300 hover:text-neon-pink ${
                  activeSection === section.id ? 'text-neon-pink neon-text' : 'text-cyan-300'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-neon-cyan hover:text-neon-pink transition-colors"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={28} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#0A0E27]/95 backdrop-blur-lg border-b border-neon-pink/20 animate-fade-in">
          <div className="container mx-auto px-6 py-6 space-y-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavigate(section.id)}
                className={`block w-full text-left text-lg uppercase tracking-wider transition-all duration-300 hover:text-neon-pink py-3 px-4 rounded-lg hover:bg-neon-pink/10 ${
                  activeSection === section.id ? 'text-neon-pink neon-text bg-neon-pink/5' : 'text-cyan-300'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
