import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const SoundtrackSection = () => {
  const soundtrack = [
    { title: 'Nightcall', artist: 'Kavinsky', duration: '4:18' },
    { title: 'Under Your Spell', artist: 'Desire', duration: '4:43' },
    { title: 'A Real Hero', artist: 'College & Electric Youth', duration: '4:31' },
    { title: 'Oh My Love', artist: 'Riz Ortolani', duration: '2:48' },
    { title: 'Tick of the Clock', artist: 'Chromatics', duration: '3:49' }
  ];

  return (
    <section id="soundtrack" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-6xl font-black mb-16 text-center neon-text-cyan tracking-wider">САУНДТРЕК</h2>
        <Card className="bg-card/50 backdrop-blur-md border-neon-purple/30 p-8">
          <div className="space-y-1">
            {soundtrack.map((track, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 hover:bg-neon-pink/10 rounded-lg transition-all duration-300 group border-b border-cyan-900/30 last:border-0"
              >
                <div className="flex items-center gap-4">
                  <Icon name="Music" className="text-neon-cyan group-hover:text-neon-pink transition-colors" size={24} />
                  <div>
                    <p className="text-white font-bold">{track.title}</p>
                    <p className="text-cyan-400 text-sm">{track.artist}</p>
                  </div>
                </div>
                <span className="text-neon-purple font-mono">{track.duration}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SoundtrackSection;
