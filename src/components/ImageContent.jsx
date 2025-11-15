"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ImageContent() {
  const gradientTextStyle = {
    background:
      "linear-gradient(135deg, var(--heading-color) 0%, #d4a574 30%, #c49660 70%, var(--heading-color) 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  const gradientBorderStyle = {
    background:
      "linear-gradient(135deg, var(--heading-color) 0%, #d4a574 30%, #c49660 70%, var(--heading-color) 100%)",
  };

  return (
    <section className="w-full" style={{ backgroundColor: "var(--bg-color)" }}>
      {/* Section 1: Image Left, Text Right */}
      <div className="w-full py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 lg:gap-3"
          >
            <div className="flex items-center justify-between gap-4">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-xs sm:text-sm font-bold uppercase tracking-[0.35em]"
                style={gradientTextStyle}
              >
                WORLD CUP CAFE
              </motion.h2>

              <span
                className="hidden sm:inline-block text-[11px] font-semibold tracking-[0.3em] uppercase"
                style={{ color: "var(--text-color)", opacity: 0.75 }}
              >
                WORLD CUP
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
              style={gradientTextStyle}
            >
              World Cup Rebranding
            </motion.h1>

            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="text-base sm:text-lg font-semibold"
              style={gradientTextStyle}
            >
              A New Chapter of Coffee Elegance & Simplicity
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="text-sm sm:text-base lg:text-lg max-w-2xl"
              style={{ color: "var(--text-color)", opacity: 0.9 }}
            >
              From handcrafted Arabic coffee to golden details in every cup, our
              new visual identity reflects the warmth, elegance, and simplicity
              of World Cup Cafe.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Section 2: Image Right, Text Left */}
      <div className="w-full pb-10">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative rounded-[32px] p-[2px]"
            style={gradientBorderStyle}
          >
            <div
              className="relative w-full h-[260px] sm:h-[320px] lg:h-[380px] rounded-[30px] overflow-hidden"
              style={{ backgroundColor: "var(--bg-color)" }}
            >
              <Image
                src="/images/000.png"
                alt="World Cup Cafe pastry branding"
                fill
                className="object-cover rounded-[30px]"
                sizes="(max-width: 1024px) 100vw, 100vw"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section 3: Image Left, Text Right */}
      <div className="w-full pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="relative rounded-[32px] p-[2px]"
              style={gradientBorderStyle}
            >
              <div
                className="relative w-full h-[260px] sm:h-[320px] lg:h-[340px] rounded-[30px] overflow-hidden"
                style={{ backgroundColor: "var(--bg-color)" }}
              >
                <Image
                  src="/images/image33.jpg"
                  alt="World Cup Cafe golden coffee cup"
                  fill
                  className="object-cover rounded-[30px]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative rounded-[32px] p-[2px]"
              style={gradientBorderStyle}
            >
              <div
                className="relative w-full h-[260px] sm:h-[320px] lg:h-[340px] rounded-[30px] overflow-hidden"
                style={{ backgroundColor: "var(--bg-color)" }}
              >
                <Image
                  src="/images/product1.png"
                  alt="World Cup Cafe exterior signage"
                  fill
                  className="object-cover rounded-[30px]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
