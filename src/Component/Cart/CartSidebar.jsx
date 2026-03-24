
import React, { useState } from "react";
import CartItem from "./CartItem";

const CartSidebar = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onUpdateInstructions,
  onClearCart,
  onProceedToCheckout,
}) => {
  const getCartTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const getTotalWithTax = () => {
    const subtotal = getCartTotal();
    return {
      subtotal,
      tax: subtotal * 0.1,
      deliveryFee: 5.99,
      total: subtotal + subtotal * 0.1 + 5.99,
    };
  };

  const totals = getTotalWithTax();

  if (!isOpen) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
      />
      <div className="fixed top-0 right-0 h-full w-96 bg-white shadow-soft-lg z-50">
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-royal-maroon">
              Your Order (
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)
            </h3>
            <button
              onClick={onClose}
              className="text-charcoal hover:text-royal-maroon text-2xl transition-colors"
            >
              ×
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            {cartItems.length === 0 ? (
              <div className="text-center text-gray-500 mt-20">
                <svg
                  className="w-20 h-20 mx-auto mb-4 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <p>Your order is empty</p>
                <p className="text-sm mt-2">Add some delicious dishes!</p>
              </div>
            ) : (
              <>
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={onUpdateQuantity}
                    onRemoveItem={onRemoveItem}
                    onUpdateInstructions={onUpdateInstructions}
                  />
                ))}
              </>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal:</span>
                  <span>${totals.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax (10%):</span>
                  <span>${totals.tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Delivery Fee:</span>
                  <span>${totals.deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200">
                  <span className="font-bold text-lg">Total:</span>
                  <span className="font-bold text-2xl text-burnt-orange">
                    ${totals.total.toFixed(2)}
                  </span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={onClearCart}
                  className="flex-1 bg-gray-200 text-charcoal py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all"
                >
                  Clear
                </button>
                <button
                  onClick={onProceedToCheckout}
                  className="flex-1 bg-royal-maroon text-metallic-gold py-3 rounded-lg font-semibold hover:bg-royal-maroon-dark transition-all"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
