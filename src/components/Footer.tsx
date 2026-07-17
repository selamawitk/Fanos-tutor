"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  MessageCircle,
  Share2,
  Link2,
  ArrowUp,
  Heart,
} from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/find-tutor", label: "Find a Tutor" },
  { href: "/register-tutor", label: "Become a Tutor" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Primary School Tutoring",
  "High School Tutoring",
  "University Prep",
  "SAT/Exam Preparation",
  "Online Learning",
  "Group Sessions",
];

export default function Footer() {
  const { theme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-surface-dark to-[#0a101f] text-white">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-12 sm:pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          <div className="space-y-4 sm:space-y-5">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <div>
                <span className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Fanos Home Tutor
                </span>
                <p className="text-xs text-slate-400 font-medium">Personal Tutoring in Ethiopia</p>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering Ethiopian students with world-class tutoring services.
              We connect students with qualified tutors to achieve academic excellence.
            </p>
            <div className="flex gap-2.5">
              {[Globe, MessageCircle, Share2, Link2].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-secondary">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-primary hover:pl-1 transition-all duration-200 inline-flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/50" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-secondary">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-slate-400 text-sm inline-flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-accent/50" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-secondary">
              Contact Info
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <a
                href="tel:+251911234567"
                className="flex items-center gap-3 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors animate-pulse-glow shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Call Us Anytime</p>
                  <p className="text-sm font-semibold text-white group-hover:text-primary transition-colors">
                    +251 911 234 567
                  </p>
                </div>
              </a>

              <a
                href="mailto:info@fanos.et"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors shrink-0">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email Us</p>
                  <p className="text-sm font-semibold text-white group-hover:text-secondary transition-colors">
                    info@fanos.et
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Visit Us</p>
                  <p className="text-sm font-semibold text-white">
                    Bole Road, Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-sm text-slate-500 flex items-center gap-1">
            &copy; {new Date().getFullYear()} Fanos Home Tutor. Made with{" "}
            <Heart className="w-3 h-3 text-accent fill-accent" /> for Ethiopian students.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-shadow"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
