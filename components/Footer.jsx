const Footer = () => {
  return (
    <footer className="bg-warm-gray-100 border-t border-warm-gray-200 px-4 sm:px-8 py-12 dark:bg-gray-900">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="md:col-span-1 flex flex-col gap-4">
<p className="text-lg text-warm-gray-600 dark:text-white font-semibold">Cewexa</p>
<p className="text-sm text-warm-gray-600 dark:text-white">High-performance digital solutions for modern businesses.</p>
<p className="text-sm text-warm-gray-500 mt-4 dark:text-white">© 2025 Cewexa. All rights reserved.</p>
</div>
<div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
<div>
<h4 className="font-semibold text-warm-gray-900 mb-4 dark:text-white">Services</h4>
<ul className="space-y-3 dark:text-white">
<li><a className="text-sm text-warm-gray-500 hover:text-soft-orange transition-colors" href="/services">Development</a></li>
<li><a className="text-sm text-warm-gray-500 hover:text-soft-orange transition-colors" href="/services">Management</a></li>
<li><a className="text-sm text-warm-gray-500 hover:text-soft-orange transition-colors" href="/services">SEO</a></li>
<li><a className="text-sm text-warm-gray-500 hover:text-soft-orange transition-colors" href="/services">Social Media</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-warm-gray-900 mb-4 dark:text-white">Company</h4>
<ul className="space-y-3 dark:text-white">
<li><a className="text-sm text-warm-gray-500 hover:text-soft-orange transition-colors" href="/about">About Us</a></li>
<li><a className="text-sm text-warm-gray-500 hover:text-soft-orange transition-colors" href="/portfolio">Our Work</a></li>
<li><a className="text-sm text-warm-gray-500 hover:text-soft-orange transition-colors" href="/contact">Contact</a></li>
<li><a className="text-sm text-warm-gray-500 hover:text-soft-orange transition-colors" href="/blogs">Blogs</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-warm-gray-900 mb-4 dark:text-white">Legal</h4>
<ul className="space-y-3 dark:text-white">
<li><a className="text-sm text-warm-gray-500 hover:text-soft-orange transition-colors" href="privacy-policy">Privacy Policy</a></li>
<li><a className="text-sm text-warm-gray-500 hover:text-soft-orange transition-colors" href="terms-of-service">Terms of Service</a></li>
</ul>
</div>
</div>
</div>
</footer>
  );
};

export default Footer;
