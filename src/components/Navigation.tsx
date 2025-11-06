interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  const sections = [
    { id: 'hero', label: 'Главная' },
    { id: 'about', label: 'О фильме' },
    { id: 'characters', label: 'Персонажи' },
    { id: 'gallery', label: 'Галерея' },
    { id: 'soundtrack', label: 'Саундтрек' },
    { id: 'quotes', label: 'Цитаты' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0E27]/90 backdrop-blur-md border-b border-neon-pink/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-black tracking-wider neon-text">DRIVE</h1>
          <div className="flex gap-8">
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
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
