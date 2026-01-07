"use client";

import React, { useEffect } from "react";
import { FaCode, FaRocket } from "react-icons/fa";
import { IoIosSettings, IoIosTrendingUp } from "react-icons/io";
import { MdGroups, MdQueryStats, MdOutlineSupportAgent } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import { GoRocket } from "react-icons/go";
import { MdOutlinePsychology } from "react-icons/md";
import { MdArchitecture } from "react-icons/md";
import { IoDiamondOutline } from "react-icons/io5";
import { MdAutorenew } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa";
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
{/*CEWEXA Meaning */}
 <div className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 font-body transition-colors duration-500 flex flex-col  selection:bg-[#FB923C] selection:text-white">
                  <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FB923C]/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-300/20 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-300/20 dark:bg-pink-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
                  </div>
                  <main className="grow flex flex-col items-center justify-center px-4 relative z-10 w-full max-w-[1600px] mx-auto">
                    <div className="hidden md:flex flex-row items-center justify-center gap-4 lg:gap-12 w-full">
                      <div className="group relative flex flex-col items-center justify-center w-32 h-[400px]">
                        <div className="absolute top-0 flex flex-col items-center w-56 transition-all duration-500 opacity-60 group-hover:opacity-100 group-hover:-translate-y-2">
                          <div className="w-16 h-16 rounded-full bg-white dark:bg-[#1E293B] shadow-lg dark:shadow-none border-2 border-gray-100 dark:border-gray-700 group-hover:border-[#FB923C] transition-all duration-300 group-hover:dark:shadow-[0_0_20px_rgba(251,146,60,0.4)] flex items-center justify-center z-20 overflow-hidden">
                            <span className="material-symbols-outlined text-3xl text-gray-700 dark:text-gray-300 group-hover:text-[#FB923C] transition-colors">
                              <FaRegLightbulb />
                            </span>
                          </div>
                          <div className="text-center mt-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            <h3 className="font-bold text-gray-900 dark:text-white">
                              Creative Solutions
                            </h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                              Custom solutions, not templates.
                            </p>
                          </div>
                        </div>
                        <div className="absolute top-[120px] bottom-[220px] w-0.5 bg-linear-to-b from-transparent via-gray-300 dark:via-gray-700 to-gray-800 dark:to-gray-200 group-hover:bg-[#FB923C] transition-colors duration-300 mb-4"></div>
                        <div className="relative z-10 font-display text-8xl lg:text-9xl font-extrabold text-gray-900 dark:text-white transition-all duration-300 group-hover:text-[#FB923C] group-hover:scale-110 cursor-default select-none shadow-black drop-shadow-2xl">
                          C
                        </div>
                      </div>
                      <div className="group relative flex flex-col items-center justify-center w-32 h-[400px]">
                        <div className="relative z-10 font-display text-8xl lg:text-9xl font-extrabold text-gray-900 dark:text-white transition-all duration-300 group-hover:text-[#FB923C] group-hover:scale-110 cursor-default select-none shadow-black drop-shadow-2xl">
                          E
                        </div>
                        <div className="absolute top-[220px] bottom-[120px] w-0.5 bg-linear-to-b from-gray-800 dark:from-gray-200 via-gray-300 dark:via-gray-700 to-transparent group-hover:bg-[#FB923C] transition-colors duration-300 mt-4"></div>
                        <div className="absolute bottom-0 flex flex-col-reverse items-center w-56 transition-all duration-500 opacity-60 group-hover:opacity-100 group-hover:translate-y-2">
                          <div className="w-16 h-16 rounded-full bg-white dark:bg-[#1E293B] shadow-lg dark:shadow-none border-2 border-gray-100 dark:border-gray-700 group-hover:border-[#FB923C] transition-all duration-300 group-hover:dark:shadow-[0_0_20px_rgba(251,146,60,0.4)] flex items-center justify-center z-20 overflow-hidden">
                            <span className="material-symbols-outlined text-3xl text-gray-700 dark:text-gray-300 group-hover:text-[#FB923C] transition-colors">
                             <GoRocket />
                            </span>
                          </div>
                          <div className="text-center mb-3 opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            <h3 className="font-bold text-gray-900 dark:text-white">
                              Efficient Execution
                            </h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                              Launch in weeks, not months.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="group relative flex flex-col items-center justify-center w-32 h-[400px]">
                        <div className="absolute top-0 flex flex-col items-center w-56 transition-all duration-500 opacity-60 group-hover:opacity-100 group-hover:-translate-y-2">
                          <div className="w-16 h-16 rounded-full bg-white dark:bg-[#1E293B] shadow-lg dark:shadow-none border-2 border-gray-100 dark:border-gray-700 group-hover:border-[#FB923C] transition-all duration-300 group-hover:dark:shadow-[0_0_20px_rgba(251,146,60,0.4)] flex items-center justify-center z-20 overflow-hidden">
                            <span className="material-symbols-outlined text-3xl text-gray-700 dark:text-gray-300 group-hover:text-[#FB923C] transition-colors">
                              <MdOutlinePsychology />
                            </span>
                          </div>
                          <div className="text-center mt-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            <h3 className="font-bold text-gray-900 dark:text-white">
                              Strategic Decisions
                            </h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                              Wise choices for growth.
                            </p>
                          </div>
                        </div>
                        <div className="absolute top-[120px] bottom-[220px] w-0.5 bg-linear-to-b from-transparent via-gray-300 dark:via-gray-700 to-gray-800 dark:to-gray-200 group-hover:bg-[#FB923C] transition-colors duration-300 mb-4"></div>
                        <div className="relative z-10 font-display text-8xl lg:text-9xl font-extrabold text-gray-900 dark:text-white transition-all duration-300 group-hover:text-[#FB923C] group-hover:scale-110 cursor-default select-none shadow-black drop-shadow-2xl">
                          W
                        </div>
                      </div>
                      <div className="group relative flex flex-col items-center justify-center w-32 h-[400px]">
                        <div className="relative z-10 font-display text-8xl lg:text-9xl font-extrabold text-gray-900 dark:text-white transition-all duration-300 group-hover:text-[#FB923C] group-hover:scale-110 cursor-default select-none shadow-black drop-shadow-2xl">
                          E
                        </div>
                        <div className="absolute top-[220px] bottom-[120px] w-0.5 bg-linear-to-b from-gray-800 dark:from-gray-200 via-gray-300 dark:via-gray-700 to-transparent group-hover:bg-[#FB923C] transition-colors duration-300 mt-4"></div>
                        <div className="absolute bottom-0 flex flex-col-reverse items-center w-56 transition-all duration-500 opacity-60 group-hover:opacity-100 group-hover:translate-y-2">
                          <div className="w-16 h-16 rounded-full bg-white dark:bg-[#1E293B] shadow-lg dark:shadow-none border-2 border-gray-100 dark:border-gray-700 group-hover:border-[#FB923C] transition-all duration-300 group-hover:dark:shadow-[0_0_20px_rgba(251,146,60,0.4)] flex items-center justify-center z-20 overflow-hidden">
                            <span className="material-symbols-outlined text-3xl text-gray-700 dark:text-gray-300 group-hover:text-[#FB923C] transition-colors">
                              <MdArchitecture />
                            </span>
                          </div>
                          <div className="text-center mb-3 opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            <h3 className="font-bold text-gray-900 dark:text-white">
                              Engineered For Scale
                            </h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                              Built to last and grow.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="group relative flex flex-col items-center justify-center w-32 h-[400px]">
                        <div className="absolute top-0 flex flex-col items-center w-56 transition-all duration-500 opacity-60 group-hover:opacity-100 group-hover:-translate-y-2">
                          <div className="w-16 h-16 rounded-full bg-white dark:bg-[#1E293B] shadow-lg dark:shadow-none border-2 border-gray-100 dark:border-gray-700 group-hover:border-[#FB923C] transition-all duration-300 group-hover:dark:shadow-[0_0_20px_rgba(251,146,60,0.4)] flex items-center justify-center z-20 overflow-hidden">
                            <span className="material-symbols-outlined text-3xl text-gray-700 dark:text-gray-300 group-hover:text-[#FB923C] transition-colors">
                              <IoDiamondOutline />
                            </span>
                          </div>
                          <div className="text-center mt-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            <h3 className="font-bold text-gray-900 dark:text-white">
                              Exceptional Quality
                            </h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                              Quality in every detail.
                            </p>
                          </div>
                        </div>
                        <div className="absolute top-[120px] bottom-[220px] w-0.5 bg-linear-to-b from-transparent via-gray-300 dark:via-gray-700 to-gray-800 dark:to-gray-200 group-hover:bg-[#FB923C] transition-colors duration-300 mb-4"></div>
                        <div className="relative z-10 font-display text-8xl lg:text-9xl font-extrabold text-gray-900 dark:text-white transition-all duration-300 group-hover:text-[#FB923C] group-hover:scale-110 cursor-default select-none shadow-black drop-shadow-2xl">
                          X
                        </div>
                      </div>
                      <div className="group relative flex flex-col items-center justify-center w-32 h-[400px]">
                        <div className="relative z-10 font-display text-8xl lg:text-9xl font-extrabold text-gray-900 dark:text-white transition-all duration-300 group-hover:text-[#FB923C] group-hover:scale-110 cursor-default select-none shadow-black drop-shadow-2xl">
                          A
                        </div>
                        <div className="absolute top-[220px] bottom-[120px] w-0.5 bg-linear-to-b from-gray-800 dark:from-gray-200 via-gray-300 dark:via-gray-700 to-transparent group-hover:bg-[#FB923C] transition-colors duration-300 mt-4"></div>
                        <div className="absolute bottom-0 flex flex-col-reverse items-center w-56 transition-all duration-500 opacity-60 group-hover:opacity-100 group-hover:translate-y-2">
                          <div className="w-16 h-16 rounded-full bg-white dark:bg-[#1E293B] shadow-lg dark:shadow-none border-2 border-gray-100 dark:border-gray-700 group-hover:border-[#FB923C] transition-all duration-300 group-hover:dark:shadow-[0_0_20px_rgba(251,146,60,0.4)] flex items-center justify-center z-20 overflow-hidden">
                            <span className="material-symbols-outlined text-3xl text-gray-700 dark:text-gray-300 group-hover:text-[#FB923C] transition-colors">
                              <MdAutorenew />
                            </span>
                          </div>
                          <div className="text-center mb-3 opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            <h3 className="font-bold text-gray-900 dark:text-white">
                              Agile Methodology
                            </h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                              Adapts with you.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:hidden flex-col w-full gap-8">
                      <div className="group flex items-center gap-6 p-4 rounded-xl hover:bg-white/50 dark:hover:bg-[#1E293B]/50 transition-colors">
                        <div className="font-display text-6xl font-extrabold text-gray-900 dark:text-white group-hover:text-[#FB923C] transition-colors w-16 text-center">
                          C
                        </div>
                        <div className="flex flex-col">
                          <h3 className="text-lg font-bold text-gray-800 dark:text-white flex items-center gap-2">
                            <span className="material-symbols-outlined text-[#FB923C] text-xl">
                              <FaLightbulb />
                            </span>
                            Creative Solutions
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Custom solutions, not templates.
                          </p>
                        </div>
                      </div>
                      <div className="group flex items-center gap-6 p-4 rounded-xl hover:bg-white/50 dark:hover:bg-[#1E293B]/50 transition-colors">
                        <div className="font-display text-6xl font-extrabold text-gray-900 dark:text-white group-hover:text-[#FB923C] transition-colors w-16 text-center">
                          E
                        </div>
                        <div className="flex flex-col">
                          <h3 className="text-lg font-bold text-gray-800 dark:text-white flex items-center gap-2">
                            <span className="material-symbols-outlined text-[#FB923C] text-xl">
                              <GoRocket />
                            </span>
                            Efficient Execution
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Launch in weeks, not months.
                          </p>
                        </div>
                      </div>
                      <div className="group flex items-center gap-6 p-4 rounded-xl hover:bg-white/50 dark:hover:bg-[#1E293B]/50 transition-colors">
                        <div className="font-display text-6xl font-extrabold text-gray-900 dark:text-white group-hover:text-[#FB923C] transition-colors w-16 text-center">
                          W
                        </div>
                        <div className="flex flex-col">
                          <h3 className="text-lg font-bold text-gray-800 dark:text-white flex items-center gap-2">
                            <span className="material-symbols-outlined text-[#FB923C] text-xl">
                              <MdOutlinePsychology />
                            </span>
                            Strategic Decisions
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Wise choices for growth.
                          </p>
                        </div>
                      </div>
                      <div className="group flex items-center gap-6 p-4 rounded-xl hover:bg-white/50 dark:hover:bg-[#1E293B]/50 transition-colors">
                        <div className="font-display text-6xl font-extrabold text-gray-900 dark:text-white group-hover:text-[#FB923C] transition-colors w-16 text-center">
                          E
                        </div>
                        <div className="flex flex-col">
                          <h3 className="text-lg font-bold text-gray-800 dark:text-white flex items-center gap-2">
                            <span className="material-symbols-outlined text-[#FB923C] text-xl">
                               <MdArchitecture />
                            </span>
                            Engineered for Scale
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Built to last and grow.
                          </p>
                        </div>
                      </div>
                      <div className="group flex items-center gap-6 p-4 rounded-xl hover:bg-white/50 dark:hover:bg-[#1E293B]/50 transition-colors">
                        <div className="font-display text-6xl font-extrabold text-gray-900 dark:text-white group-hover:text-[#FB923C] transition-colors w-16 text-center">
                          X
                        </div>
                        <div className="flex flex-col">
                          <h3 className="text-lg font-bold text-gray-800 dark:text-white flex items-center gap-2">
                            <span className="material-symbols-outlined text-[#FB923C] text-xl">
                                <IoDiamondOutline />
                            </span>
                            Exceptional Quality
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Quality in every detail.
                          </p>
                        </div>
                      </div>
                      <div className="group flex items-center gap-6 p-4 rounded-xl hover:bg-white/50 dark:hover:bg-[#1E293B]/50 transition-colors">
                        <div className="font-display text-6xl font-extrabold text-gray-900 dark:text-white group-hover:text-[#FB923C] transition-colors w-16 text-center">
                          A
                        </div>
                        <div className="flex flex-col">
                          <h3 className="text-lg font-bold text-gray-800 dark:text-white flex items-center gap-2">
                            <span className="material-symbols-outlined text-[#FB923C] text-xl">
                               <MdAutorenew />
                            </span>
                            Agile Methodology
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Adapts with you.
                          </p>
                        </div>
                      </div>
                    </div>
                  </main>
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
                  <a href="https://api.whatsapp.com/send/?phone=919001249294&text&type=phone_number&app_absent=0">
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
