'use client';
import { useState } from 'react';

export default function Contact() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: contactForm.name,
          email: contactForm.email,
          message: contactForm.message,
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        alert('Mesajınız başarıyla gönderildi!');
        setContactForm({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      alert('Mesajınız gönderilirken bir hata oluştu');
      console.error('İletişim formu hatası:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="iletisim" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Bizimle İletişime Geçin
        </h2>
        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={contactForm.name}
                onChange={handleChange}
                placeholder="Adınız"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={contactForm.email}
                onChange={handleChange}
                placeholder="E-posta Adresiniz"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                value={contactForm.message}
                onChange={handleChange}
                placeholder="Mesajınız"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 