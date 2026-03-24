const CartItem = ({
  item,
  onUpdateQuantity,
  onRemoveItem,
  onUpdateInstructions,
}) => {
  return (
    <div className="border-b border-gray-200 pb-4 mb-4">
      <div className="flex justify-between mb-2">
        <h4 className="font-semibold text-charcoal">{item.name}</h4>
        <button
          onClick={() => onRemoveItem(item.id)}
          className="text-red-500 hover:text-red-700 text-sm transition-colors duration-200"
        >
          Remove
        </button>
      </div>
      <textarea
        value={item.instructions || ""}
        onChange={(e) => onUpdateInstructions(item.id, e.target.value)}
        placeholder="Special instructions..."
        className="w-full text-xs p-2 border border-gray-200 rounded-lg mb-2 focus:outline-none focus:border-metallic-gold focus:ring-2 focus:ring-metallic-gold focus:ring-opacity-20 transition-all"
        rows="1"
      />
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="w-6 h-6 bg-gray-200 rounded-full hover:bg-gray-300 flex items-center justify-center transition-colors duration-200"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="w-8 text-center font-medium">{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="w-6 h-6 bg-gray-200 rounded-full hover:bg-gray-300 flex items-center justify-center transition-colors duration-200"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        <span className="font-bold text-burnt-orange">
          ${(item.price * item.quantity).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
