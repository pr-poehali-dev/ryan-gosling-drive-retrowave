import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const QuotesSection = () => {
  const quotes = [
    { text: 'Я даю тебе пять минут, когда мы уходим. Всё, что случится в эти пять минут — моя работа.', character: 'Водитель' },
    { text: 'Ты знаешь историю о скорпионе и лягушке?', character: 'Водитель' },
    { text: 'Хочешь узнать, что я делаю? Я вожу.', character: 'Водитель' }
  ];

  return (
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
  );
};

export default QuotesSection;
