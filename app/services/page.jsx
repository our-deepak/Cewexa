'use client'
import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { IoIosTrendingUp } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { MdDesignServices } from "react-icons/md";
import { IoTerminal } from "react-icons/io5";
import { FaRocket } from "react-icons/fa";
import Link from "next/link";
export default function Services() {
  useEffect(() => {
    const revealEls = Array.from(document.querySelectorAll(".reveal"));
    const serviceCards = Array.from(document.querySelectorAll(".service-card"));

    const revealCb = (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("play");
          obs.unobserve(entry.target);
        }
      });
    };

    const cardCb = (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute("data-delay") || "0s";
          entry.target.style.animation = `card-enter 0.6s ease-out forwards ${delay}`;
          obs.unobserve(entry.target);
        }
      });
    };

    if ("IntersectionObserver" in window) {
      const obs = new IntersectionObserver(revealCb, { threshold: 0.12 });
      revealEls.forEach((el) => obs.observe(el));

      const cardObs = new IntersectionObserver(cardCb, { threshold: 0.12 });
      serviceCards.forEach((c) => cardObs.observe(c));
      return () => {
        obs.disconnect();
        cardObs.disconnect();
      };
    } else {
      // fallback: immediately reveal all
      revealEls.forEach((el) => el.classNameList.add("play"));
      serviceCards.forEach((c) => {
        const delay = c.getAttribute("data-delay") || "0s";
        c.style.animation = `card-enter 0.6s ease-out forwards ${delay}`;
      });
    }
  }, []);

  return (
    <>
      {/* Inline CSS: keyframes + small helpers so component works without editing tailwind config */}
      <style>{`
        /* Keyframes */
        @keyframes slide-in-left {
          0% { transform: translateX(-150px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes slide-in-right {
          0% { transform: translateX(150px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes fade-in-up {
          0% { transform: translateY(60px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes background-pan {
          0% { background-position: 0% center; }
          100% { background-position: -200% center; }
        }
        @keyframes card-enter {
          0% { opacity: 0; transform: translateY(20px) scale(.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* animation utility classNamees (paused until .play added) */
        .animate-slide-in-left { animation: slide-in-left 1.2s cubic-bezier(0.22,1,0.36,1) both; animation-play-state: paused; opacity: 0; }
        .animate-slide-in-right { animation: slide-in-right 1.2s cubic-bezier(0.22,1,0.36,1) both; animation-play-state: paused; opacity: 0; }
        .animate-fade-in-up { animation: fade-in-up 1.2s cubic-bezier(0.22,1,0.36,1) both; animation-play-state: paused; opacity: 0; }
        .animate-background-pan { animation: background-pan 10s linear infinite; background-size: 300% 100%; }

        /* when observer adds .play the animations run */
        .reveal.play.animate-slide-in-left,
        .animate-slide-in-left.play,
        .reveal.play.animate-slide-in-right,
        .animate-slide-in-right.play,
        .reveal.play.animate-fade-in-up,
        .animate-fade-in-up.play {
          animation-play-state: running;
        }

        /* service cards handled separately by inline animation: card-enter */
        .service-card { opacity: 0; }

        /* material symbols */
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }

        /* small helper for masking overlay in CTA */
        .cta-grid-mask {
          background-image: linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 14px 24px;
          mask-image: radial-gradient(ellipse 50% 50% at 50% 50%, rgba(0,0,0,0.7), transparent 100%);
        }
      `}</style>

      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden dark:bg-gray-950">
        <div className="layout-container flex h-full grow flex-col">
          <main className="flex-1">
            {/* HERO */}
            <section className="py-8 sm:py-12 px-4 sm:px-8">
              <div className="max-w-5xl mx-auto text-center">
                <div className="flex flex-col gap-4 reveal animate-fade-in-up">
                  <h1 className="text-warm-gray-900 text-4xl md:text-6xl font-black leading-tight tracking-tighter dark:text-white">
                    Crafting Digital Excellence, One Pixel at a Time.
                  </h1>
                  <h2 className="text-warm-gray-600 text-lg md:text-xl font-normal leading-normal max-w-3xl mx-auto dark:text-white">
                    We specialize in high-performance websites and strategic
                    digital solutions that elevate your brand and accelerate
                    growth.
                  </h2>
                </div>

                <div
                  className="flex flex-col sm:flex-row gap-4 justify-center mt-8 reveal animate-fade-in-up"
                  style={{ animationDelay: "0.3s" }}
                >
                 <Link href='/contact' className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-orange-500 text-white text-base font-bold leading-normal tracking-wide hover:bg-soft-orange/90 transition-all duration-300 hover:scale-105">
                   <button>
                    <span className="truncate">Get Free Consultation</span>
                  </button>
                 </Link>
                 <Link href='/portfolio' className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white border border-warm-gray-200 text-warm-gray-700 text-base font-bold leading-normal tracking-wide hover:bg-warm-gray-50 transition-all duration-300 hover:scale-105">
                   <button>
                    <span className="truncate">View Our Work</span>
                  </button>
                 </Link>
                </div>
              </div>
            </section>

            {/* SERVICES */}
            <div
              className="flex flex-col gap-16 md:gap-24 overflow-hidden py-20 md:py-24 px-4 sm:px-8"
              id="services"
            >
              {/* first block */}
              <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
                <div className="flex flex-col gap-6 reveal animate-slide-in-left">
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-500/10 dark:bg-orange-200 p-3 rounded-lg text-orange-500 transition-transform duration-500 hover:scale-110 hover:rotate-6">
                      <span className="material-symbols-outlined text-3xl">
                        <FaCode />
                      </span>
                    </div>
                    <h3 className="text-warm-gray-900 text-3xl font-bold leading-tight tracking-tight dark:text-white">
                      Full-Stack Development
                    </h3>
                  </div>
                  <p className="text-warm-gray-600 text-lg font-normal leading-relaxed dark:text-white">
                    We craft custom web and application solutions using
                    cutting-edge tech stacks. Our focus is on building scalable,
                    high-performance products that are as robust and secure as
                    they are beautiful and intuitive.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-warm-gray-700 dark:text-white">
                    <li className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-2">
                      <span className="material-symbols-outlined text-orange-500 text-xl">
                        <FaCheckCircle />
                      </span>
                      High-Performance Architecture
                    </li>
                    <li className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-2">
                      <span className="material-symbols-outlined text-orange-500 text-xl">
                        <FaCheckCircle />
                      </span>
                      Scalable &amp; Secure Solutions
                    </li>
                    <li className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-2">
                      <span className="material-symbols-outlined text-orange-500 text-xl">
                        <FaCheckCircle />
                      </span>
                      Custom-Tailored Features
                    </li>
                    <li className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-2">
                      <span className="material-symbols-outlined text-orange-500 text-xl">
                        <FaCheckCircle />
                      </span>
                      Modern Tech Stacks
                    </li>
                  </ul>
                </div>

                <div
                  className="hidden md:flex relative h-80 lg:h-96 rounded-2xl bg-warm-gray-100 animate-slide-in-right group service-card"
                  data-delay="0.05s"
                >
                  <div className="absolute -top-4 -left-4 w-full h-full bg-orange-500/10 dark:bg-orange-200 rounded-2xl transition-all duration-500 group-hover:-top-6 group-hover:-left-6"></div>
                  <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage:
                        "url('https://res.cloudinary.com/dj1alxa4r/image/upload/v1767707954/fullstack_development_service_uqn3bl.jpg')",
                    }}
                  />
                </div>
              </section>

              {/* second block */}
              <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
                

                <div className="flex flex-col gap-6 reveal animate-slide-in-left">
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-500/10 dark:bg-orange-200 p-3 rounded-lg text-orange-500 transition-transform duration-500 hover:scale-110 hover:rotate-6">
                      <span className="material-symbols-outlined text-3xl">
                        <IoIosSettings />
                      </span>
                    </div>
                    <h3 className="text-warm-gray-900 text-3xl font-bold leading-tight tracking-tight dark:text-white">
                      Website Management
                    </h3>
                  </div>
                  <p className="text-warm-gray-600 text-lg font-normal leading-relaxed dark:text-white">
                    Focus on your business while we handle the technical
                    details. Our comprehensive management service includes
                    reliable maintenance, security updates, and hosting to
                    ensure your site is always fast, secure, and online.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-warm-gray-700 dark:text-white">
                    <li className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-2">
                      <span className="material-symbols-outlined text-orange-500 text-xl">
                        <FaCheckCircle />
                      </span>
                      24/7 Uptime Monitoring
                    </li>
                    <li className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-2">
                      <span className="material-symbols-outlined text-orange-500 text-xl">
                        <FaCheckCircle />
                      </span>
                      Proactive Security Patching
                    </li>
                    <li className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-2">
                      <span className="material-symbols-outlined text-orange-500 text-xl">
                        <FaCheckCircle />
                      </span>
                      Performance Optimization
                    </li>
                    <li className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-2">
                      <span className="material-symbols-outlined text-orange-500 text-xl">
                        <FaCheckCircle />
                      </span>
                      Peace of Mind Included
                    </li>
                  </ul>
                </div>
                <div
                  className="hidden md:flex relative h-80 lg:h-96 rounded-2xl bg-warm-gray-100 lg:order-last animate-slide-in-right group service-card"
                  data-delay="0.1s"
                >
                  <div className="absolute -top-4 -right-4 w-full h-full bg-orange-500/10 dark:bg-orange-200 rounded-2xl transition-all duration-500 group-hover:-top-6 group-hover:-right-6"></div>
                  <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage:
                        "url('https://res.cloudinary.com/dj1alxa4r/image/upload/v1767708136/website_management_service_b372sr.jpg')",
                    }}
                  />
                </div>
              </section>

              {/* third block */}
              <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
                <div className="flex flex-col gap-6 reveal animate-slide-in-left">
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-500/10 dark:bg-orange-200 p-3 rounded-lg text-orange-500 transition-transform duration-500 hover:scale-110 hover:rotate-6">
                      <span className="material-symbols-outlined text-3xl">
                        <IoIosTrendingUp />
                      </span>
                    </div>
                    <h3 className="text-warm-gray-900 text-3xl font-bold leading-tight tracking-tight dark:text-white">
                      Search Engine Optimization
                    </h3>
                  </div>
                  <p className="text-warm-gray-600 text-lg font-normal leading-relaxed dark:text-white">
                    Climb the search rankings and connect with your target
                    audience. We employ proven, data-driven SEO strategies to
                    increase your visibility, drive qualified organic traffic,
                    and convert visitors into customers.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-warm-gray-700 dark:text-white">
                    <li className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-2">
                      <span className="material-symbols-outlined text-orange-500 text-xl">
                        <FaCheckCircle />
                      </span>
                      Increased Organic Traffic
                    </li>
                    <li className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-2">
                      <span className="material-symbols-outlined text-orange-500 text-xl">
                        <FaCheckCircle />
                      </span>
                      Higher Search Rankings
                    </li>
                    <li className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-2 ">
                      <span className="material-symbols-outlined text-orange-500 text-xl">
                        <FaCheckCircle />
                      </span>
                      Technical SEO Audits
                    </li>
                    <li className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-2">
                      <span className="material-symbols-outlined text-orange-500 text-xl">
                        <FaCheckCircle />
                      </span>
                      Data-Driven Analytics
                    </li>
                  </ul>
                </div>

                <div
                  className="hidden md:flex relative h-80 lg:h-96 rounded-2xl bg-warm-gray-100 animate-slide-in-right group service-card"
                  data-delay="0.15s"
                >
                  <div className="absolute -bottom-4 -left-4 w-full h-full bg-orange-500/10 dark:bg-orange-200 rounded-2xl transition-all duration-500 group-hover:-bottom-6 group-hover:-left-6"></div>
                  <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage:
                        "url('https://res.cloudinary.com/dj1alxa4r/image/upload/v1767708367/photo-1674027001834-719c347d1eca_sb7a54.avif')",
                    }}
                  />
                </div>
              </section>

              {/* fourth block */}
              <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
                <div className="flex flex-col gap-6 reveal animate-slide-in-left">
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-500/10 dark:bg-orange-200 p-3 rounded-lg text-orange-500 transition-transform duration-500 hover:scale-110 hover:rotate-6">
                      <span className="material-symbols-outlined text-3xl">
                        <MdGroups />
                      </span>
                    </div>
                    <h3 className="text-warm-gray-900 text-3xl font-bold leading-tight tracking-tight dark:text-white">
                      Social Media Solutions
                    </h3>
                  </div>
                  <p className="text-warm-gray-600 text-lg font-normal leading-relaxed dark:text-white">
                    Build a thriving community around your brand. We create
                    engaging content and manage strategic campaigns to grow your
                    audience, boost engagement, and convert followers into loyal
                    advocates.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-warm-gray-700 dark:text-white">
                    <li className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-2">
                      <span className="material-symbols-outlined text-orange-500 text-xl">
                        <FaCheckCircle />
                      </span>
                      Enhanced Brand Engagement
                    </li>
                    <li className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-2">
                      <span className="material-symbols-outlined text-orange-500 text-xl">
                        <FaCheckCircle />
                      </span>
                      Targeted Audience Growth
                    </li>
                    <li className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-2">
                      <span className="material-symbols-outlined text-orange-500 text-xl">
                        <FaCheckCircle />
                      </span>
                      Compelling Content Creation
                    </li>
                    <li className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-2">
                      <span className="material-symbols-outlined text-orange-500 text-xl">
                        <FaCheckCircle />
                      </span>
                      Lead Generation &amp; Conversion
                    </li>
                  </ul>
                </div>
                <div
                  className="hidden md:flex relative h-80 lg:h-96 rounded-2xl bg-warm-gray-100 lg:order-last animate-slide-in-right group service-card"
                  data-delay="0.2s"
                >
                  <div className="absolute -bottom-4 -right-4 w-full h-full bg-orange-500/10 dark:bg-orange-200 rounded-2xl transition-all duration-500 group-hover:-bottom-6 group-hover:-right-6"></div>
                  <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage:
                        "url('https://res.cloudinary.com/dj1alxa4r/image/upload/v1767708046/social_media_solutions_service_jcgkpf.png')",
                    }}
                  />
                </div>
              </section>
            </div>

            {/* PROCESS */}
            <section className="py-20 md:py-24 px-4 sm:px-8 bg-warm-gray-100">
              <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">
                <div className="flex flex-col gap-4 text-center">
                  <h2 className="text-orange-500 font-semibold text-sm tracking-widest uppercase">
                    Our Process
                  </h2>
                  <p className="text-warm-gray-900 text-3xl md:text-4xl font-bold leading-tight tracking-tight max-w-2xl mx-auto dark:text-white">
                    A Simple Path to Digital Excellence
                  </p>
                </div>
                <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-4 w-full">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center justify-center size-12 rounded-full bg-orange-500/10 dark:bg-orange-200 text-orange-500 transition-transform duration-300 hover:scale-110">
                      <span className="material-symbols-outlined">
                        <IoMdSearch className="size-8" />
                      </span>
                    </div>
                    <div className="w-px bg-warm-gray-300 grow"></div>
                  </div>
                  <div className="flex flex-col py-2 transition-transform duration-300 hover:translate-x-2">
                    <p className="text-warm-gray-900 text-lg font-bold leading-normal dark:text-white">
                      1. Discover
                    </p>
                    <p className="text-warm-gray-600 text-base font-normal leading- dark:text-white">
                      We start by understanding your goals, audience, and
                      project requirements through in-depth consultation.
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center justify-center size-12 rounded-full bg-orange-500/10 dark:bg-orange-200 text-orange-500 transition-transform duration-300 hover:scale-110">
                      <span className="material-symbols-outlined">
                        <MdDesignServices className="size-8" />
                      </span>
                    </div>
                    <div className="w-px bg-warm-gray-300 grow"></div>
                  </div>
                  <div className="flex flex-col py-2 transition-transform duration-300 hover:translate-x-2">
                    <p className="text-warm-gray-900 text-lg font-bold leading-normal dark:text-white">
                      2. Design
                    </p>
                    <p className="text-warm-gray-600 text-base font-normal leading-normal dark:text-white">
                      Our team creates wireframes and high-fidelity mockups,
                      focusing on user experience and a clean aesthetic.
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center justify-center size-12 rounded-full bg-orange-500/10 dark:bg-orange-200 text-orange-500 transition-transform duration-300 hover:scale-110">
                      <span className="material-symbols-outlined">
                        <IoTerminal className="size-8" />
                      </span>
                    </div>
                    <div className="w-px bg-warm-gray-300 grow"></div>
                  </div>
                  <div className="flex flex-col py-2 transition-transform duration-300 hover:translate-x-2">
                    <p className="text-warm-gray-900 text-lg font-bold leading-normal dark:text-white">
                      3. Develop
                    </p>
                    <p className="text-warm-gray-600 text-base font-normal leading-normal dark:text-white">
                      Using modern technologies, we build a fast, scalable, and
                      secure solution tailored to your needs.
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center justify-center size-12 rounded-full bg-orange-500/10 dark:bg-orange-200 text-orange-500 transition-transform duration-300 hover:scale-110">
                      <span className="material-symbols-outlined">
                        <FaRocket className="size-8" />
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col py-2 transition-transform duration-300 hover:translate-x-2">
                    <p className="text-warm-gray-900 text-lg font-bold leading-normal dark:text-white">
                      4. Deploy
                    </p>
                    <p className="text-warm-gray-600 text-base font-normal leading-normal dark:text-white">
                      After rigorous testing, we launch your project and provide
                      ongoing support to ensure its success.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="py-20 md:py-24 px-4 sm:px-8 relative overflow-hidden">
              <div className="max-w-3xl mx-auto bg-orange-500 rounded-2xl p-8 md:p-12 text-center text-white relative z-10">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                      Ready to Start Your Project?
                    </h2>
                    <p className="text-base font-normal leading-normal opacity-90 max-w-xl mx-auto">
                      Lets discuss how Cewexa can help you achieve your
                      business goals. Get in touch for a free, no-obligation
                      consultation.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <a href="/contact">
                      <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white text-orange-500 text-base font-bold leading-normal tracking-wide hover:bg-white/90 transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-white/40">
                        <span className="truncate">Contact Us Today</span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#212529_1px,transparent_1px),linear-gradient(to_bottom,#212529_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
              <div className="absolute inset-x-0 bottom-0 z-0 h-3/4 bg-linear-to-t from-background-light to-transparent"></div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}