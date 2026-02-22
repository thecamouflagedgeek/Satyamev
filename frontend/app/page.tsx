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
      {/*<div className="bg-green-100 text-green-800 p-3 text-center">
        Backend says:{backendMessage || "Connecting..."}
      </div>*/}
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

      {/* ================= ISSUES SECTION ================= */}
      <section className="bg-white text-black pt-14 pb-24">
        <div className="max-w-6xl mx-auto px-6 md:px-16">
          <div className="mb-10">
            <h3 className="text-3xl font-bold">
              Issues Requiring Public Attention
            </h3>

            <div className="w-full h-[1px] bg-black mt-4" />

            <p className="mt-4 text-gray-700 max-w-4xl leading-relaxed">
              These ongoing matters carry significant public consequence and
              require sustained civic engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* ================= CARD 1 ================= */}
            <Link href="/issue/ai-regulation">
              <div className="border border-black hover:shadow-2xl transition duration-300 cursor-pointer flex flex-col h-full">
                <div className="relative h-40 w-full">
                  <Image
                    src="/ai.jpg"
                    alt="AI Regulation"
                    fill
                    className="object-cover grayscale contrast-110"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between text-sm mb-3">
                    <span className="font-semibold">Rank 1</span>
                    <div className="relative group text-sm text-[#c2410c] cursor-help">
                      87% Impact
                      <div className="absolute right-0 mt-2 w-60 bg-black text-white text-xs p-3 opacity-0 group-hover:opacity-100 transition rounded shadow-lg z-20">
                        Impact score reflects policy consequence, population
                        scale and long term civic relevance.
                      </div>
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold mb-3">
                    AI Regulation Framework India
                  </h4>

                  <p className="text-gray-700 leading-relaxed flex-grow">
                    National discussions on artificial intelligence governance
                    indicate substantial policy consequences with limited
                    sustained public continuity.
                  </p>
                </div>
              </div>
            </Link>

            {/* ================= CARD 2 ================= */}
            <Link href="/issue/data-localization">
              <div className="border border-black hover:shadow-2xl transition duration-300 cursor-pointer flex flex-col h-full">
                <div className="relative h-40 w-full">
                  <Image
                    src="/data.jpg"
                    alt="Data Localization"
                    fill
                    className="object-cover grayscale contrast-110"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between text-sm mb-3">
                    <span className="font-semibold">Rank 2</span>
                    <div className="relative group text-sm text-[#c2410c] cursor-help">
                      74% Impact
                      <div className="absolute right-0 mt-2 w-60 bg-black text-white text-xs p-3 opacity-0 group-hover:opacity-100 transition rounded shadow-lg z-20">
                        Impact score reflects policy consequence, population
                        scale and long term civic relevance.
                      </div>
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold mb-3">
                    Data Localization Debate
                  </h4>

                  <p className="text-gray-700 leading-relaxed flex-grow">
                    Expanding economic and sovereignty implications are being
                    framed differently across political and institutional
                    narratives.
                  </p>
                </div>
              </div>
            </Link>

            {/* ================= CARD 3 ================= */}
            <Link href="/issue/rural-health">
              <div className="border border-black hover:shadow-2xl transition duration-300 cursor-pointer flex flex-col h-full">
                <div className="relative h-40 w-full">
                  <Image
                    src="/health.jpg"
                    alt="Rural Health"
                    fill
                    className="object-cover grayscale contrast-110"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between text-sm mb-3">
                    <span className="font-semibold">Rank 3</span>
                    <div className="relative group text-sm text-[#c2410c] cursor-help">
                      68% Impact
                      <div className="absolute right-0 mt-2 w-60 bg-black text-white text-xs p-3 opacity-0 group-hover:opacity-100 transition rounded shadow-lg z-20">
                        Impact score reflects policy consequence, population
                        scale and long term civic relevance.
                      </div>
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold mb-3">
                    Rural Health Infrastructure Gaps
                  </h4>

                  <p className="text-gray-700 leading-relaxed flex-grow">
                    Long term disparities in rural healthcare infrastructure
                    persist despite fluctuating national coverage.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="relative py-24 text-white">
        <Image
          src="/black.jpg"
          alt="Galaxy Background"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16">
          <div className="mb-14 text-center">
            <h3 className="text-3xl font-bold">How Satyamev Works</h3>
            <div className="w-20 h-[2px] bg-[#c2410c] mx-auto mt-4" />
          </div>

          {/* FIXED GRID */}
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-14 mt-10">
            <div>
              <h4 className="text-xl font-semibold text-[#c2410c] mb-4">
                Narrative Mapping
              </h4>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Tracks how public issues evolve across media channels, languages
                and time.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-[#c2410c] mb-4">
                Public Impact Ranking
              </h4>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Identifies matters with sustained real world consequence beyond
                momentary coverage.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-[#c2410c] mb-4">
                Credibility Transparency
              </h4>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Displays ownership patterns and correction history without
                editorial labeling.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-[#c2410c] mb-4">
                Issue Continuity
              </h4>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Tracks long term problems that fade from headlines but persist
                in public life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-100 text-black py-14 border-t border-gray-300">
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
