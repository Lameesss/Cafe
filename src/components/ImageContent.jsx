"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ImageContent() {
  return (
    <section className="w-full" style={{ backgroundColor: "var(--bg-color)" }}>
      {/* Section 1: Image Left, Text Right */}
      <div className="w-full py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-[450px] lg:h-[550px]"
            >
              <Image
                src="/images/118.jpg"
                alt="World Cup Source"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            {/* Right - Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2
                className="text-xl sm:text-2xl lg:text-3xl font-black uppercase leading-tight"
                style={{ color: "var(--heading-color)" }}
              >
                CRAFTED AT WORLD CUP
              </h2>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: "var(--text-color)" }}
              >
                Every cup begins with carefully selected beans from sustainable
                farms around the world. Our expert roasters bring out the unique
                flavors and aromas that make each blend extraordinary.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 border-2 text-sm font-bold uppercase tracking-widest transition-all duration-300"
                style={{
                  borderColor: "var(--heading-color)",
                  color: "var(--heading-color)",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "var(--heading-color)";
                  e.target.style.color = "var(--bg-color)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "var(--heading-color)";
                }}
              >
                OUR PROCESS
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Section 2: Image Right, Text Left */}
      <div className="w-full py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 lg:order-1 order-2"
            >
              <h2
                className="text-xl sm:text-2xl lg:text-3xl font-black uppercase leading-tight"
                style={{ color: "var(--heading-color)" }}
              >
                THE WORLD CUP CAFE DIFFERENCE
              </h2>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: "var(--text-color)" }}
              >
                Expertly roasted beans with the perfect balance of flavor and
                aroma. Each cup is crafted with precision and passion to deliver
                an exceptional coffee experience.
              </p>
              <Link
                href="/about"
                className="inline-block px-8 py-4 border-2 text-sm font-bold uppercase tracking-widest transition-all duration-300"
                style={{
                  borderColor: "var(--heading-color)",
                  color: "var(--heading-color)",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "var(--heading-color)";
                  e.target.style.color = "var(--bg-color)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "var(--heading-color)";
                }}
              >
                OUR COFFEE
              </Link>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-[450px] lg:h-[550px] lg:order-2 order-1"
            >
              <Image
                src="/images/image33.jpg"
                alt="World Cup Difference"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Section 3: Image Left, Text Right */}
      <div className="w-full py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-[450px] lg:h-[550px]"
            >
              <Image
                src="/images/118.jpg"
                alt="World Cup Awards"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            {/* Right - Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2
                className="text-xl sm:text-2xl lg:text-3xl font-black uppercase leading-tight"
                style={{ color: "var(--heading-color)" }}
              >
                AWARDS & CERTIFICATIONS
              </h2>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: "var(--text-color)" }}
              >
                World Cup Cafe maintains the highest standards in coffee quality
                and preparation. Our baristas are certified and our beans are
                sourced from award-winning farms committed to sustainable
                practices and exceptional quality.
              </p>
              <Link
                href="/about"
                className="inline-block px-8 py-4 border-2 text-sm font-bold uppercase tracking-widest transition-all duration-300"
                style={{
                  borderColor: "var(--heading-color)",
                  color: "var(--heading-color)",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "var(--heading-color)";
                  e.target.style.color = "var(--bg-color)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "var(--heading-color)";
                }}
              >
                LEARN MORE
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
