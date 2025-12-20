"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

export default function ShareBar({ title }) {
  const pathname = usePathname();
  const url = typeof window !== "undefined" ? window.location.origin + pathname : "";
  const [copied, setCopied] = useState(false);

  const encodedTitle = encodeURIComponent(title);
  const encodedURL = encodeURIComponent(url);

  const shareLinks = {
    whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedURL}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedURL}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedURL}`,
    telegram: `https://t.me/share/url?url=${encodedURL}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`,
    instagram: "https://www.instagram.com/",
  };

  const copyToClipboard = async () => {
    // prefer navigator.clipboard
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
        return;
      }

      // fallback: hidden textarea + execCommand
      const textarea = document.createElement("textarea");
      textarea.value = url;
      // Prevent mobile keyboard from showing
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);

      // iOS selection hack: use range selection
      const selection = document.getSelection();
      const range = document.createRange();
      range.selectNodeContents(textarea);
      selection.removeAllRanges();
      selection.addRange(range);
      textarea.select();

      const successful = document.execCommand("copy");
      selection.removeAllRanges();
      document.body.removeChild(textarea);

      if (!successful) throw new Error("execCommand copy failed");

      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed:", err);

      // If available, open native share sheet on mobile — better UX than nothing
      if (navigator.share) {
        try {
          await navigator.share({ title, url });
          return;
        } catch (shareErr) {
          // user may cancel share; ignore
          console.error("Native share failed or was canceled:", shareErr);
        }
      }

      // Last resort: show prompt so user can manually copy
      try {
        // prompt returns the user input (or null), but shows the URL for copying
        window.prompt("Copy this link", url);
      } catch (promptErr) {
        console.error("Prompt fallback failed:", promptErr);
      }
    }
  };

  return (
    <div className="mt-10 border-t pt-6">
      <h3 className="font-semibold text-lg mb-3 dark:text-white">Share this post</h3>

      <div className="flex flex-wrap items-center gap-4">
        {/* Buttons */}
        {Object.entries(shareLinks).map(([key, link]) => (
          <a
            key={key}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm rounded-full bg-gray-700 text-white dark:text-black dark:bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-300 transition"
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </a>
        ))}

        {/* Copy Link */}
        <button
          onClick={copyToClipboard}
          className="px-4 py-2 text-sm rounded-full bg-orange-500 text-white hover:bg-orange-600 transition"
        >
          {copied ? "Copied!" : "Copy Link"}
        </button>
      </div>
    </div>
  );
}
