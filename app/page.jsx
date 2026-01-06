"use client";

import React, { useEffect } from "react";
import { FaCode, FaRocket } from "react-icons/fa";
import { IoIosSettings, IoIosTrendingUp } from "react-icons/io";
import { MdGroups, MdQueryStats, MdOutlineSupportAgent } from "react-icons/md";

export default function Page() {
  useEffect(() => {
    const animatedElements = Array.from(
      document.querySelectorAll(".animate-on-scroll")
    );
    const serviceCards = Array.from(
      document.querySelectorAll(".service-card")
    );

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    };

    const serviceCardObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute("data-delay") || "0s";
          entry.target.style.animation = `card-enter 0.6s ease-out forwards ${delay}`;
          observer.unobserve(entry.target);
        }
      });
    };

    if (!("IntersectionObserver" in window)) {
      animatedElements.forEach((el) => el.classList.add("visible"));
      serviceCards.forEach((card) => (card.style.opacity = 1));
      return;
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.12,
    });
    animatedElements.forEach((el) => observer.observe(el));

    const cardObserver = new IntersectionObserver(
      serviceCardObserverCallback,
      { threshold: 0.12 }
    );
    serviceCards.forEach((card) => cardObserver.observe(card));

    return () => {
      observer.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* Inline CSS for keyframes & helper classes */}
      <style>{`
        @keyframes gradient-fade {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes subtle-bob {
          0%,100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.05); }
        }
        @keyframes slide-in {
          0% { opacity: 0; transform: translateY(40px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes text-focus-in {
          0% { filter: blur(12px); opacity: 0; }
          100% { filter: blur(0px); opacity: 1; }
        }
        @keyframes fade-in { 0% { opacity: 0 } 100% { opacity: 1 } }
        @keyframes card-enter {
          0% { opacity: 0; transform: translateY(20px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes hero-glow {
          0%,100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.1); }
        }

        .animate-gradient-fade {
          animation: gradient-fade 6s ease infinite;
          background-size:200% 200%;
        }
        .animate-subtle-bob {
          animation: subtle-bob 3s ease-in-out infinite;
        }
        .animate-slide-in {
          animation: slide-in 0.8s cubic-bezier(0.25,0.46,0.45,0.94) forwards;
        }
        .animate-text-focus {
          animation: text-focus-in 1s cubic-bezier(0.55,0.085,0.68,0.53) forwards;
        }
        .animate-fade {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-hero-glow {
          animation: hero-glow 5s ease-in-out infinite;
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(12px);
        }
        .animate-on-scroll.visible.animate-slide-in-2 {
          animation: text-focus-in 1s cubic-bezier(0.55,0.085,0.68,0.53) 0s forwards;
        }
        .animate-on-scroll.visible.animate-slide-in-3 {
          animation: slide-in 0.8s cubic-bezier(0.25,0.46,0.45,0.94) 0.15s forwards;
        }
        .animate-on-scroll.visible.animate-slide-in-4 {
          animation: slide-in 0.8s cubic-bezier(0.25,0.46,0.45,0.94) 0.35s forwards;
        }
        .animate-on-scroll.visible.animate-fade-in {
          animation: fade-in 0.9s ease-out 0.1s forwards;
        }

        .animate-slide-in-2 { opacity: 0; }
        .animate-slide-in-3 { opacity: 0; }
        .animate-slide-in-4 { opacity: 0; }

        .service-card { opacity: 0; }

        .cta-bg-gradient {
          background-size: 200% 200%;
          background-image: linear-gradient(
            90deg,
            #FFFFFF 0%,
            #FFF8E1 50%,
            #FFFFFF 100%
          );
        }

        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }

        .hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
        }

        .layout-content-container {
          max-width: 80rem;
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>

      <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden dark:bg-gray-950">
        <div className="layout-container flex h-full grow flex-col">
          <main className="flex flex-col flex-1 justify-center pb-5 sm:pb-10 md:pb-16">
          {/* HERO */}
           <div className="relative flex min-h-[60vh] md:min-h-[75vh] flex-col gap-8 items-center justify-center text-center sm:h-[calc(100vh-96px)] py-10 overflow-hidden">
                <div className="absolute inset-0 w-full h-full z-0">
                  <video
                    className="hero-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="hero.mp4"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute inset-0 " />
                </div>

                <div className="relative z-10 flex flex-col gap-6 max-w-4xl items-center">
                  <h1 className="animate-on-scroll animate-slide-in-2 text-white text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter">
                    Cewexa - Where Speed Meets Performance.
                  </h1>

                  <p className="animate-on-scroll animate-slide-in-3 text-white text-base sm:text-lg md:text-2xl font-normal leading-relaxed">
                    Innovate with Us.
                  </p>

                  <div className="animate-on-scroll animate-slide-in-4 flex flex-col sm:flex-row items-center gap-4 pt-4">
                    <a href="/services">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary text-background-dark text-base font-bold leading-normal tracking-[-0.015em] hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 bg-orange-400">
                      <span className="truncate">Get Started</span>
                    </button>
                    </a>

                  <a href="/portfolio">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-light-card/50 text-white border border-white backdrop-blur-sm text-base font-bold leading-normal tracking-[-0.015em] hover:bg-light-card transition-all duration-300 transform hover:scale-105">
                      <span className="truncate">View Our Work</span>
                    </button>
                  </a>
                  </div>
                </div>
              </div>
            <div className="layout-content-container flex flex-col max-w-5xl flex-1 px-4 sm:px-6 md:px-8 space-y-24 sm:space-y-32 md:space-y-40">
              {/* SERVICES */}
              <div className="flex flex-col gap-10 animate-on-scroll animate-fade-in mt-10">
                <div className="flex flex-col items-center text-center gap-4">
                  <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tighter max-w-lg text-light-text-primary dark:text-white">
                    Our Core Services
                  </h2>
                  <p className="text-base font-normal leading-normal max-w-2xl text-light-text-secondary dark:text-white">
                    A complete suite of services to build, manage, and grow your
                    online presence.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  <div
                    className="service-card group flex flex-1 gap-4 rounded-xl border border-light-border bg-light-card p-6 flex-col items-start text-left hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 dark:bg-amber-50"
                    data-delay="0.1s"
                  >
                    <div className="bg-orange-500/10 p-3 rounded-lg text-orange-500 transition-transform duration-500 hover:scale-110 hover:rotate-6">
                      <span className="material-symbols-outlined text-3xl">
                        <FaCode />
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-bold leading-tight text-light-text-primary">
                        Full-Stack Development
                      </h3>
                      <p className="text-sm font-normal leading-normal text-light-text-secondary">
                        Creating robust, scalable, and high-speed web
                        applications from front to back.
                      </p>
                    </div>
                  </div>

                  <div
                    className="service-card group flex flex-1 gap-4 rounded-xl border border-light-border bg-light-card p-6 flex-col items-start text-left hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 dark:bg-amber-50"
                    data-delay="0.2s"
                  >
                    <div className="bg-orange-500/10 p-3 rounded-lg text-orange-500 transition-transform duration-500 hover:scale-110 hover:rotate-6">
                      <span className="material-symbols-outlined text-3xl">
                        <IoIosSettings />
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-bold leading-tight text-light-text-primary">
                        Website Management
                      </h3>
                      <p className="text-sm font-normal leading-normal text-light-text-secondary">
                        Ensuring your website is always secure, updated, and
                        performing at its peak.
                      </p>
                    </div>
                  </div>

                  <div
                    className="service-card group flex flex-1 gap-4 rounded-xl border border-light-border bg-light-card p-6 flex-col items-start text-left hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 dark:bg-amber-50"
                    data-delay="0.3s"
                  >
                    <div className="bg-orange-500/10 p-3 rounded-lg text-orange-500 transition-transform duration-500 hover:scale-110 hover:rotate-6">
                      <span className="material-symbols-outlined text-3xl">
                        <IoIosTrendingUp />
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-bold leading-tight text-light-text-primary">
                        SEO Optimization
                      </h3>
                      <p className="text-sm font-normal leading-normal text-light-text-secondary">
                        Boosting your visibility on search engines to attract
                        more organic traffic.
                      </p>
                    </div>
                  </div>

                  <div
                    className="service-card group flex flex-1 gap-4 rounded-xl border border-light-border bg-light-card p-6 flex-col items-start text-left hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 dark:bg-amber-50"
                    data-delay="0.4s"
                  >
                    <div className="bg-orange-500/10 p-3 rounded-lg text-orange-500 transition-transform duration-500 hover:scale-110 hover:rotate-6">
                      <span className="material-symbols-outlined text-3xl">
                        <MdGroups />
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-bold leading-tight text-light-text-primary">
                        Social Media Solutions
                      </h3>
                      <p className="text-sm font-normal leading-normal text-light-text-secondary">
                        Crafting engaging social media strategies to connect
                        with your audience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* DIFFERENCE & CARDS */}
              <div className="flex flex-col items-center gap-12 animate-on-scroll animate-fade-in">
                <div className="flex flex-col items-center text-center gap-4">
                  <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tighter max-w-lg text-light-text-primary dark:text-white">
                    The Cewexa Difference
                  </h2>
                  <p className="text-base font-normal leading-normal max-w-2xl text-light-text-secondary dark:text-white">
                    We are committed to delivering excellence through our core
                    values, ensuring your success is our top priority.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center ">
                  <div className="flex flex-col items-center gap-4 p-6 rounded-lg group">
                    <div className="p-4 bg-light-card border border-light-border dark:border-white rounded-full animate-subtle-bob group-hover:animate-none transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20 ">
                      <span className="material-symbols-outlined text-primary text-4xl text-orange-400">
                        <FaRocket />
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-light-text-primary dark:text-white">
                      Unmatched Speed
                    </h3>
                    <p className="text-light-text-secondary dark:text-gray-300">
                      We build for performance from the ground up, ensuring your
                      digital assets are lightning-fast.
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-4 p-6 rounded-lg group">
                    <div
                      className="p-4 bg-light-card border border-light-border dark:border-white rounded-full animate-subtle-bob"
                      style={{ animationDelay: "-1s" }}
                    >
                      <span className="material-symbols-outlined text-primary text-4xl text-orange-500">
                        <MdQueryStats />
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-light-text-primary dark:text-white">
                      Data-Driven Results
                    </h3>
                    <p className="text-light-text-secondary dark:text-gray-300">
                      Our strategies are backed by data and analytics to deliver
                      measurable and impactful outcomes.
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-4 p-6 rounded-lg group">
                    <div
                      className="p-4 bg-light-card border border-light-border dark:border-white rounded-full animate-subtle-bob"
                      style={{ animationDelay: "-2s" }}
                    >
                      <span className="material-symbols-outlined text-primary text-4xl text-orange-500">
                        <MdOutlineSupportAgent />
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-light-text-primary dark:text-white">
                      Client-Centric Approach
                    </h3>
                    <p className="text-light-text-secondary dark:text-gray-300">
                      We work as your partner, providing dedicated support and
                      transparent communication.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="animate-on-scroll animate-slide-in-3 relative text-light-text-primary p-8 sm:p-12 md:p-16 rounded-2xl flex flex-col items-center justify-center gap-8 text-center overflow-hidden border  dark:bg-gray-900 bg-orange-50
 animate-gradient-fade">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,167,38,0.15),transparent_40%)]" />
                <div className="relative z-10 flex flex-col items-center gap-6">
                  <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tighter max-w-2xl dark:text-white">
                    Ready to Elevate Your Digital Presence?
                  </h2>
                  <p className="text-light-text-secondary text-base sm:text-lg max-w-xl dark:text-gray-100">
                    Lets build something exceptional together. Get in touch for
                    a free consultation and see what speed can do for you.
                  </p>
                  <a href="https://api.whatsapp.com/send/?phone=918441006695&text&type=phone_number&app_absent=0">
                    <button className="shrink-0 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary text-background-dark text-base font-bold leading-normal tracking-[-0.015em] hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 bg-orange-400">
                      <span className="truncate">Start Your Project</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
