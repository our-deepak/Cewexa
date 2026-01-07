import Image from "next/image";
import { MdOutlineAutoAwesome } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaBolt } from "react-icons/fa6";
import { MdOutlineVerified } from "react-icons/md";
import { IoLayersOutline } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa";
import { MdOutlineRecycling } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import { GoRocket } from "react-icons/go";
import { MdOutlinePsychology } from "react-icons/md";
import { MdArchitecture } from "react-icons/md";
import { IoDiamondOutline } from "react-icons/io5";
import { MdAutorenew } from "react-icons/md";
export default function About() {
  return (
    <div className="font-display bg-background-light text-text-light-mode">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 lg:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[1100px] flex-1">
              <main className="py-4 ">
                <div className="@container">
                  <div className="flex flex-col gap-6 items-center justify-center p-4 text-center">
                    <div
                      className="flex flex-col gap-2 items-center opacity-100 animate-fadeInUp"
                      style={{ animationDelay: "100ms" }}
                    >
                      <div className="inline-flex items-center gap-2 rounded-full border border-orange-300 px-3 py-1 text-xs font-medium text-[#FB923C] bg-orange-100">
                        <span className="material-symbols-outlined text-orange-500 text-2xl">
                          <MdOutlineAutoAwesome />
                        </span>
                        <span className="text-orange-600">Our Story</span>
                      </div>

                      <h1 className="text-text-light-mode text-4xl font-black leading-tight tracking-tighter md:text-6xl dark:text-white">
                        Engineering the Future of Digital Presence
                      </h1>
                    </div>

                    <p
                      className="text-stone-600 text-lg font-normal leading-relaxed max-w-3xl opacity-100 animate-fadeInUp dark:text-white"
                      style={{ animationDelay: "300ms" }}
                    >
                      We build high-performance, scalable digital solutions that
                      drive growth and deliver exceptional results. Our mission
                      is to empower businesses by seamlessly integrating
                      technology with their goals to create unparalleled
                      success.
                    </p>
                  </div>
                </div>
                <div className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 font-body transition-colors duration-500 min-h-screen flex flex-col relative overflow-x-hidden selection:bg-[#FB923C] selection:text-white">
                  <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FB923C]/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-300/20 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-300/20 dark:bg-pink-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
                  </div>
                  <main className="grow flex flex-col items-center justify-center py-20 px-4 relative z-10 w-full max-w-[1600px] mx-auto">
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

                
                <div className="flex flex-col gap-10 py-16 md:py-24 @container px-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div
                      className="flex flex-col gap-4 opacity-100 animate-fadeInUp"
                      style={{ animationDelay: "200ms" }}
                    >
                      <h2 className="text-text-light-mode tracking-tight text-3xl font-bold leading-tight md:text-4xl dark:text-white">
                        The <span className="text-orange-500">Cewexa</span>{" "}
                        Difference
                      </h2>
                      <p className="text-stone-600 text-base font-normal leading-relaxed dark:text-white">
                        At Cewexa, we do not just build websites; we forge
                        digital experiences. Our core philosophy is built upon
                        two pillars: a relentless drive for innovation and an
                        unwavering commitment to our partners. We see ourselves
                        as an extension of your team, dedicated to turning your
                        vision into a high-performance reality.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 ">
                        <div className="flex items-start gap-3 rounded-xl bg-card-light shadow-sm p-4 transition-transform duration-300 hover:scale-105 dark:bg-amber-50">
                          <div className="text-[#FB923C] mt-1">
                            <span className="material-symbols-outlined">
                              <IoIosRocket className="text-orange-600 text-2xl" />
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <h3 className="text-text-light-mode text-base font-bold leading-tight">
                              Our Mission
                            </h3>
                            <p className="text-stone-600 text-sm font-normal leading-normal">
                              To deliver creative, high-quality digital
                              solutions that prioritize speed and performance.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 rounded-xl bg-card-light shadow-sm p-4 transition-transform duration-300 hover:scale-105 dark:bg-amber-50">
                          <div className="text-[#FB923C] mt-1">
                            <span className="material-symbols-outlined">
                              <FaEye className="text-orange-600 text-2xl" />
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <h3 className="text-text-light-mode text-base font-bold leading-tight">
                              Our Vision
                            </h3>
                            <p className="text-stone-600 text-sm font-normal leading-normal">
                              To be the leading partner for businesses seeking
                              reliable, scalable, and future-proof digital
                              presences.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative flex items-center justify-center min-h-[300px] md:min-h-[400px]">
                      <div className="absolute inset-0 bg-orange-100 blur-3xl rounded-full transition-all duration-1000 ease-in-out scale-90 group-hover/design-root:scale-110" />

                      <Image
                        alt="Abstract blue and purple geometric shapes creating a technological pattern"
                        className="relative w-full max-w-md float-animation z-10"
                        src="/blue.png"
                        width={600}
                        height={400}
                        priority
                      />
                    </div>
                  </div>
                </div>

                <div className="px-4 py-16 md:py-24">
                  <div
                    className="flex flex-col gap-4 text-center items-center opacity-100 animate-fadeInUp"
                    style={{ animationDelay: "200ms" }}
                  >
                    <h2 className="text-text-light-mode tracking-tight text-3xl font-bold leading-tight md:text-4xl dark:text-white">
                      Our Core Values
                    </h2>
                    <p className="text-stone-600 text-base font-normal leading-relaxed max-w-2xl dark:text-white">
                      These principles are the bedrock of our company, guiding
                      every decision we make and every line of code we write.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    <div
                      className="flex flex-col gap-4 rounded-xl border border-border-light bg-card-light p-6 transition-all duration-300 hover:border-[#FB923C] hover:shadow-lg hover:shadow-orange-100 hover:-translate-y-2 group opacity-100 animate-fadeInUp dark:bg-amber-50"
                      style={{ animationDelay: "300ms" }}
                    >
                      <div className="flex items-center justify-center size-12 rounded-lg bg-orange-100 dark:bg-orange-200 text-[#FB923C] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                        <span className="material-symbols-outlined text-orange-500 text-2xl">
                          <FaLightbulb />
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-text-light-mode">
                        Creative Solutions
                      </h3>
                      <p className="text-stone-600 text-base leading-relaxed">
                        We think outside the box to deliver innovative and
                        unique digital strategies tailored to your brand.
                      </p>
                    </div>

                    <div
                      className="flex flex-col gap-4 rounded-xl border border-border-light bg-card-light p-6 transition-all duration-300 hover:border-[#FB923C] hover:shadow-lg hover:shadow-orange-100 hover:-translate-y-2 group opacity-100 animate-fadeInUp dark:bg-amber-50"
                      style={{ animationDelay: "400ms" }}
                    >
                      <div className="flex items-center justify-center size-12 rounded-lg bg-orange-100 dark:bg-orange-200 text-[#FB923C] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                        <span className="material-symbols-outlined text-orange-500 text-2xl">
                          <FaBolt />
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-text-light-mode">
                        Efficient Execution
                      </h3>
                      <p className="text-stone-600 text-base leading-relaxed">
                        Our agile processes ensure timely delivery and execution
                        without compromising on quality.
                      </p>
                    </div>

                    <div
                      className="flex flex-col gap-4 rounded-xl border border-border-light bg-card-light p-6 transition-all duration-300 hover:border-[#FB923C] hover:shadow-lg hover:shadow-orange-100 hover:-translate-y-2 group opacity-100 animate-fadeInUp dark:bg-amber-50"
                      style={{ animationDelay: "500ms" }}
                    >
                      <div className="flex items-center justify-center size-12 rounded-lg bg-orange-100 dark:bg-orange-200 text-[#FB923C] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                        <span className="material-symbols-outlined text-orange-500 text-2xl">
                          <MdOutlineVerified />
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-text-light-mode">
                        Exceptional Quality
                      </h3>
                      <p className="text-stone-600 text-base leading-relaxed">
                        We are committed to the highest standards, ensuring
                        every project is pixel-perfect and robust.
                      </p>
                    </div>

                    <div
                      className="flex flex-col gap-4 rounded-xl border border-border-light bg-card-light p-6 transition-all duration-300 hover:border-[#FB923C] hover:shadow-lg hover:shadow-orange-100 hover:-translate-y-2 group opacity-100 animate-fadeInUp dark:bg-amber-50"
                      style={{ animationDelay: "600ms" }}
                    >
                      <div className="flex items-center justify-center size-12 rounded-lg bg-orange-100 dark:bg-orange-200 text-[#FB923C] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                        <span className="material-symbols-outlined text-orange-500 text-2xl">
                          <IoLayersOutline />
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-text-light-mode">
                        Engineered for Scale
                      </h3>
                      <p className="text-stone-600 text-base leading-relaxed">
                        We build future-proof solutions that grow with your
                        business and adapt to market demands.
                      </p>
                    </div>

                    <div
                      className="flex flex-col gap-4 rounded-xl border border-border-light bg-card-light p-6 transition-all duration-300 hover:border-[#FB923C] hover:shadow-lg hover:shadow-orange-100 hover:-translate-y-2 group opacity-100 animate-fadeInUp dark:bg-amber-50"
                      style={{ animationDelay: "700ms" }}
                    >
                      <div className="flex items-center justify-center size-12 rounded-lg bg-orange-100 dark:bg-orange-200 text-[#FB923C] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                        <span className="material-symbols-outlined text-orange-500 text-2xl">
                          <FaHandshake />
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-text-light-mode">
                        Reliable Partnership
                      </h3>
                      <p className="text-stone-600 text-base leading-relaxed">
                        Your success is our success. We act as a true extension
                        of your team, providing unwavering support.
                      </p>
                    </div>

                    <div
                      className="flex flex-col gap-4 rounded-xl border border-border-light bg-card-light p-6 transition-all duration-300 hover:border-[#FB923C] hover:shadow-lg hover:shadow-orange-100 hover:-translate-y-2 group opacity-100 animate-fadeInUp dark:bg-amber-50"
                      style={{ animationDelay: "800ms" }}
                    >
                      <div className="flex items-center justify-center size-12 rounded-lg bg-orange-100 dark:bg-orange-200 text-[#FB923C] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                        <span className="material-symbols-outlined text-orange-500 text-2xl">
                          <MdOutlineRecycling />
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-text-light-mode">
                        Agile Methodology
                      </h3>
                      <p className="text-stone-600 text-base leading-relaxed">
                        We embrace flexibility and iterative development to
                        deliver value quickly and effectively.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-4 py-10">
                  <div className="relative rounded-xl p-8 md:p-12 text-center overflow-hidden bg-white/50 border bg-linear-to-br from-white to-orange-100 dark:from-gray-900 dark:to-gray-900">
                    <div className="absolute -bottom-1/2 -right-1/4 size-[400px] bg-orange-100 dark:bg-gray-800 rounded-full blur-3xl transition-transform duration-1000 ease-out group-hover/design-root:-translate-x-10 group-hover/design-root:-translate-y-10" />
                    <div className="absolute -top-1/2 -left-1/4 size-[400px] bg-orange-100 dark:bg-gray-800 rounded-full blur-3xl transition-transform duration-1000 ease-out group-hover/design-root:translate-x-10 group-hover/design-root:translate-y-10" />
                    <div className="relative z-10">
                      <h2 className="text-3xl font-bold text-text-light-mode mb-4 dark:text-white">
                        Let us Build Together
                      </h2>
                      <p className="text-stone-700 max-w-2xl mx-auto mb-6 dark:text-white">
                        Ready to elevate your digital presence? We are here to
                        turn your vision into a high-performance reality. Lets
                        start the conversation.
                      </p>
                      <a href="/contact">
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#FB923C] text-white text-base font-bold leading-normal tracking-[0.015em] mx-auto animate-pulse-glow hover:bg-[#FB923C]/90 transition-all duration-300 hover:scale-105 bg-orange-500">
                          <span className="truncate">Work With Us</span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
