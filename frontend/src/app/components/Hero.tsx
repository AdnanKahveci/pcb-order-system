export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
          Geleceğin Teknolojisi
          <span className="text-blue-600 dark:text-blue-400"> Burada Başlıyor</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Modern çözümlerle işletmenizi bir adım öne taşıyın. Yenilikçi teknolojiler ve uzman ekibimizle yanınızdayız.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#iletisim"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            İletişime Geçin
          </a>
          <a
            href="#hizmetler"
            className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition duration-300"
          >
            Hizmetlerimiz
          </a>
        </div>
      </div>
    </section>
  );
} 