import { Card } from '@/components/ui/card';

const CharactersSection = () => {
  const characters = [
    {
      name: 'Водитель',
      actor: 'Райан Гослинг',
      description: 'Безмолвный профессионал. Днём каскадёр, ночью — лучший водитель для ограблений.',
      image: 'https://cdn.poehali.dev/projects/47f21244-fd67-4d31-b4cd-35a8cce9d106/files/4c5d2970-19ea-4488-8da2-ed9925d277a2.jpg'
    },
    {
      name: 'Ирен',
      actor: 'Кэри Маллиган',
      description: 'Соседка Водителя. Молодая мать, оказавшаяся в опасности из-за криминального прошлого мужа.',
      image: 'https://cdn.poehali.dev/projects/47f21244-fd67-4d31-b4cd-35a8cce9d106/files/69ca4abe-3c3b-4d4b-ad8f-4eaf9f8d8c31.jpg'
    },
    {
      name: 'Шеннон',
      actor: 'Брайан Крэнстон',
      description: 'Владелец автомастерской и наставник Водителя. Пытается выбраться из долгов.',
      image: 'https://cdn.poehali.dev/projects/47f21244-fd67-4d31-b4cd-35a8cce9d106/files/5e317e7a-1675-473e-9b4c-6072529eb4df.jpg'
    }
  ];

  return (
    <section id="characters" className="py-24 px-6 relative">
      <div className="container mx-auto">
        <h2 className="text-6xl font-black mb-16 text-center neon-text-cyan tracking-wider">ПЕРСОНАЖИ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {characters.map((char, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-md border-neon-pink/30 overflow-hidden group hover:border-neon-cyan/50 transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={char.image} 
                  alt={char.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-bold text-neon-pink">{char.name}</h3>
                <p className="text-cyan-300 text-sm uppercase tracking-wider">{char.actor}</p>
                <p className="text-gray-300 leading-relaxed">{char.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharactersSection;