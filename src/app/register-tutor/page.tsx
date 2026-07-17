"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import {
  GraduationCap,
  User,
  Mail,
  Phone,
  MapPin,
  BookOpen,
  FileText,
  CheckCircle,
  Send,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

const subjects = [
  "Mathematics", "Physics", "Chemistry", "Biology", "English",
  "Amharic", "History", "Economics", "Computer Science", "Geography",
  "Civic Education", "SAT Preparation",
];

const levels = [
  "Primary School (Grades 1-8)",
  "High School (Grades 9-12)",
  "University",
  "SAT/Exam Prep",
  "All Levels",
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  education: string;
  institution: string;
  experience: string;
  subjects: string[];
  levels: string[];
  bio: string;
  availability: string;
}

interface FormErrors {
  [key: string]: string;
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  location: "",
  education: "",
  institution: "",
  experience: "",
  subjects: [],
  levels: [],
  bio: "",
  availability: "",
};

export default function RegisterTutorPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleMultiSelect = (field: "subjects" | "levels", value: string) => {
    setFormData((prev) => {
      const arr = prev[field];
      const next = arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
      return { ...prev, [field]: next };
    });
  };

  const validateStep = (stepNum: number): boolean => {
    const newErrors: FormErrors = {};

    if (stepNum === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
      if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
      if (!formData.location.trim()) newErrors.location = "Location is required";
    }

    if (stepNum === 2) {
      if (!formData.education) newErrors.education = "Education level is required";
      if (!formData.institution.trim()) newErrors.institution = "Institution name is required";
      if (!formData.experience) newErrors.experience = "Experience is required";
      if (formData.subjects.length === 0) newErrors.subjects = "Select at least one subject";
      if (formData.levels.length === 0) newErrors.levels = "Select at least one level";
    }

    if (stepNum === 3) {
      if (!formData.bio.trim()) newErrors.bio = "Bio is required";
      else if (formData.bio.length < 50) newErrors.bio = "Bio must be at least 50 characters";
      if (!formData.availability) newErrors.availability = "Availability is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep((s) => s + 1);
    }
  };

  const prevStep = () => setStep((s) => s - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    setSubmitting(true);

    await new Promise((r) => setTimeout(r, 2000));

    const subjectList = document.createElement("a");
    subjectList.href = `mailto:careers@fanos.et?subject=Tutor Application - ${formData.firstName} ${formData.lastName}&body=${encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nLocation: ${formData.location}\nEducation: ${formData.education}\nInstitution: ${formData.institution}\nExperience: ${formData.experience}\nSubjects: ${formData.subjects.join(", ")}\nLevels: ${formData.levels.join(", ")}\nAvailability: ${formData.availability}\n\nBio:\n${formData.bio}`
    )}`;
    subjectList.click();

    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-[36px] pb-20 min-h-screen flex items-center justify-center">
        <AnimatedSection className="text-center max-w-lg mx-auto px-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-6 sm:mb-8 shadow-xl shadow-primary/30"
          >
            <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
          </motion.div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-text-primary dark:text-text-primary-dark">
            Application Submitted!
          </h1>
          <p className="text-text-secondary dark:text-text-secondary-dark mb-6 sm:mb-8 leading-relaxed">
            Thank you for applying to become a tutor at Fanos Home Tutor! We have
            received your information and will review it shortly. Our team will
            contact you within 48 hours.
          </p>
          <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
            <p className="text-sm text-primary font-medium">
              Your application details have been sent to careers@fanos.et
            </p>
          </div>
        </AnimatedSection>
      </div>
    );
  }

  return (
    <div className="pt-[36px] pb-20">
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Join Our Team
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-text-primary dark:text-text-primary-dark tracking-tight">
              Become a <span className="text-primary">Tutor</span> at Fanos Home Tutor
            </h1>
            <p className="text-base sm:text-lg text-text-secondary dark:text-text-secondary-dark leading-relaxed">
              Share your knowledge and help Ethiopian students succeed. Fill out
              the form below and we will get back to you within 48 hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 lg:px-12">
          <AnimatedSection>
            {/* Progress Steps */}
            <div className="flex items-center justify-center mb-8 sm:mb-10">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <motion.div
                    animate={{
                      scale: step === s ? 1.1 : 1,
                      backgroundColor: step >= s ? "#009A44" : "#E2E8F0",
                    }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                      step >= s ? "text-white" : "text-slate-400"
                    }`}
                  >
                    {step > s ? <CheckCircle className="w-5 h-5" /> : s}
                  </motion.div>
                  {s < 3 && (
                    <div className={`w-16 sm:w-24 h-1 mx-2 rounded-full transition-colors duration-300 ${step > s ? "bg-primary" : "bg-slate-200 dark:bg-slate-700"}`} />
                  )}
                </div>
              ))}
            </div>

            <div className="bg-white dark:bg-surface-dim-dark rounded-2xl shadow-sm border border-slate-200 dark:border-white/5 p-6 sm:p-8">
              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-5"
                    >
                      <h2 className="text-xl font-bold mb-6 text-text-primary dark:text-text-primary-dark flex items-center gap-2">
                        <User className="w-5 h-5 text-primary" /> Personal Information
                      </h2>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-text-primary dark:text-text-primary-dark mb-1.5 block">First Name *</label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="e.g., Alemayehu"
                            className={`w-full px-4 py-3 rounded-xl bg-surface-dim dark:bg-surface-dim-dark border ${errors.firstName ? "border-red-500" : "border-slate-200 dark:border-white/10"} text-text-primary dark:text-text-primary-dark placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all`}
                          />
                          {errors.firstName && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.firstName}</p>}
                        </div>
                        <div>
                          <label className="text-sm font-medium text-text-primary dark:text-text-primary-dark mb-1.5 block">Last Name *</label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="e.g., Bezabih"
                            className={`w-full px-4 py-3 rounded-xl bg-surface-dim dark:bg-surface-dim-dark border ${errors.lastName ? "border-red-500" : "border-slate-200 dark:border-white/10"} text-text-primary dark:text-text-primary-dark placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all`}
                          />
                          {errors.lastName && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.lastName}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-text-primary dark:text-text-primary-dark mb-1.5 block">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className={`w-full px-4 py-3 rounded-xl bg-surface-dim dark:bg-surface-dim-dark border ${errors.email ? "border-red-500" : "border-slate-200 dark:border-white/10"} text-text-primary dark:text-text-primary-dark placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-text-primary dark:text-text-primary-dark mb-1.5 block">Phone Number *</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+251 9XX XXX XXX"
                            className={`w-full px-4 py-3 rounded-xl bg-surface-dim dark:bg-surface-dim-dark border ${errors.phone ? "border-red-500" : "border-slate-200 dark:border-white/10"} text-text-primary dark:text-text-primary-dark placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all`}
                          />
                          {errors.phone && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.phone}</p>}
                        </div>
                        <div>
                          <label className="text-sm font-medium text-text-primary dark:text-text-primary-dark mb-1.5 block">Location *</label>
                          <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="e.g., Addis Ababa"
                            className={`w-full px-4 py-3 rounded-xl bg-surface-dim dark:bg-surface-dim-dark border ${errors.location ? "border-red-500" : "border-slate-200 dark:border-white/10"} text-text-primary dark:text-text-primary-dark placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all`}
                          />
                          {errors.location && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.location}</p>}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-5"
                    >
                      <h2 className="text-xl font-bold mb-6 text-text-primary dark:text-text-primary-dark flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-primary" /> Qualifications
                      </h2>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-text-primary dark:text-text-primary-dark mb-1.5 block">Education Level *</label>
                          <select
                            name="education"
                            value={formData.education}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl bg-surface-dim dark:bg-surface-dim-dark border ${errors.education ? "border-red-500" : "border-slate-200 dark:border-white/10"} text-text-primary dark:text-text-primary-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all`}
                          >
                            <option value="">Select...</option>
                            <option value="Bachelor's Degree">Bachelor&apos;s Degree</option>
                            <option value="Master's Degree">Master&apos;s Degree</option>
                            <option value="PhD">PhD</option>
                            <option value="Teaching Certificate">Teaching Certificate</option>
                            <option value="Other">Other</option>
                          </select>
                          {errors.education && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.education}</p>}
                        </div>
                        <div>
                          <label className="text-sm font-medium text-text-primary dark:text-text-primary-dark mb-1.5 block">Institution *</label>
                          <input
                            type="text"
                            name="institution"
                            value={formData.institution}
                            onChange={handleChange}
                            placeholder="e.g., Addis Ababa University"
                            className={`w-full px-4 py-3 rounded-xl bg-surface-dim dark:bg-surface-dim-dark border ${errors.institution ? "border-red-500" : "border-slate-200 dark:border-white/10"} text-text-primary dark:text-text-primary-dark placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all`}
                          />
                          {errors.institution && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.institution}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-text-primary dark:text-text-primary-dark mb-1.5 block">Teaching Experience *</label>
                        <select
                          name="experience"
                          value={formData.experience}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl bg-surface-dim dark:bg-surface-dim-dark border ${errors.experience ? "border-red-500" : "border-slate-200 dark:border-white/10"} text-text-primary dark:text-text-primary-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all`}
                        >
                          <option value="">Select...</option>
                          <option value="Less than 1 year">Less than 1 year</option>
                          <option value="1-3 years">1-3 years</option>
                          <option value="3-5 years">3-5 years</option>
                          <option value="5-10 years">5-10 years</option>
                          <option value="10+ years">10+ years</option>
                        </select>
                        {errors.experience && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.experience}</p>}
                      </div>

                      <div>
                        <label className="text-sm font-medium text-text-primary dark:text-text-primary-dark mb-2 block">Subjects * (select all that apply)</label>
                        <div className="flex flex-wrap gap-2">
                          {subjects.map((s) => (
                            <motion.button
                              key={s}
                              type="button"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleMultiSelect("subjects", s)}
                              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                                formData.subjects.includes(s)
                                  ? "bg-primary text-white shadow-md shadow-primary/20"
                                  : "bg-slate-100 dark:bg-slate-700 text-text-secondary dark:text-text-secondary-dark hover:bg-primary/10"
                              }`}
                            >
                              {s}
                            </motion.button>
                          ))}
                        </div>
                        {errors.subjects && <p className="text-red-500 text-xs mt-2 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.subjects}</p>}
                      </div>

                      <div>
                        <label className="text-sm font-medium text-text-primary dark:text-text-primary-dark mb-2 block">Levels * (select all that apply)</label>
                        <div className="flex flex-wrap gap-2">
                          {levels.map((l) => (
                            <motion.button
                              key={l}
                              type="button"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleMultiSelect("levels", l)}
                              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                                formData.levels.includes(l)
                                  ? "bg-primary text-white shadow-md shadow-primary/20"
                                  : "bg-slate-100 dark:bg-slate-700 text-text-secondary dark:text-text-secondary-dark hover:bg-primary/10"
                              }`}
                            >
                              {l}
                            </motion.button>
                          ))}
                        </div>
                        {errors.levels && <p className="text-red-500 text-xs mt-2 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.levels}</p>}
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-5"
                    >
                      <h2 className="text-xl font-bold mb-6 text-text-primary dark:text-text-primary-dark flex items-center gap-2">
                        <FileText className="w-5 h-5 text-primary" /> Additional Details
                      </h2>

                      <div>
                        <label className="text-sm font-medium text-text-primary dark:text-text-primary-dark mb-1.5 block">
                          Bio / About You * <span className="text-text-secondary dark:text-text-secondary-dark font-normal">(min. 50 characters)</span>
                        </label>
                        <textarea
                          name="bio"
                          value={formData.bio}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Tell us about yourself, your teaching philosophy, and what makes you a great tutor..."
                          className={`w-full px-4 py-3 rounded-xl bg-surface-dim dark:bg-surface-dim-dark border ${errors.bio ? "border-red-500" : "border-slate-200 dark:border-white/10"} text-text-primary dark:text-text-primary-dark placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none`}
                        />
                        <div className="flex justify-between mt-1">
                          {errors.bio && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.bio}</p>}
                          <p className="text-xs text-text-secondary dark:text-text-secondary-dark ml-auto">{formData.bio.length}/50 min</p>
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-text-primary dark:text-text-primary-dark mb-1.5 block">Availability *</label>
                        <select
                          name="availability"
                          value={formData.availability}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl bg-surface-dim dark:bg-surface-dim-dark border ${errors.availability ? "border-red-500" : "border-slate-200 dark:border-white/10"} text-text-primary dark:text-text-primary-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all`}
                        >
                          <option value="">Select...</option>
                          <option value="Weekday mornings">Weekday mornings</option>
                          <option value="Weekday afternoons">Weekday afternoons</option>
                          <option value="Weekday evenings">Weekday evenings</option>
                          <option value="Weekends">Weekends</option>
                          <option value="Flexible">Flexible</option>
                        </select>
                        {errors.availability && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.availability}</p>}
                      </div>

                      <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                        <p className="text-sm text-primary font-medium mb-1">How your application works:</p>
                        <p className="text-sm text-text-secondary dark:text-text-secondary-dark">
                          When you submit, your application details will be sent to our team at{' '}
                           <span className="font-medium text-primary">careers@fanos.et</span>.
                          We will review your application and contact you within 48 hours.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex justify-between mt-8 pt-6 border-t border-slate-200 dark:border-white/5">
                  {step > 1 ? (
                    <motion.button
                      type="button"
                      onClick={prevStep}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-6 py-3 rounded-xl border border-slate-200 dark:border-white/10 text-text-secondary dark:text-text-secondary-dark font-medium hover:bg-surface-dim dark:hover:bg-surface-dim-dark transition-colors"
                    >
                      Previous
                    </motion.button>
                  ) : (
                    <div />
                  )}

                  {step < 3 ? (
                    <motion.button
                      type="button"
                      onClick={nextStep}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow flex items-center gap-2"
                    >
                      Continue <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  ) : (
                    <motion.button
                      type="submit"
                      disabled={submitting}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Application <Send className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>
                  )}
                </div>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
