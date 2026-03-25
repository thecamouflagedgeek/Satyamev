"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const res = await fetch("https://satyamev.onrender.com/issues");
        const data = await res.json();
        setIssues(Array.isArray(data) ? data : data.issues);
      } catch (err) {
        console.error("Error fetching issues:", err);
      }
    };

    fetchIssues();
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 md:px-16 py-5 flex justify-between items-center text-white">
          <Link href="/" className="text-lg font-semibold tracking-wide">
            SATYAMEV
          </Link>

          <div className="hidden md:flex space-x-10 text-base">
            <Link href="/issue" className="hover:text-[#c2410c] transition">
              Issues
            </Link>
            <Link href="/help" className="hover:text-[#c2410c] transition">
              Help
            </Link>
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

          {/* 🔥 DYNAMIC CARDS */}
          <div className="grid md:grid-cols-3 gap-10">
            {issues.length === 0 ? (
              <p>Loading issues...</p>
            ) : (
              issues.slice(0, 3).map((issue: any, index) => (
                <Link key={issue.id} href={`/issue/${issue.id}`}>
                  <div className="border border-black hover:shadow-2xl transition duration-300 cursor-pointer flex flex-col h-full">
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between text-sm mb-3">
                        <span className="font-semibold">Rank {index + 1}</span>
                        <span className="text-[#c2410c]">
                          {issue.impact || "N/A"}% Impact
                        </span>
                      </div>

                      <h4 className="text-xl font-semibold mb-3">
                        {issue.title}
                      </h4>

                      <p className="text-gray-700 leading-relaxed flex-grow">
                        {issue.summary}
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            )}
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
