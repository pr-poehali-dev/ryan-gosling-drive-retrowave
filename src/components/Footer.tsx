const Footer = () => {
  return (
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
  );
};

export default Footer;
