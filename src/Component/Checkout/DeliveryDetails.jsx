import React, { useState } from 'react';

const DeliveryDetails = ({ onSubmit, onBack }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    landmark: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.phone.match(/^\d{10}$/)) newErrors.phone = 'Enter valid 10-digit number';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Enter valid email';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'Zip code is required';
    if (!formData.zipCode.match(/^\d{5,6}$/)) newErrors.zipCode = 'Enter valid zip code';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-soft-lg p-6 sm:p-8">
      <h2 className="text-2xl font-bold text-royal-maroon mb-6">Delivery Details</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-charcoal mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:border-metallic-gold focus:ring-2 focus:ring-metallic-gold focus:ring-opacity-20 transition-all ${
                errors.fullName ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="John Doe"
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-charcoal mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:border-metallic-gold focus:ring-2 focus:ring-metallic-gold focus:ring-opacity-20 transition-all ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="9876543210"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:border-metallic-gold focus:ring-2 focus:ring-metallic-gold focus:ring-opacity-20 transition-all ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Delivery Address *
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows="2"
            className={`w-full p-3 border rounded-lg focus:outline-none focus:border-metallic-gold focus:ring-2 focus:ring-metallic-gold focus:ring-opacity-20 transition-all ${
              errors.address ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="House No., Street, Area"
          />
          {errors.address && (
            <p className="text-red-500 text-xs mt-1">{errors.address}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-charcoal mb-2">
              City *
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:border-metallic-gold focus:ring-2 focus:ring-metallic-gold focus:ring-opacity-20 transition-all ${
                errors.city ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Mumbai"
            />
            {errors.city && (
              <p className="text-red-500 text-xs mt-1">{errors.city}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-charcoal mb-2">
              Zip Code *
            </label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:border-metallic-gold focus:ring-2 focus:ring-metallic-gold focus:ring-opacity-20 transition-all ${
                errors.zipCode ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="400001"
            />
            {errors.zipCode && (
              <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Landmark (Optional)
          </label>
          <input
            type="text"
            name="landmark"
            value={formData.landmark}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-metallic-gold focus:ring-2 focus:ring-metallic-gold focus:ring-opacity-20 transition-all"
            placeholder="Near City Mall"
          />
        </div>

        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
          <button
            type="button"
            onClick={onBack}
            className="flex-1 bg-gray-200 text-charcoal py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all duration-200"
          >
            Back to Cart
          </button>
          <button
            type="submit"
            className="flex-1 bg-royal-maroon text-metallic-gold py-3 rounded-lg font-semibold hover:bg-royal-maroon-dark transition-all duration-200"
          >
            Continue to Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeliveryDetails;