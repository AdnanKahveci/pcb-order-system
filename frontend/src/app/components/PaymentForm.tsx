'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface PaymentFormProps {
  orderDetails: {
    amount: string | null;
    orderId: string | null;
  };
}

export default function PaymentForm({ orderDetails }: PaymentFormProps) {
  const router = useRouter();
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolderName: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...paymentData,
          amount: orderDetails.amount,
          orderId: orderDetails.orderId,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Ödeme başarıyla tamamlandı!');
        router.push('/payment-success');
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      alert('Ödeme işlemi sırasında bir hata oluştu');
      console.error('Ödeme hatası:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          Sipariş Özeti
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Toplam Tutar: {orderDetails.amount} TL
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          Sipariş No: {orderDetails.orderId}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Kart Üzerindeki İsim
          </label>
          <input
            type="text"
            name="cardHolderName"
            value={paymentData.cardHolderName}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Kart Numarası
          </label>
          <input
            type="text"
            name="cardNumber"
            value={paymentData.cardNumber}
            onChange={handleChange}
            placeholder="1234 5678 9012 3456"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Son Kullanma Tarihi
            </label>
            <input
              type="text"
              name="expiryDate"
              value={paymentData.expiryDate}
              onChange={handleChange}
              placeholder="MM/YY"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              CVV
            </label>
            <input
              type="text"
              name="cvv"
              value={paymentData.cvv}
              onChange={handleChange}
              placeholder="123"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Ödemeyi Tamamla
        </button>
      </form>
    </div>
  );
} 