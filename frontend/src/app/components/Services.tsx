export default function Services() {
  const services = [
    {
      title: "Web Geliştirme",
      description: "Modern ve responsive web uygulamaları geliştiriyoruz."
    },
    {
      title: "Mobil Uygulama",
      description: "iOS ve Android için native uygulamalar geliştiriyoruz."
    },
    {
      title: "Danışmanlık",
      description: "Teknoloji ve dijital dönüşüm danışmanlığı hizmetleri sunuyoruz."
    }
  ];

  return (
    <section id="hizmetler" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Sunduğumuz Hizmetler
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 