import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Cewexa - Web Development, Web Apps & Digital Marketing Services",
  description: "Professional web development and digital marketing agency specializing in high-performance websites, custom web applications, SEO, and growth-focused marketing strategies. Where speed meets performance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
