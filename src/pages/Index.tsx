import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const characters = [
    {
      name: 'Водитель',
      actor: 'Райан Гослинг',
      description: 'Безмолвный профессионал. Днём каскадёр, ночью — лучший водитель для ограблений.',
      image: 'https://cdn.poehali.dev/projects/47f21244-fd67-4d31-b4cd-35a8cce9d106/files/f00bcd27-7304-4164-b896-5b534d2a63b9.jpg'
    },
    {
      name: 'Ирен',
      actor: 'Кэри Маллиган',
      description: 'Соседка Водителя. Молодая мать, оказавшаяся в опасности из-за криминального прошлого мужа.',
      image: 'https://cdn.poehali.dev/projects/47f21244-fd67-4d31-b4cd-35a8cce9d106/files/031311a3-7ca1-432b-9aaa-085ff85c0cb0.jpg'
    },
    {
      name: 'Шеннон',
      actor: 'Брайан Крэнстон',
      description: 'Владелец автомастерской и наставник Водителя. Пытается выбраться из долгов.',
      image: 'https://cdn.poehali.dev/projects/47f21244-fd67-4d31-b4cd-35a8cce9d106/files/ec903678-29a5-46bd-9a0b-bfe8b4c3f02e.jpg'
    }
  ];

  const soundtrack = [
    { title: 'Nightcall', artist: 'Kavinsky', duration: '4:18' },
    { title: 'Under Your Spell', artist: 'Desire', duration: '4:43' },
    { title: 'A Real Hero', artist: 'College & Electric Youth', duration: '4:31' },
    { title: 'Oh My Love', artist: 'Riz Ortolani', duration: '2:48' },
    { title: 'Tick of the Clock', artist: 'Chromatics', duration: '3:49' }
  ];

  const quotes = [
    { text: 'Я даю тебе пять минут, когда мы уходим. Всё, что случится в эти пять минут — моя работа.', character: 'Водитель' },
    { text: 'Ты знаешь историю о скорпионе и лягушке?', character: 'Водитель' },
    { text: 'Хочешь узнать, что я делаю? Я вожу.', character: 'Водитель' }
  ];

  return (
    <div className="min-h-screen bg-[#0A0E27] text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0E27]/90 backdrop-blur-md border-b border-neon-pink/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-black tracking-wider neon-text">DRIVE</h1>
            <div className="flex gap-8">
              {['hero', 'about', 'characters', 'gallery', 'soundtrack', 'quotes'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm uppercase tracking-wider transition-all duration-300 hover:text-neon-pink ${
                    activeSection === section ? 'text-neon-pink neon-text' : 'text-cyan-300'
                  }`}
                >
                  {section === 'hero' ? 'Главная' : 
                   section === 'about' ? 'О фильме' :
                   section === 'characters' ? 'Персонажи' :
                   section === 'gallery' ? 'Галерея' :
                   section === 'soundtrack' ? 'Саундтрек' : 'Цитаты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/20 via-transparent to-neon-pink/20" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/47f21244-fd67-4d31-b4cd-35a8cce9d106/files/ec903678-29a5-46bd-9a0b-bfe8b4c3f02e.jpg)',
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
            onClick={() => scrollToSection('about')}
            className="bg-neon-pink hover:bg-neon-pink/80 text-white px-8 py-6 text-lg font-bold tracking-wider neon-border animate-neon-pulse"
          >
            УЗНАТЬ БОЛЬШЕ
          </Button>
        </div>
      </section>

      <section id="about" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/10 to-transparent" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-6xl font-black mb-12 text-center neon-text tracking-wider">О ФИЛЬМЕ</h2>
          <Card className="bg-card/50 backdrop-blur-md border-neon-cyan/30 p-12 neon-border-cyan">
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-cyan-100">
                <span className="text-neon-pink font-bold">Драйв</span> — американский боевик и криминальная драма 2011 года режиссёра Николаса Виндинга Рефна. 
                Фильм получил культовый статус благодаря своему минималистичному стилю, атмосферному саундтреку и 
                харизматичной игре Райана Гослинга.
              </p>
              <p className="text-cyan-100">
                Главный герой — безымянный каскадёр, который подрабатывает водителем для грабителей. 
                Его размеренная жизнь меняется, когда он влюбляется в соседку Ирен и оказывается втянутым 
                в опасную криминальную историю.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-neon-pink/30">
                <div>
                  <p className="text-neon-cyan font-bold text-sm uppercase tracking-wider">Режиссёр</p>
                  <p className="text-white text-xl">Николас Виндинг Рефн</p>
                </div>
                <div>
                  <p className="text-neon-cyan font-bold text-sm uppercase tracking-wider">Год выпуска</p>
                  <p className="text-white text-xl">2011</p>
                </div>
                <div>
                  <p className="text-neon-cyan font-bold text-sm uppercase tracking-wider">Награды</p>
                  <p className="text-white text-xl">Канны: Лучший режиссёр</p>
                </div>
                <div>
                  <p className="text-neon-cyan font-bold text-sm uppercase tracking-wider">Жанр</p>
                  <p className="text-white text-xl">Нео-нуар, Боевик</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

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

      <section id="gallery" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-pink/10 via-transparent to-neon-purple/10" />
        <div className="container mx-auto relative z-10">
          <h2 className="text-6xl font-black mb-16 text-center neon-text tracking-wider">ГАЛЕРЕЯ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-video overflow-hidden rounded-lg border-2 border-neon-cyan/30 hover:border-neon-pink/50 transition-all duration-300 group">
              <img 
                src="https://cdn.poehali.dev/projects/47f21244-fd67-4d31-b4cd-35a8cce9d106/files/f00bcd27-7304-4164-b896-5b534d2a63b9.jpg"
                alt="Drive scene"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-video overflow-hidden rounded-lg border-2 border-neon-cyan/30 hover:border-neon-pink/50 transition-all duration-300 group">
              <img 
                src="https://cdn.poehali.dev/projects/47f21244-fd67-4d31-b4cd-35a8cce9d106/files/ec903678-29a5-46bd-9a0b-bfe8b4c3f02e.jpg"
                alt="Drive scene"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-video overflow-hidden rounded-lg border-2 border-neon-cyan/30 hover:border-neon-pink/50 transition-all duration-300 group md:col-span-2">
              <img 
                src="https://cdn.poehali.dev/projects/47f21244-fd67-4d31-b4cd-35a8cce9d106/files/031311a3-7ca1-432b-9aaa-085ff85c0cb0.jpg"
                alt="Drive scene"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

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

      <section id="quotes" className="py-24 px-6 relative mb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-pink/10 to-transparent" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-6xl font-black mb-16 text-center neon-text tracking-wider">ЦИТАТЫ</h2>
          <div className="space-y-8">
            {quotes.map((quote, index) => (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur-md border-neon-cyan/30 p-10 hover:border-neon-pink/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="flex gap-6">
                  <Icon name="Quote" className="text-neon-pink flex-shrink-0" size={40} />
                  <div className="space-y-3">
                    <p className="text-xl text-white italic leading-relaxed">{quote.text}</p>
                    <p className="text-neon-cyan text-sm uppercase tracking-wider">— {quote.character}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-neon-pink/20 py-12 px-6">
        <div className="container mx-auto text-center space-y-4">
          <p className="text-cyan-300 text-lg tracking-wider">
            Фанатский сайт о фильме <span className="text-neon-pink font-bold">DRIVE</span>
          </p>
          <p className="text-gray-500 text-sm">
            © 2011 FilmDistrict. Все права на фильм принадлежат правообладателям.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
