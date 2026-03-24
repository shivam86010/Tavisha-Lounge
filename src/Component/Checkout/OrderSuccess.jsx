const OrderSuccess = ({ order, onClose }) => {
  return (
    <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl">
      <div className="text-center mb-6">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-royal-maroon mb-2">Order Confirmed!</h3>
        <p className="text-gray-600">Thank you for your order</p>
        <p className="text-sm text-metallic-gold font-mono mt-2 break-all">{order.id}</p>
      </div>
      
      <div className="border-t border-b border-gray-200 py-4 mb-6">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Items:</span>
            <span>{order.items.reduce((sum, item) => sum + item.quantity, 0)} items</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Payment Method:</span>
            <span className="capitalize">{order.paymentMethod || 'Credit Card'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Transaction ID:</span>
            <span className="text-xs break-all">{order.transactionId || order.id}</span>
          </div>
          <div className="flex justify-between pt-2 font-bold">
            <span>Total Paid:</span>
            <span className="text-burnt-orange text-xl">${order.total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="bg-green-50 p-3 rounded-lg">
          <p className="text-sm text-green-800 text-center">
            🚚 Your order will be delivered in 30-45 minutes
          </p>
        </div>
        <button
          onClick={onClose}
          className="w-full bg-royal-maroon text-metallic-gold py-3 rounded-lg font-semibold hover:bg-royal-maroon-dark transition-all duration-200"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;