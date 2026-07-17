"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Search,
  Filter,
  Star,
  MapPin,
  Clock,
  GraduationCap,
  Phone,
  MessageCircle,
  ChevronDown,
  CheckCircle,
} from "lucide-react";

const tutors = [
  {
    name: "Dr. Alemayehu Bezabih",
    subject: "Mathematics",
    level: "High School & University",
    location: "Addis Ababa, Bole",
    rating: 4.9,
    reviews: 127,
    experience: "8 years",
    price: "800",
    available: true,
    initials: "AB",
    tags: ["Calculus", "Algebra", "Statistics"],
  },
  {
    name: "Mrs. Hiwot Girma",
    subject: "English Language",
    level: "All Levels",
    location: "Addis Ababa, Piassa",
    rating: 4.8,
    reviews: 98,
    experience: "6 years",
    price: "600",
    available: true,
    initials: "HG",
    tags: ["IELTS", "SAT", "Creative Writing"],
  },
  {
    name: "Mr. Yonas Tadesse",
    subject: "Physics",
    level: "High School",
    location: "Online Only",
    rating: 4.9,
    reviews: 85,
    experience: "5 years",
    price: "700",
    available: true,
    initials: "YT",
    tags: ["Mechanics", "Electromagnetism", "Optics"],
  },
  {
    name: "Dr. Rahel Assefa",
    subject: "Chemistry",
    level: "University",
    location: "Addis Ababa, Kazanchis",
    rating: 5.0,
    reviews: 64,
    experience: "10 years",
    price: "1,000",
    available: false,
    initials: "RA",
    tags: ["Organic", "Inorganic", "Biochemistry"],
  },
  {
    name: "Mr. Tewodros Alemayehu",
    subject: "Biology",
    level: "High School & University",
    location: "Dire Dawa",
    rating: 4.7,
    reviews: 72,
    experience: "4 years",
    price: "500",
    available: true,
    initials: "TA",
    tags: ["Genetics", "Ecology", "Anatomy"],
  },
  {
    name: "Ms. Freweyni Hailu",
    subject: "Amharic",
    level: "All Levels",
    location: "Addis Ababa, Mekelle Kifle",
    rating: 4.8,
    reviews: 56,
    experience: "7 years",
    price: "500",
    available: true,
    initials: "FH",
    tags: ["Literature", "Grammar", "Writing"],
  },
  {
    name: "Mr. Dawit Kidane",
    subject: "Computer Science",
    level: "High School & University",
    location: "Online Only",
    rating: 4.9,
    reviews: 110,
    experience: "6 years",
    price: "900",
    available: true,
    initials: "DK",
    tags: ["Programming", "Data Structures", "Web Dev"],
  },
  {
    name: "Mrs. Meseret Tadesse",
    subject: "Economics",
    level: "University",
    location: "Addis Ababa, Boomole",
    rating: 4.6,
    reviews: 43,
    experience: "5 years",
    price: "750",
    available: true,
    initials: "MT",
    tags: ["Microeconomics", "Macroeconomics", "Econometrics"],
  },
  {
    name: "Mr. Solomon Berhanu",
    subject: "Mathematics",
    level: "SAT Prep",
    location: "Addis Ababa & Online",
    rating: 4.9,
    reviews: 150,
    experience: "9 years",
    price: "1,200",
    available: true,
    initials: "SB",
    tags: ["SAT Math", "Test Strategy", "Problem Solving"],
  },
];

const subjects = ["All Subjects", "Mathematics", "Physics", "Chemistry", "Biology", "English", "Amharic", "Computer Science", "Economics"];
const levels = ["All Levels", "Primary School", "High School", "University", "SAT Prep"];
const locations = ["All Locations", "Addis Ababa", "Dire Dawa", "Online Only"];

export default function FindTutorPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All Subjects");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [showFilters, setShowFilters] = useState(false);

  const filteredTutors = tutors.filter((tutor) => {
    const matchesSearch =
      tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutor.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutor.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesSubject = selectedSubject === "All Subjects" || tutor.subject === selectedSubject;
    const matchesLevel = selectedLevel === "All Levels" || tutor.level.includes(selectedLevel);
    const matchesLocation = selectedLocation === "All Locations" || tutor.location.includes(selectedLocation);
    return matchesSearch && matchesSubject && matchesLevel && matchesLocation;
  });

  return (
    <div className="pt-[36px] pb-20">
      <section className="py-16 sm:py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Find Your Perfect Tutor
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-text-primary dark:text-text-primary-dark tracking-tight">
              Browse Our <span className="text-primary">Expert Tutors</span>
            </h1>
            <p className="text-base sm:text-lg text-text-secondary dark:text-text-secondary-dark leading-relaxed">
              Search through our verified tutors by subject, level, and location.
              Find the perfect match for your academic needs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <AnimatedSection>
            <div className="bg-white dark:bg-surface-dim-dark rounded-2xl shadow-lg border border-slate-200 dark:border-white/5 p-4 sm:p-5 lg:p-6 mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search by name, subject, or keyword..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-dim dark:bg-surface-dim-dark border border-slate-200 dark:border-white/10 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-text-primary dark:text-text-primary-dark placeholder-gray-400 transition-all"
                  />
                </div>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-dim dark:bg-surface-dim-dark border border-slate-200 dark:border-white/10 text-text-secondary dark:text-text-secondary-dark hover:border-primary transition-colors sm:w-auto"
                >
                  <Filter className="w-5 h-5" />
                  Filters
                  <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
                </button>
              </div>

              <AnimatePresence>
                {showFilters && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="grid sm:grid-cols-3 gap-4 mt-4 pt-4 border-t border-slate-200 dark:border-white/5">
                      <div>
                        <label className="text-sm font-medium text-text-primary dark:text-text-primary-dark mb-2 block">Subject</label>
                        <select
                          value={selectedSubject}
                          onChange={(e) => setSelectedSubject(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl bg-surface-dim dark:bg-surface-dim-dark border border-slate-200 dark:border-white/10 text-text-primary dark:text-text-primary-dark focus:outline-none focus:border-primary"
                        >
                          {subjects.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-text-primary dark:text-text-primary-dark mb-2 block">Level</label>
                        <select
                          value={selectedLevel}
                          onChange={(e) => setSelectedLevel(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl bg-surface-dim dark:bg-surface-dim-dark border border-slate-200 dark:border-white/10 text-text-primary dark:text-text-primary-dark focus:outline-none focus:border-primary"
                        >
                          {levels.map((l) => (
                            <option key={l} value={l}>{l}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-text-primary dark:text-text-primary-dark mb-2 block">Location</label>
                        <select
                          value={selectedLocation}
                          onChange={(e) => setSelectedLocation(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl bg-surface-dim dark:bg-surface-dim-dark border border-slate-200 dark:border-white/10 text-text-primary dark:text-text-primary-dark focus:outline-none focus:border-primary"
                        >
                          {locations.map((l) => (
                            <option key={l} value={l}>{l}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </AnimatedSection>

          <div className="mb-4 sm:mb-6 text-sm text-text-secondary dark:text-text-secondary-dark">
            Showing {filteredTutors.length} tutor{filteredTutors.length !== 1 ? "s" : ""}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredTutors.map((tutor, i) => (
                <motion.div
                  key={tutor.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-surface-dim-dark shadow-sm border border-slate-200 dark:border-white/5 hover:border-primary/30 transition-all duration-300 h-full flex flex-col"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold shadow-lg shadow-primary/20">
                          {tutor.initials}
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-text-primary dark:text-text-primary-dark">
                            {tutor.name}
                          </h3>
                          <p className="text-sm text-primary font-medium">{tutor.subject}</p>
                        </div>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${tutor.available ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-slate-400"}`}>
                        {tutor.available ? "Available" : "Busy"}
                      </div>
                    </div>

                    <p className="text-sm text-text-secondary dark:text-text-secondary-dark mb-3">{tutor.level}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {tutor.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-2 mb-4 text-sm text-text-secondary dark:text-text-secondary-dark">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 shrink-0" />
                        <span>{tutor.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 shrink-0" />
                        <span>{tutor.experience} experience</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-secondary fill-secondary" />
                        <span>{tutor.rating} ({tutor.reviews} reviews)</span>
                      </div>
                    </div>

                    <div className="mt-auto pt-4 border-t border-slate-200 dark:border-white/5 flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold text-primary">{tutor.price}</span>
                        <span className="text-sm text-text-secondary dark:text-text-secondary-dark"> ETB/hr</span>
                      </div>
                      <div className="flex gap-2">
                        <a href="tel:+251911234567">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                          >
                            <Phone className="w-4 h-4" />
                          </motion.button>
                        </a>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-9 h-9 rounded-lg bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20 hover:shadow-xl transition-shadow"
                        >
                          <MessageCircle className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredTutors.length === 0 && (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-text-primary dark:text-text-primary-dark mb-2">
                No tutors found
              </h3>
              <p className="text-text-secondary dark:text-text-secondary-dark">
                Try adjusting your filters or search query.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
