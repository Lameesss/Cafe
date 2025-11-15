"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

export default function Drink() {
  return (
    <section
      className="w-full py-20 lg:py-32 overflow-x-hidden"
      style={{ backgroundColor: "var(--bg-color)" }}
    >
      <div className="w-full px-4 lg:px-12">
        {/* Mobile Title - 2 Lines */}
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="xl:hidden text-4xl sm:text-5xl font-bold uppercase leading-[1.1] tracking-[0.2em] text-center"
          style={{
            background:
              "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
          }}
        >
          TASTE THE
          <br />
          DIFFERENCE
        </motion.h1>

        {/* Desktop Title - Single Line */}
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="hidden xl:block text-7xl font-bold uppercase leading-[1.1] tracking-[0.3em] text-center"
          style={{
            background:
              "linear-gradient(135deg, #edb98a 0%, #d4a574 30%, #c49660 70%, #edb98a 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
          }}
        >
          TASTE THE DIFFERENCE
        </motion.h1>
      </div>
    </section>
  );
}
