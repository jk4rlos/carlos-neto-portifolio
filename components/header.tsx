"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Briefcase, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  const links = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: User },
    { href: "/work", label: "Works", icon: Briefcase },
  ];

  return (
    <header className="w-full h-28 flex items-center justify-center fixed z-10 bg-transparent dark:bg-transparent dark:from-black dark:via-[#071a2b] dark:to-black">

      <nav className="flex items-center gap-6 px-8 py-3 rounded-full 
        bg-white/90 dark:bg-white/10 backdrop-blur-md border border-zinc-300 dark:border-white/20 shadow-lg dark:shadow-lg">

        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center gap-2 text-sm transition ${
              pathname === link.href
                ? "text-blue-600 dark:text-white"
                : "text-zinc-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white"
            }`}
          >
            <link.icon size={16} />
            {link.label}
          </Link>
        ))}

        <button
          onClick={toggleTheme}
          className="ml-2 text-zinc-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition hover:cursor-pointer"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </nav>
    </header>
  );
}

