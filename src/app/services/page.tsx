"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import {
  BookOpen,
  Monitor,
  Users,
  GraduationCap,
  Brain,
  Clock,
  CheckCircle,
  ArrowRight,
  Globe,
  Star,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: BookOpen,
    title: "Primary School Tutoring",
    description: "Building strong foundations in mathematics, English, and Amharic for grades 1-8. Our tutors use engaging, age-appropriate methods.",
    features: ["Personalized learning plans", "Homework help", "Exam preparation", "Reading & writing skills"],
    color: "from-primary to-primary-dark",
  },
  {
    icon: GraduationCap,
    title: "High School Tutoring",
    description: "Comprehensive support for grades 9-12 covering all major subjects. Prepare for national exams and university entrance.",
    features: ["All STEM subjects", "Language arts", "National exam prep", "University guidance"],
    color: "from-secondary-dark to-secondary",
  },
  {
    icon: Brain,
    title: "University Prep & SAT",
    description: "Specialized preparation for university entrance exams, SAT, and competitive admissions processes.",
    features: ["SAT preparation", "Essay writing", "Interview coaching", "Application support"],
    color: "from-accent to-accent-dark",
  },
  {
    icon: Monitor,
    title: "Online Learning",
    description: "Access expert tutors from anywhere in Ethiopia through our virtual classroom platform.",
    features: ["Live video sessions", "Digital whiteboard", "Session recordings", "Flexible scheduling"],
    color: "from-primary to-secondary",
  },
  {
    icon: Users,
    title: "Group Sessions",
    description: "Learn collaboratively with peers in small group settings for better engagement and peer learning.",
    features: ["3-5 students per group", "Collaborative projects", "Peer learning", "Affordable pricing"],
    color: "from-secondary to-accent",
  },
  {
    icon: Clock,
    title: "Intensive Bootcamps",
    description: "Accelerated learning programs for exam season. Intensive crash courses to boost your scores fast.",
    features: ["Daily sessions", "Mock exams", "Quick results", "Exam strategies"],
    color: "from-accent to-primary",
  },
];

const process = [
  { step: "01", title: "Tell Us Your Needs", description: "Share your academic goals, preferred subjects, and schedule." },
  { step: "02", title: "Get Matched", description: "We match you with the perfect tutor based on your requirements." },
  { step: "03", title: "Start Learning", description: "Begin your tutoring sessions online or in-person." },
  { step: "04", title: "Track Progress", description: "Monitor your improvement with regular progress reports." },
];

export default function ServicesPage() {
  return (
    <div className="pt-[36px] pb-20">
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-text-primary dark:text-text-primary-dark tracking-tight">
              Comprehensive <span className="text-primary">Tutoring</span> Solutions
            </h1>
            <p className="text-base sm:text-lg text-text-secondary dark:text-text-secondary-dark leading-relaxed">
              From primary school to university preparation, we offer a full
              spectrum of tutoring services designed to meet every academic need.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="p-8 rounded-2xl bg-white dark:bg-surface-dim-dark shadow-sm border border-slate-200 dark:border-white/5 hover:border-primary/30 transition-all duration-300 h-full flex flex-col"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-text-primary dark:text-text-primary-dark">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-secondary dark:text-text-secondary-dark mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mt-auto">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-sm text-text-secondary dark:text-text-secondary-dark">{f}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-surface-dim dark:bg-surface-dim-dark/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <AnimatedSection className="text-center mb-10 sm:mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary-dark dark:text-secondary text-sm font-medium mb-4">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary dark:text-text-primary-dark">
              Simple <span className="text-primary">4-Step</span> Process
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.15}>
                <div className="text-center relative">
                  <div className="text-6xl font-black text-primary/10 dark:text-primary/5 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-text-primary dark:text-text-primary-dark">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary dark:text-text-secondary-dark">
                    {item.description}
                  </p>
                  {i < process.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-8 -right-4 w-6 h-6 text-primary/30" />
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <AnimatedSection>
            <div className="rounded-3xl bg-gradient-to-r from-primary to-primary-dark p-6 sm:p-10 lg:p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
              <div className="relative">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-white/80 mb-6 sm:mb-8 max-w-xl mx-auto">
                  Experience the difference with Ethiopia leading tutoring platform.
                  Your academic success is just one step away.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link href="/find-tutor">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 rounded-xl bg-white text-primary font-semibold shadow-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
                    >
                      Find a Tutor <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                  <a href="tel:+251911234567">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 rounded-xl border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
                    >
                      Call +251 911 234 567
                    </motion.button>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
