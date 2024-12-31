const validateOrder = (orderData) => {
  const errors = [];
  
  if (!orderData.pcbType) {
    errors.push('PCB tipi gereklidir');
  }
  
  if (!orderData.quantity || orderData.quantity < 1) {
    errors.push('Geçerli bir miktar girilmelidir');
  }
  
  return errors;
};

const createOrder = async (req, res) => {
  try {
    const orderData = req.body;
    
    // Validation
    const errors = validateOrder(orderData);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }
    
    // TODO: Sipariş işlemleri
    
    res.status(200).json({ message: 'Sipariş başarıyla alındı' });
  } catch (error) {
    console.error('Sipariş hatası:', error);
    res.status(500).json({ error: 'Sipariş işlenirken bir hata oluştu' });
  }
};

module.exports = {
  createOrder,
}; 