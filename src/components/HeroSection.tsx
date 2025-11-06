import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/20 via-transparent to-neon-pink/20" />
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/47f21244-fd67-4d31-b4cd-35a8cce9d106/files/5e317e7a-1675-473e-9b4c-6072529eb4df.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="relative z-10 text-center space-y-8 animate-fade-in">
        <h1 className="text-9xl font-black tracking-wider neon-text">DRIVE</h1>
        <p className="text-3xl text-cyan-300 neon-text-cyan tracking-widest">2011</p>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Культовый нео-нуар от Николаса Виндинга Рефна с Райаном Гослингом в главной роли
        </p>
        <Button 
          onClick={() => onNavigate('about')}
          className="bg-neon-pink hover:bg-neon-pink/80 text-white px-8 py-6 text-lg font-bold tracking-wider neon-border animate-neon-pulse"
        >
          УЗНАТЬ БОЛЬШЕ
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;