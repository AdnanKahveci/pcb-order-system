export default function PCBFeatures() {
  const features = [
    { title: "Katman Sayısı", value: "1-16 Katman" },
    { title: "Minimum Trace Width", value: "3/3 mil" },
    { title: "Board Kalınlığı", value: "0.4mm - 3.2mm" },
    { title: "Yüzey İşlemi", value: "HASL, ENIG, OSP" }
  ];

  const pricing = [
    { size: "10x10 cm", price5: "250", price10: "450", price50: "2000" },
    { size: "15x15 cm", price5: "350", price10: "650", price50: "3000" }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
          PCB Üretim Özellikleri
        </h2>

        {/* Özellikler Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="font-medium text-blue-600 dark:text-blue-400">{feature.title}</h4>
              <p className="text-gray-600 dark:text-gray-300">{feature.value}</p>
            </div>
          ))}
        </div>

        {/* Fiyatlandırma Tablosu */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Boyut</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">5 Adet</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">10 Adet</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">50 Adet</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {pricing.map((price, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">{price.size}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">₺{price.price5}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">₺{price.price10}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">₺{price.price50}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
} 