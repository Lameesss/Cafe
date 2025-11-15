"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "الرئيسية", nameEn: "Home", href: "/" },
    { name: "القائمة", nameEn: "Menu", href: "/menu" },
    { name: "عنا", nameEn: "About", href: "/about" },
    { name: "تواصل", nameEn: "Contact", href: "/contact" },
  ];

  const showBg = !isHomePage || isScrolled || isOpen;

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
        style={{
          background: showBg 
            ? 'linear-gradient(135deg, rgba(6, 76, 76, 0.97) 0%, rgba(6, 76, 76, 0.99) 50%, rgba(6, 76, 76, 0.97) 100%)'
            : 'transparent',
          backdropFilter: showBg ? 'blur(25px) saturate(180%)' : 'none',
          borderBottom: showBg 
            ? '2px solid rgba(237, 185, 138, 0.4)' 
            : 'none',
          boxShadow: showBg 
            ? '0 10px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(237, 185, 138, 0.2)' 
            : 'none'
        }}
      >
        {/* Premium Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        </div>

        <div className="relative w-full px-6 lg:px-8">
          <div className="flex items-center h-16 sm:h-18 lg:h-20">
            
            {/* Logo Section - Premium Arabic Design */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center"
            >
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                {/* Premium Logo Icon */}
                <div 
                  className="relative w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full flex items-center justify-center overflow-hidden group flex-shrink-0"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--heading-color) 0%, #d4a574 50%, var(--heading-color) 100%)',
                    boxShadow: '0 3px 12px rgba(237, 185, 138, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                  }}
                >
                  {/* Coffee Cup with Steam */}
                  <div className="relative">
                    <svg 
                      className="w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6 transform group-hover:scale-110 transition-transform duration-300" 
                      style={{ color: 'var(--bg-color)' }} 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z"/>
                    </svg>
                    
                    {/* Steam Animation */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-0.5 h-3 rounded-full opacity-40 animate-bounce"
                          style={{ 
                            backgroundColor: 'var(--bg-color)',
                            animationDelay: `${i * 0.3}s`,
                            marginLeft: `${i * 2}px`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Decorative Ring */}
                  <div 
                    className="absolute inset-1 rounded-full border opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                    style={{ borderColor: 'var(--bg-color)' }}
                  />
                </div>
                
                {/* Brand Text - Arabic Calligraphy Style */}
                <div className="flex flex-col min-w-0">
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span 
                      className="text-base sm:text-lg lg:text-xl font-bold tracking-wide whitespace-nowrap"
                      style={{ 
                        color: 'var(--heading-color)',
                        fontFamily: 'serif',
                        textShadow: '0 1px 4px rgba(237, 185, 138, 0.3)'
                      }}
                    >
                      كأس العالم
                    </span>
                  </motion.div>
                  <span 
                    className="text-[10px] sm:text-xs lg:text-sm font-bold tracking-[0.15em] uppercase whitespace-nowrap"
                    style={{ 
                      color: 'var(--text-color)',
                      opacity: 0.9
                    }}
                  >
                    World Cup Cafe
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation - Premium Style - Centered */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:flex items-center space-x-8 xl:space-x-10 absolute left-1/2 transform -translate-x-1/2"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Link
                    href={item.href}
                    className="group relative flex flex-col items-center py-3 px-4 transition-all duration-300"
                  >
                    {/* Arabic Text */}
                    <span 
                      className="text-base font-semibold mb-1 group-hover:scale-105 transition-all duration-300"
                      style={{ 
                        color: pathname === item.href ? 'var(--heading-color)' : 'var(--text-color)',
                        opacity: pathname === item.href ? 1 : 0.85,
                        textShadow: pathname === item.href ? '0 2px 8px rgba(237, 185, 138, 0.3)' : 'none'
                      }}
                    >
                      {item.name}
                    </span>
                    
                    {/* English Text */}
                    <span 
                      className="text-xs font-bold uppercase tracking-wider group-hover:scale-105 transition-all duration-300"
                      style={{ 
                        color: pathname === item.href ? 'var(--heading-color)' : 'var(--text-color)',
                        opacity: pathname === item.href ? 0.9 : 0.6
                      }}
                    >
                      {item.nameEn}
                    </span>

                    {/* Active Indicator */}
                    <motion.div 
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 rounded-full"
                      style={{
                        width: pathname === item.href ? '100%' : '0%',
                        height: '3px',
                        backgroundColor: 'var(--heading-color)',
                        boxShadow: pathname === item.href ? '0 2px 12px rgba(237, 185, 138, 0.6)' : 'none'
                      }}
                      animate={{
                        width: pathname === item.href ? '100%' : '0%'
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Hover Effect */}
                    <div 
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-300"
                      style={{
                        width: pathname === item.href ? '0%' : '80%',
                        backgroundColor: 'var(--heading-color)'
                      }}
                    />

                    {/* Premium Glow Effect on Hover */}
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                         style={{ backgroundColor: 'var(--heading-color)' }} />
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Side Actions */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center space-x-3 ml-auto"
            >
              {/* Premium Reservation Button - Desktop */}
              <div className="hidden lg:block">
                <Link
                  href="/contact"
                  className="group relative inline-flex flex-col items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-500 rounded-full overflow-hidden whitespace-nowrap"
                  style={{
                    background: 'linear-gradient(135deg, var(--heading-color) 0%, #d4a574 30%, #c49660 70%, var(--heading-color) 100%)',
                    color: 'var(--bg-color)',
                    boxShadow: '0 4px 15px rgba(237, 185, 138, 0.4), 0 0 0 1px rgba(237, 185, 138, 0.3)',
                    border: '1px solid rgba(237, 185, 138, 0.2)',
                    minWidth: '110px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-1px) scale(1.03)';
                    e.target.style.boxShadow = '0 8px 25px rgba(237, 185, 138, 0.6), 0 0 0 2px rgba(237, 185, 138, 0.5)';
                    e.target.style.background = 'linear-gradient(135deg, #d4a574 0%, var(--heading-color) 30%, #d4a574 70%, var(--heading-color) 100%)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = '0 4px 15px rgba(237, 185, 138, 0.4), 0 0 0 1px rgba(237, 185, 138, 0.3)';
                    e.target.style.background = 'linear-gradient(135deg, var(--heading-color) 0%, #d4a574 30%, #c49660 70%, var(--heading-color) 100%)';
                  }}
                >
                  {/* Arabic Text */}
                  <span className="relative z-10 text-xs font-bold leading-tight">احجز طاولة</span>
                  {/* English Text */}
                  <span className="relative z-10 text-[10px] font-semibold opacity-85 mt-0.5 leading-tight tracking-wide">RESERVE</span>
                  
                  {/* Luxury Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-25 transform -skew-x-12 group-hover:translate-x-full transition-all duration-800" />
                  
                  {/* Premium Inner Glow */}
                  <div className="absolute inset-0.5 rounded-full bg-gradient-radial from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Luxury Border Glow */}
                  <div className="absolute inset-0 rounded-full border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </div>

              {/* Premium Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden relative w-12 h-12 sm:w-14 sm:h-14 rounded-full flex flex-col items-center justify-center transition-all duration-300 group flex-shrink-0"
                style={{
                  background: showBg 
                    ? 'linear-gradient(135deg, rgba(237, 185, 138, 0.15) 0%, rgba(237, 185, 138, 0.1) 100%)' 
                    : 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(237, 185, 138, 0.3)',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                }}
              >
                {/* Hamburger Lines with Premium Animation */}
                <motion.div
                  animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="w-5 h-0.5 sm:w-6 sm:h-0.5 rounded-full transition-all duration-300"
                  style={{ backgroundColor: 'var(--heading-color)' }}
                />
                <motion.div
                  animate={isOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
                  className="w-5 h-0.5 sm:w-6 sm:h-0.5 rounded-full mt-1.5 transition-all duration-300"
                  style={{ backgroundColor: 'var(--heading-color)' }}
                />
                <motion.div
                  animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="w-5 h-0.5 sm:w-6 sm:h-0.5 rounded-full mt-1.5 transition-all duration-300"
                  style={{ backgroundColor: 'var(--heading-color)' }}
                />
                
                {/* Button Glow Effect */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                     style={{ backgroundColor: 'var(--heading-color)' }} />
              </button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Premium Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="lg:hidden fixed inset-0 z-40 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(6, 76, 76, 0.98) 0%, rgba(6, 76, 76, 0.95) 100%)',
              backdropFilter: 'blur(25px) saturate(180%)',
              borderBottom: '2px solid rgba(237, 185, 138, 0.4)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)'
            }}
          >
            {/* Decorative Top Line */}
            <div 
              className="h-px"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(237, 185, 138, 0.8) 50%, transparent 100%)'
              }}
            />

            <div className="flex flex-col h-full pt-20 pb-8 px-6 justify-center">
              {/* Navigation Links */}
              <div className="space-y-2 mb-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between py-5 px-6 rounded-xl transition-all duration-300"
                      style={{
                        backgroundColor: pathname === item.href 
                          ? 'rgba(237, 185, 138, 0.15)' 
                          : 'transparent',
                        border: pathname === item.href 
                          ? '2px solid rgba(237, 185, 138, 0.3)' 
                          : '2px solid transparent'
                      }}
                    >
                      <div className="flex flex-col">
                        <span 
                          className="text-xl font-semibold group-hover:scale-105 transition-transform duration-300"
                          style={{ 
                            color: pathname === item.href ? 'var(--heading-color)' : 'var(--text-color)',
                            textShadow: pathname === item.href ? '0 2px 8px rgba(237, 185, 138, 0.3)' : 'none'
                          }}
                        >
                          {item.name}
                        </span>
                        <span 
                          className="text-sm font-bold uppercase tracking-wider opacity-70 mt-1"
                          style={{ color: 'var(--text-color)' }}
                        >
                          {item.nameEn}
                        </span>
                      </div>
                      
                      {/* Arrow Icon */}
                      <svg 
                        className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" 
                        style={{ color: 'var(--heading-color)' }} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Reservation Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="px-8"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="group relative inline-flex flex-col items-center justify-center w-full py-4 px-6 rounded-2xl font-bold uppercase tracking-wider transition-all duration-500 overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, var(--heading-color) 0%, #d4a574 30%, #c49660 70%, var(--heading-color) 100%)',
                    color: 'var(--bg-color)',
                    boxShadow: '0 6px 20px rgba(237, 185, 138, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 0 0 1px rgba(237, 185, 138, 0.3)',
                    border: '2px solid rgba(237, 185, 138, 0.3)'
                  }}
                  onTouchStart={(e) => {
                    e.target.style.transform = 'scale(0.98)';
                    e.target.style.boxShadow = '0 4px 15px rgba(237, 185, 138, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.5)';
                  }}
                  onTouchEnd={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 6px 20px rgba(237, 185, 138, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 0 0 1px rgba(237, 185, 138, 0.3)';
                  }}
                >
                  {/* Arabic Text */}
                  <span className="relative z-10 text-lg font-bold leading-tight">احجز طاولة</span>
                  {/* English Text */}
                  <span className="relative z-10 text-sm font-semibold opacity-90 mt-1 leading-tight tracking-wide">RESERVE YOUR TABLE</span>
                  
                  {/* Mobile Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-active:opacity-30 transform -skew-x-12 group-active:translate-x-full transition-all duration-600" />
                  
                  {/* Premium Mobile Glow */}
                  <div className="absolute inset-1 rounded-xl bg-gradient-radial from-white/15 to-transparent opacity-0 group-active:opacity-100 transition-opacity duration-200" />
                  
                  {/* Luxury Mobile Border */}
                  <div className="absolute inset-0 rounded-2xl border border-white/20 opacity-0 group-active:opacity-100 transition-opacity duration-200" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
