"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import {
  GraduationCap,
  Target,
  Heart,
  Users,
  Award,
  BookOpen,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Heart,
    title: "Student-Centered",
    description: "Every decision we make is driven by what is best for our students learning outcomes.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in tutor selection and teaching methodology.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a supportive community of learners, educators, and families across Ethiopia.",
  },
  {
    icon: Target,
    title: "Results-Oriented",
    description: "We measure success by the tangible academic improvements our students achieve.",
  },
];

const milestones = [
  { year: "2019", title: "Founded", description: "Fanos Home Tutor was founded in Addis Ababa with a vision to transform Ethiopian education." },
  { year: "2020", title: "First 500 Students", description: "Reached our first milestone of 500 active students across Addis Ababa." },
  { year: "2022", title: "Online Expansion", description: "Launched online tutoring services, reaching students across all of Ethiopia." },
  { year: "2023", title: "5,000 Students", description: "Surpassed 5,000 active students with over 200 verified tutors." },
  { year: "2024", title: "National Reach", description: "Expanded services to major cities including Dire Dawa, Mekelle, and Bahir Dar." },
];

const team = [
  { name: "Abebe Kebede", role: "Founder & CEO", initials: "AK" },
  { name: "Fatima Hassan", role: "Head of Operations", initials: "FH" },
  { name: "Daniel Tadesse", role: "Head of Tutoring", initials: "DT" },
  { name: "Selamawi Assefa", role: "Technology Lead", initials: "SA" },
];

export default function AboutPage() {
  return (
    <div className="pt-[36px] pb-20">
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Fanos Home Tutor
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-text-primary dark:text-text-primary-dark tracking-tight">
              Transforming Education{" "}
              <span className="text-primary">Across Ethiopia</span>
            </h1>
            <p className="text-base sm:text-lg text-text-secondary dark:text-text-secondary-dark leading-relaxed">
              We believe every Ethiopian student deserves access to quality
              tutoring. Fanos Home Tutor bridges the gap between students and expert
              educators, making personalized learning accessible and affordable.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-surface-dim dark:bg-surface-dim-dark/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedSection delay={0}>
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white h-full">
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                  <Target className="w-7 h-7" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-white/90 leading-relaxed">
                  To provide every Ethiopian student with access to high-quality,
                  personalized tutoring that empowers them to reach their full
                  academic potential and contribute positively to their communities
                  and nation.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-surface-dim-dark shadow-sm border border-slate-200 dark:border-white/5 h-full">
                <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-5">
                  <GraduationCap className="w-7 h-7 text-secondary" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-text-primary dark:text-text-primary-dark">Our Vision</h2>
                <p className="text-text-secondary dark:text-text-secondary-dark leading-relaxed">
                  To become East Africa leading tutoring platform, known for
                  academic excellence, innovation in education, and creating
                  opportunities for every student to succeed regardless of their
                  background.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <AnimatedSection className="text-center mb-10 sm:mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary dark:text-text-primary-dark">
              What We <span className="text-primary">Stand For</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="p-6 rounded-2xl bg-white dark:bg-surface-dim-dark shadow-sm border border-slate-200 dark:border-white/5 text-center h-full"
                >
                  <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-text-primary dark:text-text-primary-dark">
                    {value.title}
                  </h3>
                  <p className="text-sm text-text-secondary dark:text-text-secondary-dark">
                    {value.description}
                  </p>
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
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary dark:text-text-primary-dark">
              Milestones & <span className="text-primary">Growth</span>
            </h2>
          </AnimatedSection>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />
            {milestones.map((m, i) => (
              <AnimatedSection key={m.year} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`relative flex items-start gap-6 sm:gap-8 mb-10 sm:mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="hidden md:block flex-1" />
                  <div className="absolute left-6 md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full bg-primary flex items-center justify-center z-10 shadow-lg shadow-primary/30">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 ml-14 md:ml-0">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-2">
                      {m.year}
                    </div>
                    <h3 className="text-xl font-bold text-text-primary dark:text-text-primary-dark mb-1">
                      {m.title}
                    </h3>
                    <p className="text-text-secondary dark:text-text-secondary-dark">
                      {m.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <AnimatedSection className="text-center mb-10 sm:mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary dark:text-text-primary-dark">
              Meet the <span className="text-primary">Leaders</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="p-6 rounded-2xl bg-white dark:bg-surface-dim-dark shadow-sm border border-slate-200 dark:border-white/5 text-center"
                >
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white text-xl font-bold mb-4 shadow-lg shadow-primary/20">
                    {member.initials}
                  </div>
                  <h3 className="text-lg font-bold text-text-primary dark:text-text-primary-dark">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary">{member.role}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <AnimatedSection>
            <div className="rounded-3xl bg-gradient-to-r from-primary to-primary-dark p-6 sm:p-10 lg:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Join the Fanos Home Tutor Family
              </h2>
              <p className="text-white/80 mb-6 sm:mb-8 max-w-xl mx-auto">
                Whether you are a parent looking for the best for your child or a tutor
                wanting to make a difference, we would love to hear from you.
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
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 rounded-xl border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
