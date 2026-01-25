// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Header from "./Components/Header";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
// const verification = "google-site-verification=D39ajRZ0aA79Z8xjr_8ibun2gSGYDTz2ITd2fjbXrMg";

// export const metadata: Metadata = {
//   title: "Qamar Advertising - Signboards and Stickers in UAE",
//   description:
//     "Qamar Advertising is a leading signage making company in Sharjah, UAE, specializing in high-quality signboards and stickers for businesses. Contact us for custom solutions.",
//   verification: {
//     google: verification,
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <Header />
//         {children}
//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Google Search Console verification code
const verification = "D39ajRZ0aA79Z8xjr_8ibun2gSGYDTz2ITd2fjbXrMg";

export const metadata: Metadata = {
  title: "Qamar Advertising - Signboards and Stickers in UAE",
  description:
    "Qamar Advertising is a leading signage making company in Sharjah, UAE, specializing in high-quality signboards and stickers for businesses. Contact us for custom solutions.",
  verification: {
    google: verification, // Next.js will automatically add <meta name="google-site-verification">
  },
  icons: {
    icon: "/favicon.ico", // optional, if you have a favicon
  },
  metadataBase: new URL("https://www.qamaradv-uae.com/"),
  alternates: {
    canonical: "https://www.qamaradv-uae.com/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Optional: add sitemap for search engines */}
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="/sitemap.xml"
        />
        {/* robots.txt is automatically found by search engines if in /public/robots.txt */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
