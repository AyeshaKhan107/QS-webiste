"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Instagram, Facebook, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  const [newsletter, setNewsletter] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletter) return;
    setSubscribed(true);
    setNewsletter('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <div>
      <iframe src=" https://www.google.com/maps?q=Industrial%20Area%2013%20Sharjah&output=embed"
 width="100%" height="250" loading="lazy" ></iframe>

      <footer className="bg-gradient-to-tr from-gray-950 to-slate-900 text-gray-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <h4 className="p-4 rounded bg-gradient-to-br from-primary to-gray-600 flex items-center justify-center font-bold text-white">QA</h4>
                <div>
                  <h3 className="text-xl font-semibold">Qamar Advertising</h3>
                  <p className="text-sm text-gray-400">Crafting striking signage across the UAE.</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">Bold design, premium materials, and reliable installations — built to last.<br></br>
                Qamar Advertising is a Signboard-making company based in Sharjah, Dubai, dedicated to delivering top services to meet your business needs.


              </p>
              <div className="flex items-center gap-3 mt-2">
                <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-gradient-to-br from-primary to-gray-600 hover:bg-white/10 transition"><Instagram className="w-5 h-5" /></a>
                <a href="https://www.facebook.com/QamarShahzadAdvertising" aria-label="Facebook" className="p-2 rounded-full bg-gradient-to-br from-primary to-gray-600 hover:bg-white/10 transition"><Facebook className="w-5 h-5" /></a>
                <a href="#" aria-label="LinkedIn" className="p-2 rounded-full bg-gradient-to-br from-primary to-gray-600 hover:bg-white/10 transition"><Linkedin className="w-5 h-5" /></a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3"> Signboards Services</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><Link href="/indoor-signboard" className="hover:text-white"> Indoor Signboard </Link></li>
                <li><Link href="/outdoor-signboard" className="hover:text-white">Outdoor Signboard</Link></li>
                <li><Link href="/3d-signboard" className="hover:text-white">Flex Sinage</Link></li>
                <li><Link href="/reception-sinage" className="hover:text-white">Reception Sinage</Link></li>
                <li><Link href="/parking-sinage" className="hover:text-white">Parking Signage</Link></li>
                <li><Link href="/safety-sinage" className="hover:text-white">Safety Sinage</Link></li>
                <li><Link href="/name plate sinage" className="hover:text-white">Building SS Plate, Name Plate</Link></li>
                <li><Link href="/outdoor led-sinage" className="hover:text-white">Outdoor LED Sinage</Link></li>
                <li><Link href="/direction-signboard" className="hover:text-white">Direction Signage</Link></li>


              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <div className="flex flex-col gap-2 text-gray-300 text-sm">
                <a href="tel:+971502040101" className="flex items-center gap-2 hover:text-white"><Phone className="w-4 h-4" /> +971 588094235</a>
                <a href="mailto:sales@qamaradv.com" className="flex items-center gap-2 hover:text-white"><Mail className="w-4 h-4" /> qamaradvertising815@gmail.com</a>
                <span className="text-sm text-gray-400">Industrial Area 13, Sharjah</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Stay in the loop</h4>
              <p className="text-sm text-gray-400 mb-3">Subscribe for project highlights and offers.</p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  aria-label="Email"
                  type="email"
                  value={newsletter}
                  onChange={(e) => setNewsletter(e.target.value)}
                  placeholder="Your email"
                  className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="bg-primary px-4 py-2 rounded-md text-sm font-medium hover:opacity-95" type="submit">Subscribe</button>
              </form>
              {subscribed && <p className="text-sm text-green-400 mt-2">Thanks — you’re subscribed!</p>}
            </div>
          </div>

          <div className="border-t border-white/6 mt-10 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3">
              <p className="text-gray-400 text-sm">© {year} Qamar Advertising. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <Link href="/privacy" className="text-gray-400 text-sm hover:text-white">Privacy</Link>
                <Link href="/terms" className="text-gray-400 text-sm hover:text-white">Terms</Link>
                <span className="text-gray-500 text-sm"></span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
