// src/pages/Signup.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Phone, Eye, EyeOff, UserPlus, Check } from 'lucide-react';
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
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
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
      newErrors.password = 'Password must contain uppercase, lowercase, and number';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes, navigate to home on successful signup
      navigate('/');
    } catch (error) {
      setErrors({ submit: 'Signup failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  // Password strength indicator
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
      subtitle="Create an account for exclusive dining privileges"
    >
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Full Name Field */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-soft-cream">
            <User className="w-4 h-4 mr-2" />
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-soft-cream/5 border ${
              errors.fullName ? 'border-red-500' : 'border-metallic-gold/20'
            } rounded-lg text-soft-cream placeholder-soft-cream/50 focus:outline-none focus:ring-2 focus:ring-metallic-gold/50 focus:border-transparent transition-all`}
            placeholder="John Smith"
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-400">{errors.fullName}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-soft-cream">
            <Mail className="w-4 h-4 mr-2" />
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-soft-cream/5 border ${
              errors.email ? 'border-red-500' : 'border-metallic-gold/20'
            } rounded-lg text-soft-cream placeholder-soft-cream/50 focus:outline-none focus:ring-2 focus:ring-metallic-gold/50 focus:border-transparent transition-all`}
            placeholder="royalguest@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email}</p>
          )}
        </div>

        {/* Phone Field */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-soft-cream">
            <Phone className="w-4 h-4 mr-2" />
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-soft-cream/5 border ${
              errors.phone ? 'border-red-500' : 'border-metallic-gold/20'
            } rounded-lg text-soft-cream placeholder-soft-cream/50 focus:outline-none focus:ring-2 focus:ring-metallic-gold/50 focus:border-transparent transition-all`}
            placeholder="+1 (555) 123-4567"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-soft-cream">
            <Lock className="w-4 h-4 mr-2" />
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-soft-cream/5 border ${
                errors.password ? 'border-red-500' : 'border-metallic-gold/20'
              } rounded-lg text-soft-cream placeholder-soft-cream/50 focus:outline-none focus:ring-2 focus:ring-metallic-gold/50 focus:border-transparent transition-all pr-12`}
              placeholder="Create a strong password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-soft-cream/50 hover:text-metallic-gold transition-colors"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          
          {/* Password Strength */}
          {formData.password && (
            <div className="space-y-2">
              <div className="h-2 bg-soft-cream/10 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-500 ${
                    passwordStrength >= 75 ? 'bg-green-500' :
                    passwordStrength >= 50 ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`}
                  style={{ width: `${passwordStrength}%` }}
                />
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-soft-cream/70">
                {[
                  '8+ characters',
                  'Lowercase letter',
                  'Uppercase letter',
                  'Number'
                ].map((req, index) => {
                  const passed = [
                    formData.password.length >= 8,
                    /[a-z]/.test(formData.password),
                    /[A-Z]/.test(formData.password),
                    /\d/.test(formData.password)
                  ][index];
                  
                  return (
                    <div key={index} className="flex items-center space-x-1">
                      {passed ? (
                        <Check className="w-3 h-3 text-green-500" />
                      ) : (
                        <div className="w-3 h-3 border border-soft-cream/30 rounded-full"></div>
                      )}
                      <span className={passed ? 'text-green-400' : ''}>{req}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          
          {errors.password && (
            <p className="mt-1 text-sm text-red-400">{errors.password}</p>
          )}
        </div>

        {/* Confirm Password Field */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-soft-cream">
            <Lock className="w-4 h-4 mr-2" />
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-soft-cream/5 border ${
                errors.confirmPassword ? 'border-red-500' : 'border-metallic-gold/20'
              } rounded-lg text-soft-cream placeholder-soft-cream/50 focus:outline-none focus:ring-2 focus:ring-metallic-gold/50 focus:border-transparent transition-all pr-12`}
              placeholder="Re-enter your password"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-soft-cream/50 hover:text-metallic-gold transition-colors"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-400">{errors.confirmPassword}</p>
          )}
        </div>

        {/* Terms Agreement */}
        <div className="space-y-2">
          <label className="flex items-start space-x-3 cursor-pointer">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="mt-1 w-4 h-4 text-metallic-gold bg-soft-cream/5 border-metallic-gold/50 rounded focus:ring-metallic-gold focus:ring-2"
            />
            <span className="text-sm text-soft-cream/70">
              I agree to the{' '}
              <Link to="/terms" className="text-metallic-gold hover:text-burnt-orange transition-colors">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-metallic-gold hover:text-burnt-orange transition-colors">
                Privacy Policy
              </Link>
            </span>
          </label>
          {errors.agreeToTerms && (
            <p className="mt-1 text-sm text-red-400">{errors.agreeToTerms}</p>
          )}
        </div>

        {/* Submit Error */}
        {errors.submit && (
          <div className="p-3 bg-red-900/20 border border-red-500/50 rounded-lg">
            <p className="text-sm text-red-400 text-center">{errors.submit}</p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 px-4 bg-gradient-to-r from-metallic-gold to-burnt-orange text-charcoal font-semibold rounded-lg hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-charcoal border-t-transparent rounded-full animate-spin"></div>
              <span>Creating Account...</span>
            </>
          ) : (
            <>
              <UserPlus className="w-5 h-5" />
              <span>Create Account</span>
            </>
          )}
        </button>

        {/* Login Link */}
        <p className="text-center text-soft-cream/70 text-sm">
          Already have an account?{' '}
          <Link
            to="/login"
            className="text-metallic-gold hover:text-burnt-orange font-semibold transition-colors"
          >
            Sign in
          </Link>
        </p>

        {/* Benefits */}
        <div className="pt-4 border-t border-metallic-gold/20">
          <h4 className="text-sm font-semibold text-metallic-gold mb-2">Benefits of joining:</h4>
          <ul className="space-y-1 text-sm text-soft-cream/70">
            <li className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Priority table reservations</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Exclusive member discounts</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Early access to special events</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Personalized dining recommendations</span>
            </li>
          </ul>
        </div>
      </motion.form>
    </AuthLayout>
  );
};

export default Signup;