"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OurStory() {
  return (
    <section
      className="w-full py-16 lg:py-20"
      style={{ backgroundColor: "#064c4c" }}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Title and Heading - Above Everything */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{
              background:
                "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Our Story
          </motion.h2>

          {/* Subtitle with White Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-3"
          >
            {/* Desktop Layout - Text and Line Side by Side */}
            <div className="hidden sm:flex items-center space-x-4">
              <p className="text-lg lg:text-xl font-light text-white">
                مقهى كأس العالم هنا لإسعاد براعم التذوق لديكم!
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
              <p className="text-lg font-light mb-3 text-white">
                مقهى كأس العالم هنا لإسعاد براعم التذوق لديكم!
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
        </motion.div>

        {/* Content Layout - Image and Text Side by Side */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            {/* Golden Gradient Border */}
            <div
              className="relative rounded-[2rem] p-1 shadow-2xl"
              style={{
                background:
                  "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
              }}
            >
              <div className="relative rounded-[1.75rem] overflow-hidden bg-white">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/ourstory2.jpg"
                    alt="World Cup Cafe Interior"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-6"
          >
            {/* Single Paragraph Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="text-white text-base lg:text-lg leading-relaxed">
                At World Cup Cafe, every sip is a journey through tradition and
                excellence. Rooted in time-honored Arabic coffee culture and
                crafted with only the finest ingredients, our signature
                beverages are rich, creamy, and irresistibly delicious. Our
                story began in 2020 with the vision of creating an authentic
                Arabic coffee experience – a name that quickly became synonymous
                with premium quality and hospitality. Building on this proud
                legacy, we introduced our flagship cafe in the heart of the city
                in 2022, followed by expansion across multiple locations in
                2023. In July 2024, we unveiled World Cup Cafe – a celebration
                of authentic Arabic coffee culture, now delighting coffee
                enthusiasts across the region.
              </p>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="pt-6"
            >
              <div className="flex items-center space-x-2">
                <span className="text-2xl lg:text-3xl font-bold text-white">
                  تعال
                </span>
                <span
                  className="text-2xl lg:text-3xl font-bold"
                  style={{
                    background:
                      "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  تذوق
                </span>
                <span
                  className="text-2xl lg:text-3xl font-bold"
                  style={{
                    background:
                      "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  السحر!
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
