"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="pt-16" style={{ backgroundColor: 'var(--bg-color)' }}>
      {/* Hero Section */}
      <section className="py-20 lg:py-32" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-8"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--heading-color)' }}>
                <svg className="w-12 h-12" style={{ color: 'var(--bg-color)' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"/>
                </svg>
              </div>
            </motion.div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--heading-color)' }}>عن مقهى كأس العالم</h1>
            <h2 className="text-3xl lg:text-5xl font-bold mb-8" style={{ color: 'var(--heading-color)' }}>ABOUT WORLD CUP CAFE</h2>
            <p className="text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: 'var(--text-color)' }}>
              Experience the authentic flavors of Arabia in the heart of Dubai. Where traditional coffee culture meets modern luxury, creating unforgettable moments one cup at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="mb-6">
                <h3 className="text-xl mb-2" style={{ color: 'var(--heading-color)' }}>قصتنا</h3>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: 'var(--heading-color)' }}>Our Story</h2>
              </div>
              <div className="space-y-6 leading-relaxed" style={{ color: 'var(--text-color)' }}>
                <p className="text-lg">
                  Established in 2018 in the vibrant heart of Dubai Marina, World Cup Cafe was born from a passion to bring authentic Arabic coffee culture to the cosmopolitan landscape of the UAE.
                </p>
                <p className="text-lg">
                  Our founders, inspired by traditional Bedouin hospitality and the rich coffee heritage of the Arabian Peninsula, envisioned a space where locals and visitors could experience the true essence of Arabic coffee culture in a modern, luxurious setting.
                </p>
                <p className="text-lg">
                  Today, World Cup Cafe stands as Dubai's premier destination for authentic Arabic coffee, Turkish delights, and Middle Eastern pastries, serving the diverse community of Dubai with warmth, tradition, and excellence.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative h-96 lg:h-[500px]"
            >
              <div className="w-full h-full rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/about1.jpg"
                  alt="World Cup Cafe Interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Specialties */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h3 className="text-xl mb-2" style={{ color: 'var(--heading-color)' }}>تخصصاتنا</h3>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--heading-color)' }}>Our Specialties</h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: 'var(--text-color)' }}>
              Discover the authentic tastes that make World Cup Cafe a unique destination in Dubai
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Arabic Coffee */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="p-8 rounded-lg shadow-lg"
              style={{ backgroundColor: 'var(--heading-color)' }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto" style={{ backgroundColor: 'var(--bg-color)' }}>
                <svg className="w-8 h-8" style={{ color: 'var(--heading-color)' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.5,3H6C5.45,3 5,3.45 5,4V18C5,18.55 5.45,19 6,19H10V21H8V23H16V21H14V19H18.5C19.05,19 19.5,18.55 19.5,18V4C19.5,3.45 19.05,3 18.5,3M18.5,18H6V4H18.5V18Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4" style={{ color: 'var(--bg-color)' }}>قهوة عربية</h3>
              <h4 className="text-lg font-semibold text-center mb-4" style={{ color: 'var(--bg-color)' }}>Arabic Coffee</h4>
              <p className="text-center" style={{ color: 'var(--bg-color)' }}>
                Traditional Arabic coffee served with dates and authentic Middle Eastern hospitality, prepared using time-honored methods.
              </p>
            </motion.div>

            {/* Turkish Delights */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-lg shadow-lg"
              style={{ backgroundColor: 'var(--heading-color)' }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto" style={{ backgroundColor: 'var(--bg-color)' }}>
                <svg className="w-8 h-8" style={{ color: 'var(--heading-color)' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19A7,7 0 0,1 5,12A7,7 0 0,1 12,5M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4" style={{ color: 'var(--bg-color)' }}>حلويات تركية</h3>
              <h4 className="text-lg font-semibold text-center mb-4" style={{ color: 'var(--bg-color)' }}>Turkish Delights</h4>
              <p className="text-center" style={{ color: 'var(--bg-color)' }}>
                Handcrafted Turkish delights and baklava made with premium ingredients, bringing authentic Ottoman flavors to Dubai.
              </p>
            </motion.div>

            {/* Shisha Experience */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-lg shadow-lg"
              style={{ backgroundColor: 'var(--heading-color)' }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto" style={{ backgroundColor: 'var(--bg-color)' }}>
                <svg className="w-8 h-8" style={{ color: 'var(--heading-color)' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4" style={{ color: 'var(--bg-color)' }}>شيشة فاخرة</h3>
              <h4 className="text-lg font-semibold text-center mb-4" style={{ color: 'var(--bg-color)' }}>Premium Shisha</h4>
              <p className="text-center" style={{ color: 'var(--bg-color)' }}>
                Premium shisha experience with finest tobacco blends in a sophisticated, comfortable atmosphere perfect for relaxation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <h3 className="text-xl mb-2" style={{ color: 'var(--heading-color)' }}>موقعنا</h3>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: 'var(--heading-color)' }}>Our Location</h2>
            <div className="max-w-2xl mx-auto">
              <p className="mb-4 text-lg" style={{ color: 'var(--text-color)' }}>
                <strong style={{ color: 'var(--heading-color)' }}>World Cup Cafe</strong><br />
                Dubai Marina Walk, Marina Promenade<br />
                Dubai Marina, Dubai<br />
                United Arab Emirates
              </p>
              <p className="text-lg mb-8" style={{ color: 'var(--text-color)' }}>
                Located in the heart of Dubai Marina with stunning waterfront views, serving authentic Arabic coffee and Middle Eastern delicacies since 2018.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300"
                style={{
                  backgroundColor: 'var(--heading-color)',
                  color: 'var(--bg-color)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'var(--heading-color)';
                  e.target.style.border = '2px solid var(--heading-color)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'var(--heading-color)';
                  e.target.style.color = 'var(--bg-color)';
                  e.target.style.border = 'none';
                }}
              >
                Get Directions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
