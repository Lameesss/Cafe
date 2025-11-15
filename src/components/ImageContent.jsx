"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ImageContent() {
  const gradientTextStyle = {
    background:
      "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  const gradientBorderStyle = {
    background:
      "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
  };

  return (
    <section
      className="w-full py-16 lg:py-20"
      style={{ backgroundColor: "var(--bg-color)" }}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16 max-w-5xl mx-auto"
        >
          {/* Main Heading with Gradient */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl lg:text-5xl xl:text-6xl font-bold uppercase leading-[1.1] tracking-[0.2em] mb-4"
            style={{
              ...gradientTextStyle,
              textShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
            }}
          >
            PREMIUM ARABIC
            <br />
            <span className="font-light italic normal-case tracking-normal">Coffee Experience</span>
          </motion.h2>

          {/* Subtitle with Animated White Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-3 mb-6"
          >
            {/* Desktop Layout - Text and Line Side by Side */}
            <div className="hidden sm:flex items-center space-x-4">
              <p 
                className="text-lg lg:text-xl font-light whitespace-nowrap"
                style={{
                  background: "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontFamily: "serif",
                }}
              >
                حيث يلتقي التراث بالرفاهية العصرية
              </p>
              <motion.div
                className="flex-1 h-0.5 bg-white origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.8,
                  duration: 1.5,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              ></motion.div>
            </div>

            {/* Mobile Layout - Text Above, Line Below */}
            <div className="sm:hidden">
              <p 
                className="text-lg font-light mb-3"
                style={{
                  background: "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontFamily: "serif",
                }}
              >
                حيث يلتقي التراث بالرفاهية العصرية
              </p>
              <motion.div
                className="w-full h-0.5 bg-white origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.8,
                  duration: 1.5,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              ></motion.div>
            </div>
          </motion.div>

          {/* 3-Line Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-base lg:text-xl leading-relaxed max-w-4xl text-white"
          >
            From the ancient coffee traditions of Arabia to your cup, every bean tells a story
            of heritage, quality, and passion. Our master craftsmen carefully select and roast
            each blend to deliver an extraordinary coffee experience that elevates your senses.
          </motion.p>
        </motion.div>

        {/* Images Section - Matching Reference Layout */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          {/* Top Large Image - Responsive Sizing */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            {/* Golden Gradient Border */}
            <div className="relative rounded-[2rem] p-1 shadow-2xl w-full max-w-5xl" style={gradientBorderStyle}>
              <div
                className="relative w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[550px] rounded-[1.75rem] overflow-hidden"
                style={{ backgroundColor: "var(--bg-color)" }}
              >
                <Image
                  src="/images/000.png"
                  alt="World Cup Cafe exterior storefront"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1000px"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Bottom Two Images - Different Aspect Ratios */}
          <div className="grid grid-cols-5 md:grid-cols-12 gap-3 sm:gap-4 md:gap-6 lg:gap-10 max-w-5xl mx-auto">
            {/* Bottom Left Image - Square/Portrait Shape */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="relative col-span-2 md:col-span-5"
            >
              {/* Golden Gradient Border */}
              <div className="relative rounded-[1.5rem] md:rounded-[2rem] p-1 shadow-2xl" style={gradientBorderStyle}>
                <div
                  className="relative w-full h-[180px] sm:h-[220px] md:h-[320px] lg:h-[420px] rounded-[1.25rem] md:rounded-[1.75rem] overflow-hidden"
                  style={{ backgroundColor: "var(--bg-color)" }}
                >
                  <Image
                    src="/images/image33.jpg"
                    alt="World Cup Cafe branded packaging"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 40vw, (max-width: 768px) 40vw, 35vw"
                  />
                </div>
              </div>
            </motion.div>

            {/* Bottom Right Image - Landscape/Rectangular Shape */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative col-span-3 md:col-span-7"
            >
              {/* Golden Gradient Border */}
              <div className="relative rounded-[1.5rem] md:rounded-[2rem] p-1 shadow-2xl" style={gradientBorderStyle}>
                <div
                  className="relative w-full h-[180px] sm:h-[220px] md:h-[320px] lg:h-[420px] rounded-[1.25rem] md:rounded-[1.75rem] overflow-hidden"
                  style={{ backgroundColor: "var(--bg-color)" }}
                >
                  <Image
                    src="/images/product1.png"
                    alt="World Cup Cafe coffee cup and pastry"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 60vw, (max-width: 768px) 60vw, 65vw"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}