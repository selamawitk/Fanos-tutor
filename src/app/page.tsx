"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import {
  GraduationCap,
  Users,
  BookOpen,
  Award,
  Star,
  ArrowRight,
  CheckCircle,
  Globe,
  Clock,
  TrendingUp,
  ChevronRight,
  Quote,
  Phone,
} from "lucide-react";

const stats = [
  { icon: Users, value: "5,000+", label: "Happy Students" },
  { icon: GraduationCap, value: "200+", label: "Expert Tutors" },
  { icon: BookOpen, value: "50+", label: "Subjects Covered" },
  { icon: Award, value: "98%", label: "Success Rate" },
];

const features = [
  {
    icon: Globe,
    title: "Online & In-Person",
    description:
      "Flexible learning options - study from home or meet your tutor in Addis Ababa.",
    color: "from-primary to-primary-dark",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Book sessions that fit your schedule. Available mornings, evenings, and weekends.",
    color: "from-secondary-dark to-secondary",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description:
      "Our students consistently improve their grades by 30% or more within 3 months.",
    color: "from-accent to-accent-dark",
  },
  {
    icon: CheckCircle,
    title: "Verified Tutors",
    description:
      "Every tutor is background-checked and verified for quality and reliability.",
    color: "from-primary to-secondary",
  },
];

const subjects = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "English",
  "Amharic",
  "History",
  "Economics",
  "Computer Science",
  "SAT Prep",
];

const testimonials = [
  {
    name: "Hanna Tesfaye",
    role: "Parent",
    text: "Fanos Home Tutor transformed my daughter's academic performance. She went from struggling in math to scoring 95% on her exams!",
    rating: 5,
  },
  {
    name: "Daniel Mekonnen",
    role: "University Student",
    text: "The SAT preparation program was incredible. I scored in the 95th percentile and got into my dream university.",
    rating: 5,
  },
  {
    name: "Sara Ahmed",
    role: "High School Student",
    text: "My tutor makes physics so easy to understand. I actually enjoy studying now. Thank you Fanos Home Tutor!",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex items-center pt-[11px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-surface to-secondary/5 dark:from-primary/10 dark:via-surface-dark dark:to-secondary/5" />
        <div className="absolute top-20 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 relative">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mt-5"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Ethiopia&apos;s #1 Tutoring Platform
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-tight tracking-tight text-text-primary dark:text-text-primary-dark">
                Empowering{" "}
                <span className="bg-gradient-to-r from-primary via-primary-dark to-secondary bg-clip-text text-transparent animate-gradient">
                  Ethiopian Students
                </span>{" "}
                to Excel
              </h1>

              <p className="text-base sm:text-lg text-text-secondary dark:text-text-secondary-dark leading-relaxed max-w-lg">
                Connect with expert tutors across Ethiopia. From primary school
                to university preparation, we help students achieve their full
                potential with personalized learning experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/find-tutor">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-8 py-4 rounded-xl bg-primary text-white font-semibold text-lg shadow-lg shadow-primary/25 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 flex items-center gap-2"
                  >
                    Find a Tutor
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <Link href="/register-tutor">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-8 py-4 rounded-xl border-2 border-primary/30 text-primary font-semibold text-lg hover:bg-primary/5 transition-all duration-300 flex items-center gap-2"
                  >
                    Become a Tutor
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative w-full h-[400px] xl:h-[460px] mt-8">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl rotate-3 scale-95" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl -rotate-3 scale-95" />
                <div className="absolute inset-0 bg-white dark:bg-surface-dim-dark rounded-3xl shadow-2xl flex items-center justify-center border border-slate-200 dark:border-white/5">
                  <div className="text-center space-y-6 p-8">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-xl shadow-primary/20">
                      <GraduationCap className="w-16 h-16 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-text-primary dark:text-text-primary-dark">
                        Start Learning Today
                      </h3>
                      <p className="text-text-secondary dark:text-text-secondary-dark">
                        Join 5,000+ students already excelling
                      </p>
                    </div>
                    <div className="flex justify-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-5 h-5 text-secondary fill-secondary" />
                      ))}
                    </div>
                    <p className="text-sm text-text-secondary dark:text-text-secondary-dark">
                      Rated 4.9/5 by Ethiopian families
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 bg-white dark:bg-surface-dim-dark border-y border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="text-center group">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <motion.h3
                    className="text-3xl sm:text-4xl font-bold text-text-primary dark:text-text-primary-dark"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.h3>
                  <p className="text-sm text-text-secondary dark:text-text-secondary-dark mt-1 font-medium">
                    {stat.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-text-primary dark:text-text-primary-dark">
              Why Students Love{" "}
              <span className="text-primary">Fanos Home Tutor</span>
            </h2>
            <p className="text-text-secondary dark:text-text-secondary-dark max-w-2xl mx-auto text-lg">
              We provide the best tutoring experience in Ethiopia with
              cutting-edge features designed for academic success.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-2xl bg-white dark:bg-surface-dim-dark shadow-sm border border-slate-200 dark:border-white/5 hover:border-primary/20 hover:shadow-md transition-all duration-300 h-full flex flex-col"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-text-primary dark:text-text-primary-dark">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-text-secondary dark:text-text-secondary-dark leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-20 sm:py-24 bg-surface-dim dark:bg-surface-dim-dark/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary-dark dark:text-secondary text-sm font-semibold mb-4">
              Popular Subjects
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-text-primary dark:text-text-primary-dark">
              Subjects We <span className="text-primary">Cover</span>
            </h2>
            <p className="text-text-secondary dark:text-text-secondary-dark max-w-2xl mx-auto text-lg">
              From STEM subjects to languages, we have expert tutors for every
              discipline.
            </p>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {subjects.map((subject, i) => (
              <AnimatedSection key={subject} delay={i * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-full bg-white dark:bg-surface-dim-dark shadow-sm border border-slate-200 dark:border-white/5 hover:border-primary/30 hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <span className="text-sm font-medium text-text-primary dark:text-text-primary-dark">
                    {subject}
                  </span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-text-primary dark:text-text-primary-dark">
              What Our <span className="text-primary">Students</span> Say
            </h2>
            <p className="text-text-secondary dark:text-text-secondary-dark max-w-2xl mx-auto text-lg">
              Don&apos;t just take our word for it. Hear from the families who
              have transformed their academic journey.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <AnimatedSection key={testimonial.name} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl bg-white dark:bg-surface-dim-dark shadow-sm border border-slate-200 dark:border-white/5 hover:shadow-md transition-all duration-300 h-full flex flex-col"
                >
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  <p className="text-text-secondary dark:text-text-secondary-dark leading-relaxed flex-1 mb-4">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-white/5">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-text-primary dark:text-text-primary-dark">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-text-secondary dark:text-text-secondary-dark">
                        {testimonial.role}
                      </p>
                    </div>
                    <div className="ml-auto flex gap-0.5 shrink-0">
                      {Array.from({ length: testimonial.rating }).map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 text-secondary fill-secondary" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <AnimatedSection>
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-primary via-primary-dark to-primary p-8 sm:p-12 lg:p-16">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

              <div className="relative text-center space-y-6 max-w-2xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  Ready to Start Your Learning Journey?
                </h2>
                <p className="text-white/80 text-lg">
                  Join thousands of Ethiopian students who are already excelling
                  with Fanos Home Tutor. Your success story starts here.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/find-tutor">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-8 py-4 rounded-xl bg-white text-primary font-semibold text-lg shadow-xl hover:bg-slate-50 transition-colors flex items-center gap-2"
                    >
                      Find Your Tutor
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                  <a href="tel:+251911234567">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-8 py-4 rounded-xl border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 transition-colors flex items-center gap-2"
                    >
                      Call Us Now
                      <Phone className="w-5 h-5" />
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
