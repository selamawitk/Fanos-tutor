"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: ["+251 911 234 567", "+251 911 234 568"],
    action: "tel:+251911234567",
    color: "from-primary to-primary-dark",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@fanos.et", "support@fanos.et"],
    action: "mailto:info@fanos.et",
    color: "from-secondary-dark to-secondary",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Bole Road, Addis Ababa", "Ethiopia"],
    action: null,
    color: "from-accent to-accent-dark",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 7AM - 9PM", "Sun: 9AM - 5PM"],
    action: null,
    color: "from-primary to-secondary",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));

    const mailtoLink = document.createElement("a");
    mailtoLink.href = `mailto:info@fanos.et?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "N/A"}\n\nMessage:\n${formData.message}`
    )}`;
    mailtoLink.click();

    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="pt-[36px] pb-20">
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-text-primary dark:text-text-primary-dark tracking-tight">
              We Would Love to <span className="text-primary">Hear from You</span>
            </h1>
            <p className="text-base sm:text-lg text-text-secondary dark:text-text-secondary-dark leading-relaxed">
              Have questions about our tutoring services? Want to enroll your
              child? Or interested in becoming a tutor? Reach out to us!
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 sm:mb-16">
            {contactInfo.map((info, i) => (
              <AnimatedSection key={info.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`p-6 rounded-2xl bg-white dark:bg-surface-dim-dark shadow-sm border border-slate-200 dark:border-white/5 text-center h-full ${info.action ? "cursor-pointer hover:border-primary/30" : ""}`}
                  onClick={info.action ? () => window.location.href = info.action! : undefined}
                >
                  <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <info.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-text-primary dark:text-text-primary-dark">
                    {info.title}
                  </h3>
                  {info.details.map((d) => (
                    <p key={d} className="text-sm text-text-secondary dark:text-text-secondary-dark">
                      {d}
                    </p>
                  ))}
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            <AnimatedSection className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white dark:bg-surface-dim-dark rounded-2xl shadow-sm border border-slate-200 dark:border-white/5 p-6 sm:p-10 text-center"
                >
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-6 shadow-xl shadow-primary/30">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-text-primary dark:text-text-primary-dark">
                    Message Sent Successfully!
                  </h2>
                  <p className="text-text-secondary dark:text-text-secondary-dark mb-6">
                    Thank you for contacting Fanos Home Tutor. We will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
                    }}
                    className="px-6 py-2 rounded-xl bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white dark:bg-surface-dim-dark rounded-2xl shadow-sm border border-slate-200 dark:border-white/5 p-5 sm:p-8">
                  <h2 className="text-xl font-bold mb-6 text-text-primary dark:text-text-primary-dark flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-primary" /> Send Us a Message
                  </h2>

                  <div className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-text-primary dark:text-text-primary-dark mb-1.5 block">Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Full name"
                          className={`w-full px-4 py-3 rounded-xl bg-surface-dim dark:bg-surface-dim-dark border ${errors.name ? "border-red-500" : "border-slate-200 dark:border-white/10"} text-text-primary dark:text-text-primary-dark placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
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
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-text-primary dark:text-text-primary-dark mb-1.5 block">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+251 9XX XXX XXX"
                          className="w-full px-4 py-3 rounded-xl bg-surface-dim dark:bg-surface-dim-dark border border-slate-200 dark:border-white/10 text-text-primary dark:text-text-primary-dark placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-text-primary dark:text-text-primary-dark mb-1.5 block">Subject *</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl bg-surface-dim dark:bg-surface-dim-dark border ${errors.subject ? "border-red-500" : "border-slate-200 dark:border-white/10"} text-text-primary dark:text-text-primary-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all`}
                        >
                          <option value="">Select a subject</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Tutoring Enrollment">Tutoring Enrollment</option>
                          <option value="Become a Tutor">Become a Tutor</option>
                          <option value="Pricing Information">Pricing Information</option>
                          <option value="Technical Support">Technical Support</option>
                          <option value="Partnership">Partnership</option>
                          <option value="Other">Other</option>
                        </select>
                        {errors.subject && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.subject}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-text-primary dark:text-text-primary-dark mb-1.5 block">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us how we can help you..."
                        className={`w-full px-4 py-3 rounded-xl bg-surface-dim dark:bg-surface-dim-dark border ${errors.message ? "border-red-500" : "border-slate-200 dark:border-white/10"} text-text-primary dark:text-text-primary-dark placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none`}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.message}</p>}
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-6 w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {submitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="lg:col-span-2">
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-6 sm:p-8 text-white h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-3">Prefer to Talk?</h3>
                <p className="text-white/80 mb-6 sm:mb-8 leading-relaxed">
                  Give us a call or visit our office in Addis Ababa. Our team
                  is ready to help you find the perfect tutor for your needs.
                </p>

                <div className="space-y-4 sm:space-y-5 flex-1">
                  <a
                    href="tel:+251911234567"
                    className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-white/70">Call anytime</p>
                      <p className="text-lg font-bold">+251 911 234 567</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@fanos.et"
                    className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-white/70">Email us</p>
                      <p className="text-lg font-bold">info@fanos.et</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-white/10">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-white/70">Office</p>
                      <p className="text-lg font-bold">Bole Road, Addis Ababa</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-sm text-white/60 text-center">
                    Available Mon-Sat 7AM-9PM, Sun 9AM-5PM (EAT)
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
