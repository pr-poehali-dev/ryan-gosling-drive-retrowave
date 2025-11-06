const GallerySection = () => {
  const images = [
    'https://cdn.poehali.dev/projects/47f21244-fd67-4d31-b4cd-35a8cce9d106/files/f00bcd27-7304-4164-b896-5b534d2a63b9.jpg',
    'https://cdn.poehali.dev/projects/47f21244-fd67-4d31-b4cd-35a8cce9d106/files/ec903678-29a5-46bd-9a0b-bfe8b4c3f02e.jpg',
    'https://cdn.poehali.dev/projects/47f21244-fd67-4d31-b4cd-35a8cce9d106/files/031311a3-7ca1-432b-9aaa-085ff85c0cb0.jpg'
  ];

  return (
    <section id="gallery" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-neon-pink/10 via-transparent to-neon-purple/10" />
      <div className="container mx-auto relative z-10">
        <h2 className="text-6xl font-black mb-16 text-center neon-text tracking-wider">ГАЛЕРЕЯ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="aspect-video overflow-hidden rounded-lg border-2 border-neon-cyan/30 hover:border-neon-pink/50 transition-all duration-300 group">
            <img 
              src={images[0]}
              alt="Drive scene"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="aspect-video overflow-hidden rounded-lg border-2 border-neon-cyan/30 hover:border-neon-pink/50 transition-all duration-300 group">
            <img 
              src={images[1]}
              alt="Drive scene"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="aspect-video overflow-hidden rounded-lg border-2 border-neon-cyan/30 hover:border-neon-pink/50 transition-all duration-300 group md:col-span-2">
            <img 
              src={images[2]}
              alt="Drive scene"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
