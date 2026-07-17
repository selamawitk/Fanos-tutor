"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { Menu, X, Sun, Moon, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/find-tutor", label: "Find a Tutor" },
  { href: "/register-tutor", label: "Register as Tutor" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = theme === "dark";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDark
          ? scrolled
            ? "bg-surface-dark/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5"
            : "bg-surface-dark"
          : scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md shadow-black/5 border-b border-slate-100"
            : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">

          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
              isDark
                ? "bg-primary/20 border border-primary/30"
                : "bg-primary shadow-md shadow-primary/20"
            }`}>
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-bold leading-tight ${
                isDark ? "text-white" : "text-text-primary"
              }`}>
                Fanos Home Tutor
              </span>
              <span className={`text-[10px] leading-tight font-medium hidden sm:block ${
                isDark ? "text-slate-400" : "text-text-secondary"
              }`}>
                Personal Tutoring in Ethiopia
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? isDark
                        ? "text-primary bg-primary/10"
                        : "text-primary bg-primary/5"
                      : isDark
                        ? "text-slate-300 hover:text-white hover:bg-white/5"
                        : "text-text-secondary hover:text-text-primary hover:bg-slate-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <motion.a
              href="tel:+251911234567"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                isDark
                  ? "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20"
                  : "bg-primary text-white hover:bg-primary-dark shadow-md shadow-primary/20"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden md:inline">Call Us</span>
            </motion.a>

            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-full transition-all duration-200 ${
                isDark
                  ? "hover:bg-white/10 text-secondary"
                  : "hover:bg-slate-100 text-text-secondary"
              }`}
              aria-label="Toggle theme"
            >
              <motion.div
                key={theme}
                initial={{ rotate: -90, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.div>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
                isDark ? "hover:bg-white/10 text-white" : "hover:bg-slate-100 text-text-primary"
              }`}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`lg:hidden border-t overflow-hidden ${
              isDark ? "bg-surface-dark border-white/5" : "bg-white border-slate-100"
            }`}
          >
            <div className="px-6 py-4 pb-6 space-y-1">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div key={link.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                        isActive
                          ? isDark
                            ? "text-primary bg-primary/10"
                            : "text-primary bg-primary/5"
                          : isDark
                            ? "text-slate-300 hover:text-white hover:bg-white/5"
                            : "text-text-secondary hover:text-text-primary hover:bg-slate-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: navLinks.length * 0.05 }}>
                <a
                  href="tel:+251911234567"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-white font-medium"
                >
                  <Phone className="w-5 h-5 shrink-0" />
                  Call Us: +251 911 234 567
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
