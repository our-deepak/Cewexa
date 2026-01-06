'use client'
import React, { useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";

const projects = [
  {
    title: "Can increase +140% patient inquiries",
    tag: "Doctor's Website",
    img: "https://res.cloudinary.com/dj1alxa4r/image/upload/v1767712828/doctor_regxjd.avif",
    href: "https://doctors-planet.netlify.app/",
  },
  {
    title: "Can increase +150% student enrollment",
    tag: "School's Website",
    img: "https://res.cloudinary.com/dj1alxa4r/image/upload/v1767712828/school_y0hyeb.avif",
    href: "https://dummy-collge-website.netlify.app/",
  },
  {
    title: "Can increase +250% food orders",
    tag: "Restaurant's Website",
    img: "https://res.cloudinary.com/dj1alxa4r/image/upload/v1767712828/restaurant_nkmcto.avif",
    href: "https://dummy-restuarant-website.netlify.app/",
  },
  {
    title: "Can increase +150% income",
    tag: "Gym's Website",
    img: "https://res.cloudinary.com/dj1alxa4r/image/upload/v1767712829/gym_ceodie.avif",
    href: "https://global-fitness-gym.netlify.app/",
  },
  {
    title: "Can increase +200% customers",
    tag: "Hair Salon's Website",
    img: "https://res.cloudinary.com/dj1alxa4r/image/upload/v1767712828/saloon_vbmfqn.avif",
    href: "https://sj-hair-salon.netlify.app/",
  },
  {
    title: "Can increase +150% inquries",
    tag: "Event Planner's Website",
    img: "https://res.cloudinary.com/dj1alxa4r/image/upload/v1767712828/event_gtvej4.avif",
    href: "https://eventplanner-template.netlify.app/",
  },
];

const Portfolio = () => {
  useEffect(() => {
    const reveal = (els, options = {}) => {
      if (!els || els.length === 0) return;
      if (!("IntersectionObserver" in window)) {
        els.forEach((el) => el.classList.add("enter"));
        return;
      }
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("enter");
            obs.unobserve(entry.target);
          }
        });
      }, options);
      els.forEach((el) => observer.observe(el));
    };

    // reveal heading + intro
    reveal(document.querySelectorAll(".reveal"));

    // stagger project cards (use data-index to stagger)
    const cards = Array.from(document.querySelectorAll(".project-card"));
    if (cards.length) {
      if (!("IntersectionObserver" in window)) {
        cards.forEach((c, i) => {
          c.style.animationDelay = `${i * 80}ms`;
          c.classList.add("card-enter");
        });
      } else {
        const cardObserver = new IntersectionObserver((entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const node = entry.target;
              // pick index from dataset or compute
              const idx = Number(node.dataset.index || 0);
              node.style.animationDelay = `${idx * 80}ms`;
              node.classList.add("card-enter");
              obs.unobserve(node);
            }
          });
        }, { threshold: 0.12 });
        cards.forEach((c) => cardObserver.observe(c));
      }
    }

    // cleanup handled by observers auto-unobserving; nothing to return
  }, []);

  return (
    <>
      <style>{`
        /* keyframes */
        @keyframes fadeUp { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity:1; transform: translateY(0); } }
        @keyframes pop { 0% { opacity:0; transform: translateY(12px) scale(.98); } 100% { opacity:1; transform: translateY(0) scale(1); } }
        @keyframes tilt { 0% { transform: rotate(0) scale(1); } 100% { transform: rotate(6deg) scale(1.03); } }
        @keyframes pulse-glow { 0%{ box-shadow: 0 0 0 rgba(255, 152, 64, 0);} 50%{ box-shadow: 0 8px 30px rgba(255,152,64,0.08);} 100%{ box-shadow:0 0 0 rgba(255,152,64,0);} }

        /* reveal helpers */
        .reveal { opacity: 0; transform: translateY(12px); transition: opacity .45s ease, transform .45s ease; }
        .reveal.enter { opacity: 1; transform: translateY(0); transition-duration: .6s; }

        /* card entrance (staggered) */
        .project-card { opacity: 0; transform: translateY(18px); }
        .project-card.card-enter {
          animation: pop 520ms cubic-bezier(.2,.9,.3,1) forwards;
        }
        /* hover micro interactions (kept from your original) */
        .project-card .cover {
          transition: transform .5s cubic-bezier(.2,.9,.3,1);
          will-change: transform;
        }
        .project-card:hover .cover { transform: scale(1.08); }
        .project-card .label {
          transition: transform .25s ease, opacity .25s ease;
        }
        .project-card:hover .label { transform: translateY(-6px) scale(1.04); opacity: 1; }

        /* CTA floating button in card */
        .card-action {
          transition: transform .28s ease, opacity .28s ease;
          will-change: transform, opacity;
        }
        .project-card:hover .card-action { opacity: 1; transform: rotate(45deg) scale(1.08); }

        /* subtle tilt on hover for a more premium feel */
        .project-card:hover .accent {
          transform: translateY(-6px) rotate(6deg);
        }

        /* small responsive tweaks */
        @media (prefers-reduced-motion: reduce) {
          .project-card, .reveal { transition: none !important; animation: none !important; transform: none !important; opacity: 1 !important; }
        }
      `}</style>

      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden dark:bg-gray-950">
        <div className="layout-container flex h-full grow flex-col">
          <div className="flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-7xl flex-1 px-4 md:px-10">
              <main className="flex-1 py-4 sm:py-8 ">
                <div className="flex flex-col gap-6 items-center text-center max-w-3xl mx-auto">
                  <h1 className="reveal text-gray-900 text-5xl md:text-7xl font-black tracking-tighter dark:text-white">Our Work</h1>
                  <p className="reveal text-gray-600 text-lg md:text-xl font-normal leading-normal dark:text-white">
                    We transform ideas into digital reality. Explore a curated selection of our projects that showcase our commitment to excellence and innovation.
                  </p>
                </div>

                <div className="mt-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((p, i) => (
                      <a
                        key={i}
                        href={p.href}
                        className="group relative block overflow-hidden rounded-xl border border-gray-200 transition-all duration-500 ease-in-out hover:border-primary hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 bg-white project-card"
                        data-index={i}
                        aria-describedby={`proj-${i}-title`}
                      >
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent z-10" aria-hidden="true" />
                        <img
                          alt={p.title}
                          className="h-96 w-full object-cover cover"
                          src={p.img}
                          loading="lazy"
                        />

                        <div className="absolute bottom-0 left-0 p-6 w-full transition-transform duration-500 ease-in-out group-hover:-translate-y-2 z-20">
                          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110 bg-amber-500 label">
                            {p.tag}
                          </span>
                          <h3 id={`proj-${i}-title`} className="text-white text-2xl font-bold leading-tight mt-3">
                            {p.title}
                          </h3>
                        </div>

                        <div className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white opacity-0 card-action z-20" aria-hidden="true">
                          <MdArrowOutward />
                        </div>

                        {/* subtle accent block for layered parallax feel */}
                        <div className="absolute -top-4 -left-4 w-full h-full rounded-xl accent pointer-events-none" style={{ transformOrigin: "center", transition: "transform .45s ease" }} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              </main>

              <div className="border-t border-gray-200 dark:border-gray-800 py-16">
                <div className="flex flex-col items-center justify-center gap-8 text-center">
                  <h2 className="text-gray-900 text-4xl md:text-5xl font-black tracking-tighter max-w-2xl dark:text-white">Ready to Start Your Next Project?</h2>
                  <p className="text-gray-600 text-lg leading-relaxed max-w-xl dark:text-white">Let us collaborate to create something outstanding. We are here to turn your vision into a high-performance reality.</p>
                  <a href="/contact">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-wider transition-transform hover:scale-105 bg-orange-500">
                      <span className="truncate">Contact Us Now</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
