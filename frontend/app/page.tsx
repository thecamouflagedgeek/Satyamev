"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [backendMessage, setBackendMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/")
      .then((res) => res.json())
      .then((data) => setBackendMessage(data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      {/* Optional Backend Status Banner */}
      {/* 
      <div className="bg-green-100 text-green-800 p-3 text-center">
        Backend says: {backendMessage || "Connecting..."}
      </div>
      */}

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 md:px-16 py-5 flex justify-between items-center text-white">
          <Link href="/" className="text-lg font-semibold tracking-wide">
            SATYAMEV
          </Link>

          <div className="hidden md:flex space-x-10 text-base">
            <a href="#issues" className="hover:text-[#c2410c] transition">
              Issues
            </a>
            <a href="#how" className="hover:text-[#c2410c] transition">
              How It Works
            </a>
            <Link href="/about" className="hover:text-[#c2410c] transition">
              About
            </Link>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative h-[85vh] text-white flex items-center">
        <Image
          src="/type.jpg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/85" />

        <div className="relative z-10 w-full">
          <div className="max-w-6xl mx-auto px-6 md:px-16">
            <div className="text-center mb-14">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                SATYAMEV
              </h1>
              <p className="mt-3 text-sm tracking-widest text-gray-300">
                TRUTH PREVAILS PLATFORM
              </p>
            </div>

            <div className="max-w-3xl">
              <div className="w-16 h-[3px] bg-[#c2410c] mb-6" />

              <h2 className="text-3xl md:text-[34px] font-semibold leading-snug">
                The Issues That Deserve Your Attention
              </h2>

              <p className="mt-6 text-gray-300 text-lg leading-relaxed">
                A public platform for examining the issues shaping India’s
                future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-100 text-black py-14 border-t border-gray-300 mt-auto">
        <div className="max-w-6xl mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h4 className="text-lg font-semibold tracking-wide">SATYAMEV</h4>
            <p className="mt-3 text-sm text-gray-600 max-w-md leading-relaxed">
              A public platform for examining issues shaping India’s future.
            </p>
          </div>

          <div className="text-sm text-gray-600">
            © 2026 Satyamev. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
