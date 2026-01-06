import Link from "next/link";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
const Footer = () => {
  return (
    <footer className="bg-warm-gray-100 border-t border-warm-gray-200 px-4 sm:px-8 py-12 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1 flex flex-col gap-4">
          <Link href="/" className="flex">
            <div className="relative sm:w-40 w-32 h-10">
              {/* Light logo - visible in light mode */}
              <Image
                src="/footerlogowhite.svg"
                alt="Cewexa"
                width={160}
                height={40}
                className="absolute inset-0 sm:w-40 w-32 dark:hidden"
                priority
              />
              {/* Dark logo - visible in dark mode */}
              <Image
                src="/footerlogo.svg"
                alt="Cewexa"
                width={160}
                height={40}
                className="absolute inset-0 sm:w-40 w-32 hidden dark:block"
                priority
              />
            </div>
          </Link>
          <p className="text-sm text-warm-gray-600 dark:text-white">
            High-performance digital solutions for modern businesses.
          </p>
          <div className="dark:text-white flex gap-4">
            <Link href="https://www.facebook.com/cewexa_"><FaFacebook /></Link>
           <Link href="https://x.com/cewexa_"> <FaXTwitter /></Link>
            <Link href="https://www.instagram.com/cewexa_"><FaInstagram/></Link>
            <Link href="https://www.linkedin.com/company/cewexa_"><FaLinkedinIn /></Link>
          <Link href="https://www.youtube.com/@cewexa_"> <IoLogoYoutube /></Link>
          </div>
          <p className="text-sm text-warm-gray-500 mt-4 dark:text-white">
            <span className="text-orange-500">©</span> 2026 Cewexa. All rights
            reserved.
          </p>
        </div>
        <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold text-orange-500 mb-4">Services</h4>
            <ul className="space-y-3 dark:text-white">
              <li>
                <a
                  className="text-sm text-warm-gray-500 hover:text-soft-orange transition-colors"
                  href="/services"
                >
                  Development
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-warm-gray-500 hover:text-soft-orange transition-colors"
                  href="/services"
                >
                  Management
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-warm-gray-500 hover:text-soft-orange transition-colors"
                  href="/services"
                >
                  SEO
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-warm-gray-500 hover:text-soft-orange transition-colors"
                  href="/services"
                >
                  Social Media
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-orange-500 mb-4">Company</h4>
            <ul className="space-y-3 dark:text-white">
              <li>
                <a
                  className="text-sm text-warm-gray-500 hover:text-soft-orange transition-colors"
                  href="/about"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-warm-gray-500 hover:text-soft-orange transition-colors"
                  href="/portfolio"
                >
                  Our Work
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-warm-gray-500 hover:text-soft-orange transition-colors"
                  href="/contact"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-warm-gray-500 hover:text-soft-orange transition-colors"
                  href="/blogs"
                >
                  Blogs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-orange-500 mb-4">Legal</h4>
            <ul className="space-y-3 dark:text-white">
              <li>
                <a
                  className="text-sm text-warm-gray-500 hover:text-soft-orange transition-colors"
                  href="privacy-policy"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-warm-gray-500 hover:text-soft-orange transition-colors"
                  href="terms-of-service"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
