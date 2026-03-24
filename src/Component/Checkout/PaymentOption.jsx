import React, { useState } from 'react';

const PaymentOptions = ({ total, onSubmit, onBack }) => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: ''
  });
  const [upiId, setUpiId] = useState('');

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onSubmit({
        method: paymentMethod,
        status: 'success',
        transactionId: `TXN-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`
      });
    }, 2000);
  };

  const handleCardChange = (e) => {
    setCardDetails({
      ...cardDetails,
      [e.target.name]: e.target.value
    });
  };

  // Format card number with spaces
  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    setCardDetails({
      ...cardDetails,
      cardNumber: formatted
    });
  };

  // Format expiry date (MM/YY)
  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\//g, '');
    if (value.length >= 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    setCardDetails({
      ...cardDetails,
      expiry: value
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-soft-lg p-6 sm:p-8">
      <h2 className="text-2xl font-bold text-royal-maroon mb-6">Payment Options</h2>
      
      <div className="space-y-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Total Amount:</span>
            <span className="text-2xl font-bold text-burnt-orange">${total.toFixed(2)}</span>
          </div>
        </div>

        <div className="space-y-3">
          {/* Credit/Debit Card Option */}
          <label className="flex items-start p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-all duration-200">
            <input
              type="radio"
              name="payment"
              value="card"
              checked={paymentMethod === 'card'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-4 h-4 text-royal-maroon mt-1"
            />
            <div className="ml-3 flex-1">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="font-medium">Credit/Debit Card</span>
                <div className="flex space-x-2">
                  <svg className="w-8 h-6" viewBox="0 0 24 16" fill="none">
                    <rect x="0.5" y="0.5" width="23" height="15" rx="1.5" fill="white" stroke="#E5E7EB"/>
                    <circle cx="6" cy="8" r="2" fill="#1F2937"/>
                    <circle cx="18" cy="8" r="2" fill="#1F2937"/>
                  </svg>
                </div>
              </div>
            </div>
          </label>

          {paymentMethod === 'card' && (
            <div className="space-y-3 pl-8">
              <input
                type="text"
                name="cardNumber"
                value={cardDetails.cardNumber}
                onChange={handleCardNumberChange}
                placeholder="Card Number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-metallic-gold focus:ring-2 focus:ring-metallic-gold focus:ring-opacity-20 transition-all"
                maxLength="19"
              />
              <input
                type="text"
                name="cardName"
                value={cardDetails.cardName}
                onChange={handleCardChange}
                placeholder="Cardholder Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-metallic-gold focus:ring-2 focus:ring-metallic-gold focus:ring-opacity-20 transition-all"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="expiry"
                  value={cardDetails.expiry}
                  onChange={handleExpiryChange}
                  placeholder="MM/YY"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-metallic-gold focus:ring-2 focus:ring-metallic-gold focus:ring-opacity-20 transition-all"
                  maxLength="5"
                />
                <input
                  type="password"
                  name="cvv"
                  value={cardDetails.cvv}
                  onChange={handleCardChange}
                  placeholder="CVV"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-metallic-gold focus:ring-2 focus:ring-metallic-gold focus:ring-opacity-20 transition-all"
                  maxLength="3"
                />
              </div>
            </div>
          )}

          {/* UPI Option */}
          <label className="flex items-start p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-all duration-200">
            <input
              type="radio"
              name="payment"
              value="upi"
              checked={paymentMethod === 'upi'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-4 h-4 text-royal-maroon mt-1"
            />
            <div className="ml-3 flex-1">
              <span className="font-medium">UPI (Google Pay, PhonePe, etc.)</span>
            </div>
          </label>

          {paymentMethod === 'upi' && (
            <div className="pl-8">
              <input
                type="text"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                placeholder="UPI ID (e.g., name@okhdfcbank)"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-metallic-gold focus:ring-2 focus:ring-metallic-gold focus:ring-opacity-20 transition-all"
              />
            </div>
          )}

          {/* Cash on Delivery Option */}
          <label className="flex items-start p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-all duration-200">
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={paymentMethod === 'cod'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-4 h-4 text-royal-maroon mt-1"
            />
            <div className="ml-3 flex-1">
              <span className="font-medium">Cash on Delivery</span>
              <p className="text-xs text-gray-500">Pay when you receive your order</p>
            </div>
          </label>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
        <button
          onClick={onBack}
          className="flex-1 bg-gray-200 text-charcoal py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all duration-200"
        >
          Back
        </button>
        <button
          onClick={handlePayment}
          disabled={isProcessing}
          className="flex-1 bg-royal-maroon text-metallic-gold py-3 rounded-lg font-semibold hover:bg-royal-maroon-dark transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isProcessing ? 'Processing...' : `Pay $${total.toFixed(2)}`}
        </button>
      </div>
    </div>
  );
};

export default PaymentOptions;