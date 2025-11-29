"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Architecture",
    children: [
      { label: "GenAI Architectures", href: "/architectures" },
      { label: "Tech Architecture", href: "/tech-architecture" },
      { label: "AI-Infra", href: "/ai-infra" },
    ],
  },
  {
    label: "Development",
    children: [
      { label: "Agentic Frameworks", href: "/agentic-frameworks" },
      { label: "Possible POCs", href: "/pocs" },
    ],
  },
  {
    label: "USP",
    href: "/usp",
  },
  {
    label: "Blueprint",
    href: "/blueprint",
  },
];

function DropdownMenu({
  item,
  pathname,
}: {
  item: NavItem;
  pathname: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  // Check if any child is active
  const isChildActive = item.children?.some((child) => pathname === child.href);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`text-sm font-medium transition-colors flex items-center gap-1 ${
          isChildActive
            ? "text-indigo-600 font-semibold"
            : "text-slate-600 hover:text-indigo-600"
        }`}
      >
        {item.label}
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50">
          {item.children?.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className={`block px-4 py-2 text-sm transition-colors ${
                pathname === child.href
                  ? "text-indigo-600 bg-indigo-50 font-semibold"
                  : "text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
              }`}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="2" y="2" width="2" height="2" fill="white" />
                <rect x="2" y="6" width="2" height="2" fill="white" />
                <rect x="2" y="10" width="2" height="2" fill="white" />
                <rect x="6" y="2" width="2" height="2" fill="white" />
                <rect x="10" y="2" width="2" height="2" fill="white" />
                <rect x="6" y="10" width="2" height="2" fill="white" />
                <rect x="10" y="6" width="2" height="2" fill="white" />
                <rect x="2" y="14" width="2" height="2" fill="white" />
                <rect x="6" y="14" width="2" height="2" fill="white" />
                <rect x="10" y="14" width="2" height="2" fill="white" />
                <rect x="14" y="2" width="4" height="2" fill="white" />
                <rect x="14" y="6" width="2" height="2" fill="white" />
                <rect x="16" y="6" width="2" height="2" fill="white" />
                <rect x="14" y="10" width="4" height="2" fill="white" />
                <rect x="14" y="14" width="4" height="4" rx="0.5" fill="white" />
              </svg>
            </div>
            <Link href="/" className="text-xl font-bold text-slate-900">
              GrowQR
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            {navItems.map((item) =>
              item.children ? (
                <DropdownMenu key={item.label} item={item} pathname={pathname} />
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className={`text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? "text-indigo-600 font-semibold"
                      : "text-slate-600 hover:text-indigo-600"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
