const submitContact = async (req, res) => {
  try {
    const contactData = req.body;
    // TODO: Burada iletişim form verilerini işleyebilir veya e-posta gönderebilirsiniz
    
    res.status(200).json({ message: 'Mesajınız başarıyla gönderildi' });
  } catch (error) {
    console.error('İletişim formu hatası:', error);
    res.status(500).json({ error: 'Mesajınız gönderilirken bir hata oluştu' });
  }
};

module.exports = {
  submitContact,
}; 