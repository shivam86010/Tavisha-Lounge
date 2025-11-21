// // ContactFooter.jsx
// import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Heart, 
//   MapPin, 
//   Phone, 
//   Mail, 
//   Clock,
//   Instagram,
//   Facebook,
//   Twitter,
//   ArrowRight
// } from 'lucide-react';

// const ContactFooter = () => {
//   const socialLinks = [
//     { icon: Instagram, href: '#', label: 'Instagram' },
//     { icon: Facebook, href: '#', label: 'Facebook' },
//     { icon: Twitter, href: '#', label: 'Twitter' }
//   ];

//   const quickLinks = [
//     { label: 'Make Reservation', href: '#reservation' },
//     { label: 'View Menu', href: '#menu' },
//     { label: 'Special Events', href: '#events' },
//     { label: 'About Us', href: '#about' }
//   ];

//   return (
//     <footer className="bg-gradient-to-br from-royal-maroon via-royal-maroon/95 to-charcoal text-soft-cream">
//       <div className="max-w-7xl mx-auto px-4 py-16">
//         <div className="grid lg:grid-cols-2 gap-12 items-start">
//           {/* Left Column - Mission */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             <div>
//               <motion.div
//                 initial={{ scale: 0 }}
//                 whileInView={{ scale: 1 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 className="inline-flex items-center gap-3 mb-6"
//               >
//                 <div className="p-3 bg-metallic-gold/20 rounded-2xl">
//                   <Heart className="w-8 h-8 text-metallic-gold" />
//                 </div>
//                 <h2 className="text-4xl font-serif font-light">
//                   Let's Make Your Next Meal Special
//                 </h2>
//               </motion.div>

//               <div className="space-y-4 text-lg font-sans text-soft-cream/80 leading-relaxed">
//                 <p>If you're nearby, drop in.</p>
//                 <p>If you're planning something special, call us.</p>
//                 <p>If you just want to say hello, we're listening.</p>
//               </div>
//             </div>

//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="bg-metallic-gold/10 rounded-2xl p-6 border border-metallic-gold/20"
//             >
//               <p className="text-2xl font-serif text-metallic-gold italic text-center">
//                 Tavisha Lounge — Where Royal Taste Meets Warm Hospitality.
//               </p>
//             </motion.div>

//             {/* Social Links */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//               className="flex gap-4"
//             >
//               {socialLinks.map((social, index) => {
//                 const Icon = social.icon;
//                 return (
//                   <motion.a
//                     key={index}
//                     href={social.href}
//                     className="w-12 h-12 bg-metallic-gold/10 rounded-xl flex items-center justify-center hover:bg-metallic-gold/20 transition-all duration-300 group"
//                     whileHover={{ scale: 1.1, y: -2 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <Icon className="w-5 h-5 text-metallic-gold group-hover:scale-110 transition-transform" />
//                   </motion.a>
//                 );
//               })}
//             </motion.div>
//           </motion.div>

//           {/* Right Column - Action Buttons & Info */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             {/* Action Buttons */}
//             <div className="grid sm:grid-cols-2 gap-6">
//               <motion.button
//                 className="group relative bg-transparent border-2 border-metallic-gold text-metallic-gold font-sans font-semibold py-4 px-6 rounded-xl hover:bg-metallic-gold hover:text-royal-maroon transition-all duration-500 overflow-hidden"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <span className="relative z-10 flex items-center justify-center gap-3">
//                   Reserve a Table
//                   <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                 </span>
//                 <div className="absolute inset-0 bg-metallic-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
//               </motion.button>

//               <motion.button
//                 className="group relative bg-transparent border-2 border-soft-cream text-soft-cream font-sans font-semibold py-4 px-6 rounded-xl hover:bg-soft-cream hover:text-royal-maroon transition-all duration-500 overflow-hidden"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <span className="relative z-10 flex items-center justify-center gap-3">
//                   Explore Menu
//                   <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                 </span>
//                 <div className="absolute inset-0 bg-soft-cream transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
//               </motion.button>
//             </div>

//             {/* Contact Info */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="space-y-4"
//             >
//               <div className="flex items-center gap-4 p-4 bg-metallic-gold/5 rounded-xl border border-metallic-gold/10">
//                 <MapPin className="w-5 h-5 text-metallic-gold" />
//                 <div>
//                   <p className="font-sans font-semibold">Royal Heritage Road</p>
//                   <p className="font-sans text-soft-cream/70 text-sm">City Center</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4 p-4 bg-metallic-gold/5 rounded-xl border border-metallic-gold/10">
//                 <Phone className="w-5 h-5 text-metallic-gold" />
//                 <div>
//                   <p className="font-sans font-semibold">+91 9XXXX XXXXX</p>
//                   <p className="font-sans text-soft-cream/70 text-sm">10 AM - 11 PM</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4 p-4 bg-metallic-gold/5 rounded-xl border border-metallic-gold/10">
//                 <Mail className="w-5 h-5 text-metallic-gold" />
//                 <div>
//                   <p className="font-sans font-semibold">hello@tavishalounge.com</p>
//                   <p className="font-sans text-soft-cream/70 text-sm">Quick Response</p>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Quick Links */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//               className="flex flex-wrap gap-4"
//             >
//               {quickLinks.map((link, index) => (
//                 <motion.a
//                   key={index}
//                   href={link.href}
//                   className="font-sans text-soft-cream/70 hover:text-metallic-gold transition-colors duration-300 text-sm"
//                   whileHover={{ x: 5 }}
//                 >
//                   {link.label}
//                 </motion.a>
//               ))}
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Bottom Bar */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.8 }}
//           viewport={{ once: true }}
//           className="border-t border-metallic-gold/20 mt-12 pt-8 text-center"
//         >
//           <p className="font-sans text-soft-cream/60 text-sm">
//             © 2024 Tavisha Lounge. Crafted with ♥ for royal experiences.
//           </p>
//         </motion.div>
//       </div>
//     </footer>
//   );
// };

// export default ContactFooter;


// ContactFooter.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Instagram,
  Facebook,
  Twitter,
  ArrowRight,
  Crown
} from 'lucide-react';

const ContactFooter = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram', color: 'from-pink-500 to-pink-600' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'from-blue-500 to-blue-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'from-sky-500 to-sky-600' }
  ];

  const quickLinks = [
    { label: 'Make Reservation', href: '#reservation' },
    { label: 'View Menu', href: '#menu' },
    { label: 'Special Events', href: '#events' },
    { label: 'About Us', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Careers', href: '#careers' }
  ];

  const contactInfo = [
    { icon: MapPin, text: 'Royal Heritage Road, City Center', subtext: 'Easily accessible location' },
    { icon: Phone, text: '+91 9XXXX XXXXX', subtext: '10 AM - 11 PM, All days' },
    { icon: Mail, text: 'hello@tavishalounge.com', subtext: 'Quick response guaranteed' },
    { icon: Clock, text: 'Mon-Sun: 10AM - 11PM', subtext: 'Weekends until midnight' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          {/* Left Column - Brand & Mission */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-3 mb-6"
              >
                <div className="p-3 bg-amber-500/20 rounded-2xl">
                  <Crown className="w-8 h-8 text-amber-300" />
                </div>
                <h2 className="text-4xl font-serif font-light">
                  Let's Make Your Next Meal Special
                </h2>
              </motion.div>

              <div className="space-y-4 text-lg font-sans text-slate-300 leading-relaxed">
                <p>If you're nearby, drop in for an unforgettable experience.</p>
                <p>If you're planning something special, our team is ready to assist.</p>
                <p>If you just want to say hello, we're always listening.</p>
              </div>
            </div>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-amber-500/10 rounded-2xl p-6 border border-amber-500/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <Heart className="w-6 h-6 text-amber-300" />
                <p className="text-2xl font-serif text-amber-300 italic">
                  Tavisha Lounge
                </p>
              </div>
              <p className="font-sans text-slate-300">
                Where Royal Taste Meets Warm Hospitality. Every guest is family, every meal is a celebration.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-4"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="group relative"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Column - Actions & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Action Buttons */}
            <div className="grid sm:grid-cols-2 gap-6">
              <motion.button
                className="group relative bg-amber-500 text-white font-sans font-semibold py-4 px-6 rounded-xl hover:bg-amber-400 transition-all duration-500 overflow-hidden shadow-lg shadow-amber-500/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Reserve a Table
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                className="group relative bg-transparent border-2 border-slate-600 text-slate-300 font-sans font-semibold py-4 px-6 rounded-xl hover:border-amber-300 hover:text-amber-300 transition-all duration-500"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Explore Menu
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="font-serif text-xl text-white mb-4">Contact Information</h3>
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-amber-500/30 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <Icon className="w-5 h-5 text-amber-300" />
                    <div>
                      <p className="font-sans font-semibold text-white">{info.text}</p>
                      <p className="font-sans text-slate-400 text-sm">{info.subtext}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="font-serif text-xl text-white mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="font-sans text-slate-400 hover:text-amber-300 transition-colors duration-300 text-sm py-1"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-slate-700 pt-8 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-slate-400 text-sm">
              © 2024 Tavisha Lounge. Crafted with ♥ for royal experiences.
            </p>
            <div className="flex items-center gap-4 text-slate-400">
              <span className="font-sans text-sm">Privacy Policy</span>
              <span className="font-sans text-sm">Terms of Service</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default ContactFooter;