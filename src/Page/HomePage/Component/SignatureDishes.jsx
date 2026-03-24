import React, { useState, useEffect, useRef } from "react";
import CartSidebar from "../../../Component/Cart/CartSidebar";
import DeliveryDetails from "../../../Component/Checkout/DeliveryDetails";
import PaymentOptions from "../../../Component/Checkout/PaymentOption";
import OrderSuccess from "../../../Component/Checkout/OrderSuccess";

const dishes = [
  {
    id: 1,
    name: "Royal Butter Chicken",
    description:
      "Tender chicken in a rich tomato and butter sauce with royal spices",
    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 28,
    formattedPrice: "$28",
    category: "Main Course",
    prepTime: "20-25 min",
  },
  {
    id: 2,
    name: "Saffron Biryani",
    description: "Fragrant basmati rice with premium spices and choice of meat",
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d96f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 32,
    formattedPrice: "$32",
    category: "Rice Specialties",
    prepTime: "25-30 min",
  },
  {
    id: 3,
    name: "Tandoori Platter",
    description: "Assorted grilled delicacies from our traditional clay oven",
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 45,
    formattedPrice: "$45",
    category: "Tandoori",
    prepTime: "30-35 min",
  },
  {
    id: 4,
    name: "Royal Thali",
    description: "Complete dining experience with 12 authentic dishes",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 65,
    formattedPrice: "$65",
    category: "Thali Special",
    prepTime: "35-40 min",
  },
];

const SignatureDishes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [notification, setNotification] = useState(null);
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  // Checkout states
  const [checkoutStep, setCheckoutStep] = useState(null); // null, 'details', 'payment', 'success'
  const [deliveryDetails, setDeliveryDetails] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [finalOrder, setFinalOrder] = useState(null);

  const slideTimerRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("royalCart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCartItems(parsedCart);
      const totalCount = parsedCart.reduce(
        (sum, item) => sum + item.quantity,
        0,
      );
      setCartCount(totalCount);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("royalCart", JSON.stringify(cartItems));
    const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(totalCount);
  }, [cartItems]);

  // Auto-slide functionality with hover pause
  useEffect(() => {
    const startSlideTimer = () => {
      if (slideTimerRef.current) clearInterval(slideTimerRef.current);
      if (!isHovering) {
        slideTimerRef.current = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % dishes.length);
        }, 5000);
      }
    };

    startSlideTimer();

    return () => {
      if (slideTimerRef.current) clearInterval(slideTimerRef.current);
    };
  }, [isHovering]);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovering(false);
    }, 500);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dishes.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + dishes.length) % dishes.length,
    );
  };

  const addToCart = (
    dish,
    qty = quantity,
    instructions = specialInstructions,
  ) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === dish.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === dish.id
            ? {
                ...item,
                quantity: item.quantity + qty,
                instructions: instructions.trim() || item.instructions,
              }
            : item,
        );
      } else {
        return [
          ...prevItems,
          { ...dish, quantity: qty, instructions: instructions.trim() },
        ];
      }
    });

    const instructionMsg = instructions.trim()
      ? ` with special instructions`
      : "";
    setNotification({
      message: `${qty} × ${dish.name} added to your order${instructionMsg}!`,
      type: "success",
    });

    setTimeout(() => setNotification(null), 3000);
    setQuantity(1);
    setSpecialInstructions("");

    const cartBtn = document.getElementById("cart-button");
    if (cartBtn) {
      cartBtn.classList.add("animate-shake");
      setTimeout(() => cartBtn.classList.remove("animate-shake"), 500);
    }
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    setNotification({
      message: "Item removed from order",
      type: "info",
    });
    setTimeout(() => setNotification(null), 2000);
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const updateInstructions = (id, instructions) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, instructions } : item,
      ),
    );
  };

  const getCartTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const getTotalWithTax = () => {
    const subtotal = getCartTotal();
    return subtotal + subtotal * 0.1 + 5.99;
  };

  const clearCart = () => {
    setCartItems([]);
    setNotification({
      message: "Cart cleared",
      type: "info",
    });
    setTimeout(() => setNotification(null), 2000);
  };

  const handleProceedToCheckout = () => {
    setShowCart(false);
    setCheckoutStep("details");
  };

  const handleDeliverySubmit = (details) => {
    setDeliveryDetails(details);
    setCheckoutStep("payment");
  };

  const handlePaymentSubmit = (payment) => {
    const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
    const finalOrderData = {
      id: orderId,
      items: cartItems,
      deliveryDetails,
      paymentDetails: payment,
      subtotal: getCartTotal(),
      tax: getCartTotal() * 0.1,
      deliveryFee: 5.99,
      total: getTotalWithTax(),
      timestamp: new Date().toISOString(),
      status: "confirmed",
    };

    setFinalOrder(finalOrderData);
    setCheckoutStep("success");

    // Save order to localStorage
    const orderHistory = localStorage.getItem("orderHistory");
    const history = orderHistory ? JSON.parse(orderHistory) : [];
    history.push(finalOrderData);
    localStorage.setItem("orderHistory", JSON.stringify(history));

    // Clear cart
    setCartItems([]);
  };

  const handleOrderComplete = () => {
    setCheckoutStep(null);
    setDeliveryDetails(null);
    setPaymentDetails(null);
    setFinalOrder(null);
    setNotification({
      message: `🎉 Order confirmed! Thank you for dining with us!`,
      type: "success",
    });
    setTimeout(() => setNotification(null), 5000);
  };

  const handleBackToCart = () => {
    setCheckoutStep(null);
    setShowCart(true);
  };

  return (
    <section className="py-10 bg-soft-cream relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-metallic-gold opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-royal-maroon opacity-5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Cart Button */}
      <div className="fixed top-12 right-1 z-50">
        <button
          id="cart-button"
          onClick={() => setShowCart(!showCart)}
          className="bg-royal-maroon text-metallic-gold p-3 rounded-full shadow-soft-lg relative group hover:scale-110 transition-transform"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-burnt-orange text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Notification Toast */}
      {notification && (
        <div
          className={`fixed top-24 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-md ${
            notification.type === "success"
              ? "bg-green-500"
              : notification.type === "error"
                ? "bg-red-500"
                : "bg-blue-500"
          } text-white px-6 py-3 rounded-lg shadow-soft-lg`}
        >
          {notification.message}
        </div>
      )}

      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={showCart}
        onClose={() => setShowCart(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onUpdateInstructions={updateInstructions}
        onClearCart={clearCart}
        onProceedToCheckout={handleProceedToCheckout}
      />

      {/* Checkout Modal */}
      {checkoutStep && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="max-w-2xl w-full">
            {checkoutStep === "details" && (
              <DeliveryDetails
                onSubmit={handleDeliverySubmit}
                onBack={handleBackToCart}
              />
            )}
            {checkoutStep === "payment" && (
              <PaymentOptions
                total={getTotalWithTax()}
                onSubmit={handlePaymentSubmit}
                onBack={() => setCheckoutStep("details")}
              />
            )}
            {checkoutStep === "success" && finalOrder && (
              <OrderSuccess order={finalOrder} onClose={handleOrderComplete} />
            )}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Our <span className="text-royal-maroon">Signature</span> Creations
          </h2>
          <div className="w-96 h-1 bg-metallic-gold mx-auto mb-3"></div>
          <p className="text-lg text-charcoal max-w-2xl mx-auto">
            Handcrafted dishes that tell the story of our royal heritage and
            culinary mastery 
          </p>
        </div>

        <div
          className="relative max-w-7xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden rounded-2xl shadow-soft-lg">
            <div className="relative">
              <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl">
                <div className="h-96 md:h-full overflow-hidden rounded-l-2xl">
                  <img
                    src={dishes[currentIndex].image}
                    alt={dishes[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-2">
                    <span className="text-sm text-metallic-gold font-semibold uppercase tracking-wide">
                      {dishes[currentIndex].category}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-royal-maroon mb-4">
                    {dishes[currentIndex].name}
                  </h3>
                  <p className="text-charcoal text-lg mb-6 leading-relaxed">
                    {dishes[currentIndex].description}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-3xl font-bold text-burnt-orange">
                      {dishes[currentIndex].formattedPrice}
                    </div>
                    <div className="text-sm text-gray-500">
                      ⏱️ {dishes[currentIndex].prepTime}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-charcoal font-medium">Quantity:</span>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="w-12 text-center font-semibold text-lg">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={() => addToCart(dishes[currentIndex])}
                      className="w-full bg-royal-maroon text-metallic-gold px-6 py-3 rounded-lg font-semibold hover:bg-royal-maroon-dark transition-all shadow-md hover:shadow-xl group"
                    >
                      <span className="flex items-center justify-center space-x-2">
                        <svg
                          className="w-5 h-5 group-hover:animate-bounce"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        <span>Add to Order</span>
                      </span>
                    </button>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <label className="text-sm text-charcoal font-medium block mb-2">
                      Special Instructions:
                    </label>
                    <textarea
                      value={specialInstructions}
                      onChange={(e) => setSpecialInstructions(e.target.value)}
                      placeholder="Any dietary preferences or special requests? (e.g., less spicy, no onions, etc.)"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-metallic-gold focus:ring-2 focus:ring-metallic-gold focus:ring-opacity-20 transition-all"
                      rows="2"
                    />
                    {specialInstructions.trim() && (
                      <p className="text-xs text-green-600 mt-2">
                        ✓ Instructions will be added to your order
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-metallic-gold text-royal-maroon w-12 h-12 rounded-full flex items-center justify-center shadow-soft-lg hover:shadow-xl transition-all hover:scale-110"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-metallic-gold text-royal-maroon w-12 h-12 rounded-full flex items-center justify-center shadow-soft-lg hover:shadow-xl transition-all hover:scale-110"
          >
            ›
          </button>

          {/* Slideshow Indicator */}
          {isHovering && (
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white text-xs px-3 py-1 rounded-full">
              ⏸️ Slideshow paused
            </div>
          )}

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {dishes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-royal-maroon w-8"
                    : "bg-gray-300 w-2 hover:bg-metallic-gold"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          75% {
            transform: translateX(5px);
          }
        }
        .animate-shake {
          animation: shake 0.3s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default SignatureDishes;
