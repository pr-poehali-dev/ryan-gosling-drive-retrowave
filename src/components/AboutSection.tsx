import { Card } from '@/components/ui/card';

const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
