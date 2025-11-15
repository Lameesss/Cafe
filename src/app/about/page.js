"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Image from "next/image";
import Link from "next/link";
import OurStory from "@/components/OurStory";

export default function About() {
  const gradientTextStyle = {
    background: "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  const gradientBorderStyle = {
    background: "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
  };

  return (
    <main className="pt-20" style={{ backgroundColor: 'var(--bg-color)' }}>
      {/* OurStory Component */}
      <OurStory />

      {/* Our Story */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:order-1"
            >
              {/* Section Header */}
              <div className="mb-8">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-lg lg:text-xl font-light mb-4"
                  style={{
                    ...gradientTextStyle,
                    fontFamily: 'serif',
                  }}
                >
                  قصتنا
                </motion.p>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-3xl lg:text-5xl font-bold uppercase leading-[1.1] tracking-[0.15em] mb-6"
                  style={{
                    ...gradientTextStyle,
                    textShadow: "0 4px 16px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  OUR HERITAGE
                </motion.h2>

                {/* Animated Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 1.0 }}
                  className="w-24 h-0.5 mb-8 origin-left"
                  style={{ backgroundColor: "#edb98a" }}
                />
              </div>

              {/* Story Content */}
              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-base lg:text-lg leading-relaxed text-white"
                >
                  Born from a passion for authentic Arabian coffee culture, World Cup Cafe represents 
                  the perfect fusion of traditional Middle Eastern hospitality and contemporary luxury. 
                  Our journey began with a simple vision: to create a sanctuary where the ancient art 
                  of coffee preparation meets modern sophistication.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-base lg:text-lg leading-relaxed text-white"
                >
                  Every cup we serve tells a story of heritage, craftsmanship, and dedication to excellence. 
                  From the carefully selected beans to the time-honored brewing techniques, we honor the 
                  rich traditions that have made Arabic coffee a symbol of warmth and hospitality for centuries.
                </motion.p>
              </div>
            </motion.div>

            {/* Image with Premium Border */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:order-2 relative"
            >
              {/* Golden Gradient Border */}
              <div className="relative rounded-[2rem] p-1 shadow-2xl" style={gradientBorderStyle}>
                <div className="relative w-full h-[400px] lg:h-[500px] rounded-[1.75rem] overflow-hidden" style={{ backgroundColor: "var(--bg-color)" }}>
                  <Image
                    src="/images/000.png"
                    alt="World Cup Cafe - Premium Arabic Coffee Experience"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
                  opacity: 0.8,
                }}
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-8 -left-8 w-20 h-20 rounded-full border-4"
                style={{ borderColor: "#edb98a", opacity: 0.6 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Specialties */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 lg:mb-20 max-w-4xl mx-auto"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg lg:text-xl font-light mb-4"
              style={{
                ...gradientTextStyle,
                fontFamily: 'serif',
              }}
            >
              تخصصاتنا
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl lg:text-5xl font-bold uppercase leading-[1.1] tracking-[0.15em] mb-6"
              style={{
                ...gradientTextStyle,
                textShadow: "0 4px 16px rgba(0, 0, 0, 0.3)",
              }}
            >
              OUR SPECIALTIES
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1.0 }}
              className="w-32 h-0.5 mx-auto mb-6 origin-center"
              style={{ backgroundColor: "#edb98a" }}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg lg:text-xl leading-relaxed text-white"
            >
              Discover the authentic tastes and experiences that define our premium Arabic cafe
            </motion.p>
          </motion.div>

          {/* Specialties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Arabic Coffee */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative group"
            >
              {/* Golden Gradient Border */}
              <div className="relative rounded-[2rem] p-1 shadow-2xl" style={gradientBorderStyle}>
                <div className="relative p-8 lg:p-10 rounded-[1.75rem] text-center" style={{ backgroundColor: "var(--bg-color)" }}>
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto" style={gradientBorderStyle}>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--bg-color)" }}>
                      <svg className="w-8 h-8" style={{ color: "#edb98a" }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2,21V19H20V21H2M20,8V5L18,5V3A1,1 0 0,0 17,2H7A1,1 0 0,0 6,3V5H4V8A4,4 0 0,0 8,12H16A4,4 0 0,0 20,8Z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Arabic Title */}
                  <h3 className="text-lg lg:text-xl font-bold mb-2" style={{ ...gradientTextStyle, fontFamily: 'serif' }}>
                    قهوة عربية أصيلة
                  </h3>

                  {/* English Title */}
                  <h4 className="text-xl lg:text-2xl font-bold uppercase tracking-wider mb-4" style={gradientTextStyle}>
                    ARABIC COFFEE
                  </h4>

                  {/* Description */}
                  <p className="text-white leading-relaxed">
                    Traditional Arabic coffee served with dates and authentic Middle Eastern hospitality, 
                    prepared using time-honored methods passed down through generations.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Premium Pastries */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group"
            >
              {/* Golden Gradient Border */}
              <div className="relative rounded-[2rem] p-1 shadow-2xl" style={gradientBorderStyle}>
                <div className="relative p-8 lg:p-10 rounded-[1.75rem] text-center" style={{ backgroundColor: "var(--bg-color)" }}>
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto" style={gradientBorderStyle}>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--bg-color)" }}>
                      <svg className="w-8 h-8" style={{ color: "#edb98a" }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19A7,7 0 0,1 5,12A7,7 0 0,1 12,5Z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Arabic Title */}
                  <h3 className="text-lg lg:text-xl font-bold mb-2" style={{ ...gradientTextStyle, fontFamily: 'serif' }}>
                    حلويات شرقية فاخرة
                  </h3>

                  {/* English Title */}
                  <h4 className="text-xl lg:text-2xl font-bold uppercase tracking-wider mb-4" style={gradientTextStyle}>
                    PREMIUM PASTRIES
                  </h4>

                  {/* Description */}
                  <p className="text-white leading-relaxed">
                    Handcrafted Middle Eastern sweets and pastries made with premium ingredients, 
                    bringing authentic Ottoman and Levantine flavors to your table.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Luxury Atmosphere */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative group"
            >
              {/* Golden Gradient Border */}
              <div className="relative rounded-[2rem] p-1 shadow-2xl" style={gradientBorderStyle}>
                <div className="relative p-8 lg:p-10 rounded-[1.75rem] text-center" style={{ backgroundColor: "var(--bg-color)" }}>
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto" style={gradientBorderStyle}>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--bg-color)" }}>
                      <svg className="w-8 h-8" style={{ color: "#edb98a" }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Arabic Title */}
                  <h3 className="text-lg lg:text-xl font-bold mb-2" style={{ ...gradientTextStyle, fontFamily: 'serif' }}>
                    أجواء فاخرة
                  </h3>

                  {/* English Title */}
                  <h4 className="text-xl lg:text-2xl font-bold uppercase tracking-wider mb-4" style={gradientTextStyle}>
                    LUXURY EXPERIENCE
                  </h4>

                  {/* Description */}
                  <p className="text-white leading-relaxed">
                    Immerse yourself in an atmosphere of refined elegance, where traditional Arabian 
                    hospitality meets contemporary luxury in every detail.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Arabic Quote */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-2xl lg:text-3xl font-light mb-6"
              style={{
                ...gradientTextStyle,
                fontFamily: 'serif',
              }}
            >
              "حيث تلتقي التقاليد العربية بالرفاهية العصرية"
            </motion.p>

            {/* English Quote */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl lg:text-2xl font-light italic mb-12 text-white"
              style={{ opacity: 0.9 }}
            >
              "Where Arabian traditions meet modern luxury"
            </motion.p>

            {/* Call to Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Link
                href="/menu"
                className="group relative inline-block px-12 py-4 text-sm font-bold uppercase tracking-[0.3em] transition-all duration-500 overflow-hidden"
                style={{
                  border: "2px solid rgba(237, 185, 138, 0.4)",
                  color: "#edb98a",
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = "#edb98a";
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = "rgba(237, 185, 138, 0.4)";
                }}
              >
                <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                  EXPLORE OUR MENU
                </span>
                <div
                  className="absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                  style={{
                    background: "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
                  }}
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
