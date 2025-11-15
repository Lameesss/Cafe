"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  // Premium luxury animation variants
  const luxuryFadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const elegantSlideUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const sophisticatedScale = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      style={{ backgroundColor: "var(--bg-color)" }}
    >
      {/* Premium Background with Overlays Only */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full h-full"
        >
          {/* Black overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-black/40" />
          {/* Premium gradient overlay matching navbar style */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(6, 76, 76, 0.75) 0%, rgba(6, 76, 76, 0.65) 30%, rgba(6, 76, 76, 0.55) 70%, rgba(6, 76, 76, 0.75) 100%)",
            }}
          />
          {/* Golden accent overlay for premium feel */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(237, 185, 138, 0.12) 0%, transparent 60%)",
            }}
          />
        </motion.div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full w-full px-8 lg:px-12 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col items-center justify-center h-full space-y-8">
            {/* Product Image - Mobile */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={sophisticatedScale}
              className="relative h-[350px] w-full flex items-center justify-center"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/product.png"
                  alt="World Cup Cafe Premium Arabic Coffee"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>

            {/* Simple Quote Content - Mobile */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={luxuryFadeIn}
              className="space-y-6 text-center"
              style={{ color: "var(--text-color)" }}
            >
              {/* Arabic Quote */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="text-lg font-light"
                style={{ color: "var(--heading-color)" }}
              >
                كل اشرب زر
              </motion.p>

              {/* English Quote */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl sm:text-4xl font-bold uppercase tracking-[0.3em]"
                style={{
                  color: "var(--text-color)",
                  textShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                }}
              >
                EAT DRINK VISIT
              </motion.h1>

              {/* Menu Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
              >
                <Link
                  href="/menu"
                  className="group relative inline-block px-10 py-4 text-xs font-bold uppercase tracking-[0.3em] transition-all duration-500 overflow-hidden"
                  style={{
                    border: "2px solid rgba(237, 185, 138, 0.4)",
                    color: "var(--heading-color)",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = "var(--heading-color)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = "rgba(237, 185, 138, 0.4)";
                  }}
                >
                  <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                    MENU
                  </span>
                  <div
                    className="absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--heading-color) 0%, #d4a574 30%, #c49660 70%, var(--heading-color) 100%)",
                    }}
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-2 gap-16 items-center">
            {/* Left Side - Simple Quote Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={elegantSlideUp}
              className="space-y-8"
              style={{ color: "var(--text-color)" }}
            >
              {/* Arabic Quote */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1.2 }}
                className="text-xl font-light"
                style={{ color: "var(--heading-color)" }}
              >
                كل اشرب زر
              </motion.p>

              {/* English Quote */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.8,
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-6xl xl:text-7xl font-bold uppercase leading-[1.1] tracking-[0.3em]"
                style={{
                  color: "var(--text-color)",
                  textShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
                }}
              >
                EAT DRINK VISIT
              </motion.h1>

              {/* Menu Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.8 }}
              >
                <Link
                  href="/menu"
                  className="group relative inline-block px-12 py-4 text-xs font-bold uppercase tracking-[0.3em] transition-all duration-500 overflow-hidden"
                  style={{
                    border: "2px solid rgba(237, 185, 138, 0.4)",
                    color: "var(--heading-color)",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = "var(--heading-color)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = "rgba(237, 185, 138, 0.4)";
                  }}
                >
                  <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                    MENU
                  </span>
                  <div
                    className="absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--heading-color) 0%, #d4a574 30%, #c49660 70%, var(--heading-color) 100%)",
                    }}
                  />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Side - Product Image */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={sophisticatedScale}
              className="relative h-[700px] flex items-center justify-center"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/product.png"
                  alt="World Cup Cafe Premium Arabic Coffee"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
