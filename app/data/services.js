// data/services.js
import { FaCode, FaCheckCircle } from "react-icons/fa";
import { IoIosSettings, IoIosTrendingUp } from "react-icons/io";
import { MdGroups } from "react-icons/md";

export const services = [
  {
    title: "Full-Stack Development",
    icon: FaCode,
    image:
      "/fds.jpeg",
    description:
      "Custom, scalable, and secure web applications using modern technologies.",
    points: [
      "High-performance architecture",
      "Scalable & secure",
      "Custom features",
      "Modern tech stack",
    ],
  },
  {
    title: "Website Management",
    icon: IoIosSettings,
    image:
      "/wms.jpeg",
    description:
      "We manage updates, security, and performance so you don’t have to.",
    points: [
      "24/7 monitoring",
      "Security updates",
      "Performance optimization",
      "Reliable hosting",
    ],
  },
  {
    title: "SEO Optimization",
    icon: IoIosTrendingUp,
    image:
      "/seo.avif",
    description:
      "Data-driven SEO strategies that improve visibility and traffic.",
    points: [
      "Higher rankings",
      "Organic traffic growth",
      "Technical SEO",
      "Analytics & reporting",
    ],
  },
  {
    title: "Social Media Solutions",
    icon: MdGroups,
    image:
      "/smss.png",
    description:
      "Content and campaigns that build loyal audiences.",
    points: [
      "Audience growth",
      "Engaging content",
      "Brand awareness",
      "Lead generation",
    ],
  },
];
