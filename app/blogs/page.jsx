'use client'
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import SAMPLE_POSTS from "../data/posts"; 

const PAGE_SIZE = 6;

export default function Blog() {
  const [posts] = useState(SAMPLE_POSTS); // keep client-side search + pagination
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All Posts");
  const [page, setPage] = useState(1);

  const categories = useMemo(() => {
    const set = new Set(posts.map((p) => p.category));
    return ["All Posts", ...Array.from(set)];
  }, [posts]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      if (category !== "All Posts" && p.category !== category) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    });
  }, [posts, query, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  useEffect(() => {
    if (page > totalPages) setPage(1);
  }, [totalPages, page]);

  const pageItems = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  useEffect(() => {
    const els = document.querySelectorAll(".post-card");
    if (!els || els.length === 0) return;
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("enter"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries, o) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("enter");
            o.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [pageItems, category, query]);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    setPage(1);
  };

  const handleCategory = (cat) => {
    setCategory(cat);
    setPage(1);
  };

  const goToPage = (n) => setPage(Math.max(1, Math.min(totalPages, n)));

  const renderPageNumbers = () => {
    const list = [];
    const maxButtons = 2;
    let start = Math.max(1, page - 1);
    let end = Math.min(totalPages, start + maxButtons - 1);
    if (end - start < maxButtons - 1) start = Math.max(1, end - (maxButtons - 1));

    if (start > 1) {
      list.push(
        <button key="p1" onClick={() => goToPage(1)} className="size-10 rounded-full px-3 text-[#78716c] hover:text-[#fb923c] hover:bg-stone-100">1</button>
      );
      if (start > 2) list.push(<span key="dots-1" className="px-2 text-[#a8a29e]">...</span>);
    }

    for (let i = start; i <= end; i++) {
      list.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={`sm:size-10 rounded-full px-3 font-semibold ${i === page ? "bg-orange-400 text-white" : "text-[#78716c] hover:text-white hover:bg-orange-400"}`}
        >
          {i}
        </button>
      );
    }

    if (end < totalPages) {
      if (end < totalPages - 1) list.push(<span key="dots-2" className="px-2 text-[#a8a29e]">...</span>);
      list.push(
        <button key={`plast`} onClick={() => goToPage(totalPages)} className="size-10 rounded-full px-3 text-[#78716c] hover:text-[#fb923c] hover:bg-stone-100">
          {totalPages}
        </button>
      );
    }
    return list;
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <style>{`
        @keyframes fadeInUp { from {opacity:0; transform: translateY(20px);} to {opacity:1; transform:translateY(0);} }
        .post-card { opacity:0; transform: translateY(10px); transition: opacity .45s ease, transform .45s ease; }
        .post-card.enter { animation: fadeInUp .55s cubic-bezier(.2,.9,.3,1) both; }
        @media (prefers-reduced-motion: reduce) { .post-card, .post-card.enter { transition:none; animation:none; opacity:1; transform:none; } }
      `}</style>

      <main className="flex-1">
        <section className="relative py-10 sm:py-20 px-4 sm:px-8 text-center overflow-hidden">
          <div className="relative max-w-4xl mx-auto flex flex-col items-center gap-6">
            <h1 className="text-text-[#fb923c] text-4xl md:text-6xl font-black leading-tight dark:text-white">Cewexa Insights</h1>
            <p className="text-[#78716c] text-lg md:text-xl max-w-2xl dark:text-gray-300">Dive into our curated collection of articles on development, performance, SEO, and social media.</p>

            <div className="relative w-full max-w-2xl mt-6">
              <input
                value={query}
                onChange={handleSearchChange}
                className="w-full h-14 pl-8 sm:pl-10 pr-6 rounded-full border-2 bg-white dark:bg-gray-900 backdrop-blur-sm text-[12px] sm:text-lg placeholder:text-[#a8a29e] focus:ring-6 focus:ring-orange-400 focus:border-[#fb923c] transition-all duration-300 focus:scale-[1.02] focus:shadow-2xl focus:shadow-[#fb923c]/20 text-orange-400"
                placeholder="Search for articles, topics, or authors..."
                type="search"
                aria-label="Search blog posts"
              />
            </div>
          </div>
        </section>

        <section className="pb-12 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 mb-18">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => handleCategory(c)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${c === category ? "bg-orange-400 text-white" : "bg-surface border border-stone-200 text-[#78716c] hover:bg-orange-400 hover:text-white"}`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="text-sm text-[#a8a29e]">{filtered.length} result{filtered.length !== 1 ? "s" : ""}</div>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {pageItems.length === 0 ? (
                <div className="col-span-full text-center py-12">No posts found.</div>
              ) : (
                pageItems.map((post) => (
                  <article key={post.id} className="post-card relative flex flex-col group p-6 rounded-2xl bg-surface border border-stone-200 hover:border-[#fb923c] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#fb923c]/10">
                    <Link href={`/blogs/${post.slug}`} className="block overflow-hidden rounded-xl mb-6 -mt-16" aria-label={`Open post ${post.title}`}>
                      <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg shadow"
                        style={{ backgroundImage: `url("${post.img}")` }}
                        role="img"
                        aria-hidden="true"
                      />
                    </Link>

                    <div className="flex flex-col gap-3 grow">
                      <div className="text-sm text-[#fb923c] font-bold tracking-wider uppercase">{post.category}</div>
                      <h3 className="text-xl font-bold text-text-[#fb923c] leading-tight">
                        <Link href={`/blogs/${post.slug}`} className="hover:text-[#fb923c] dark:text-white transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-[#78716c] dark:text-gray-500 text-base leading-relaxed">{post.excerpt}</p>
                    </div>

                    <div className="flex items-center gap-4 mt-6 pt-4 border-t border-stone-200 text-sm text-[#a8a29e]">
                      <div className="flex items-center gap-2">
                        <img alt="Author avatar" className="w-8 h-8 rounded-full border-2 border-white" src={post.img} />
                        <span className="font-medium text-[#57534e]">{post.author}</span>
                      </div>
                      <span className="text-stone-300">•</span>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </article>
                ))
              )}
            </div>

            <div className="flex justify-center mt-12 px-16">
              <nav className="flex items-center sm:gap-2 p-1 sm:p-1.5 rounded-full bg-surface border border-stone-200 dark:bg-gray-900 mx-6">
                <button
                  onClick={() => goToPage(page - 1)}
                  disabled={page <= 1}
                  className="flex items-center justify-center  sm:size-10 mx-4 rounded-full text-[#78716c] hover:text-[#fb923c] hover:bg-stone-100 transition-colors disabled:opacity-40"
                  aria-label="Previous page"
                >
                  <FaChevronLeft />
                </button>

                {renderPageNumbers()}

                <button
                  onClick={() => goToPage(page + 1)}
                  disabled={page >= totalPages}
                  className="flex items-center justify-center mx-4 sm:size-10 rounded-full text-[#78716c] hover:text-[#fb923c] hover:bg-stone-100 transition-colors disabled:opacity-40"
                  aria-label="Next page"
                >
                  <FaChevronRight />
                </button>
              </nav>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}