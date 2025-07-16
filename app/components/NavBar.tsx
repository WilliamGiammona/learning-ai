"use client";
// components/Navbar.tsx
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-gray-900">
            Learning AI
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </Link>

            {/* Foundations Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
                style={{ cursor: "pointer" }}
              >
                Foundations
                <svg
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                  <div className="py-1">
                    <Link
                      href="/foundations/course-part1"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Practical Deep Learning
                    </Link>
                    <Link
                      href="/foundations/multiplication"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Matrix Multiplication
                    </Link>
                    <Link
                      href="/foundations/nlp"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Natural Language Processing
                    </Link>
                    <Link
                      href="/foundations/ethics"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      AI Ethics
                    </Link>
                    <div className="border-t border-gray-100"></div>
                    <Link
                      href="/foundations"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      View All Courses
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/courses"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Courses
            </Link>
            <Link
              href="/playground"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Playground
            </Link>
            <Link
              href="/resources"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Resources
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
