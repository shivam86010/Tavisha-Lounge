// src/pages/Signup.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Phone, Eye, EyeOff, UserPlus, Check, ArrowRight } from 'lucide-react';
import AuthLayout from '../../Component/Layout/AuthLayout';

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Include uppercase, lowercase, and number';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to terms';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    try {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      navigate('/');
    } catch (error) {
      setErrors({ submit: 'Signup failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const getPasswordStrength = (password) => {
    if (!password) return 0;
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[a-z]/.test(password)) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/\d/.test(password)) strength += 25;
    return strength;
  };

  const passwordStrength = getPasswordStrength(formData.password);

  return (
    <AuthLayout
      title="Join Our Royal Family"
      subtitle="Create your account in seconds"
    >
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        onSubmit={handleSubmit}
        className="space-y-4 max-h-[calc(100vh-250px)]  pr-2"
      >
        {/* Form Grid - Compact Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Name */}
          <div className="space-y-1">
            <label className="flex items-center text-xs font-medium text-soft-cream mb-1">
              <User className="w-3 h-3 mr-1" />
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full px-3 py-2 text-sm bg-soft-cream/5 border ${
                errors.fullName ? 'border-red-500' : 'border-metallic-gold/20'
              } rounded-lg text-soft-cream placeholder-soft-cream/50 focus:outline-none focus:ring-1 focus:ring-metallic-gold/50 focus:border-transparent transition-all`}
              placeholder="John Smith"
            />
            {errors.fullName && (
              <p className="text-xs text-red-400 mt-0.5">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label className="flex items-center text-xs font-medium text-soft-cream mb-1">
              <Mail className="w-3 h-3 mr-1" />
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 text-sm bg-soft-cream/5 border ${
                errors.email ? 'border-red-500' : 'border-metallic-gold/20'
              } rounded-lg text-soft-cream placeholder-soft-cream/50 focus:outline-none focus:ring-1 focus:ring-metallic-gold/50 focus:border-transparent transition-all`}
              placeholder="guest@example.com"
            />
            {errors.email && (
              <p className="text-xs text-red-400 mt-0.5">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-1">
            <label className="flex items-center text-xs font-medium text-soft-cream mb-1">
              <Phone className="w-3 h-3 mr-1" />
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-3 py-2 text-sm bg-soft-cream/5 border ${
                errors.phone ? 'border-red-500' : 'border-metallic-gold/20'
              } rounded-lg text-soft-cream placeholder-soft-cream/50 focus:outline-none focus:ring-1 focus:ring-metallic-gold/50 focus:border-transparent transition-all`}
              placeholder="123-456-7890"
            />
            {errors.phone && (
              <p className="text-xs text-red-400 mt-0.5">{errors.phone}</p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-1">
            <label className="flex items-center text-xs font-medium text-soft-cream mb-1">
              <Lock className="w-3 h-3 mr-1" />
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-3 py-2 text-sm bg-soft-cream/5 border ${
                  errors.password ? 'border-red-500' : 'border-metallic-gold/20'
                } rounded-lg text-soft-cream placeholder-soft-cream/50 focus:outline-none focus:ring-1 focus:ring-metallic-gold/50 focus:border-transparent transition-all pr-10`}
                placeholder="Create password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-soft-cream/40 hover:text-metallic-gold transition-colors"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-xs text-red-400 mt-0.5">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="space-y-1">
            <label className="flex items-center text-xs font-medium text-soft-cream mb-1">
              <Lock className="w-3 h-3 mr-1" />
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full px-3 py-2 text-sm bg-soft-cream/5 border ${
                  errors.confirmPassword ? 'border-red-500' : 'border-metallic-gold/20'
                } rounded-lg text-soft-cream placeholder-soft-cream/50 focus:outline-none focus:ring-1 focus:ring-metallic-gold/50 focus:border-transparent transition-all pr-10`}
                placeholder="Confirm password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-soft-cream/40 hover:text-metallic-gold transition-colors"
              >
                {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-xs text-red-400 mt-0.5">{errors.confirmPassword}</p>
            )}
          </div>
        </div>

        {/* Password Strength Indicator */}
        {formData.password && (
          <div className="mt-2 p-3 bg-soft-cream/5 rounded-lg border border-metallic-gold/10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-soft-cream">Password Strength</span>
              <span className="text-xs font-medium text-metallic-gold">{passwordStrength}%</span>
            </div>
            <div className="h-1.5 bg-soft-cream/10 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-500 ${
                  passwordStrength >= 75 ? 'bg-green-500' :
                  passwordStrength >= 50 ? 'bg-yellow-500' :
                  'bg-red-500'
                }`}
                style={{ width: `${passwordStrength}%` }}
              />
            </div>
            <div className="grid grid-cols-2 gap-1 mt-2 text-[10px] text-soft-cream/60">
              {[
                { label: '8+ characters', check: formData.password.length >= 8 },
                { label: 'Lowercase letter', check: /[a-z]/.test(formData.password) },
                { label: 'Uppercase letter', check: /[A-Z]/.test(formData.password) },
                { label: 'Number', check: /\d/.test(formData.password) }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-1">
                  {item.check ? (
                    <Check className="w-3 h-3 text-green-500" />
                  ) : (
                    <div className="w-3 h-3 border border-soft-cream/20 rounded-full"></div>
                  )}
                  <span className={item.check ? 'text-green-400' : ''}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Terms Agreement */}
        <div className="pt-2">
          <label className="flex items-start space-x-2 cursor-pointer">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="mt-0.5 w-4 h-4 text-metallic-gold bg-soft-cream/5 border-metallic-gold/30 rounded focus:ring-1 focus:ring-metallic-gold"
            />
            <span className="text-xs text-soft-cream/70 leading-tight">
              I agree to the{' '}
              <Link to="/terms" className="text-metallic-gold hover:text-burnt-orange transition-colors underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-metallic-gold hover:text-burnt-orange transition-colors underline">
                Privacy Policy
              </Link>
            </span>
          </label>
          {errors.agreeToTerms && (
            <p className="text-xs text-red-400 mt-1">{errors.agreeToTerms}</p>
          )}
        </div>

        {/* Submit Error */}
        {errors.submit && (
          <div className="p-2 bg-red-900/20 border border-red-500/50 rounded-lg">
            <p className="text-xs text-red-400 text-center">{errors.submit}</p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 bg-gradient-to-r from-metallic-gold to-burnt-orange text-charcoal font-semibold rounded-lg hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-charcoal border-t-transparent rounded-full animate-spin"></div>
              <span className="text-sm">Creating Account...</span>
            </>
          ) : (
            <>
              <UserPlus className="w-4 h-4" />
              <span className="text-sm">Create Account</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </>
          )}
        </button>

        {/* Login Link */}
        <div className="text-center pt-4 border-t border-metallic-gold/10">
          <p className="text-xs text-soft-cream/70">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-metallic-gold hover:text-burnt-orange font-semibold transition-colors underline"
            >
              Sign in here
            </Link>
          </p>
        </div>

        {/* Social Login - Compact */}
        <div className="pt-2">
          <p className="text-xs text-soft-cream/50 text-center mb-2">Or sign up with</p>
          <div className="flex justify-center space-x-3">
            <button
              type="button"
              className="p-2 bg-soft-cream/5 border border-metallic-gold/20 rounded-lg hover:bg-soft-cream/10 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </button>
            <button
              type="button"
              className="p-2 bg-soft-cream/5 border border-metallic-gold/20 rounded-lg hover:bg-soft-cream/10 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"/>
                <path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"/>
                <path fill="#4A90E2" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"/>
                <path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.93 11.93 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z"/>
              </svg>
            </button>
          </div>
        </div>

      </motion.form>
    </AuthLayout>
  );
};

export default Signup;