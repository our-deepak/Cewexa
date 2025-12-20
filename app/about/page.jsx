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
                      <div className="inline-flex items-center gap-2 rounded-full border border-orange-300 px-3 py-1 text-xs font-medium text-primary bg-orange-100">
                        <span className="material-symbols-outlined text-orange-500 text-2xl">
                        <MdOutlineAutoAwesome/>
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
                      technology with their goals to create unparalleled success.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-10 py-16 md:py-24 @container px-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div
                      className="flex flex-col gap-4 opacity-100 animate-fadeInUp"
                      style={{ animationDelay: "200ms" }}
                    >
                      <h2 className="text-text-light-mode tracking-tight text-3xl font-bold leading-tight md:text-4xl dark:text-white">
                        The <span className="text-orange-500">Cewexa</span> Difference
                      </h2>
                      <p className="text-stone-600 text-base font-normal leading-relaxed dark:text-white">
                        At Cewexa, we do not just build websites; we forge digital
                        experiences. Our core philosophy is built upon two
                        pillars: a relentless drive for innovation and an
                        unwavering commitment to our partners. We see ourselves
                        as an extension of your team, dedicated to turning your
                        vision into a high-performance reality.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 ">
                        <div className="flex items-start gap-3 rounded-xl bg-card-light shadow-sm p-4 transition-transform duration-300 hover:scale-105 dark:bg-amber-50">
                          <div className="text-primary mt-1">
                            <span className="material-symbols-outlined">
                             <IoIosRocket className="text-orange-600 text-2xl"/>
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <h3 className="text-text-light-mode text-base font-bold leading-tight">
                              Our Mission
                            </h3>
                            <p className="text-stone-600 text-sm font-normal leading-normal">
                              To deliver creative, high-quality digital solutions
                              that prioritize speed and performance.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 rounded-xl bg-card-light shadow-sm p-4 transition-transform duration-300 hover:scale-105 dark:bg-amber-50">
                          <div className="text-primary mt-1">
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
                      className="flex flex-col gap-4 rounded-xl border border-border-light bg-card-light p-6 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-orange-100 hover:-translate-y-2 group opacity-100 animate-fadeInUp dark:bg-amber-50"
                      style={{ animationDelay: "300ms" }}
                    >
                      <div className="flex items-center justify-center size-12 rounded-lg bg-orange-100 dark:bg-orange-200 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                        <span className="material-symbols-outlined text-orange-500 text-2xl"><FaLightbulb /></span>
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
                      className="flex flex-col gap-4 rounded-xl border border-border-light bg-card-light p-6 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-orange-100 hover:-translate-y-2 group opacity-100 animate-fadeInUp dark:bg-amber-50"
                      style={{ animationDelay: "400ms" }}
                    >
                      <div className="flex items-center justify-center size-12 rounded-lg bg-orange-100 dark:bg-orange-200 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                        <span className="material-symbols-outlined text-orange-500 text-2xl"><FaBolt /></span>
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
                      className="flex flex-col gap-4 rounded-xl border border-border-light bg-card-light p-6 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-orange-100 hover:-translate-y-2 group opacity-100 animate-fadeInUp dark:bg-amber-50"
                      style={{ animationDelay: "500ms" }}
                    >
                      <div className="flex items-center justify-center size-12 rounded-lg bg-orange-100 dark:bg-orange-200 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                        <span className="material-symbols-outlined text-orange-500 text-2xl"><MdOutlineVerified /></span>
                      </div>
                      <h3 className="text-lg font-bold text-text-light-mode">
                        Exceptional Quality
                      </h3>
                      <p className="text-stone-600 text-base leading-relaxed">
                        We are committed to the highest standards, ensuring every
                        project is pixel-perfect and robust.
                      </p>
                    </div>

                    <div
                      className="flex flex-col gap-4 rounded-xl border border-border-light bg-card-light p-6 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-orange-100 hover:-translate-y-2 group opacity-100 animate-fadeInUp dark:bg-amber-50"
                      style={{ animationDelay: "600ms" }}
                    >
                      <div className="flex items-center justify-center size-12 rounded-lg bg-orange-100 dark:bg-orange-200 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                        <span className="material-symbols-outlined text-orange-500 text-2xl"><IoLayersOutline />
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
                      className="flex flex-col gap-4 rounded-xl border border-border-light bg-card-light p-6 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-orange-100 hover:-translate-y-2 group opacity-100 animate-fadeInUp dark:bg-amber-50"
                      style={{ animationDelay: "700ms" }}
                    >
                      <div className="flex items-center justify-center size-12 rounded-lg bg-orange-100 dark:bg-orange-200 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                        <span className="material-symbols-outlined text-orange-500 text-2xl"><FaHandshake /></span>
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
                      className="flex flex-col gap-4 rounded-xl border border-border-light bg-card-light p-6 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-orange-100 hover:-translate-y-2 group opacity-100 animate-fadeInUp dark:bg-amber-50"
                      style={{ animationDelay: "800ms" }}
                    >
                      <div className="flex items-center justify-center size-12 rounded-lg bg-orange-100 dark:bg-orange-200 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                        <span className="material-symbols-outlined text-orange-500 text-2xl"><MdOutlineRecycling /></span>
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
                       <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] mx-auto animate-pulse-glow hover:bg-primary/90 transition-all duration-300 hover:scale-105 bg-orange-500">
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
