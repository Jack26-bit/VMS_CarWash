"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.43, 0.13, 0.23, 0.96],
      delayChildren: 0.1,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }
  }
};

const numberVariants = {
  hidden: (direction: number) => ({
    opacity: 0,
    x: direction * 40,
    y: 15,
    rotate: direction * 5
  }),
  visible: {
    opacity: 0.7,
    x: 0,
    y: 0,
    rotate: 0,
    transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
  }
};

const ghostVariants = {
  hidden: { scale: 0.8, opacity: 0, y: 15, rotate: -5 },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }
  },
  floating: {
    y: [-5, 5],
    transition: { y: { duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" } }
  }
};

export function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white px-4">
      <Link
        href="/"
        aria-label="VMS CarWash home"
        className="mt-6 transition-opacity hover:opacity-80"
      >
        <Image
          src="/vms-carwash-logo.png"
          alt="VMS CarWash - An Experience You Deserve"
          width={300}
          height={107}
          className="h-auto w-[230px] object-contain sm:w-[300px]"
          priority
        />
      </Link>
      <div className="flex w-full flex-1 items-center justify-center pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
          <div className="mb-8 flex items-center justify-center gap-4 md:mb-12 md:gap-6">
            <motion.span
              className="select-none text-[80px] font-bold leading-none text-[#222222] opacity-70 md:text-[120px]"
              variants={numberVariants}
              custom={-1}
            >
              4
            </motion.span>
            <motion.div
              variants={ghostVariants}
              animate={["visible", "floating"]}
            >
              <Image
                src="https://cdn.21st.dev/assets/mirror/88/8848c4fd858052c49c5a5d7267489c02b021c6cf3e31bfec02787e16f1ab7d0e.png"
                alt="Friendly ghost"
                width={120}
                height={120}
                className="h-[80px] w-[80px] select-none object-contain md:h-[120px] md:w-[120px]"
                draggable={false}
                priority
              />
            </motion.div>
            <motion.span
              className="select-none text-[80px] font-bold leading-none text-[#222222] opacity-70 md:text-[120px]"
              variants={numberVariants}
              custom={1}
            >
              4
            </motion.span>
          </div>

          <motion.h1
            className="mb-4 select-none text-3xl font-bold text-[#222222] opacity-70 md:mb-6 md:text-5xl"
            variants={itemVariants}
          >
            Boo! Page missing!
          </motion.h1>
          <motion.p
            className="mb-8 select-none text-lg text-[#222222] opacity-50 md:mb-12 md:text-xl"
            variants={itemVariants}
          >
            Whoops! This page must be a ghost - it&apos;s not here!
          </motion.p>
          <motion.div className="mt-8" variants={itemVariants}>
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-[#222222] opacity-60">
              Contact on
            </p>
            <Link
              href="mailto:info@vmscarwash.com"
              className="text-lg font-medium text-[#222222] underline underline-offset-4 transition-opacity hover:opacity-70"
            >
              info@vmscarwash.com
            </Link>
          </motion.div>
          <motion.div className="mt-8" variants={itemVariants}>
            <Link
              href="https://en.wikipedia.org/wiki/HTTP_404"
              target="_blank"
              rel="noreferrer"
              className="select-none text-[#222222] underline opacity-50 transition-opacity hover:opacity-70"
            >
              What means 404?
            </Link>
          </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
