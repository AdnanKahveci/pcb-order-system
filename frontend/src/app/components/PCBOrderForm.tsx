'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PCBOrderForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    layers: '1',
    thickness: '0.4',
    surface: 'hasl',
    quantity: 5,
    delivery: 'standard',
    payment: 'credit-card'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        // Ödeme sayfasına yönlendir
        router.push(`/payment?amount=${calculateTotal()}&orderId=${data.orderId}`);
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      alert('Sipariş gönderilirken bir hata oluştu');
      console.error('Sipariş hatası:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Toplam tutarı hesapla
  const calculateTotal = () => {
    // Basit bir hesaplama örneği
    const basePrice = 100; // Temel fiyat
    const layerMultiplier = parseInt(formData.layers) * 50; // Her katman için 50 TL
    const quantityMultiplier = formData.quantity * 10; // Her adet için 10 TL
    
    return basePrice + layerMultiplier + quantityMultiplier;
  };

  return (
    <section id="siparis" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
          PCB Sipariş Formu
        </h2>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Katman Sayısı
              </label>
              <select
                name="layers"
                value={formData.layers}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
              >
                <option value="1">1 Katman</option>
                <option value="2">2 Katman</option>
                <option value="4">4 Katman</option>
                <option value="6">6 Katman</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                PCB Kalınlığı
              </label>
              <select
                name="thickness"
                value={formData.thickness}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
              >
                <option value="0.4">0.4mm</option>
                <option value="0.8">0.8mm</option>
                <option value="1.6">1.6mm</option>
                <option value="2.0">2.0mm</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Sipariş Ver
          </button>
        </form>
      </div>
    </section>
  );
} 