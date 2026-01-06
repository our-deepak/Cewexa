'use client'
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
import { IoMail, IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

/* EmailJS constants */
const EMAILJS_SERVICE_ID = "service_l4bog8e";
const EMAILJS_TEMPLATE_ID = "template_xbskbkv";
const EMAILJS_PUBLIC_KEY = "mNYBO48QoZATu-OTv";

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const formRef = useRef();

  // Robust reveal: observer + fallback + ensure visible on mount
  useEffect(() => {
    const revealEls = Array.from(document.querySelectorAll(".reveal, .slide-up, .slide-left"));
    const cardEls = Array.from(document.querySelectorAll(".card"));

    // If no elements, nothing to do
    if (revealEls.length === 0 && cardEls.length === 0) return;

    // Helper to immediately show element (used as fallback/guarantee)
    const showNow = (el) => {
      el.classList.add("enter");
    };

    // IntersectionObserver callbacks
    const revealCb = (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("enter");
          obs.unobserve(entry.target);
        }
      });
    };

    const cardCb = (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = Number(entry.target.dataset.delayIndex || entry.target.dataset.index || 0);
          entry.target.style.animationDelay = `${idx * 80}ms`;
          entry.target.classList.add("card-enter");
          obs.unobserve(entry.target);
        }
      });
    };

    // If IntersectionObserver available, observe; otherwise reveal immediately
    if ("IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver(revealCb, { threshold: 0.12 });
      revealEls.forEach((el) => revealObserver.observe(el));

      const cardObserver = new IntersectionObserver(cardCb, { threshold: 0.12 });
      cardEls.forEach((el, i) => {
        // set a data-delay-index to control stagger when observed
        if (!el.dataset.delayIndex) el.dataset.delayIndex = i;
        cardObserver.observe(el);
      });

      // Failsafe: after 600ms, ensure any still-hidden reveals become visible
      const failSafe = setTimeout(() => {
        revealEls.forEach((el) => {
          if (!el.classList.contains("enter")) showNow(el);
        });
      }, 600);

      return () => {
        revealObserver.disconnect();
        cardObserver.disconnect();
        clearTimeout(failSafe);
      };
    } else {
      // fallback
      revealEls.forEach(showNow);
      cardEls.forEach((el, i) => {
        el.style.animationDelay = `${i * 80}ms`;
        el.classList.add("card-enter");
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const validate = () => {
    const err = {};
    if (!formData.name.trim()) err.name = "Name is required";

    if (!formData.email.trim()) err.email = "Email is required";
    else {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(formData.email.trim())) err.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      err.phone = "Phone number is required";
    } else {
      const phoneClean = formData.phone.replace(/[^0-9]/g, "");
      if (phoneClean.length < 7) err.phone = "Enter a valid phone number";
    }

    if (!formData.service || formData.service === "") err.service = "Select a service";
    if (!formData.message.trim()) err.message = "Message is required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    if (!validate()) {
      toast.error("Please fix the highlighted fields.");
      return;
    }

    setSending(true);

    const templateParams = {
      name: formData.name,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
    };

    const sendPromise = emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    toast.promise(
      sendPromise,
      {
        loading: "Sending your message...",
        success: "Message sent successfully!",
        error: "Failed to send message. Try again!",
      },
      { position: "bottom-center" }
    );

    try {
      const result = await sendPromise;
      console.log("EmailJS result:", result);
      setFormData(initialForm);
      setErrors({});
      if (formRef.current) formRef.current.reset();
    } catch (err) {
      console.error("EmailJS Error:", err);
    } finally {
      setSending(false);
    }
  };

  // helper class for inputs with error
  const inputErrorClass = (field) => (errors[field] ? "ring-2 ring-red-500/80" : "ring-1 ring-stone-300");

  return (
    <>
      <Toaster />
      {/* Inline styles to preserve animations and ensure visible fallback */}
      <style>{`
        /* keyframes */
        @keyframes slideInUp { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes slideInLeft { 0% { opacity: 0; transform: translateX(-24px); } 100% { opacity: 1; transform: translateX(0); } }
        @keyframes cardPop { 0% { opacity: 0; transform: translateY(18px) scale(.98); } 100% { opacity: 1; transform: translateY(0) scale(1); } }

        /* reveal helpers - default hidden until '.enter' applied */
        .reveal, .slide-up, .slide-left { opacity: 0; transform: translateY(8px); transition: opacity .45s ease, transform .45s ease; }
        .reveal.enter { opacity: 1; transform: translateY(0); transition-duration: .5s; }
        .slide-up.enter { animation: slideInUp .65s cubic-bezier(.2,.9,.3,1) forwards; }
        .slide-left.enter { animation: slideInLeft .65s cubic-bezier(.2,.9,.3,1) forwards; }

        /* card entrance (staggered) */
        .card { opacity: 0; transform: translateY(12px); }
        .card.card-enter { animation: cardPop 520ms cubic-bezier(.2,.9,.3,1) forwards; }

        /* hover micro interactions */
        .card .cover { transition: transform .5s cubic-bezier(.2,.9,.3,1); will-change: transform; }
        .card:hover .cover { transform: scale(1.04); }
        .card .label { transition: transform .25s ease, opacity .25s ease; }
        .card:hover .label { transform: translateY(-6px) scale(1.03); opacity: 1; }

        /* decreased motion preference */
        @media (prefers-reduced-motion: reduce) {
          .reveal, .slide-up, .slide-left, .card { transition: none !important; animation: none !important; transform: none !important; opacity: 1 !important; }
        }
      `}</style>

      <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <main className="flex-1 px-4 py-4 sm:px-6 lg:px-8 sm:py-12">
            <div className="max-w-7xl mx-auto">
              <div className="relative">
                <div className="absolute inset-0.5 -z-10 rounded-3xl bg-linear-to-tr from-amber-500 via-orange-500 to-red-500 blur-2xl opacity-20 animate-background-pan" style={{ backgroundSize: "300% 300%" }} />

                <div className="grid grid-cols-1 lg:grid-cols-2 bg-white/70 backdrop-blur-xl border dark:bg-black/50 rounded-2xl overflow-hidden shadow-2xl shadow-stone-500/10">
                  <div className="p-8 sm:p-12 order-last lg:order-first">
                    <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-white sm:text-4xl reveal slide-left dark:text-white">
                      Get in Touch
                    </h2>

                    <p className="mt-4 text-lg text-stone-600 reveal slide-up dark:text-gray-300">
                      Have a project in mind or just want to say hello? Fill out the form and our team will get back to you shortly.
                    </p>

                    <p className="text-sm text-stone-500 mt-4 reveal dark:text-gray-300">
                      Fields marked with <span className="text-red-600">*</span> are required.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-10 space-y-6 reveal" method="POST" noValidate>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                        <div className="slide-up">
                          <label htmlFor="name" className="block text-sm font-medium text-stone-800 mb-1 dark:text-gray-300">
                            Your Name <span className="text-red-600">*</span>
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            aria-invalid={!!errors.name}
                            aria-describedby={errors.name ? "err-name" : undefined}
                            placeholder="Your Name"
                            className={`form-input block w-full rounded-md border-0 bg-stone-100/50 dark:bg-black py-3 px-4 text-stone-900 dark:text-white shadow-sm placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-primary focus:scale-105 sm:text-sm sm:leading-6 transition-all ${inputErrorClass("name")}`}
                          />
                          {errors.name && <p id="err-name" className="mt-1 text-sm text-red-600">{errors.name}</p>}
                        </div>

                        <div className="slide-up" style={{ animationDelay: "60ms" }}>
                          <label htmlFor="company" className="block text-sm font-medium text-stone-800 mb-1 dark:text-gray-300">Company</label>
                          <input
                            id="company"
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Company Name (optional)"
                            className="form-input block w-full rounded-md border-0 bg-stone-100/50 dark:bg-black py-3 px-4 text-stone-900 dark:text-white shadow-sm ring-1 ring-stone-300 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-primary focus:scale-105 sm:text-sm sm:leading-6 transition-all"
                          />
                        </div>

                        <div className="slide-up" style={{ animationDelay: "120ms" }}>
                          <label htmlFor="email" className="block text-sm font-medium text-stone-800 mb-1 dark:text-gray-300">
                            Email <span className="text-red-600">*</span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? "err-email" : undefined}
                            placeholder="you@example.com"
                            className={`form-input block w-full rounded-md border-0 bg-stone-100/50 dark:bg-black py-3 px-4 text-stone-900 dark:text-white shadow-sm placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-primary focus:scale-105 sm:text-sm sm:leading-6 transition-all ${inputErrorClass("email")}`}
                          />
                          {errors.email && <p id="err-email" className="mt-1 text-sm text-red-600">{errors.email}</p>}
                        </div>

                        <div className="slide-up" style={{ animationDelay: "160ms" }}>
                          <label htmlFor="phone" className="block text-sm font-medium text-stone-800 mb-1 dark:text-gray-300">
                            Phone <span className="text-red-600">*</span>
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            aria-invalid={!!errors.phone}
                            aria-describedby={errors.phone ? "err-phone" : undefined}
                            placeholder="(555) 123-4567"
                            className={`form-input block w-full rounded-md border-0 bg-stone-100/50 dark:bg-black py-3 px-4 text-stone-900 dark:text-white shadow-sm placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-primary focus:scale-105 sm:text-sm sm:leading-6 transition-all ${inputErrorClass("phone")}`}
                          />
                          {errors.phone && <p id="err-phone" className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                        </div>

                        <div className="sm:col-span-2 slide-up" style={{ animationDelay: "200ms" }}>
                          <label htmlFor="service" className="block text-sm font-medium text-stone-800 mb-1 dark:text-gray-300">
                            How can we help you? <span className="text-red-600">*</span>
                          </label>
                          <select
                            id="service"
                            name="service"
                            required
                            value={formData.service}
                            onChange={handleChange}
                            aria-invalid={!!errors.service}
                            aria-describedby={errors.service ? "err-service" : undefined}
                            className={`form-select block w-full rounded-md border-0 bg-stone-100/50 dark:bg-black py-3 px-4 text-stone-900 dark:text-white shadow-sm placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-primary focus:scale-105 sm:text-sm sm:leading-6 transition-all ${inputErrorClass("service")}`}
                          >
                            <option value="">Select a service</option>
                            <option value="web-development">Web Development</option>
                            <option value="website-management">Website Management</option>
                            <option value="seo">SEO</option>
                            <option value="social-media">Social Media Solutions</option>
                            <option value="other">Other</option>
                          </select>
                          {errors.service && <p id="err-service" className="mt-1 text-sm text-red-600">{errors.service}</p>}
                        </div>

                        <div className="sm:col-span-2 slide-up" style={{ animationDelay: "240ms" }}>
                          <label htmlFor="message" className="block text-sm font-medium text-stone-800 mb-1 dark:text-gray-300">
                            Message <span className="text-red-600">*</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            aria-invalid={!!errors.message}
                            aria-describedby={errors.message ? "err-message" : undefined}
                            placeholder="Tell us about your project..."
                            rows="5"
                            className={`form-textarea block w-full rounded-md border-0 bg-stone-100/50 dark:bg-black py-3 px-4 text-stone-900 dark:text-white shadow-sm placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-primary focus:scale-105 sm:text-sm sm:leading-6 transition-all ${inputErrorClass("message")}`}
                          />
                          {errors.message && <p id="err-message" className="mt-1 text-sm text-red-600">{errors.message}</p>}
                        </div>
                      </div>

                      <div className="mt-8 reveal" style={{ animationDelay: "300ms" }}>
                        <button
                          type="submit"
                          disabled={sending}
                          className={`group relative flex w-full items-center justify-center overflow-hidden rounded-lg h-12 px-6 text-base font-bold leading-normal tracking-[0.015em] transition-transform duration-300 ease-in-out ${sending ? "bg-orange-300 cursor-not-allowed" : "bg-orange-500 hover:scale-105"} text-white`}
                        >
                          <span className="absolute inset-0 bg-linear-to-r from-white/20 to-transparent transition-transform duration-500 ease-in-out group-hover:translate-x-full" />
                          <span className="truncate">{sending ? "Sending..." : "Send Message"}</span>
                        </button>
                      </div>
                    </form>
                  </div>

                  <div className="p-8 sm:p-12 bg-orange-100/40 dark:bg-gray-950 flex flex-col">
                    <div className="slide-up">
                      <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-white sm:text-4xl dark:text-white">Let us Connect</h2>
                      <p className="mt-4 text-lg text-stone-600 dark:text-white">We are always excited to hear about new ideas. Here are a few ways to reach us.</p>
                    </div>

                    <div className="mt-12 space-y-8">
                      <a className="flex items-start gap-5 group card" data-delay-index="0" href="mailto:enquiry@cewexa.com">
                        <div className="shrink-0 size-12 rounded-lg bg-orange-200 dark:bg-gray-800 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12">
                          <IoMail className="text-orange-400 text-3xl" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-stone-900 dark:text-white dark:text-white">Email Us</h3>
                          <p className="text-stone-600 mt-1 dark:text-gray-300">For direct inquiries.</p>
                          <p className="text-primary font-medium mt-2 inline-block dark:text-white">enquiry@cewexa.com</p>
                        </div>
                      </a>

                      <a className="flex items-start gap-5 group card" data-delay-index="1" href="tel:+918441006695">
                        <div className="shrink-0 size-12 rounded-lg bg-orange-200 dark:bg-gray-800 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12">
                          <IoCall className="text-orange-400 text-3xl" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-stone-900 dark:text-white dark:text-white">Call Us</h3>
                          <p className="text-stone-600 mt-1 dark:text-gray-300 ">Speak with our team directly.</p>
                          <p className="text-primary font-medium mt-2 dark:text-white">+91-8441006695</p>
                        </div>
                      </a>

                      <a className="flex items-start gap-5 group card" data-delay-index="2" href="https://wa.me/918441006695" target="_blank" rel="noreferrer">
                        <div className="shrink-0 size-12 rounded-lg bg-orange-200 dark:bg-gray-800 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12">
                          <FaWhatsapp className="text-orange-400 text-3xl" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-stone-900 dark:text-white dark:text-white">WhatsApp Us</h3>
                          <p className="text-stone-600 mt-1 dark:text-gray-300">Chat on WhatsApp.</p>
                          <p className="text-primary font-medium mt-2 dark:text-white">+91-8441006695</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                {/* add additional animated sections here (FAQ etc) by using .reveal or .card classes */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
