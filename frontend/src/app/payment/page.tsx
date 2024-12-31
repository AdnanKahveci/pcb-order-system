'use client';
import { useSearchParams } from 'next/navigation';
import PaymentForm from '../components/PaymentForm';

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const orderDetails = {
    amount: searchParams.get('amount'),
    orderId: searchParams.get('orderId'),
  };

  return (
    <div className="min-h-screen py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Ödeme Sayfası
        </h1>
        <PaymentForm orderDetails={orderDetails} />
      </div>
    </div>
  );
} 